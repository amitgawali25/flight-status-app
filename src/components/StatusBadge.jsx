const STATUS_CONFIG = {
  scheduled: { label: 'Scheduled', cls: 'badge-scheduled' },
  active:    { label: 'In Flight', cls: 'badge-active' },
  landed:    { label: 'Landed',    cls: 'badge-landed' },
  cancelled: { label: 'Cancelled', cls: 'badge-cancelled' },
  incident:  { label: 'Incident',  cls: 'badge-incident' },
  diverted:  { label: 'Diverted',  cls: 'badge-diverted' },
}

export default function StatusBadge({ status, delay }) {
  const cfg = STATUS_CONFIG[status] || { label: status || 'Unknown', cls: 'badge-scheduled' }
  const isDelayed = delay > 0 && status !== 'cancelled'

  return (
    <div className="badge-group">
      <span className={`badge ${cfg.cls}`}>{cfg.label}</span>
      {isDelayed && <span className="badge badge-delayed">+{delay}m</span>}
    </div>
  )
}
