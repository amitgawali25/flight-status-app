import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { AIRPORTS } from '../data/airports'
import StatusBadge from './StatusBadge'

// ── Math helpers ────────────────────────────────────────────────
const toRad = d => d * Math.PI / 180
const toDeg = r => r * 180 / Math.PI

function greatCircle(lat1, lng1, lat2, lng2, n = 100) {
  const φ1 = toRad(lat1), λ1 = toRad(lng1)
  const φ2 = toRad(lat2), λ2 = toRad(lng2)
  const d = 2 * Math.asin(Math.sqrt(
    Math.sin((φ2 - φ1) / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin((λ2 - λ1) / 2) ** 2
  ))
  if (d < 1e-6) return [[lat1, lng1], [lat2, lng2]]
  const pts = []
  for (let i = 0; i <= n; i++) {
    const f = i / n
    const A = Math.sin((1 - f) * d) / Math.sin(d)
    const B = Math.sin(f * d) / Math.sin(d)
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2)
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2)
    const z = A * Math.sin(φ1) + B * Math.sin(φ2)
    pts.push([toDeg(Math.atan2(z, Math.sqrt(x * x + y * y))), toDeg(Math.atan2(y, x))])
  }
  return pts
}

function bearing(lat1, lng1, lat2, lng2) {
  const φ1 = toRad(lat1), φ2 = toRad(lat2), Δλ = toRad(lng2 - lng1)
  const y = Math.sin(Δλ) * Math.cos(φ2)
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ)
  return (toDeg(Math.atan2(y, x)) + 360) % 360
}

function calcProgress(flight) {
  const { flight_status, departure, arrival } = flight
  if (flight_status === 'landed') return 1
  if (flight_status === 'scheduled') return 0
  if (flight_status !== 'active') return 0.4
  const depStr = departure?.actual || departure?.estimated || departure?.scheduled
  const arrStr = arrival?.estimated || arrival?.scheduled
  if (!depStr || !arrStr) return 0.4
  const prog = (Date.now() - new Date(depStr)) / (new Date(arrStr) - new Date(depStr))
  return Math.min(0.95, Math.max(0.03, prog))
}

function fmt(iso, tz) {
  if (!iso) return '--:--'
  try {
    return new Date(iso).toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit', hour12: true, timeZone: tz || 'UTC',
    })
  } catch { return '--:--' }
}

// ── Component ───────────────────────────────────────────────────
export default function FlightMap({ flight, onClose }) {
  const mapRef = useRef(null)
  const mapInst = useRef(null)

  const { departure: dep, arrival: arr, airline, flight: fi, live, flight_status } = flight
  const depAirport = AIRPORTS[dep?.iata]
  const arrAirport = AIRPORTS[arr?.iata]
  const hasRoute = !!(depAirport && arrAirport)

  useEffect(() => {
    if (!mapRef.current || mapInst.current) return

    const map = L.map(mapRef.current, { zoomControl: true, attributionControl: true })
    mapInst.current = map

    // Dark aviation-style tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> © <a href="https://carto.com">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 18,
    }).addTo(map)

    if (!hasRoute) {
      map.setView([20, 0], 2)
      return
    }

    const path = greatCircle(depAirport.lat, depAirport.lng, arrAirport.lat, arrAirport.lng)
    const progress = calcProgress(flight)
    const splitIdx = Math.round(progress * (path.length - 1))

    // Full route — dim dashed line
    L.polyline(path, { color: '#334155', weight: 2, dashArray: '8,6', opacity: 0.9 }).addTo(map)

    // Flown portion — bright solid line
    if (splitIdx > 0) {
      L.polyline(path.slice(0, splitIdx + 1), {
        color: '#60a5fa', weight: 2.5, opacity: 0.95,
      }).addTo(map)
    }

    // Airport dot + label markers
    const airportIcon = (code, side) => L.divIcon({
      className: '',
      html: `<div class="map-airport-marker map-airport-${side}">
               <div class="map-airport-dot-circle"></div>
               <span class="map-airport-code">${code}</span>
             </div>`,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    })

    L.marker([depAirport.lat, depAirport.lng], { icon: airportIcon(dep.iata, 'dep') })
      .addTo(map)
      .bindPopup(`<b>${dep.iata}</b> — ${depAirport.name}<br>Departure: ${fmt(dep?.scheduled, dep?.timezone)}`)

    L.marker([arrAirport.lat, arrAirport.lng], { icon: airportIcon(arr.iata, 'arr') })
      .addTo(map)
      .bindPopup(`<b>${arr.iata}</b> — ${arrAirport.name}<br>Arrival: ${fmt(arr?.scheduled, arr?.timezone)}`)

    // Plane position
    let planeLat, planeLng, planeHeading

    if (live?.latitude != null && live?.longitude != null) {
      planeLat = live.latitude
      planeLng = live.longitude
      planeHeading = live.direction || 0
    } else {
      const idx = Math.max(0, Math.min(splitIdx, path.length - 2))
      planeLat = path[idx][0]
      planeLng = path[idx][1]
      planeHeading = bearing(path[idx][0], path[idx][1], path[idx + 1][0], path[idx + 1][1])
    }

    const planeIcon = L.divIcon({
      className: '',
      html: `<div class="map-plane-wrap" style="transform:rotate(${planeHeading}deg)">
               <div class="map-plane-glow"></div>
               <span class="map-plane-symbol">✈</span>
             </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    })

    const planeMarker = L.marker([planeLat, planeLng], { icon: planeIcon, zIndexOffset: 1000 })
      .addTo(map)
    planeMarker.bindPopup(
      `<b>${fi?.iata}</b> · ${airline?.name || ''}<br>` +
      (live ? `Alt: ${live.altitude?.toLocaleString()} ft · ${Math.round(live.speed_horizontal || 0)} kts · ${Math.round(live.direction || 0)}°` : `Status: ${flight_status}`)
    )

    // Fit map to show full route with padding
    map.fitBounds(
      [[depAirport.lat, depAirport.lng], [arrAirport.lat, arrAirport.lng]],
      { padding: [70, 70] }
    )

    return () => { map.remove(); mapInst.current = null }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="map-modal" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="map-wrapper">
        {/* Top bar */}
        <div className="map-topbar">
          <div className="map-topbar-left">
            <span className="map-fn">{fi?.iata}</span>
            <span className="map-route-label">{dep?.iata} → {arr?.iata}</span>
            <StatusBadge status={flight_status} delay={dep?.delay || 0} />
          </div>
          <div className="map-topbar-right">
            {live && (
              <div className="map-live-pill">
                <span className="map-live-dot" />
                LIVE
              </div>
            )}
            <button className="map-close-btn" onClick={onClose} title="Close (Esc)">✕</button>
          </div>
        </div>

        {/* Map */}
        <div ref={mapRef} className="map-el" />

        {/* Bottom bar */}
        <div className="map-bottombar">
          <div className="map-bottom-item">
            <span className="map-bottom-label">FROM</span>
            <span className="map-bottom-code">{dep?.iata}</span>
            <span className="map-bottom-time">{fmt(dep?.actual || dep?.scheduled, dep?.timezone)}</span>
          </div>
          <div className="map-bottom-progress">
            <div className="map-mini-track">
              <div className="map-mini-fill" style={{ width: `${calcProgress(flight) * 100}%` }} />
              <span className="map-mini-plane" style={{ left: `${Math.min(93, Math.max(3, calcProgress(flight) * 100))}%` }}>✈</span>
            </div>
          </div>
          <div className="map-bottom-item map-bottom-right">
            <span className="map-bottom-label">TO</span>
            <span className="map-bottom-code">{arr?.iata}</span>
            <span className="map-bottom-time">{fmt(arr?.actual || arr?.estimated || arr?.scheduled, arr?.timezone)}</span>
          </div>
        </div>

        {live && (
          <div className="map-live-bar">
            <span className="map-live-dot" />
            <span>
              {live.altitude?.toLocaleString()} ft
              {live.speed_horizontal ? ` · ${Math.round(live.speed_horizontal)} kts` : ''}
              {live.direction ? ` · ${Math.round(live.direction)}°` : ''}
              {live.updated ? ` · Updated ${new Date(live.updated).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}` : ''}
            </span>
          </div>
        )}

        {!hasRoute && (
          <div className="map-no-route">
            Route map unavailable — airport coordinates not found for {dep?.iata} or {arr?.iata}
          </div>
        )}
      </div>
    </div>
  )
}
