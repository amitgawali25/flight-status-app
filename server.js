import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001
const API_KEY = process.env.AVIATIONSTACK_API_KEY
const BASE_URL = 'http://api.aviationstack.com/v1'

app.get('/api/flights', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({
      error: 'API key not configured. Copy .env.example to .env and set AVIATIONSTACK_API_KEY.',
    })
  }

  try {
    const params = new URLSearchParams({ ...req.query, access_key: API_KEY })
    const url = `${BASE_URL}/flights?${params}`
    console.log(`[API] GET ${url.replace(API_KEY, '***')}`)

    const response = await fetch(url)
    const text = await response.text()

    console.log(`[API] Status: ${response.status}`)
    console.log(`[API] Body: ${text.slice(0, 500)}`)

    let data
    try {
      data = JSON.parse(text)
    } catch {
      return res.status(502).json({ error: `AviationStack returned non-JSON response (HTTP ${response.status})` })
    }

    if (data.error) {
      const msg = data.error.info || data.error.type || JSON.stringify(data.error)
      console.error('[API] Error from AviationStack:', msg)
      return res.status(400).json({ error: msg })
    }

    if (!response.ok) {
      return res.status(response.status).json({ error: `API request failed with status ${response.status}` })
    }

    res.json(data)
  } catch (err) {
    console.error('Proxy error:', err.message)
    res.status(500).json({ error: `Server error: ${err.message}` })
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
  if (!API_KEY) {
    console.warn('\n⚠️  AVIATIONSTACK_API_KEY is not set. Copy .env.example to .env and add your key.\n')
  }
})
