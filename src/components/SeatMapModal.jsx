import { useEffect } from 'react'
import { getAircraftInfo } from '../data/aircraft'
import { getSeatmap, COL_LAYOUTS } from '../data/seatmaps'
import StatusBadge from './StatusBadge'

export default function SeatMapModal({ flight, onClose }) {
  const { aircraft, airline, flight: fi, departure: dep, arrival: arr, flight_status } = flight
  const aircraftInfo = getAircraftInfo(aircraft?.iata)
  const seatmap = getSeatmap(aircraft?.iata)

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="sm-modal" onClick={e => e.stopPropagation()}>

        <div className="sm-header">
          <div className="sm-header-info">
            <span className="sm-airline">{airline?.name}</span>
            <span className="sm-flight-num">{fi?.iata}</span>
            <span className="sm-route">{dep?.iata} → {arr?.iata}</span>
            <StatusBadge status={flight_status} />
          </div>
          <div className="sm-header-right">
            <span className="sm-aircraft-name">{aircraftInfo?.name || aircraft?.iata || 'Unknown Aircraft'}</span>
            <button className="sm-close" onClick={onClose} title="Close">✕</button>
          </div>
        </div>

        {seatmap ? (
          <>
            <div className="sm-meta">
              <div className="sm-legend">
                {seatmap.cabins.map(c => (
                  <span key={c.class} className="sm-legend-item">
                    <span className="sm-legend-dot" style={{ background: c.color }} />
                    {c.class}
                  </span>
                ))}
                <span className="sm-legend-item">
                  <span className="sm-legend-exit" />
                  Exit row
                </span>
              </div>
              {seatmap.note && <p className="sm-note">{seatmap.note}</p>}
            </div>

            <div className="sm-body">
              {seatmap.cabins.map(cabin => (
                <CabinSection key={cabin.class} cabin={cabin} />
              ))}
            </div>
          </>
        ) : (
          <div className="sm-unavailable">
            <span className="sm-unavailable-icon">🪑</span>
            <p>Seat map not available for <b>{aircraftInfo?.name || aircraft?.iata || 'this aircraft type'}</b>.</p>
          </div>
        )}

      </div>
    </div>
  )
}

function CabinSection({ cabin }) {
  const cols = COL_LAYOUTS[cabin.layout]
  const exitSet = new Set(cabin.exits || [])
  const rows = []
  for (let r = cabin.rows[0]; r <= cabin.rows[1]; r++) rows.push(r)
  const totalSeats = rows.length * cols.filter(c => c !== '').length

  return (
    <div className="sm-cabin">
      <div className="sm-cabin-hdr" style={{ borderLeftColor: cabin.color }}>
        <span className="sm-cabin-class" style={{ color: cabin.color }}>{cabin.class}</span>
        <span className="sm-cabin-meta">
          Rows {cabin.rows[0]}–{cabin.rows[1]} · {totalSeats} seats · {cabin.layout}
        </span>
      </div>

      <div className="sm-grid-wrap">
        {/* Column header */}
        <div className="sm-row sm-col-hdr-row">
          <div className="sm-row-num" />
          {cols.map((c, i) =>
            c ? <div key={i} className="sm-col-hdr">{c}</div>
              : <div key={i} className="sm-aisle-gap" />
          )}
        </div>

        {/* Seat rows */}
        {rows.map(r => (
          <div key={r} className={`sm-row${exitSet.has(r) ? ' sm-exit-row' : ''}`}>
            <div className="sm-row-num">{r}</div>
            {cols.map((c, i) =>
              c ? (
                <div
                  key={i}
                  className="sm-seat"
                  style={{ '--seat-color': cabin.color }}
                  title={`Row ${r} Seat ${c}`}
                />
              ) : (
                <div key={i} className="sm-aisle-gap" />
              )
            )}
            {exitSet.has(r) && <div className="sm-exit-tag">EXIT</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
