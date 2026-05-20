import { useState } from 'react'
import FlightSearch from './components/FlightSearch'
import AirportSearch from './components/AirportSearch'
import FlightHistory from './components/FlightHistory'

const TABS = [
  { id: 'flight',  label: 'Flight Search',  icon: '✈' },
  { id: 'airport', label: 'Airport Board',   icon: '🏢' },
  { id: 'history', label: 'Flight History',  icon: '📅' },
]

export default function App() {
  const [tab, setTab] = useState('flight')

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">✈</span>
            <span className="logo-text">FlightTrack</span>
          </div>
          <nav className="nav">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`nav-tab${tab === t.id ? ' nav-tab-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                <span className="nav-icon">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {tab === 'flight'  && <FlightSearch />}
          {tab === 'airport' && <AirportSearch />}
          {tab === 'history' && <FlightHistory />}
        </div>
      </main>

      <footer className="footer">
        <p>Powered by <a href="https://aviationstack.com" target="_blank" rel="noreferrer">AviationStack</a></p>
      </footer>
    </div>
  )
}
