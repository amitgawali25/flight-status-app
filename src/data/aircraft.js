// IATA aircraft type code → display details
export const AIRCRAFT = {
  // Boeing 737 family
  B732: { name: 'Boeing 737-200',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1968 },
  B733: { name: 'Boeing 737-300',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1984 },
  B734: { name: 'Boeing 737-400',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1988 },
  B735: { name: 'Boeing 737-500',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1990 },
  B736: { name: 'Boeing 737-600',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1998 },
  B737: { name: 'Boeing 737-700',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1997 },
  B738: { name: 'Boeing 737-800',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1998 },
  B739: { name: 'Boeing 737-900',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 2001 },
  B73H: { name: 'Boeing 737-800',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1998 },
  B73N: { name: 'Boeing 737-900ER',   manufacturer: 'Boeing', type: 'Narrowbody', introduced: 2007 },
  B73W: { name: 'Boeing 737-700W',    manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1997 },
  B38M: { name: 'Boeing 737 MAX 8',   manufacturer: 'Boeing', type: 'Narrowbody', introduced: 2017 },
  B39M: { name: 'Boeing 737 MAX 9',   manufacturer: 'Boeing', type: 'Narrowbody', introduced: 2018 },
  B3XM: { name: 'Boeing 737 MAX 10',  manufacturer: 'Boeing', type: 'Narrowbody', introduced: 2023 },
  // Boeing 747 family
  B741: { name: 'Boeing 747-100',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1970 },
  B742: { name: 'Boeing 747-200',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1971 },
  B743: { name: 'Boeing 747-300',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1983 },
  B744: { name: 'Boeing 747-400',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1989 },
  B748: { name: 'Boeing 747-8',       manufacturer: 'Boeing', type: 'Widebody', introduced: 2012 },
  B74S: { name: 'Boeing 747SP',       manufacturer: 'Boeing', type: 'Widebody', introduced: 1976 },
  // Boeing 757 family
  B752: { name: 'Boeing 757-200',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1983 },
  B753: { name: 'Boeing 757-300',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1999 },
  // Boeing 767 family
  B762: { name: 'Boeing 767-200',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1982 },
  B763: { name: 'Boeing 767-300',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1986 },
  B764: { name: 'Boeing 767-400',     manufacturer: 'Boeing', type: 'Widebody', introduced: 2000 },
  // Boeing 777 family
  B772: { name: 'Boeing 777-200',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1995 },
  B773: { name: 'Boeing 777-300',     manufacturer: 'Boeing', type: 'Widebody', introduced: 1998 },
  B77L: { name: 'Boeing 777-200LR',   manufacturer: 'Boeing', type: 'Widebody', introduced: 2006 },
  B77W: { name: 'Boeing 777-300ER',   manufacturer: 'Boeing', type: 'Widebody', introduced: 2004 },
  B779: { name: 'Boeing 777X-9',      manufacturer: 'Boeing', type: 'Widebody', introduced: 2025 },
  // Boeing 787 Dreamliner family
  B788: { name: 'Boeing 787-8 Dreamliner',  manufacturer: 'Boeing', type: 'Widebody', introduced: 2011 },
  B789: { name: 'Boeing 787-9 Dreamliner',  manufacturer: 'Boeing', type: 'Widebody', introduced: 2014 },
  B78X: { name: 'Boeing 787-10 Dreamliner', manufacturer: 'Boeing', type: 'Widebody', introduced: 2018 },
  // Boeing 717 / 727
  B712: { name: 'Boeing 717-200',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1999 },
  B722: { name: 'Boeing 727-200',     manufacturer: 'Boeing', type: 'Narrowbody', introduced: 1967 },
  // Airbus A220 family
  BCS1: { name: 'Airbus A220-100',    manufacturer: 'Airbus', type: 'Narrowbody', introduced: 2016 },
  BCS3: { name: 'Airbus A220-300',    manufacturer: 'Airbus', type: 'Narrowbody', introduced: 2016 },
  // Airbus A318–A321 family
  A318: { name: 'Airbus A318',        manufacturer: 'Airbus', type: 'Narrowbody', introduced: 2003 },
  A319: { name: 'Airbus A319',        manufacturer: 'Airbus', type: 'Narrowbody', introduced: 1996 },
  A320: { name: 'Airbus A320',        manufacturer: 'Airbus', type: 'Narrowbody', introduced: 1988 },
  A321: { name: 'Airbus A321',        manufacturer: 'Airbus', type: 'Narrowbody', introduced: 1994 },
  A19N: { name: 'Airbus A319neo',     manufacturer: 'Airbus', type: 'Narrowbody', introduced: 2018 },
  A20N: { name: 'Airbus A320neo',     manufacturer: 'Airbus', type: 'Narrowbody', introduced: 2016 },
  A21N: { name: 'Airbus A321neo',     manufacturer: 'Airbus', type: 'Narrowbody', introduced: 2017 },
  A21X: { name: 'Airbus A321XLR',     manufacturer: 'Airbus', type: 'Narrowbody', introduced: 2024 },
  // Airbus A330 family
  A332: { name: 'Airbus A330-200',    manufacturer: 'Airbus', type: 'Widebody', introduced: 1998 },
  A333: { name: 'Airbus A330-300',    manufacturer: 'Airbus', type: 'Widebody', introduced: 1994 },
  A338: { name: 'Airbus A330-800neo', manufacturer: 'Airbus', type: 'Widebody', introduced: 2020 },
  A339: { name: 'Airbus A330-900neo', manufacturer: 'Airbus', type: 'Widebody', introduced: 2018 },
  // Airbus A340 family
  A342: { name: 'Airbus A340-200',    manufacturer: 'Airbus', type: 'Widebody', introduced: 1993 },
  A343: { name: 'Airbus A340-300',    manufacturer: 'Airbus', type: 'Widebody', introduced: 1993 },
  A345: { name: 'Airbus A340-500',    manufacturer: 'Airbus', type: 'Widebody', introduced: 2003 },
  A346: { name: 'Airbus A340-600',    manufacturer: 'Airbus', type: 'Widebody', introduced: 2002 },
  // Airbus A350 family
  A359: { name: 'Airbus A350-900',    manufacturer: 'Airbus', type: 'Widebody', introduced: 2015 },
  A35K: { name: 'Airbus A350-1000',   manufacturer: 'Airbus', type: 'Widebody', introduced: 2018 },
  // Airbus A380
  A388: { name: 'Airbus A380-800',    manufacturer: 'Airbus', type: 'Widebody', introduced: 2007 },
  A380: { name: 'Airbus A380',        manufacturer: 'Airbus', type: 'Widebody', introduced: 2007 },
  // Embraer family
  E170: { name: 'Embraer E170',       manufacturer: 'Embraer', type: 'Regional', introduced: 2004 },
  E175: { name: 'Embraer E175',       manufacturer: 'Embraer', type: 'Regional', introduced: 2004 },
  E190: { name: 'Embraer E190',       manufacturer: 'Embraer', type: 'Regional', introduced: 2005 },
  E195: { name: 'Embraer E195',       manufacturer: 'Embraer', type: 'Regional', introduced: 2006 },
  E7W:  { name: 'Embraer E175-E2',    manufacturer: 'Embraer', type: 'Regional', introduced: 2021 },
  E290: { name: 'Embraer E190-E2',    manufacturer: 'Embraer', type: 'Regional', introduced: 2018 },
  E295: { name: 'Embraer E195-E2',    manufacturer: 'Embraer', type: 'Regional', introduced: 2019 },
  ERJ:  { name: 'Embraer ERJ-145',    manufacturer: 'Embraer', type: 'Regional', introduced: 1996 },
  // Bombardier CRJ family
  CRJ1: { name: 'Bombardier CRJ-100', manufacturer: 'Bombardier', type: 'Regional', introduced: 1992 },
  CRJ2: { name: 'Bombardier CRJ-200', manufacturer: 'Bombardier', type: 'Regional', introduced: 1996 },
  CRJ7: { name: 'Bombardier CRJ-700', manufacturer: 'Bombardier', type: 'Regional', introduced: 2001 },
  CRJ9: { name: 'Bombardier CRJ-900', manufacturer: 'Bombardier', type: 'Regional', introduced: 2003 },
  CRJX: { name: 'Bombardier CRJ-1000',manufacturer: 'Bombardier', type: 'Regional', introduced: 2011 },
  // Bombardier / De Havilland Dash 8
  DH8A: { name: 'De Havilland Dash 8-100', manufacturer: 'De Havilland', type: 'Turboprop', introduced: 1984 },
  DH8B: { name: 'De Havilland Dash 8-200', manufacturer: 'De Havilland', type: 'Turboprop', introduced: 1992 },
  DH8C: { name: 'De Havilland Dash 8-300', manufacturer: 'De Havilland', type: 'Turboprop', introduced: 1989 },
  DH8D: { name: 'De Havilland Dash 8 Q400', manufacturer: 'De Havilland', type: 'Turboprop', introduced: 2000 },
  // ATR family
  AT43: { name: 'ATR 42-300',         manufacturer: 'ATR', type: 'Turboprop', introduced: 1985 },
  AT45: { name: 'ATR 42-500',         manufacturer: 'ATR', type: 'Turboprop', introduced: 1995 },
  AT72: { name: 'ATR 72-200',         manufacturer: 'ATR', type: 'Turboprop', introduced: 1989 },
  AT75: { name: 'ATR 72-500',         manufacturer: 'ATR', type: 'Turboprop', introduced: 1997 },
  AT76: { name: 'ATR 72-600',         manufacturer: 'ATR', type: 'Turboprop', introduced: 2009 },
  // McDonnell Douglas
  MD11: { name: 'McDonnell Douglas MD-11', manufacturer: 'McDonnell Douglas', type: 'Widebody',   introduced: 1990 },
  MD82: { name: 'McDonnell Douglas MD-82', manufacturer: 'McDonnell Douglas', type: 'Narrowbody', introduced: 1982 },
  MD83: { name: 'McDonnell Douglas MD-83', manufacturer: 'McDonnell Douglas', type: 'Narrowbody', introduced: 1985 },
  MD88: { name: 'McDonnell Douglas MD-88', manufacturer: 'McDonnell Douglas', type: 'Narrowbody', introduced: 1987 },
  MD90: { name: 'McDonnell Douglas MD-90', manufacturer: 'McDonnell Douglas', type: 'Narrowbody', introduced: 1993 },
  DC10: { name: 'McDonnell Douglas DC-10', manufacturer: 'McDonnell Douglas', type: 'Widebody',   introduced: 1971 },
  // Concorde
  CONC: { name: 'Aerospatiale/BAC Concorde', manufacturer: 'Aerospatiale', type: 'Supersonic', introduced: 1976 },
}

export function getAircraftInfo(iataCode) {
  if (!iataCode) return null
  return AIRCRAFT[iataCode.toUpperCase()] || null
}
