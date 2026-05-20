import { useState } from 'react'
import { searchHistory } from '../api/flightApi'
import FlightCard from './FlightCard'

export default function FlightHistory() {
  const today = new Date().toISOString().slice(0, 10)
  const [flightNum, setFlightNum] = useState('')
  const [date, setDate] = useState(today)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  async function handleSearch(e) {
    e.preventDefault()
    if (!flightNum.trim() || !date) return
    setLoading(true)
    setError(null)
    setSearched(true)
    try {
      const data = await searchHistory(flightNum, date)
      setResults(data)
    } catch (err) {
      setError(err.message)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Flight History</h2>
        <p className="section-sub">Look up a flight by number and date. Historical data requires an AviationStack paid plan.</p>
      </div>

      <form onSubmit={handleSearch} className="search-form search-form-col">
        <div className="search-row">
          <div className="field-group">
            <label className="field-label">Flight Number</label>
            <input
              className="search-input search-input-short"
              type="text"
              value={flightNum}
              onChange={e => setFlightNum(e.target.value.toUpperCase())}
              placeholder="AA123"
              maxLength={8}
              spellCheck={false}
            />
          </div>
          <div className="field-group">
            <label className="field-label">Date</label>
            <input
              className="search-input date-input"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              max={today}
            />
          </div>
          <button className="btn-primary btn-self-end" type="submit" disabled={loading || !flightNum.trim() || !date}>
            {loading ? 'Loading…' : 'Search'}
          </button>
        </div>
      </form>

      {loading && <div className="state-box"><div className="spinner" /><p>Fetching flight history…</p></div>}
      {error && (
        <div className="state-box state-error">
          <span className="state-icon">⚠</span>
          <div>
            <p>{error}</p>
            {error.toLowerCase().includes('paid') || error.toLowerCase().includes('plan') ? (
              <p className="state-hint">Flight history requires an AviationStack paid plan. Free plans only show current/today's flights.</p>
            ) : null}
          </div>
        </div>
      )}
      {!loading && searched && results.length === 0 && !error && (
        <div className="state-box state-empty">
          <span className="state-icon">📅</span>
          <div>
            <p>No data found for <strong>{flightNum}</strong> on <strong>{date}</strong>.</p>
            <p className="state-hint">Note: flight history for past dates requires an AviationStack paid plan.</p>
          </div>
        </div>
      )}
      <div className="results">
        {results.map((flight, i) => <FlightCard key={i} flight={flight} />)}
      </div>
    </section>
  )
}
