import { useState } from 'react'
import StatusBadge from './StatusBadge'
import FlightMap from './FlightMap'
import SeatMapModal from './SeatMapModal'
import { getAircraftInfo } from '../data/aircraft'
import { getSeatmap } from '../data/seatmaps'

function fmt(iso, tz) {
  if (!iso) return '--:--'
  try {
    return new Date(iso).toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit', hour12: true,
      timeZone: tz || 'UTC',
    })
  } catch { return '--:--' }
}

function fmtDate(str) {
  if (!str) return ''
  try {
    return new Date(str + 'T12:00:00').toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
    })
  } catch { return str }
}

function duration(dep, arr) {
  if (!dep || !arr) return null
  const ms = new Date(arr) - new Date(dep)
  if (ms <= 0) return null
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  return h > 0 ? `${h}h ${m}m` : `${m}m`
}

function flightProgress(flight) {
  const { flight_status, departure, arrival } = flight
  if (flight_status === 'landed') return 100
  if (flight_status !== 'active') return 0
  const dep = departure?.actual ? new Date(departure.actual) : null
  const arr = arrival?.estimated ? new Date(arrival.estimated) : (arrival?.scheduled ? new Date(arrival.scheduled) : null)
  if (!dep || !arr) return 30
  const now = Date.now()
  return Math.min(95, Math.max(5, ((now - dep) / (arr - dep)) * 100))
}

export default function FlightCard({ flight }) {
  const [showMap, setShowMap] = useState(false)
  const [showSeatMap, setShowSeatMap] = useState(false)
  const { departure: dep, arrival: arr, airline, flight: fi, aircraft, live, flight_status, flight_date } = flight
  const aircraftInfo = getAircraftInfo(aircraft?.iata)
  const hasSeatmap = !!getSeatmap(aircraft?.iata)
  const codeshare = fi?.codeshared
  const progress = flightProgress(flight)
  const dur = duration(dep?.scheduled, arr?.scheduled)
  const maxDelay = Math.max(dep?.delay || 0, arr?.delay || 0)

  return (
    <>
      <div className="flight-card">
        <div className="fc-header">
          <div className="fc-airline">
            <span className="fc-airline-name">{airline?.name || 'Unknown Airline'}</span>
            <span className="fc-flight-num">{fi?.iata}</span>
            {aircraft?.iata && (
              <span className="fc-aircraft" title={aircraftInfo ? `${aircraftInfo.name} (${aircraft.iata})` : aircraft.iata}>
                {aircraftInfo ? aircraftInfo.name : aircraft.iata}
              </span>
            )}
          </div>
          <div className="fc-header-right">
            <span className="fc-date">{fmtDate(flight_date)}</span>
            <StatusBadge status={flight_status} delay={maxDelay} />
            <button className="btn-track" onClick={() => setShowMap(true)} title="Open map view">
              🗺 Track
            </button>
            {hasSeatmap && (
              <button className="btn-seatmap" onClick={() => setShowSeatMap(true)} title="View seat map">
                🪑 Seats
              </button>
            )}
          </div>
        </div>

        <div className="fc-route">
          <div className="fc-airport">
            <div className="fc-code">{dep?.iata || '---'}</div>
            <div className="fc-city">{dep?.airport || 'Unknown'}</div>
          </div>

          <div className="fc-timeline">
            <div className="fc-track">
              <div className="fc-fill" style={{ width: `${progress}%` }} />
              <span className="fc-plane" style={{ left: `${Math.min(92, Math.max(2, progress))}%` }}>✈</span>
            </div>
            {dur && <div className="fc-duration">{dur}</div>}
          </div>

          <div className="fc-airport fc-airport-right">
            <div className="fc-code">{arr?.iata || '---'}</div>
            <div className="fc-city">{arr?.airport || 'Unknown'}</div>
          </div>
        </div>

        <div className="fc-times">
          <TimeBlock label="Departure" endpoint={dep} />
          <TimeBlock label="Arrival" endpoint={arr} right />
        </div>

        {(dep?.terminal || dep?.gate || arr?.terminal || arr?.gate || arr?.baggage || live || aircraft?.iata || aircraft?.registration || codeshare) && (
          <div className="fc-details">
            {aircraft?.iata && (
              <DetailChip className="fc-chip-aircraft">
                <b>Aircraft:</b>
                {` ${aircraftInfo ? aircraftInfo.name : aircraft.iata}`}
                {aircraftInfo && <span className="fc-chip-type">{aircraftInfo.type}</span>}
                {aircraftInfo?.introduced && <span className="fc-chip-intro">Intro {aircraftInfo.introduced}</span>}
                {aircraft.registration && <span className="fc-chip-reg">{aircraft.registration}</span>}
              </DetailChip>
            )}
            {codeshare && (
              <DetailChip>
                <b>Codeshare:</b>
                {` Operated as `}
                <span className="fc-chip-cs-flight">{codeshare.flight_iata?.toUpperCase()}</span>
                {` · ${codeshare.airline_name}`}
              </DetailChip>
            )}
            {(dep?.terminal || dep?.gate) && (
              <DetailChip>
                <b>Dep:</b>
                {dep.terminal && ` Terminal ${dep.terminal}`}
                {dep.gate && ` · Gate ${dep.gate}`}
              </DetailChip>
            )}
            {(arr?.terminal || arr?.gate || arr?.baggage) && (
              <DetailChip>
                <b>Arr:</b>
                {arr.terminal && ` Terminal ${arr.terminal}`}
                {arr.gate && ` · Gate ${arr.gate}`}
                {arr.baggage && ` · Baggage ${arr.baggage}`}
              </DetailChip>
            )}
            {live && (
              <DetailChip>
                <b>Live:</b>
                {live.altitude && ` ${live.altitude.toLocaleString()} ft`}
                {live.speed_horizontal && ` · ${Math.round(live.speed_horizontal)} kts`}
              </DetailChip>
            )}
          </div>
        )}
      </div>

      {showMap && <FlightMap flight={flight} onClose={() => setShowMap(false)} />}
      {showSeatMap && <SeatMapModal flight={flight} onClose={() => setShowSeatMap(false)} />}
    </>
  )
}

function TimeBlock({ label, endpoint, right }) {
  if (!endpoint) return <div className={`fc-time-block${right ? ' fc-time-right' : ''}`} />
  const scheduled = fmt(endpoint.scheduled, endpoint.timezone)
  const actual = endpoint.actual ? fmt(endpoint.actual, endpoint.timezone) : null
  const estimated = !actual && endpoint.estimated ? fmt(endpoint.estimated, endpoint.timezone) : null
  const delayed = endpoint.delay > 0
  const runway = endpoint.actual_runway
    ? fmt(endpoint.actual_runway, endpoint.timezone)
    : endpoint.estimated_runway ? fmt(endpoint.estimated_runway, endpoint.timezone) : null
  const runwayLabel = right
    ? (endpoint.actual_runway ? 'Wheels down' : 'Est. wheels down')
    : (endpoint.actual_runway ? 'Wheels up' : 'Est. wheels up')

  return (
    <div className={`fc-time-block${right ? ' fc-time-right' : ''}`}>
      <div className="fc-time-label">{label}</div>
      <div className={`fc-time-sched${delayed ? ' fc-time-delayed' : ''}`}>{scheduled}</div>
      {actual && <div className="fc-time-actual">Actual: {actual}</div>}
      {estimated && <div className="fc-time-est">Est: {estimated}</div>}
      {delayed && <div className="fc-time-badge">+{endpoint.delay} min</div>}
      {runway && <div className="fc-time-runway">{runwayLabel}: {runway}</div>}
    </div>
  )
}

function DetailChip({ children, className }) {
  return <span className={`fc-chip${className ? ` ${className}` : ''}`}>{children}</span>
}
