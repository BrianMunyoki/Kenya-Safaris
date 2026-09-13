import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

interface PackageData {
  title: string
  subtitle: string
  tag: string
  img: string
  alt: string
  breadcrumbs: { label: string; to?: string }[]
  duration?: string
  price?: string
  groupSize?: string
  difficulty?: string
  highlights: string[]
  overview: string
  seoTitle?: string
  metaDescription?: string
  itinerary: { day: string; title: string; desc: string }[]
  includes: string[]
  excludes: string[]
  relatedLinks: { label: string; to: string }[]
  faqs?: {
    question: string
    answer: string
  }[]
}

interface ApiSafariPackage {
  id: number
  title: string
  slug: string
  subtitle: string
  tag: string
  image: string
  image_alt: string
  duration: string
  price_label: string
  group_size: string
  difficulty: string
  overview: string
  seo_title: string
  meta_description: string
  highlights: string[]
  itinerary: { day: string; title: string; desc: string }[]
  includes: string[]
  excludes: string[]
  related_links: { label: string; to: string }[]
  faqs: {
    id: number
    question: string
    answer: string
    order: number
  }[]
}

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

function mapApiPackage(
  api: ApiSafariPackage,
  fallback: PackageData
): PackageData {
  return {
    title: api.title || fallback.title,
    subtitle: api.subtitle || fallback.subtitle,
    tag: api.tag || fallback.tag,

    img: api.image || fallback.img,
    alt: api.image_alt || fallback.alt,

    breadcrumbs: fallback.breadcrumbs,

    duration: api.duration || fallback.duration,
    price: api.price_label || fallback.price,
    groupSize: api.group_size || fallback.groupSize,
    difficulty: api.difficulty || fallback.difficulty,

    overview: api.overview || fallback.overview,
    seoTitle: api.seo_title || fallback.seoTitle,
    metaDescription: api.meta_description || fallback.metaDescription,

    highlights:
      api.highlights.length > 0
        ? api.highlights
        : fallback.highlights,

    itinerary:
      api.itinerary.length > 0
        ? api.itinerary
        : fallback.itinerary,

    includes:
      api.includes.length > 0
        ? api.includes
        : fallback.includes,

    excludes:
      api.excludes.length > 0
        ? api.excludes
        : fallback.excludes,

    relatedLinks:
      api.related_links.length > 0
        ? api.related_links
        : fallback.relatedLinks,

    faqs: api.faqs ?? fallback.faqs ?? [],
  }
}
const PACKAGES: Record<string, PackageData> = {
  'masai-mara-2day': {
    title: '2-Day Masai Mara Safari', tag: 'Masai Mara', subtitle: 'A compact introduction to Africa\'s most celebrated wildlife reserve — two game drives, one unforgettable night in the bush.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format', alt: 'Game drive in Masai Mara',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: '2-Day Safari' }],
    duration: '2 Days / 1 Night', price: 'From USD 395 pp', groupSize: '2–6 guests', difficulty: 'Easy',
    highlights: ['Afternoon & morning game drives', 'Big Five sightings', 'Tented bush camp', 'All meals included', 'KPSGA-certified guide', 'Park entry fees'],
    overview: 'This two-day safari is the ideal introduction to the Masai Mara. Departing Nairobi after breakfast, you\'ll arrive in time for an afternoon game drive — the golden hour light brings predators out and photographic opportunities abound. Spend the night at a classic bush camp before an early-morning drive at first light, when lions and cheetah are most active. Return to Nairobi after lunch.',
    itinerary: [
      { day: 'Day 1', title: 'Nairobi → Masai Mara', desc: 'Depart Nairobi at 07:00 by 4×4. Arrive Mara by noon, lunch at camp, then afternoon game drive from 15:00–18:30. Dinner and overnight at bush camp.' },
      { day: 'Day 2', title: 'Masai Mara → Nairobi', desc: 'Early wake-up for a 06:00 game drive — the best hours for predator activity. Return to camp for breakfast, then drive back to Nairobi, arriving by 17:00.' },
    ],
    includes: ['Round-trip transport from Nairobi', 'All meals (full board)', 'Professional guide', 'Park entrance fees', 'Accommodation', 'Bottled water en route'],
    excludes: ['International flights', 'Travel insurance', 'Tips & gratuities', 'Balloon safari', 'Personal items'],
    relatedLinks: [{ label: '3-Day Masai Mara', to: '/kenya-safaris/masai-mara/3-day' }, { label: '4-Day Masai Mara', to: '/kenya-safaris/masai-mara/4-day' }, { label: 'Group Safari', to: '/kenya-safaris/group-safaris/masai-mara/2-day' }],
  },
  'masai-mara-3day': {
    title: '3-Day Masai Mara Safari', tag: 'Masai Mara', subtitle: 'Our most popular package — two full days of game driving give you the best odds of witnessing the Big Five on the open plain.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format', alt: 'Lions resting in Masai Mara',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: '3-Day Safari' }],
    duration: '3 Days / 2 Nights', price: 'From USD 595 pp', groupSize: '2–6 guests', difficulty: 'Easy',
    highlights: ['Two full days of game drives', 'Big Five', 'Sunrise & sunset drives', 'Maasai village option', 'Full-board bush camp', 'KPSGA-certified guide'],
    overview: 'The three-day Masai Mara safari is our most-booked itinerary — and for good reason. Two full game-drive days give you real time to explore the reserve, follow lion prides, track cheetah on the open plain, and watch elephant herds move through the acacia woodland at dusk.',
    itinerary: [
      { day: 'Day 1', title: 'Nairobi → Masai Mara', desc: 'Depart Nairobi at 07:00. Arrive camp by noon. Lunch, then afternoon game drive 15:00–18:30. Sundowners on the plain. Dinner and overnight.' },
      { day: 'Day 2', title: 'Full Day in the Mara', desc: 'Full day game driving — early start at 06:00. Return to camp for lunch. Afternoon drive from 15:00, finishing at sunset. Optional Maasai village visit.' },
      { day: 'Day 3', title: 'Masai Mara → Nairobi', desc: 'Final morning drive at 06:30. Breakfast at camp. Depart for Nairobi, arriving by 17:00.' },
    ],
    includes: ['Round-trip transport', 'All meals (full board)', 'Professional guide', 'Park fees', 'Camp accommodation', 'Bottled water'],
    excludes: ['International flights', 'Travel insurance', 'Gratuities', 'Balloon safari', 'Maasai village entry fee'],
    relatedLinks: [{ label: '4-Day Masai Mara', to: '/kenya-safaris/masai-mara/4-day' }, { label: 'Migration Safari', to: '/kenya-safaris/masai-mara/migration' }, { label: 'Fly-In Safari', to: '/kenya-safaris/masai-mara/fly-in' }],
  },
  'masai-mara-4day': {
    title: '4-Day Masai Mara Safari', tag: 'Masai Mara', subtitle: 'Three game-drive days to explore multiple zones of the reserve — from the Mara Triangle to the Sand River boundary.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format', alt: 'Cheetah hunting in Masai Mara',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: '4-Day Safari' }],
    duration: '4 Days / 3 Nights', price: 'From USD 795 pp', groupSize: '2–6 guests', difficulty: 'Easy',
    highlights: ['Three full game-drive days', 'Mara Triangle access', 'Sundowner bush dinners', 'KPSGA guide', 'Big Five', 'Full-board camp'],
    overview: 'Four days allows you to properly explore the reserve\'s different zones. The Mara Triangle — managed by the Mara Conservancy — is less crowded and often has exceptional leopard sightings. The Sand River sector near the Tanzanian border is the epicentre of the wildebeest crossing during migration season.',
    itinerary: [
      { day: 'Day 1', title: 'Nairobi → Masai Mara', desc: 'Drive from Nairobi, arriving by midday. Afternoon game drive in the central Mara.' },
      { day: 'Day 2', title: 'Mara Triangle', desc: 'Full day in the Mara Triangle — dramatically less traffic, exceptional leopard and cheetah habitat.' },
      { day: 'Day 3', title: 'Sand River Sector', desc: 'Explore the Sand River area and Tanzanian border zones. Sundowner on the escarpment.' },
      { day: 'Day 4', title: 'Morning Drive → Nairobi', desc: 'Final dawn drive, then breakfast and return drive to Nairobi.' },
    ],
    includes: ['Round-trip transport', 'All meals', 'Guide', 'Park fees', 'Accommodation', 'Water'],
    excludes: ['Flights', 'Insurance', 'Tips', 'Balloon safari', 'Personal spending'],
    relatedLinks: [{ label: '5-Day Safari', to: '/kenya-safaris/masai-mara/5-day' }, { label: '7-Day Safari', to: '/kenya-safaris/masai-mara/7-day' }, { label: 'Luxury Version', to: '/kenya-safaris/masai-mara/luxury' }],
  },
  'masai-mara-5day': {
    title: '5-Day Masai Mara Safari', tag: 'Masai Mara', subtitle: 'An unhurried stay — time for game drives, a Maasai village immersion, and a guided dawn bush walk.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format', alt: 'Sunrise game drive Masai Mara',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: '5-Day Safari' }],
    duration: '5 Days / 4 Nights', price: 'From USD 995 pp', groupSize: '2–6 guests', difficulty: 'Easy',
    highlights: ['Four game-drive days', 'Guided bush walk', 'Maasai village visit', 'Mara & Triangle zones', 'Full-board camp', 'Cultural experience'],
    overview: 'Five days is the sweet spot for a thorough Masai Mara experience. Beyond game drives, you\'ll have time for a guided walking safari with a Maasai warrior, a cultural visit to an authentic village, and an evening of stargazing from the open plain.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival', desc: 'Drive from Nairobi, afternoon game drive.' },
      { day: 'Day 2', title: 'Full Game Day', desc: 'All-day game drive exploring the central reserve.' },
      { day: 'Day 3', title: 'Mara Triangle & Bush Walk', desc: 'Morning bush walk with Maasai guide, afternoon in the Triangle.' },
      { day: 'Day 4', title: 'Maasai Village & Game Drive', desc: 'Morning village visit, afternoon game drive.' },
      { day: 'Day 5', title: 'Final Drive & Return', desc: 'Dawn drive, breakfast, return to Nairobi.' },
    ],
    includes: ['Transport', 'All meals', 'Guide', 'Park fees', 'Bush walk', 'Village visit', 'Accommodation'],
    excludes: ['Flights', 'Insurance', 'Gratuities', 'Balloon safari'],
    relatedLinks: [{ label: '7-Day Safari', to: '/kenya-safaris/masai-mara/7-day' }, { label: 'Migration Safari', to: '/kenya-safaris/masai-mara/migration' }],
  },
  'masai-mara-7day': {
    title: '7-Day Masai Mara Safari', tag: 'Masai Mara', subtitle: 'A full week in the world\'s greatest wildlife reserve — the ultimate Masai Mara immersion.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format', alt: 'Leopard in Masai Mara tree',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: '7-Day Safari' }],
    duration: '7 Days / 6 Nights', price: 'From USD 1,595 pp', groupSize: '2–4 guests', difficulty: 'Easy',
    highlights: ['Six game-drive days', 'All reserve zones', 'Private guide', 'Multiple camps', 'Bush walks', 'Village visit', 'Night drives (conservancy)'],
    overview: 'Seven days is enough time to see the Masai Mara in its entirety — the main reserve, the Mara Triangle, and the surrounding private conservancies where night drives and off-road driving are permitted. Your private guide builds a daily plan around your specific wildlife priorities.',
    itinerary: [
      { day: 'Days 1–2', title: 'Arrival & Central Mara', desc: 'Drive from Nairobi. Two days exploring the main reserve.' },
      { day: 'Days 3–4', title: 'Mara Triangle', desc: 'Move to a camp in the Triangle for two days of less-crowded game viewing.' },
      { day: 'Days 5–6', title: 'Private Conservancy', desc: 'Stay at a conservancy camp — night drives, off-road tracking, walking safaris.' },
      { day: 'Day 7', title: 'Departure', desc: 'Final morning drive and return to Nairobi.' },
    ],
    includes: ['Transport', 'All meals', 'Private guide', 'Park & conservancy fees', 'All activities', 'Full-board accommodation'],
    excludes: ['Flights', 'Insurance', 'Gratuities', 'Balloon safari', 'Personal spending'],
    relatedLinks: [{ label: 'Luxury Version', to: '/kenya-safaris/masai-mara/luxury' }, { label: 'Fly-In Option', to: '/kenya-safaris/masai-mara/fly-in' }],
  },
  'masai-mara-nairobi': {
    title: 'Masai Mara Safaris From Nairobi', tag: 'Masai Mara', subtitle: 'All our Masai Mara packages depart from and return to Nairobi by road — a scenic 5–6 hour drive through the Great Rift Valley.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format', alt: 'Drive to Masai Mara through Rift Valley',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: 'From Nairobi' }],
    duration: '2–7 Days', price: 'From USD 395 pp', groupSize: '2–8 guests', difficulty: 'Easy',
    highlights: ['Nairobi hotel pickup', 'Rift Valley scenic drive', 'Private 4×4 transport', 'KPSGA guide', 'All package lengths available'],
    overview: 'All our safaris depart from Nairobi\'s main hotels in comfortable, pop-top 4×4 safari vehicles. The drive to the Masai Mara passes through the dramatic Great Rift Valley escarpment — a highlight in itself. We offer 2-day to 7-day departures on any date.',
    itinerary: [
      { day: 'Morning', title: 'Nairobi Hotel Pickup', desc: 'Collected from your hotel at 07:00. Drive through the Rift Valley escarpment with optional stop at the viewpoint.' },
      { day: 'Midday', title: 'Arrive Masai Mara', desc: 'Arrive at camp around noon. Lunch and settle in.' },
      { day: 'Afternoon', title: 'First Game Drive', desc: 'Afternoon drive 15:00–18:30 before returning to camp for dinner.' },
    ],
    includes: ['Hotel pickup & drop-off', 'Pop-top safari 4×4', 'Professional guide-driver', 'Fuel & park fees', 'Accommodation & meals per package'],
    excludes: ['Airport transfers (separate)', 'Flights', 'Insurance', 'Tips'],
    relatedLinks: [{ label: '3-Day Masai Mara', to: '/kenya-safaris/masai-mara/3-day' }, { label: 'Fly-In Alternative', to: '/kenya-safaris/masai-mara/fly-in' }],
  },
  'masai-mara-flyin': {
    title: 'Masai Mara Fly-In Safaris', tag: 'Masai Mara', subtitle: 'Skip the road and fly into the heart of the Mara — 45 minutes from Nairobi\'s Wilson Airport to a bush airstrip.',
    img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=1800&h=900&fit=crop&auto=format', alt: 'Small aircraft landing in Masai Mara',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: 'Fly-In Safaris' }],
    duration: '3–5 Days', price: 'From USD 1,195 pp', groupSize: '2–6 guests', difficulty: 'Easy',
    highlights: ['Charter flight from Wilson Airport', 'Aerial Rift Valley views', 'Bush airstrip landing', 'Premium camps', 'More game-drive time'],
    overview: 'Flying into the Mara is the premium choice — it maximises your time in the reserve and removes the long road journey entirely. Scheduled light-aircraft flights operate from Wilson Airport (Nairobi) to multiple Mara airstrips daily.',
    itinerary: [
      { day: 'Day 1', title: 'Wilson Airport → Mara Airstrip', desc: 'Morning flight from Nairobi (45 min). Met at the airstrip by your guide. Afternoon game drive.' },
      { day: 'Days 2–3', title: 'Full Game Days', desc: 'Dawn and dusk game drives with the reserve largely to yourself in the early hours.' },
      { day: 'Day 4', title: 'Return Flight', desc: 'Morning drive, then fly back to Nairobi.' },
    ],
    includes: ['Return charter flights', 'Airport–airstrip transfers', 'All meals', 'Park fees', 'Guide', 'Premium accommodation'],
    excludes: ['International flights', 'Insurance', 'Gratuities', 'Balloon safari', 'Excess baggage (soft bags only)'],
    relatedLinks: [{ label: 'Luxury Masai Mara', to: '/kenya-safaris/masai-mara/luxury' }, { label: 'Drive Option', to: '/kenya-safaris/masai-mara/from-nairobi' }],
  },
  'masai-mara-migration': {
    title: 'Masai Mara Migration Safaris', tag: 'Great Migration · Jul–Oct', subtitle: 'A million wildebeest. Crocodile-filled rivers. The world\'s greatest wildlife spectacle — timed to perfection.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format', alt: 'Wildebeest crossing the Mara River',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: 'Migration Safaris' }],
    duration: '5 Days / 4 Nights', price: 'From USD 1,295 pp', groupSize: '2–6 guests', difficulty: 'Easy',
    highlights: ['Peak season: Jul–Oct', 'River crossing positions', 'Predator activity at peak', 'Full-board riverside camp', 'Expert migration guide'],
    overview: 'Between July and October each year, over 1.5 million wildebeest — along with 200,000 zebra and 500,000 gazelle — make the treacherous Mara River crossing into Kenya. The crossings happen multiple times a day at several well-known points. Our guides know the river intimately and will position you correctly for the crossing, often just metres from the action.',
    itinerary: [
      { day: 'Day 1', title: 'Drive to Mara', desc: 'Depart Nairobi early. Afternoon spent scouting crossing points with guide.' },
      { day: 'Days 2–3', title: 'Migration Focus', desc: 'Dawn to dusk at the river crossings. Guide monitors multiple sites via radio network.' },
      { day: 'Day 4', title: 'Reserve Exploration', desc: 'Explore the broader reserve — predators follow the herds.' },
      { day: 'Day 5', title: 'Return', desc: 'Final morning at the river, then return to Nairobi.' },
    ],
    includes: ['Transport', 'All meals', 'Specialist migration guide', 'Park fees', 'Riverside camp accommodation'],
    excludes: ['Flights', 'Insurance', 'Gratuities', 'Balloon safari'],
    relatedLinks: [{ label: '5-Day Standard Mara', to: '/kenya-safaris/masai-mara/5-day' }, { label: 'Mara Accommodation', to: '/kenya-safaris/accommodation/masai-mara' }],
  },
  'masai-mara-luxury': {
    title: 'Luxury Masai Mara Safaris', tag: 'Luxury · Premium Camps', subtitle: 'Five-star tented camps, private game vehicles, butler service, and sundowner cocktails on the open plain.',
    img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=1800&h=900&fit=crop&auto=format', alt: 'Luxury tented camp in Masai Mara',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: 'Luxury' }],
    duration: '4 Days / 3 Nights', price: 'From USD 2,450 pp', groupSize: '2–4 guests', difficulty: 'Easy',
    highlights: ['5-star tented lodges', 'Private game vehicle', 'Butler & concierge', 'Gourmet bush dining', 'Spa treatments', 'All-inclusive'],
    overview: 'Kenya\'s luxury safari market has no equal — the country invented the concept of the classic tented camp, and the finest properties in the Masai Mara offer an experience that combines deep wilderness with exceptional hospitality. Think Egyptian cotton, candlelit dinners under acacia trees, and a private guide who dedicates the vehicle entirely to your party.',
    itinerary: [
      { day: 'Day 1', title: 'Fly In from Nairobi', desc: 'Charter flight to Mara. Champagne welcome, afternoon game drive in your private vehicle.' },
      { day: 'Days 2–3', title: 'Private Game Drives', desc: 'Unlimited game driving on your own schedule — no fixed departure times.' },
      { day: 'Day 4', title: 'Final Drive & Return', desc: 'Dawn drive, breakfast in the bush, return flight to Nairobi.' },
    ],
    includes: ['Return charter flights', 'All-inclusive luxury camp', 'Private vehicle & guide', 'All meals, drinks & minibar', 'Spa access', 'Laundry service'],
    excludes: ['International flights', 'Insurance', 'Gratuities', 'Personal shopping'],
    relatedLinks: [{ label: 'Luxury Mara Lodges', to: '/kenya-safaris/accommodation/masai-mara/luxury' }, { label: 'Luxury Kenya Safaris', to: '/kenya-safaris/types/luxury' }],
  },
  'masai-mara-reserve': {
    title: 'Masai Mara National Reserve', tag: 'Park Guide', subtitle: 'Everything you need to know about Kenya\'s most celebrated wildlife reserve — wildlife, best time to visit, fees, and travel tips.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format', alt: 'Panoramic view of Masai Mara savanna',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara', to: '/kenya-safaris/masai-mara' }, { label: 'National Reserve' }],
    duration: '—', price: '—', groupSize: '—', difficulty: '—',
    highlights: ['1,510 km² of savanna', 'Big Five resident year-round', 'Great Migration Jul–Oct', 'KPSGA-certified guides required', 'Multiple airstrips', 'Private conservancies adjacent'],
    overview: 'The Masai Mara National Reserve is managed by the Narok County Council and covers 1,510 km² of the larger 25,000 km² Mara–Serengeti ecosystem. The reserve is bordered by the Mara Triangle (managed by the Mara Conservancy) and several private conservancies where additional activities — night drives, walking safaris, off-road driving — are permitted.',
    itinerary: [
      { day: 'Wildlife', title: 'What You\'ll See', desc: 'Lion, leopard, cheetah, elephant, buffalo, giraffe, hippo, crocodile, 470 bird species, and seasonal wildebeest migration.' },
      { day: 'Best Time', title: 'When to Visit', desc: 'Year-round destination. July–October for the Great Migration. January–March for calving season in the Serengeti. Dry seasons (Jun–Oct, Dec–Mar) offer better game viewing.' },
      { day: 'Getting There', title: 'Access', desc: '5–6 hour drive from Nairobi via the A104 and Narok Road, or 45-minute charter flight from Wilson Airport to Keekorok, Musiara, or Ol Kiombo airstrips.' },
    ],
    includes: ['Park fees (2026): USD 80 pp/day for non-residents', 'Vehicle fee: USD 30/day', 'Mara Triangle separate admission', 'Conservancy fees vary'],
    excludes: ['Accommodation', 'Transport', 'Guide fees', 'Activities'],
    relatedLinks: [{ label: 'Book a Masai Mara Safari', to: '/kenya-safaris/masai-mara/3-day' }, { label: 'Mara Accommodation', to: '/kenya-safaris/accommodation/masai-mara' }, { label: 'Safari Cost Guide', to: '/kenya-safaris/guides/masai-mara-cost' }],
  },
  'amboseli-day': { title: 'Amboseli Day Safari', tag: 'Amboseli', subtitle: 'A full day at Amboseli National Park — elephant herds, Kilimanjaro views, and prolific birdlife in a single long-day excursion from Nairobi.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=1800&h=900&fit=crop&auto=format', alt: 'Elephants at Amboseli with Kilimanjaro', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Amboseli', to: '/kenya-safaris/amboseli' }, { label: 'Day Safari' }], duration: 'Full Day', price: 'From USD 250 pp', groupSize: '2–8 guests', difficulty: 'Easy', highlights: ['Elephant herds', 'Kilimanjaro backdrop', 'Birdwatching', 'Observation Hill', 'Nairobi same-day return'], overview: 'Amboseli\'s open swamp ecosystem supports one of Africa\'s largest free-roaming elephant populations. On a clear day — most mornings — Kilimanjaro towers over the park in extraordinary photographic fashion.', itinerary: [{ day: 'Depart', title: 'Nairobi → Amboseli', desc: 'Early departure at 05:30 to arrive for peak morning wildlife activity.' }, { day: 'Full Day', title: 'Game Drives', desc: 'Morning and afternoon game drives around the Enkongo Narok swamp and Observation Hill.' }, { day: 'Evening', title: 'Return to Nairobi', desc: 'Depart by 16:00, back in Nairobi by 20:00.' }], includes: ['Transport', 'Park fees', 'Lunch', 'Guide', 'Water'], excludes: ['Dinner', 'Insurance', 'Tips', 'Personal items'], relatedLinks: [{ label: '2-Day Amboseli', to: '/kenya-safaris/amboseli/2-day' }, { label: '3-Day Amboseli', to: '/kenya-safaris/amboseli/3-day' }] },
  'amboseli-2day': { title: '2-Day Amboseli Safari', tag: 'Amboseli', subtitle: 'Overnight at Amboseli — morning and evening game drives with Kilimanjaro lighting at its most dramatic.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=1800&h=900&fit=crop&auto=format', alt: 'Elephants silhouetted against Kilimanjaro', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Amboseli', to: '/kenya-safaris/amboseli' }, { label: '2-Day Safari' }], duration: '2 Days / 1 Night', price: 'From USD 445 pp', groupSize: '2–6 guests', difficulty: 'Easy', highlights: ['Overnight in the park', 'Sunset drive', 'Dawn light on Kilimanjaro', 'Elephant herds', 'Maasai cultural option'], overview: 'One night in Amboseli allows you to experience the park in its best light — literally. Dawn breaks over Kilimanjaro in extraordinary clarity and the elephants move through the swamp in spectacular fashion.', itinerary: [{ day: 'Day 1', title: 'Nairobi → Amboseli', desc: 'Drive from Nairobi (3.5 hours). Arrive for afternoon game drive and sunset.' }, { day: 'Day 2', title: 'Morning Drive → Return', desc: 'Early 06:00 drive for Kilimanjaro at dawn. Breakfast, then return to Nairobi.' }], includes: ['Transport', 'Park fees', 'All meals', 'Lodge accommodation', 'Guide'], excludes: ['Flights', 'Insurance', 'Tips'], relatedLinks: [{ label: '3-Day Amboseli', to: '/kenya-safaris/amboseli/3-day' }, { label: 'Amboseli Park Guide', to: '/kenya-safaris/amboseli/national-park' }] },
  'amboseli-3day': { title: '3-Day Amboseli Safari', tag: 'Amboseli', subtitle: 'Two full game-drive days in the shadow of Kilimanjaro — Africa\'s most photogenic wildlife setting.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=1800&h=900&fit=crop&auto=format', alt: 'Elephant family in Amboseli', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Amboseli', to: '/kenya-safaris/amboseli' }, { label: '3-Day Safari' }], duration: '3 Days / 2 Nights', price: 'From USD 695 pp', groupSize: '2–6 guests', difficulty: 'Easy', highlights: ['Two game-drive days', 'Big Five potential', 'Kilimanjaro views', 'Swamp walks (guided)', 'Maasai community visit'], overview: 'Three days at Amboseli gives you time to properly explore the park\'s five distinct habitat zones — from open plains to yellow-fever acacia woodland — and spend real time with the elephant families that Cynthia Moss studied for over 40 years.', itinerary: [{ day: 'Day 1', title: 'Arrival', desc: 'Nairobi to Amboseli. Afternoon drive and sundowners.' }, { day: 'Day 2', title: 'Full Park Day', desc: 'Full day exploring all zones. Optional guided swamp walk.' }, { day: 'Day 3', title: 'Return', desc: 'Dawn drive with Kilimanjaro, then return to Nairobi.' }], includes: ['Transport', 'Park fees', 'All meals', 'Accommodation', 'Guide'], excludes: ['Flights', 'Insurance', 'Tips', 'Maasai village entry'], relatedLinks: [{ label: 'Amboseli Park Guide', to: '/kenya-safaris/amboseli/national-park' }, { label: 'Amboseli Lodges', to: '/kenya-safaris/accommodation/amboseli' }] },
  'amboseli-park': { title: 'Amboseli National Park', tag: 'Park Guide', subtitle: 'Kenya\'s most photographed landscape — free-roaming elephant herds, five distinct ecosystems, and Kilimanjaro rising 5,895m on the southern horizon.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=1800&h=900&fit=crop&auto=format', alt: 'Amboseli National Park panorama', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Amboseli', to: '/kenya-safaris/amboseli' }, { label: 'National Park' }], duration: '—', price: 'Park fee: USD 60 pp/day', groupSize: '—', difficulty: '—', highlights: ['392 km²', 'World\'s best elephant viewing', 'Kilimanjaro backdrop', 'Big Five present', '400+ bird species', '3.5 hrs from Nairobi'], overview: 'Amboseli National Park lies at the foot of Mount Kilimanjaro on the Tanzanian border. Its name derives from the Maasai word "empusel", meaning salty, dusty place — a reference to the ancient lakebed that forms the park\'s centre. The park is most famous for its large elephant herds, studied by the Amboseli Elephant Research Project since 1972.', itinerary: [{ day: 'Dry Season', title: 'Oct–Feb', desc: 'Clearest Kilimanjaro views. Excellent game viewing around the swamps as wildlife concentrates.' }, { day: 'Wet Season', title: 'Mar–May', desc: 'Lush and green. Fewer visitors. Some tracks impassable. Bird diversity peaks.' }], includes: ['Park entrance information only'], excludes: ['Safari packages listed separately above'], relatedLinks: [{ label: 'Book Amboseli Safari', to: '/kenya-safaris/amboseli/3-day' }, { label: 'Amboseli Lodges', to: '/kenya-safaris/accommodation/amboseli' }] },
  'tsavo-2day': { title: '2-Day Tsavo Safari', tag: 'Tsavo', subtitle: 'The largest protected wilderness in Kenya — red elephants, dramatic lava flows, and East Africa\'s greatest baobab trees.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format', alt: 'Tsavo landscape with red elephants', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Tsavo', to: '/kenya-safaris/tsavo' }, { label: '2-Day Safari' }], duration: '2 Days / 1 Night', price: 'From USD 375 pp', groupSize: '2–6 guests', difficulty: 'Easy', highlights: ['Red elephants', 'Tsavo East & West option', 'Baobab forests', 'Lugard Falls', 'Mzima Springs'], overview: 'Tsavo is Kenya\'s largest and most underrated national park — a vast wilderness that sees a fraction of the Mara\'s visitor numbers but offers equally dramatic wildlife encounters. The red elephants, stained by Tsavo\'s iron-rich soil, are legendary.', itinerary: [{ day: 'Day 1', title: 'Nairobi → Tsavo', desc: 'Drive south (4 hours). Afternoon drive — look for the famous red elephant herds.' }, { day: 'Day 2', title: 'Full Morning Drive → Return', desc: 'Dawn game drive, Lugard Falls visit, then return to Nairobi.' }], includes: ['Transport', 'Park fees', 'All meals', 'Accommodation', 'Guide'], excludes: ['Flights', 'Insurance', 'Tips'], relatedLinks: [{ label: '3-Day Tsavo', to: '/kenya-safaris/tsavo/3-day' }, { label: 'Tsavo East', to: '/kenya-safaris/tsavo/east' }, { label: 'Tsavo West', to: '/kenya-safaris/tsavo/west' }] },
  'tsavo-3day': { title: '3-Day Tsavo Safari', tag: 'Tsavo', subtitle: 'Two full days in Kenya\'s largest wilderness — split between Tsavo East and Tsavo West for maximum variety.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format', alt: 'Elephant herd in Tsavo', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Tsavo', to: '/kenya-safaris/tsavo' }, { label: '3-Day Safari' }], duration: '3 Days / 2 Nights', price: 'From USD 575 pp', groupSize: '2–6 guests', difficulty: 'Easy', highlights: ['Tsavo East & West', 'Red elephants', 'Mzima Springs', 'Chaimu Crater', 'Aruba Dam'], overview: 'Splitting three days between Tsavo East and Tsavo West gives you the best of both — East\'s open plains and massive elephant herds, and West\'s dramatic volcanic scenery, hippo pools, and the crystal-clear Mzima Springs.', itinerary: [{ day: 'Day 1', title: 'Tsavo East', desc: 'Drive from Nairobi to Tsavo East. Afternoon game drive around Aruba Dam.' }, { day: 'Day 2', title: 'Tsavo West Transfer', desc: 'Morning drive in East, then cross to West. Mzima Springs visit and afternoon drive.' }, { day: 'Day 3', title: 'Chaimu Crater → Nairobi', desc: 'Morning at Chaimu Crater and Roaring Rocks viewpoint. Return to Nairobi.' }], includes: ['Transport', 'Park fees', 'All meals', 'Accommodation', 'Guide'], excludes: ['Flights', 'Insurance', 'Tips'], relatedLinks: [{ label: 'Tsavo East Park', to: '/kenya-safaris/tsavo/east' }, { label: 'Tsavo West Park', to: '/kenya-safaris/tsavo/west' }] },
  'tsavo-east': { title: 'Tsavo East National Park', tag: 'Park Guide', subtitle: 'Kenya\'s largest park — a vast, semi-arid wilderness of open plains, baobab forests, and the Galana River teeming with hippos and crocodiles.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format', alt: 'Tsavo East landscape with red dust', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Tsavo', to: '/kenya-safaris/tsavo' }, { label: 'Tsavo East' }], duration: '—', price: 'Park fee: USD 52 pp/day', groupSize: '—', difficulty: '—', highlights: ['13,747 km²', 'Largest national park in Kenya', 'Red elephant herds', 'Lugard Falls', 'Aruba Dam', 'Galana River'], overview: 'Tsavo East National Park is the larger of the two Tsavo parks. Its flat, open landscape of red-tinged plains and scrubland makes wildlife easy to spot. The Galana River is a lifeline for hippos, crocodiles, and elephant — particularly during the dry season when the river becomes the only water source for miles.', itinerary: [{ day: 'Highlights', title: 'Must-See', desc: 'Lugard Falls, Aruba Dam, Galana River drive, and the red elephant herds near Voi Safari Lodge.' }], includes: ['Park information only'], excludes: ['Safari packages listed separately'], relatedLinks: [{ label: 'Book 2-Day Tsavo', to: '/kenya-safaris/tsavo/2-day' }, { label: 'Book 3-Day Tsavo', to: '/kenya-safaris/tsavo/3-day' }] },
  'tsavo-west': { title: 'Tsavo West National Park', tag: 'Park Guide', subtitle: 'Dramatic volcanic scenery, Mzima Springs, and extraordinary diversity in a greener, more varied landscape than its eastern counterpart.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format', alt: 'Mzima Springs hippos in Tsavo West', breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Tsavo', to: '/kenya-safaris/tsavo' }, { label: 'Tsavo West' }], duration: '—', price: 'Park fee: USD 52 pp/day', groupSize: '—', difficulty: '—', highlights: ['9,065 km²', 'Mzima Springs', 'Chaimu Crater', 'Roaring Rocks', 'Shetani Lava Flows', 'Black rhino sanctuary'], overview: 'Tsavo West is the more scenically dramatic of the two parks. Volcanic craters, lava fields, and green hills contrast dramatically with the red-dust plains of East. The underwater observatory at Mzima Springs lets you watch hippos and fish from below the waterline.', itinerary: [{ day: 'Highlights', title: 'Must-See', desc: 'Mzima Springs (underwater observatory), Chaimu Crater walk, Roaring Rocks viewpoint, Shetani Lava Flow.' }], includes: ['Park information only'], excludes: ['Safari packages listed separately'], relatedLinks: [{ label: 'Book 2-Day Tsavo', to: '/kenya-safaris/tsavo/2-day' }, { label: 'Book 3-Day Tsavo', to: '/kenya-safaris/tsavo/3-day' }] },
}

// Generic fallback for packages not yet fully defined
function genericPackage(pkg: string): PackageData {
  const titles: Record<string, string> = {
    'group-mara-2day': '2-Day Masai Mara Group Safari',
    'group-mara-3day': '3-Day Masai Mara Group Safari',
    'group-mara-4day': '4-Day Masai Mara Group Safari',
    'group-mara-5day': '5-Day Masai Mara Group Safari',
    'group-mara-7day': '7-Day Masai Mara Group Safari',
    'all-kenya': 'All Kenya Safari Packages',
    'multi-destination': 'Multi-Destination Kenya Safaris',
    'type-family': 'Family Kenya Safaris',
    'type-flyin': 'Fly-In Kenya Safaris',
    'type-honeymoon': 'Kenya Honeymoon Safaris',
    'type-luxury': 'Luxury Kenya Safaris',
    'type-photography': 'Photography Safaris Kenya',
    'type-beach': 'Kenya Safari & Beach Packages',
    'type-private': 'Private Safari Tours Kenya',
    'activity-gamedrives': 'Game Drives in Kenya',
    'activity-mara-gamedrives': 'Masai Mara Game Drives',
    'activity-walking': 'Walking Safaris Kenya',
    'activity-balloon': 'Hot-Air Balloon Safaris',
    'activity-mara-balloon': 'Masai Mara Balloon Safari',
    'activity-birding': 'Birdwatching in Kenya',
    'activity-trekking': 'Mountain Trekking Kenya',
    'accom-mara': 'Masai Mara Accommodation',
    'accom-mara-luxury': 'Luxury Masai Mara Lodges & Camps',
    'accom-amboseli': 'Amboseli Lodges',
    'accom-all': 'All Kenya Lodges',
    'guide-cost': 'Kenya Safari Cost Guide',
    'guide-mara-cost': 'Masai Mara Safari Cost',
    'guide-flights': 'Nairobi to Masai Mara Flights',
    'guide-accom': 'Kenya Safari Accommodation Guide',
    'guide-naivasha': 'Lake Naivasha & Hell\'s Gate Guide',
  }
  const title = titles[pkg] || pkg
  return {
    title,
    tag: 'Kenya',
    subtitle: `Comprehensive guide and booking information for ${title}.`,
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format',
    alt: title,
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: title }],
    duration: 'Varies', price: 'On request', groupSize: 'Flexible', difficulty: 'Easy',
    highlights: ['Tailor-made itinerary', 'Professional guides', 'All inclusive options', 'Year-round departures'],
    overview: `Get in touch with our team to discuss your ${title} requirements. We\'ll design a bespoke itinerary around your dates, budget, and interests.`,
    itinerary: [{ day: 'Step 1', title: 'Contact Us', desc: 'Fill in our trip planner or call us directly on +254 700 000 000.' }, { day: 'Step 2', title: 'Itinerary Design', desc: 'Our team designs a personalised quote within 24 hours.' }, { day: 'Step 3', title: 'Book & Travel', desc: 'Confirm your booking with a deposit and we handle everything else.' }],
    includes: ['All items tailored to your package'],
    excludes: ['International flights', 'Travel insurance', 'Personal spending'],
    relatedLinks: [{ label: 'Plan My Trip', to: '/plan-my-trip' }, { label: 'Contact Us', to: '/contact' }],
  }
}

interface Props { pkg: string }

export default function SafariPackagePage({ pkg }: Props) {
  const [data, setData] = useState<PackageData>(
    () => PACKAGES[pkg] ?? genericPackage(pkg)
  )

  useEffect(() => {
    const fallback = PACKAGES[pkg] ?? genericPackage(pkg)

    setData(fallback)

    const controller = new AbortController()

    async function loadPackage() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/catalog/packages/${pkg}/`,
          { signal: controller.signal }
        )

        if (response.status === 404) {
          return
        }

        if (!response.ok) {
          throw new Error(
            `API request failed with status ${response.status}`
          )
        }

        const apiPackage: ApiSafariPackage = await response.json()

        setData(mapApiPackage(apiPackage, fallback))
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Could not load safari package:', error)
        }
      }
    }

    loadPackage()

    return () => {
      controller.abort()
    }
  }, [pkg])
  useEffect(() => {
    document.title = data.seoTitle || data.title
  }, [data.seoTitle, data.title])
  useEffect(() => {
    const description =
      data.metaDescription || data.subtitle

  let metaDescription =
    document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    )

  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }

  metaDescription.content = description
}, [data.metaDescription, data.subtitle])
  return (
    <div>
      <PageHero title={data.title} subtitle={data.subtitle} img={data.img} alt={data.alt} breadcrumbs={data.breadcrumbs} tag={data.tag} height="sm" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-16 grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Overview</h2>
            <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{data.overview}</p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-[14px] font-[Outfit] text-[#3d2b1a]">
                  <span className="text-[#c8901a] mt-0.5 shrink-0">✦</span>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* Itinerary */}
          {data.itinerary.length > 0 && (
            <section>
              <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Itinerary</h2>
              <div className="space-y-5">
                {data.itinerary.map((item, i) => (
                  <div key={i} className="flex gap-5 border-l-2 border-[#d4c9b4] pl-5">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-0.5">{item.day}</p>
                      <p className="text-base font-[Fraunces] font-[400] text-[#2a1a0e] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{item.title}</p>
                      <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Includes / Excludes */}
          <section className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-[Fraunces] font-[400] text-[#2a1a0e] mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Included</h3>
              <ul className="space-y-1.5">
                {data.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] font-[Outfit] text-[#3d2b1a]">
                    <span className="text-green-700 mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-[Fraunces] font-[400] text-[#2a1a0e] mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Not Included</h3>
              <ul className="space-y-1.5">
                {data.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] font-[Outfit] text-[#8b7355]">
                    <span className="mt-0.5 shrink-0">–</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Booking card */}
          <div className="bg-white border border-[#e8e0d0] rounded-xl p-6 sticky top-24">
            {data.price !== '—' && (
              <div className="mb-5">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit]">Starting From</p>
                <p className="text-2xl font-[Fraunces] font-[400] text-[#a0522d] mt-0.5" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{data.price}</p>
              </div>
            )}
            <div className="space-y-3 mb-6">
              {[
                { label: 'Duration', value: data.duration },
                { label: 'Group Size', value: data.groupSize },
                { label: 'Difficulty', value: data.difficulty },
              ].filter(i => i.value && i.value !== '—').map((item) => (
                <div key={item.label} className="flex justify-between text-[13px] font-[Outfit] border-b border-[#f0e8d8] pb-2">
                  <span className="text-[#8b7355]">{item.label}</span>
                  <span className="text-[#2a1a0e] font-[500]">{item.value}</span>
                </div>
              ))}
            </div>
            <Link to="/plan-my-trip" className="block w-full text-center bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-6 py-3 rounded transition-colors text-sm mb-3">
              Book This Safari
            </Link>
            <Link to="/contact" className="block w-full text-center border border-[#3d2b1a] text-[#3d2b1a] hover:bg-[#3d2b1a] hover:text-[#f5f0e8] font-[Outfit] font-[500] px-6 py-3 rounded transition-all text-sm">
              Ask a Question
            </Link>
            <p className="text-[11px] text-[#8b7355] font-[Outfit] text-center mt-3">No payment required to enquire</p>
          </div>

          {/* Related links */}
          {data.relatedLinks.length > 0 && (
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Related</p>
              <ul className="space-y-2">
                {data.relatedLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[13px] font-[Outfit] text-[#3d2b1a] hover:text-[#a0522d] transition-colors flex items-center gap-1">
                      <span className="text-[#c8901a]">→</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
