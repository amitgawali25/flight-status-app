import { useState } from 'react'
import { searchByFlightNumber } from '../api/flightApi'
import FlightCard from './FlightCard'

export default function FlightSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)

  async function handleSearch(e) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    setLoading(true)
    setError(null)
    setSearched(true)
    try {
      const data = await searchByFlightNumber(q)
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
        <h2 className="section-title">Flight Status</h2>
        <p className="section-sub">Enter an IATA flight number — e.g. <strong>AA123</strong>, <strong>UA456</strong>, <strong>DL789</strong></p>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value.toUpperCase())}
          placeholder="AA123"
          maxLength={8}
          spellCheck={false}
        />
        <button className="btn-primary" type="submit" disabled={loading || !query.trim()}>
          {loading ? 'Searching…' : 'Search'}
        </button>
      </form>

      {loading && <div className="state-box"><div className="spinner" /><p>Fetching live flight data…</p></div>}
      {error && <div className="state-box state-error"><span className="state-icon">⚠</span><p>{error}</p></div>}
      {!loading && searched && results.length === 0 && !error && (
        <div className="state-box state-empty">
          <span className="state-icon">🔍</span>
          <p>No flights found for <strong>{query}</strong>. Try a different flight number.</p>
        </div>
      )}
      <div className="results">
        {results.map((flight, i) => <FlightCard key={i} flight={flight} />)}
      </div>
    </section>
  )
}
