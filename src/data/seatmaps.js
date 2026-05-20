// Column layout definitions — '' marks an aisle gap
export const COL_LAYOUTS = {
  '1-2':   ['A', '', 'C', 'D'],
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

  // ── Embraer E-Jet E2 / E170 ──────────────────────────────────────────
  E170: {
    note: 'Typical E170 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  3], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [4, 22], exits: [4, 13, 22] },
    ],
  },
  E7W: {
    note: 'Typical E175-E2 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [5, 26], exits: [5, 16, 26] },
    ],
  },
  E290: {
    note: 'Typical E190-E2 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [5, 29], exits: [5, 17, 29] },
    ],
  },
  ERJ: {
    note: 'Typical ERJ-145 configuration (1-2 seating)',
    cabins: [
      { ...ECONOMY, layout: '1-2', rows: [1, 25], exits: [1, 13, 25] },
    ],
  },

  // ── Bombardier CRJ family ────────────────────────────────────────────
  CRJ1: {
    note: 'Typical CRJ-100 configuration (1-2 seating)',
    cabins: [
      { ...ECONOMY, layout: '1-2', rows: [1, 17], exits: [1, 10, 17] },
    ],
  },
  CRJ2: {
    note: 'Typical CRJ-200 configuration (1-2 seating)',
    cabins: [
      { ...ECONOMY, layout: '1-2', rows: [1, 17], exits: [1, 10, 17] },
    ],
  },
  CRJ7: {
    note: 'Typical CRJ-700 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  3], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [4, 19], exits: [4, 12, 19] },
    ],
  },
  CRJ9: {
    note: 'Typical CRJ-900 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  3], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [4, 24], exits: [4, 14, 24] },
    ],
  },
  CRJX: {
    note: 'Typical CRJ-1000 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  3], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [4, 27], exits: [4, 16, 27] },
    ],
  },

  // ── De Havilland Dash 8 ──────────────────────────────────────────────
  DH8A: {
    note: 'Typical Dash 8-100 configuration (37 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 10], exits: [1, 6, 10] },
    ],
  },
  DH8B: {
    note: 'Typical Dash 8-200 configuration (37 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 10], exits: [1, 6, 10] },
    ],
  },
  DH8C: {
    note: 'Typical Dash 8-300 configuration (50 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 14], exits: [1, 8, 14] },
    ],
  },
  DH8D: {
    note: 'Typical Dash 8 Q400 configuration (78 seats)',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1,  2], exits: [1] },
      { ...ECONOMY,  layout: '2-2', rows: [3, 20], exits: [3, 12, 20] },
    ],
  },

  // ── ATR family ───────────────────────────────────────────────────────
  AT43: {
    note: 'Typical ATR 42-300 configuration (48 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 13], exits: [1, 7, 13] },
    ],
  },
  AT45: {
    note: 'Typical ATR 42-500 configuration (48 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 13], exits: [1, 7, 13] },
    ],
  },
  AT72: {
    note: 'Typical ATR 72-200 configuration (70 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 19], exits: [1, 10, 19] },
    ],
  },
  AT75: {
    note: 'Typical ATR 72-500 configuration (70 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 19], exits: [1, 10, 19] },
    ],
  },
  AT76: {
    note: 'Typical ATR 72-600 configuration (70 seats)',
    cabins: [
      { ...ECONOMY, layout: '2-2', rows: [1, 19], exits: [1, 10, 19] },
    ],
  },

  // ── Boeing 737 Classic / Original ────────────────────────────────────
  B732: {
    note: 'Typical 737-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  3], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [4, 22], exits: [4, 13, 22] },
    ],
  },
  B733: {
    note: 'Typical 737-300 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 28], exits: [5, 17, 28] },
    ],
  },
  B734: {
    note: 'Typical 737-400 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 32], exits: [5, 19, 32] },
    ],
  },
  B735: {
    note: 'Typical 737-500 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  3], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [4, 22], exits: [4, 13, 22] },
    ],
  },
  B736: {
    note: 'Typical 737-600 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 26], exits: [5, 16, 26] },
    ],
  },
  B73H: {
    note: 'Typical 737-800 (winglet) configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 33], exits: [6, 20, 33] },
    ],
  },
  B73N: {
    note: 'Typical 737-900ER configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 36], exits: [6, 21, 36] },
    ],
  },
  B73W: {
    note: 'Typical 737-700W configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 26], exits: [5, 15, 26] },
    ],
  },
  B3XM: {
    note: 'Typical 737 MAX 10 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 38], exits: [6, 23, 38] },
    ],
  },

  // ── Boeing 747 Classic variants ──────────────────────────────────────
  B741: {
    note: 'Typical 747-100 configuration',
    cabins: [
      { ...FIRST,    layout: '2-2',   rows: [1,   8], exits: [1] },
      { ...ECONOMY,  layout: '3-4-3', rows: [10, 58], exits: [10, 31, 46, 58] },
    ],
  },
  B742: {
    note: 'Typical 747-200 configuration',
    cabins: [
      { ...FIRST,    layout: '2-2',   rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  22], exits: [10, 22] },
      { ...ECONOMY,  layout: '3-4-3', rows: [24, 58], exits: [24, 40, 58] },
    ],
  },
  B743: {
    note: 'Typical 747-300 configuration',
    cabins: [
      { ...FIRST,    layout: '2-2',   rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  24], exits: [10, 24] },
      { ...ECONOMY,  layout: '3-4-3', rows: [26, 60], exits: [26, 42, 60] },
    ],
  },
  B74S: {
    note: 'Typical 747SP configuration (shorter fuselage)',
    cabins: [
      { ...FIRST,    layout: '2-2',   rows: [1,   6], exits: [1] },
      { ...ECONOMY,  layout: '3-4-3', rows: [8,  32], exits: [8, 20, 32] },
    ],
  },

  // ── Boeing 757 ───────────────────────────────────────────────────────
  B752: {
    note: 'Typical 757-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,   6], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [7,  38], exits: [7, 22, 38] },
    ],
  },
  B753: {
    note: 'Typical 757-300 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,   6], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [7,  46], exits: [7, 26, 46] },
    ],
  },

  // ── Boeing 767 ───────────────────────────────────────────────────────
  B762: {
    note: 'Typical 767-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  8], exits: [1, 8] },
      { ...ECONOMY,  layout: '2-3-2', rows: [10, 38], exits: [10, 24, 38] },
    ],
  },
  B763: {
    note: 'Typical 767-300 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  10], exits: [1, 10] },
      { ...ECONOMY,  layout: '2-3-2', rows: [12, 46], exits: [12, 28, 46] },
    ],
  },
  B764: {
    note: 'Typical 767-400 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  10], exits: [1, 10] },
      { ...ECONOMY,  layout: '2-3-2', rows: [12, 50], exits: [12, 30, 50] },
    ],
  },

  // ── Boeing 777-300 / 777X ────────────────────────────────────────────
  B773: {
    note: 'Typical 777-300 configuration',
    cabins: [
      { ...FIRST,    layout: '1-2-1', rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  26], exits: [10, 26] },
      { ...ECONOMY,  layout: '3-3-3', rows: [28, 62], exits: [28, 44, 62] },
    ],
  },
  B779: {
    note: 'Typical 777X-9 configuration',
    cabins: [
      { ...FIRST,    layout: '1-2-1', rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  28], exits: [10, 28] },
      { ...ECONOMY,  layout: '3-4-3', rows: [30, 66], exits: [30, 46, 66] },
    ],
  },

  // ── Boeing 717 / 727 ────────────────────────────────────────────────
  B712: {
    note: 'Typical 717-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '2-3', rows: [5, 24], exits: [5, 14, 24] },
    ],
  },
  B722: {
    note: 'Typical 727-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  4], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [5, 30], exits: [5, 18, 30] },
    ],
  },

  // ── Airbus A340-200 / A321XLR ────────────────────────────────────────
  A342: {
    note: 'Typical A340-200 configuration',
    cabins: [
      { ...BUSINESS, layout: '2-2-2', rows: [1,  10], exits: [1, 10] },
      { ...ECONOMY,  layout: '3-3-3', rows: [12, 46], exits: [12, 28, 46] },
    ],
  },
  A21X: {
    note: 'Typical A321XLR configuration',
    cabins: [
      { ...BUSINESS, layout: '3-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '3-3', rows: [6, 36], exits: [6, 21, 36] },
    ],
  },

  // ── McDonnell Douglas ────────────────────────────────────────────────
  MD82: {
    note: 'Typical MD-82 configuration (2-3 seating)',
    cabins: [
      { ...BUSINESS, layout: '2-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '2-3', rows: [6, 34], exits: [6, 20, 34] },
    ],
  },
  MD83: {
    note: 'Typical MD-83 configuration (2-3 seating)',
    cabins: [
      { ...BUSINESS, layout: '2-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '2-3', rows: [6, 34], exits: [6, 20, 34] },
    ],
  },
  MD88: {
    note: 'Typical MD-88 configuration (2-3 seating)',
    cabins: [
      { ...BUSINESS, layout: '2-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '2-3', rows: [6, 34], exits: [6, 20, 34] },
    ],
  },
  MD90: {
    note: 'Typical MD-90 configuration (2-3 seating)',
    cabins: [
      { ...BUSINESS, layout: '2-3', rows: [1,  5], exits: [1] },
      { ...ECONOMY,  layout: '2-3', rows: [6, 34], exits: [6, 20, 34] },
    ],
  },
  MD11: {
    note: 'Typical MD-11 configuration',
    cabins: [
      { ...FIRST,    layout: '2-2-2', rows: [1,   8], exits: [1] },
      { ...BUSINESS, layout: '2-4-2', rows: [10,  22], exits: [10, 22] },
      { ...ECONOMY,  layout: '2-4-2', rows: [24, 52], exits: [24, 38, 52] },
    ],
  },
  DC10: {
    note: 'Typical DC-10 configuration',
    cabins: [
      { ...FIRST,    layout: '2-2-2', rows: [1,   6], exits: [1] },
      { ...ECONOMY,  layout: '2-4-2', rows: [8,  46], exits: [8, 27, 46] },
    ],
  },

  // ── Concorde ────────────────────────────────────────────────────────
  CONC: {
    note: 'Concorde — supersonic transatlantic service (1976–2003)',
    cabins: [
      { ...BUSINESS, layout: '2-2', rows: [1, 25], exits: [1, 13, 25] },
    ],
  },
}

export function getSeatmap(iataCode) {
  if (!iataCode) return null
  return SEATMAPS[iataCode.toUpperCase()] || null
}
