# FlightTrack

A real-time flight status and tracking app built with React and Node.js, powered by the [AviationStack API](https://aviationstack.com/).

![FlightTrack](https://img.shields.io/badge/React-18-61dafb?logo=react) ![Node](https://img.shields.io/badge/Node.js-Express-green?logo=node.js) ![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)

## Features

- **Flight Search** — Look up any flight by IATA code (e.g. `EK201`, `LH400`) and see real-time status, departure/arrival times, delays, and gate info
- **Aircraft Details** — Full aircraft name (e.g. "Airbus A380-800"), type classification (Widebody / Narrowbody / Regional / Turboprop), and tail registration number
- **Airport Board** — View all departures or arrivals for any airport by IATA code
- **Flight History** — Look up past flights by date (requires AviationStack paid plan)
- **Live Map** — Interactive great-circle route map with real-time aircraft position, altitude, and speed
- **Flight Progress** — Visual progress bar showing how far along the route a flight is

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| Mapping | Leaflet.js |
| Backend | Express.js (API proxy) |
| Data | AviationStack REST API |

## Getting Started

### Prerequisites

- Node.js 18+
- An [AviationStack API key](https://aviationstack.com/) (free tier works for live flight search)

### Setup

```bash
# Clone the repo
git clone https://github.com/amitgawali25/flight-status-app.git
cd flight-status-app

# Install dependencies
npm install

# Configure your API key
cp .env.example .env
# Edit .env and set AVIATIONSTACK_API_KEY=your_key_here

# Start the app (runs both Vite dev server and Express proxy)
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Environment Variables

| Variable | Description |
|---|---|
| `AVIATIONSTACK_API_KEY` | Your AviationStack API key |
| `PORT` | Port for the Express proxy server (default: `3001`) |

## Usage

1. **Search a flight** — Enter an IATA flight number like `EK201` or `LH400` and hit Search
2. **View details** — Each card shows route, times, delays, terminal/gate, aircraft type, and registration
3. **Track on map** — Click the 🗺 Track button to open the interactive route map
4. **Airport board** — Switch to the Airport Board tab, enter an airport code (e.g. `JFK`), and toggle between Departures and Arrivals

## Project Structure

```
src/
├── api/
│   └── flightApi.js          # AviationStack API client
├── components/
│   ├── FlightCard.jsx         # Main flight display card
│   ├── FlightMap.jsx          # Interactive Leaflet map
│   ├── FlightSearch.jsx       # Flight number search
│   ├── AirportSearch.jsx      # Airport departures/arrivals
│   ├── FlightHistory.jsx      # Historical flight lookup
│   └── StatusBadge.jsx        # Status indicator badge
├── data/
│   ├── aircraft.js            # IATA aircraft type → name/category lookup
│   └── airports.js            # IATA airport → coordinates lookup
└── App.jsx                    # Tab navigation root
server.js                      # Express proxy (keeps API key server-side)
```

## Notes

- The free AviationStack plan supports real-time flight search but not historical data
- Aircraft type data (`aircraft.iata`) is not populated by AviationStack for all flights — cards gracefully omit the section when unavailable
- The live position shown on the map is interpolated when real-time GPS data is unavailable
