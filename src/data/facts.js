// Static flight facts keyed by route (DEP-ARR), airline IATA, or aircraft IATA type.
// The fact-fetching logic merges matches from all three categories (up to 3 total).

export const ROUTE_FACTS = {
  'DXB-JFK': [
    'EK201 / EK203 are among the longest regularly scheduled non-stop flights in the world, covering roughly 11,000 km over the North Atlantic.',
    'Dubai International (DXB) is the world\'s busiest international airport by passenger traffic.',
  ],
  'JFK-DXB': [
    'The JFK–DXB route crosses nine time zones, spanning roughly 11,000 km of ocean and desert.',
    'JFK Terminal 4 is the primary international terminal and home to Emirates, Air France, and Delta international services.',
  ],
  'LHR-JFK': [
    'The London–New York route is one of the busiest and most lucrative international air corridors in the world.',
    'Heathrow (LHR) handles more international passengers than any other airport in Europe.',
  ],
  'JFK-LHR': [
    'The first commercial transatlantic jet service between New York and London launched in October 1958 by BOAC.',
    'Concorde flew New York to London in under 3.5 hours — less than a third of the time of modern subsonic jets.',
  ],
  'FRA-JFK': [
    'Lufthansa has operated the Frankfurt–New York route continuously since 1960, making it one of the longest-running transatlantic services.',
    'Frankfurt Airport (FRA) is the third-busiest airport in Europe and Lufthansa\'s primary hub.',
  ],
  'JFK-FRA': [
    'The FRA–JFK route crosses the North Atlantic using great-circle routing, often passing south of Greenland.',
    'Frankfurt Airport has its own railway station directly beneath Terminal 1, connecting it to the German high-speed rail network.',
  ],
  'CDG-JFK': [
    'Air France has operated the Paris–New York route since 1946, making it one of the oldest continuously operated transatlantic services.',
    'Charles de Gaulle Airport (CDG) is the second-busiest airport in Europe and the largest in France.',
  ],
  'DXB-LHR': [
    'The Dubai–London route is one of the most profitable international air routes in the world.',
    'Emirates operates up to 7 daily flights between DXB and LHR, the most of any airline on any single international route.',
  ],
  'SIN-LHR': [
    'Singapore Airlines\' SIN–LHR route was the world\'s longest non-stop commercial flight when operated by the A340-500 from 2004–2013.',
    'Singapore Changi Airport has won the World\'s Best Airport award more times than any other airport.',
  ],
  'SYD-LAX': [
    'The Sydney–Los Angeles route crosses the Pacific Ocean and the International Date Line, making it one of the longest over-water non-stop flights.',
    'Qantas has operated SYD–LAX services since 1959 and it remains the airline\'s flagship transpacific route.',
  ],
  'LAX-SYD': [
    'Flying west from Los Angeles to Sydney, you travel forward in time — crossing the International Date Line adds a full calendar day to the journey.',
    'The transpacific flight from LA to Sydney covers roughly 12,100 km, making it one of the world\'s top 10 longest commercial routes.',
  ],
  'HKG-LHR': [
    'The Hong Kong–London route was part of the original Kangaroo Route, first flown by Qantas and BOAC in 1947.',
    'Hong Kong International Airport (HKG) was built on reclaimed land and opened in 1998, replacing the famously challenging Kai Tak airport.',
  ],
  'NRT-LAX': [
    'The Tokyo–Los Angeles route is one of the busiest transpacific corridors and a major gateway between Asia and North America.',
    'Narita International Airport (NRT) handles the majority of Japan\'s long-haul international flights.',
  ],
  'DXB-SYD': [
    'Emirates\' DXB–SYD services are some of the longest commercial routes in the Southern Hemisphere.',
    'The flight from Dubai to Sydney covers roughly 12,000 km and crosses seven time zones.',
  ],
}

export const AIRLINE_FACTS = {
  EK: [
    'Emirates was founded in 1985 with just two aircraft and now operates one of the world\'s largest long-haul fleets.',
    'Emirates is the world\'s largest operator of both the Airbus A380 and the Boeing 777.',
  ],
  LH: [
    'Lufthansa was one of the founding members of the Star Alliance in 1997, the world\'s largest airline alliance.',
    'The name "Lufthansa" means "air" (Luft) and "Hansa" — a reference to the medieval Hanseatic League of trading cities.',
  ],
  BA: [
    'British Airways is one of the few airlines to have operated Concorde commercially, flying the supersonic jet from 1976 to 2003.',
    'BA traces its origins to Aircraft Transport and Travel Ltd, which operated the world\'s first scheduled international air service in 1919.',
  ],
  AF: [
    'Air France was formed in 1933 through the merger of five French airlines and is one of the world\'s oldest carriers.',
    'Air France and British Airways were the only airlines to operate Concorde, sharing the supersonic market until 2003.',
  ],
  KL: [
    'KLM Royal Dutch Airlines was founded in 1919 and is the world\'s oldest airline still operating under its original name.',
    'KLM\'s famous Delft Blue miniature houses, given to business-class passengers since 1994, are each filled with Dutch genever gin.',
  ],
  SQ: [
    'Singapore Airlines has never had a fatal crash involving a hull loss on a mainline passenger jet in its history.',
    'Singapore Airlines was the launch customer for the Airbus A380 and the Boeing 787-10, receiving both aircraft before any other airline.',
  ],
  QF: [
    'Qantas is the world\'s third oldest airline, founded in Queensland in 1920, and the oldest continuously operating airline outside Europe.',
    'The Qantas name is an acronym for Queensland and Northern Territory Aerial Services.',
  ],
  AA: [
    'American Airlines operates the world\'s largest commercial airline fleet by number of aircraft.',
    'AA was the first airline to introduce a frequent flyer programme — AAdvantage launched in 1981 and is widely credited with starting the loyalty points industry.',
  ],
  UA: [
    'United Airlines was the first airline to fly the Boeing 747 commercially, inaugurating service in 1970.',
    'United is a founding member of Star Alliance and operates one of the world\'s most extensive domestic networks.',
  ],
  DL: [
    'Delta Air Lines is the world\'s largest airline by total revenue, with hubs across the US, Europe, and Asia.',
    'Delta is the only major US airline to have its own oil refinery, which it acquired in 2012 to reduce fuel costs.',
  ],
  CX: [
    'Cathay Pacific is headquartered at Hong Kong International Airport, which also serves as its primary hub.',
    'The airline\'s unusual name comes from an old poetic name for China — "Cathay" — used by Marco Polo and other early travellers.',
  ],
  TK: [
    'Turkish Airlines flies to more countries than any other airline in the world, serving destinations on six continents.',
    'Istanbul Airport, Turkish Airlines\' hub, is one of the world\'s largest airport terminals under a single roof.',
  ],
  ET: [
    'Ethiopian Airlines is Africa\'s largest and most profitable airline, operating a modern long-haul fleet.',
    'Ethiopian Airlines was the first African airline to operate the Boeing 787 Dreamliner.',
  ],
  NH: [
    'ANA (All Nippon Airways) has been rated a 5-star airline by Skytrax every year since 2013.',
    'ANA operates one of the most fuel-efficient fleets in the world, with a large proportion of Boeing 787 Dreamliners.',
  ],
  JL: [
    'Japan Airlines (JAL) was the first Asian airline to operate the Boeing 747, receiving the jet in 1970.',
    'After filing for bankruptcy in 2010, JAL completed one of the most successful airline restructurings in history.',
  ],
}

export const AIRCRAFT_FACTS = {
  A388: [
    'The Airbus A380-800 is the world\'s largest commercial passenger aircraft, capable of carrying up to 853 passengers in a single-class configuration.',
    'The A380 has four engines, a double-deck cabin spanning almost the full length of the aircraft, and a wingspan of 79.75 metres.',
  ],
  A380: [
    'The A380 entered commercial service with Singapore Airlines in October 2007 after more than a decade of development.',
    'Despite its size, the A380 produces less noise per seat than smaller aircraft and burns around 2.9 litres of fuel per 100 passenger-kilometres.',
  ],
  B789: [
    'The Boeing 787 Dreamliner is the first commercial airliner built primarily from carbon-fibre-reinforced polymer composites, making up about 50% of its structure by weight.',
    'The 787 uses electrically powered systems instead of traditional bleed air, which contributes to better cabin air quality and lower humidity loss at altitude.',
  ],
  B788: [
    'The 787-8 was the first 787 variant to enter service, with All Nippon Airways making the inaugural commercial flight in October 2011.',
    'The Dreamliner\'s large oval windows are the biggest on any commercial jet and can be dimmed electronically without blocking all light.',
  ],
  B78X: [
    'The Boeing 787-10 is the longest variant of the Dreamliner, stretching 68.3 metres and carrying up to 330 passengers.',
    'The 787-10 is too long for the fuselage sections to be transported by the specialised Dreamlifter cargo aircraft — they are built in one location only.',
  ],
  B77W: [
    'The Boeing 777-300ER is the best-selling variant of the 777 family and the workhorse of long-haul aviation for airlines like Emirates, Air France, and Qatar Airways.',
    'The 777 was the first commercial aircraft designed entirely using computer-aided design (CAD), with no paper drawings used in its development.',
  ],
  B772: [
    'United Airlines launched the Boeing 777-200 into service in June 1995, making it the first new widebody jet to enter service in the 1990s.',
    'The original 777-200 was the first commercial aircraft to receive FAA extended twin-engine operations (ETOPS-180) approval on its first day of service.',
  ],
  B744: [
    'The Boeing 747-400 was the dominant long-haul widebody jet for over two decades, with more than 700 built for airlines worldwide.',
    'The 747\'s distinctive upper deck "hump" was originally designed to carry cargo when airlines converted the aircraft for freighter use.',
  ],
  B748: [
    'The Boeing 747-8 is the longest commercial aircraft ever built, stretching 76.3 metres — longer than a standard American football field.',
    'Lufthansa was the launch customer for the 747-8 Intercontinental and remains its largest passenger operator.',
  ],
  A359: [
    'The Airbus A350-900 burns approximately 25% less fuel per seat than the Boeing 777-200 it often replaces on long-haul routes.',
    'The A350 uses a carbon-fibre composite structure for about 53% of its airframe, giving it excellent strength-to-weight ratio and corrosion resistance.',
  ],
  A35K: [
    'The A350-1000 is the longest-range Airbus aircraft ever built, capable of flying non-stop for over 16,000 km — enough to connect London with Perth, Australia.',
    'Qatar Airways was the launch customer for the A350-1000 and received the first aircraft in February 2018.',
  ],
  A346: [
    'The Airbus A340-600 held the record for the world\'s longest commercial aircraft from 2003 until the Boeing 747-8 entered service in 2012.',
    'The A340 family uses four engines instead of two, which was required for long over-water flights before the era of modern twin-engine ETOPS certifications.',
  ],
  A333: [
    'The Airbus A330-300 is one of the most versatile widebody jets, operating routes as short as 2 hours and as long as 15 hours.',
    'The A330 shares a common type rating with the A340, meaning pilots certified for one can fly both with minimal additional training.',
  ],
  A339: [
    'The A330-900neo burns up to 25% less fuel than the original A330-300 it often replaces, thanks to new Rolls-Royce Trent 7000 engines and aerodynamic improvements.',
    'The "-neo" suffix stands for New Engine Option, a naming convention Airbus also uses for the A320neo family.',
  ],
  A320: [
    'The Airbus A320 was the first commercial aircraft to use fly-by-wire controls as standard, replacing traditional mechanical linkages with electronic signals.',
    'Over 10,000 A320-family aircraft have been ordered, making it the best-selling commercial jet aircraft family in history.',
  ],
  A321: [
    'The A321XLR variant, launched in 2019, can fly non-stop between the US East Coast and Western Europe — a range previously requiring widebody aircraft.',
    'The A321 is a stretched version of the A320, adding about 6.9 metres to the fuselage and increasing capacity by up to 50 seats.',
  ],
  A20N: [
    'The A320neo ("New Engine Option") entered service with Lufthansa in January 2016 and burns about 20% less fuel than the original A320.',
    'The A320neo family uses advanced wingtip devices called "Sharklets" that reduce fuel consumption by up to 4% on long sectors.',
  ],
  B738: [
    'The Boeing 737-800 is the most popular single aircraft model in commercial aviation history, with over 5,000 delivered to airlines worldwide.',
    'Despite being a descendant of the original 1967 737, the 737-800\'s avionics and systems are completely modernised, with only the basic fuselage cross-section unchanged.',
  ],
  B38M: [
    'The Boeing 737 MAX 8 was grounded worldwide for 20 months from March 2019 to December 2020 following two fatal crashes linked to its MCAS flight control software.',
    'After software updates, pilot training changes, and extensive recertification, the 737 MAX returned to service and has since accumulated a strong safety record.',
  ],
  BCS3: [
    'The Airbus A220-300 (originally Bombardier C Series) was acquired by Airbus in 2018 and rebranded, giving the programme the commercial backing it needed to succeed.',
    'The A220 uses a carbon-fibre fuselage and advanced geared turbofan engines, making it the most fuel-efficient aircraft per seat in its class.',
  ],
  CONC: [
    'Concorde could cross the Atlantic in under 3.5 hours, flying at twice the speed of sound (Mach 2, ~2,180 km/h) at altitudes of up to 18,300 metres.',
    'Concorde heated up to 127°C on its nose during flight due to air compression — enough to expand its fuselage by up to 30 cm on every flight.',
  ],
}

/**
 * Returns up to 3 static facts for a given flight based on route, airline, and aircraft.
 * Returns null if no facts are found (triggering the Claude fallback).
 */
export function getStaticFacts({ depIata, arrIata, airlineIata, aircraftIata }) {
  const facts = []
  const routeKey = depIata && arrIata ? `${depIata}-${arrIata}` : null

  if (routeKey && ROUTE_FACTS[routeKey]) {
    facts.push(...ROUTE_FACTS[routeKey])
  }
  if (airlineIata && AIRLINE_FACTS[airlineIata?.toUpperCase()]) {
    facts.push(...AIRLINE_FACTS[airlineIata.toUpperCase()])
  }
  if (aircraftIata && AIRCRAFT_FACTS[aircraftIata?.toUpperCase()]) {
    facts.push(...AIRCRAFT_FACTS[aircraftIata.toUpperCase()])
  }

  if (facts.length === 0) return null
  // Shuffle and return up to 3, prioritising variety across categories
  return facts.slice(0, 3)
}
