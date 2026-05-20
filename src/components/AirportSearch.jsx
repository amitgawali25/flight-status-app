import { useState } from 'react'
import { searchByAirport } from '../api/flightApi'
import FlightCard from './FlightCard'

export default function AirportSearch() {
  const today = new Date().toISOString().slice(0, 10)
  const [code, setCode] = useState('')
  const [direction, setDirection] = useState('dep')
  const [date, setDate] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)
  const [searchedCode, setSearchedCode] = useState('')

  async function handleSearch(e) {
    e.preventDefault()
    const q = code.trim()
    if (!q) return
    setLoading(true)
    setError(null)
    setSearched(true)
    setSearchedCode(q.toUpperCase())
    try {
      const data = await searchByAirport(q, direction, date || null)
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
        <h2 className="section-title">Airport Flights</h2>
        <p className="section-sub">Enter a 3-letter IATA airport code — e.g. <strong>JFK</strong>, <strong>LAX</strong>, <strong>LHR</strong></p>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="field-group">
          <label className="field-label">Airport Code</label>
          <input
            className="search-input search-input-short"
            type="text"
            value={code}
            onChange={e => setCode(e.target.value.toUpperCase())}
            placeholder="JFK"
            maxLength={4}
            spellCheck={false}
          />
        </div>
        <div className="field-group">
          <label className="field-label">Date <span className="field-label-opt">(optional)</span></label>
          <input
            className="search-input date-input"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            max={today}
          />
        </div>
        <div className="field-group">
          <label className="field-label">Direction</label>
          <div className="toggle-group">
            <label className={`toggle-btn ${direction === 'dep' ? 'active' : ''}`}>
              <input type="radio" value="dep" checked={direction === 'dep'} onChange={() => setDirection('dep')} />
              Departures
            </label>
            <label className={`toggle-btn ${direction === 'arr' ? 'active' : ''}`}>
              <input type="radio" value="arr" checked={direction === 'arr'} onChange={() => setDirection('arr')} />
              Arrivals
            </label>
          </div>
        </div>
        <button className="btn-primary btn-self-end" type="submit" disabled={loading || !code.trim()}>
          {loading ? 'Loading…' : 'Search'}
        </button>
      </form>

      {loading && <div className="state-box"><div className="spinner" /><p>Fetching flights for {searchedCode}…</p></div>}
      {error && <div className="state-box state-error"><span className="state-icon">⚠</span><p>{error}</p></div>}
      {!loading && searched && results.length === 0 && !error && (
        <div className="state-box state-empty">
          <span className="state-icon">🔍</span>
          <p>No {direction === 'dep' ? 'departures' : 'arrivals'} found for <strong>{searchedCode}</strong>.</p>
        </div>
      )}
      {!loading && results.length > 0 && (
        <>
          <div className="results-count">{results.length} flight{results.length !== 1 ? 's' : ''} · {direction === 'dep' ? 'Departing' : 'Arriving'} {searchedCode}</div>
          <div className="results">
            {results.map((flight, i) => <FlightCard key={i} flight={flight} />)}
          </div>
        </>
      )}
    </section>
  )
}
