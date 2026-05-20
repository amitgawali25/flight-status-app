// Column layout definitions — '' marks an aisle gap
export const COL_LAYOUTS = {
  '1-2-1': ['A', '', 'B', 'C', '', 'D'],
  '2-2':   ['A', 'B', '', 'C', 'D'],
  '2-3':   ['A', 'B', '', 'C', 'D', 'E'],
  '3-3':   ['A', 'B', 'C', '', 'D', 'E', 'F'],
  '2-2-2': ['A', 'B', '', 'C', 'D', '', 'E', 'F'],
  '2-4-2': ['A', 'B', '', 'C', 'D', 'E', 'F', '', 'G', 'H'],
  '2-3-2': ['A', 'B', '', 'C', 'D', 'E', '', 'F', 'G'],
  '3-3-3': ['A', 'B', 'C', '', 'D', 'E', 'F', '', 'G', 'H', 'J'],
  '3-4-3': ['A', 'B', 'C', '', 'D', 'E', 'F', 'G', '', 'H', 'J', 'K'],
}

const FIRST    = { class: 'First',           color: '#d97706' }
const BUSINESS = { class: 'Business',        color: '#4f46e5' }
const PREMIUM  = { class: 'Premium Economy', color: '#0891b2' }
const ECONOMY  = { class: 'Economy',         color: '#16a34a' }

// Aircraft seatmap configs keyed by IATA type code
// exits: row numbers that are emergency exit rows
const SEATMAPS = {

  // ── Airbus A380 ──────────────────────────────────────────────────────
  A388: {
    note: 'Typical A380-800 configuration (upper deck: First + Business, main deck: Economy)',
    cabins: [
      { ...FIRST,    layout: '1-2-1', rows: [1,  14], exits: [1, 14] },
      { ...BUSINESS, layout: '2-2-2', rows: [20, 36], exits: [20, 36] },
      { ...ECONOMY,  layout: '3-4-3', rows: [40, 80], exits: [40, 55, 65, 80] },
    ],
  },
  A380: {
    note: 'Typical A380 configuration',
    cabins: [
      { ...FIRST,    layout: '1-2-1', rows: [1,  14], exits: [1, 14] },
      { ...BUSINESS, layout: '2-2-2', rows: [20, 36], exits: [20, 36] },
      { ...ECONOMY,  layout: '3-4-3', rows: [40, 80], exits: [40, 55, 65, 80] },
    ],
  },

  // ── Airbus A350 ──────────────────────────────────────────────────────
  A359: {
    note: 'Typical A350-900 configuration',
    cabins: [
      { ...BUSINESS, layout: '1-2-1', rows: [1,  10], exits: [1, 10] },
      { ...PREMIUM,  layout: '2-3-2', rows: [13, 19], exits: [13] },
      { ...ECONOMY,  layout: '3-3-3', rows: [21, 55], exits: [21, 38, 55] },
    ],
  },
  A35K: {
    note: 'Typical A350-1000 configuration',
    cabins: [
      { ...BUSINESS, layout: '1-2-1', rows: [1,  12], exits: [1, 12] },
      { ...PREMIUM,  layout: '2-3-2', rows: [14, 21], exits: [14] },
      { ...ECONOMY,  layout: '3-3-3', rows: [23, 60], exits: [23, 40, 60] },
    ],
  },

  // ── Airbus A340 ──────────────────────────────────────────────────────
  A346: {
    note: 'Typical A340-600 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  12], exits: [1, 12] },
      { ...ECONOMY,  layout: '3-3-3', rows: [14, 60], exits: [14, 32, 48, 60] },
    ],
  },
  A343: {
    note: 'Typical A340-300 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  10], exits: [1, 10] },
      { ...ECONOMY,  layout: '3-3-3', rows: [12, 48], exits: [12, 28, 48] },
    ],
  },
  A345: {
    note: 'Typical A340-500 configuration',
    cabins: [
      { ...FIRST,    layout: '1-2-1', rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-2-2', rows: [10,  22], exits: [10, 22] },
      { ...ECONOMY,  layout: '3-3-3', rows: [24, 56], exits: [24, 40, 56] },
    ],
  },

  // ── Airbus A330 ──────────────────────────────────────────────────────
  A333: {
    note: 'Typical A330-300 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  12], exits: [1, 12] },
      { ...ECONOMY,  layout: '2-4-2', rows: [14, 50], exits: [14, 30, 50] },
    ],
  },
  A332: {
    note: 'Typical A330-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  10], exits: [1, 10] },
      { ...ECONOMY,  layout: '2-4-2', rows: [12, 42], exits: [12, 26, 42] },
    ],
  },
  A338: {
    note: 'Typical A330-800neo configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  10], exits: [1, 10] },
      { ...ECONOMY,  layout: '2-4-2', rows: [12, 40], exits: [12, 26, 40] },
    ],
  },
  A339: {
    note: 'Typical A330-900neo configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  12], exits: [1, 12] },
      { ...PREMIUM,  layout: '2-3-2', rows: [14, 18], exits: [14] },
      { ...ECONOMY,  layout: '2-4-2', rows: [20, 50], exits: [20, 35, 50] },
    ],
  },

  // ── Boeing 777 ───────────────────────────────────────────────────────
  B77W: {
    note: 'Typical 777-300ER configuration',
    cabins: [
      { ...FIRST,    layout: '1-2-1', rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  26], exits: [10, 26] },
      { ...ECONOMY,  layout: '3-3-3', rows: [28, 60], exits: [28, 43, 60] },
    ],
  },
  B772: {
    note: 'Typical 777-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-4-2', rows: [1,  18], exits: [1, 18] },
      { ...ECONOMY,  layout: '3-3-3', rows: [20, 50], exits: [20, 35, 50] },
    ],
  },
  B77L: {
    note: 'Typical 777-200LR configuration',
    cabins: [
      { ...FIRST,    layout: '1-2-1', rows: [1,   6], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [8,  22], exits: [8, 22] },
      { ...ECONOMY,  layout: '3-3-3', rows: [24, 52], exits: [24, 38, 52] },
    ],
  },

  // ── Boeing 787 Dreamliner ────────────────────────────────────────────
  B788: {
    note: 'Typical 787-8 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,   8], exits: [1, 8] },
      { ...ECONOMY,  layout: '3-3-3', rows: [10, 44], exits: [10, 26, 44] },
    ],
  },
  B789: {
    note: 'Typical 787-9 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,   9], exits: [1, 9] },
      { ...PREMIUM,  layout: '2-3-2', rows: [11,  17], exits: [11] },
      { ...ECONOMY,  layout: '3-3-3', rows: [19, 54], exits: [19, 35, 54] },
    ],
  },
  B78X: {
    note: 'Typical 787-10 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  10], exits: [1, 10] },
      { ...PREMIUM,  layout: '2-3-2', rows: [12,  19], exits: [12] },
      { ...ECONOMY,  layout: '3-3-3', rows: [21, 58], exits: [21, 38, 58] },
    ],
  },

  // ── Boeing 747 ───────────────────────────────────────────────────────
  B744: {
    note: 'Typical 747-400 configuration (upper deck: First, main deck: Business + Economy)',
    cabins: [
      { ...FIRST,    layout: '2-2',   rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  26], exits: [10, 26] },
      { ...ECONOMY,  layout: '3-4-3', rows: [28, 60], exits: [28, 43, 60] },
    ],
  },
  B748: {
    note: 'Typical 747-8 configuration',
    cabins: [
      { ...FIRST,    layout: '2-2',   rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  28], exits: [10, 28] },
      { ...ECONOMY,  layout: '3-4-3', rows: [30, 64], exits: [30, 46, 64] },
    ],
  },

  // ── Airbus A320 family ───────────────────────────────────────────────
  A318: {
    note: 'Typical A318 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 24], exits: [5, 15, 24] },
    ],
  },
  A319: {
    note: 'Typical A319 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 26], exits: [5, 16, 26] },
    ],
  },
  A320: {
    note: 'Typical A320 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 30], exits: [5, 18, 30] },
    ],
  },
  A321: {
    note: 'Typical A321 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 36], exits: [6, 21, 36] },
    ],
  },
  A19N: {
    note: 'Typical A319neo configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 26], exits: [5, 16, 26] },
    ],
  },
  A20N: {
    note: 'Typical A320neo configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 30], exits: [5, 18, 30] },
    ],
  },
  A21N: {
    note: 'Typical A321neo configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 36], exits: [6, 21, 36] },
    ],
  },

  // ── Boeing 737 family ────────────────────────────────────────────────
  B737: {
    note: 'Typical 737-700 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 26], exits: [5, 15, 26] },
    ],
  },
  B738: {
    note: 'Typical 737-800 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 33], exits: [6, 20, 33] },
    ],
  },
  B739: {
    note: 'Typical 737-900 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 36], exits: [6, 21, 36] },
    ],
  },
  B38M: {
    note: 'Typical 737 MAX 8 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 33], exits: [6, 19, 33] },
    ],
  },
  B39M: {
    note: 'Typical 737 MAX 9 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 36], exits: [6, 21, 36] },
    ],
  },

  // ── Airbus A220 ──────────────────────────────────────────────────────
  BCS1: {
    note: 'Typical A220-100 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '2-3', rows: [5, 25], exits: [5, 15, 25] },
    ],
  },
  BCS3: {
    note: 'Typical A220-300 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '2-3', rows: [5, 35], exits: [5, 20, 35] },
    ],
  },

  // ── Embraer ──────────────────────────────────────────────────────────
  E175: {
    note: 'Typical E175 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [5, 26], exits: [5, 16, 26] },
    ],
  },
  E190: {
    note: 'Typical E190 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [5, 28], exits: [5, 17, 28] },
    ],
  },
  E195: {
    note: 'Typical E195 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [6, 36], exits: [6, 21, 36] },
    ],
  },
  E295: {
    note: 'Typical E195-E2 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [6, 38], exits: [6, 22, 38] },
    ],
  },
}

export function getSeatmap(iataCode) {
  if (!iataCode) return null
  return SEATMAPS[iataCode.toUpperCase()] || null
}
