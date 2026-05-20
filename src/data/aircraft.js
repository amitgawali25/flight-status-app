// IATA aircraft type code → display details
export const AIRCRAFT = {
  // Boeing 737 family
  B732: { name: 'Boeing 737-200',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B733: { name: 'Boeing 737-300',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B734: { name: 'Boeing 737-400',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B735: { name: 'Boeing 737-500',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B736: { name: 'Boeing 737-600',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B737: { name: 'Boeing 737-700',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B738: { name: 'Boeing 737-800',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B739: { name: 'Boeing 737-900',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B73H: { name: 'Boeing 737-800',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B73N: { name: 'Boeing 737-900ER',   manufacturer: 'Boeing', type: 'Narrowbody' },
  B73W: { name: 'Boeing 737-700W',    manufacturer: 'Boeing', type: 'Narrowbody' },
  B38M: { name: 'Boeing 737 MAX 8',   manufacturer: 'Boeing', type: 'Narrowbody' },
  B39M: { name: 'Boeing 737 MAX 9',   manufacturer: 'Boeing', type: 'Narrowbody' },
  B3XM: { name: 'Boeing 737 MAX 10',  manufacturer: 'Boeing', type: 'Narrowbody' },
  // Boeing 747 family
  B741: { name: 'Boeing 747-100',     manufacturer: 'Boeing', type: 'Widebody' },
  B742: { name: 'Boeing 747-200',     manufacturer: 'Boeing', type: 'Widebody' },
  B743: { name: 'Boeing 747-300',     manufacturer: 'Boeing', type: 'Widebody' },
  B744: { name: 'Boeing 747-400',     manufacturer: 'Boeing', type: 'Widebody' },
  B748: { name: 'Boeing 747-8',       manufacturer: 'Boeing', type: 'Widebody' },
  B74S: { name: 'Boeing 747SP',       manufacturer: 'Boeing', type: 'Widebody' },
  // Boeing 757 family
  B752: { name: 'Boeing 757-200',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B753: { name: 'Boeing 757-300',     manufacturer: 'Boeing', type: 'Narrowbody' },
  // Boeing 767 family
  B762: { name: 'Boeing 767-200',     manufacturer: 'Boeing', type: 'Widebody' },
  B763: { name: 'Boeing 767-300',     manufacturer: 'Boeing', type: 'Widebody' },
  B764: { name: 'Boeing 767-400',     manufacturer: 'Boeing', type: 'Widebody' },
  // Boeing 777 family
  B772: { name: 'Boeing 777-200',     manufacturer: 'Boeing', type: 'Widebody' },
  B773: { name: 'Boeing 777-300',     manufacturer: 'Boeing', type: 'Widebody' },
  B77L: { name: 'Boeing 777-200LR',   manufacturer: 'Boeing', type: 'Widebody' },
  B77W: { name: 'Boeing 777-300ER',   manufacturer: 'Boeing', type: 'Widebody' },
  B779: { name: 'Boeing 777X-9',      manufacturer: 'Boeing', type: 'Widebody' },
  // Boeing 787 Dreamliner family
  B788: { name: 'Boeing 787-8 Dreamliner',  manufacturer: 'Boeing', type: 'Widebody' },
  B789: { name: 'Boeing 787-9 Dreamliner',  manufacturer: 'Boeing', type: 'Widebody' },
  B78X: { name: 'Boeing 787-10 Dreamliner', manufacturer: 'Boeing', type: 'Widebody' },
  // Boeing 717 / 727
  B712: { name: 'Boeing 717-200',     manufacturer: 'Boeing', type: 'Narrowbody' },
  B722: { name: 'Boeing 727-200',     manufacturer: 'Boeing', type: 'Narrowbody' },
  // Airbus A220 family
  BCS1: { name: 'Airbus A220-100',    manufacturer: 'Airbus', type: 'Narrowbody' },
  BCS3: { name: 'Airbus A220-300',    manufacturer: 'Airbus', type: 'Narrowbody' },
  // Airbus A318–A321 family
  A318: { name: 'Airbus A318',        manufacturer: 'Airbus', type: 'Narrowbody' },
  A319: { name: 'Airbus A319',        manufacturer: 'Airbus', type: 'Narrowbody' },
  A320: { name: 'Airbus A320',        manufacturer: 'Airbus', type: 'Narrowbody' },
  A321: { name: 'Airbus A321',        manufacturer: 'Airbus', type: 'Narrowbody' },
  A19N: { name: 'Airbus A319neo',     manufacturer: 'Airbus', type: 'Narrowbody' },
  A20N: { name: 'Airbus A320neo',     manufacturer: 'Airbus', type: 'Narrowbody' },
  A21N: { name: 'Airbus A321neo',     manufacturer: 'Airbus', type: 'Narrowbody' },
  A21X: { name: 'Airbus A321XLR',     manufacturer: 'Airbus', type: 'Narrowbody' },
  // Airbus A330 family
  A332: { name: 'Airbus A330-200',    manufacturer: 'Airbus', type: 'Widebody' },
  A333: { name: 'Airbus A330-300',    manufacturer: 'Airbus', type: 'Widebody' },
  A338: { name: 'Airbus A330-800neo', manufacturer: 'Airbus', type: 'Widebody' },
  A339: { name: 'Airbus A330-900neo', manufacturer: 'Airbus', type: 'Widebody' },
  // Airbus A340 family
  A342: { name: 'Airbus A340-200',    manufacturer: 'Airbus', type: 'Widebody' },
  A343: { name: 'Airbus A340-300',    manufacturer: 'Airbus', type: 'Widebody' },
  A345: { name: 'Airbus A340-500',    manufacturer: 'Airbus', type: 'Widebody' },
  A346: { name: 'Airbus A340-600',    manufacturer: 'Airbus', type: 'Widebody' },
  // Airbus A350 family
  A359: { name: 'Airbus A350-900',    manufacturer: 'Airbus', type: 'Widebody' },
  A35K: { name: 'Airbus A350-1000',   manufacturer: 'Airbus', type: 'Widebody' },
  // Airbus A380
  A388: { name: 'Airbus A380-800',    manufacturer: 'Airbus', type: 'Widebody' },
  A380: { name: 'Airbus A380',        manufacturer: 'Airbus', type: 'Widebody' },
  // Embraer family
  E170: { name: 'Embraer E170',       manufacturer: 'Embraer', type: 'Regional' },
  E175: { name: 'Embraer E175',       manufacturer: 'Embraer', type: 'Regional' },
  E190: { name: 'Embraer E190',       manufacturer: 'Embraer', type: 'Regional' },
  E195: { name: 'Embraer E195',       manufacturer: 'Embraer', type: 'Regional' },
  E7W:  { name: 'Embraer E175-E2',    manufacturer: 'Embraer', type: 'Regional' },
  E290: { name: 'Embraer E190-E2',    manufacturer: 'Embraer', type: 'Regional' },
  E295: { name: 'Embraer E195-E2',    manufacturer: 'Embraer', type: 'Regional' },
  ERJ:  { name: 'Embraer ERJ-145',    manufacturer: 'Embraer', type: 'Regional' },
  // Bombardier CRJ family
  CRJ1: { name: 'Bombardier CRJ-100', manufacturer: 'Bombardier', type: 'Regional' },
  CRJ2: { name: 'Bombardier CRJ-200', manufacturer: 'Bombardier', type: 'Regional' },
  CRJ7: { name: 'Bombardier CRJ-700', manufacturer: 'Bombardier', type: 'Regional' },
  CRJ9: { name: 'Bombardier CRJ-900', manufacturer: 'Bombardier', type: 'Regional' },
  CRJX: { name: 'Bombardier CRJ-1000',manufacturer: 'Bombardier', type: 'Regional' },
  // Bombardier / De Havilland Dash 8
  DH8A: { name: 'De Havilland Dash 8-100', manufacturer: 'De Havilland', type: 'Turboprop' },
  DH8B: { name: 'De Havilland Dash 8-200', manufacturer: 'De Havilland', type: 'Turboprop' },
  DH8C: { name: 'De Havilland Dash 8-300', manufacturer: 'De Havilland', type: 'Turboprop' },
  DH8D: { name: 'De Havilland Dash 8 Q400', manufacturer: 'De Havilland', type: 'Turboprop' },
  // ATR family
  AT43: { name: 'ATR 42-300',         manufacturer: 'ATR', type: 'Turboprop' },
  AT45: { name: 'ATR 42-500',         manufacturer: 'ATR', type: 'Turboprop' },
  AT72: { name: 'ATR 72-200',         manufacturer: 'ATR', type: 'Turboprop' },
  AT75: { name: 'ATR 72-500',         manufacturer: 'ATR', type: 'Turboprop' },
  AT76: { name: 'ATR 72-600',         manufacturer: 'ATR', type: 'Turboprop' },
  // McDonnell Douglas
  MD11: { name: 'McDonnell Douglas MD-11', manufacturer: 'McDonnell Douglas', type: 'Widebody' },
  MD82: { name: 'McDonnell Douglas MD-82', manufacturer: 'McDonnell Douglas', type: 'Narrowbody' },
  MD83: { name: 'McDonnell Douglas MD-83', manufacturer: 'McDonnell Douglas', type: 'Narrowbody' },
  MD88: { name: 'McDonnell Douglas MD-88', manufacturer: 'McDonnell Douglas', type: 'Narrowbody' },
  MD90: { name: 'McDonnell Douglas MD-90', manufacturer: 'McDonnell Douglas', type: 'Narrowbody' },
  DC10: { name: 'McDonnell Douglas DC-10', manufacturer: 'McDonnell Douglas', type: 'Widebody' },
  // Concorde
  CONC: { name: 'Aerospatiale/BAC Concorde', manufacturer: 'Aerospatiale', type: 'Supersonic' },
}

export function getAircraftInfo(iataCode) {
  if (!iataCode) return null
  return AIRCRAFT[iataCode.toUpperCase()] || null
}
