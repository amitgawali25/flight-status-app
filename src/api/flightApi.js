async function callApi(params = {}) {
  const searchParams = new URLSearchParams(params)
  const response = await fetch(`/api/flights?${searchParams}`)
  const data = await response.json()

  if (!response.ok || data.error) {
    throw new Error(data.error || 'Failed to fetch flight data')
  }

  return data.data || []
}

export async function searchByFlightNumber(flightIata, date = null) {
  const params = { flight_iata: flightIata.toUpperCase(), limit: 25 }
  if (date) params.flight_date = date
  return callApi(params)
}

export async function searchByAirport(airportIata, direction = 'dep', date = null) {
  const key = direction === 'dep' ? 'dep_iata' : 'arr_iata'
  const params = { [key]: airportIata.toUpperCase(), limit: 40 }
  if (date) params.flight_date = date
  return callApi(params)
}

export async function searchHistory(flightIata, date) {
  return callApi({ flight_iata: flightIata.toUpperCase(), flight_date: date, limit: 25 })
}

export async function getClaudeFacts({ flightNum, airline, dep, arr, aircraft }) {
  const response = await fetch('/api/flight-facts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ flightNum, airline, dep, arr, aircraft }),
  })
  const data = await response.json()
  if (!response.ok || data.error) throw new Error(data.error || 'Failed to fetch facts')
  return data.facts
}
