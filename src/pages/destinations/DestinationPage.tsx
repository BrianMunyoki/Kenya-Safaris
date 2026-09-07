import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

interface DestData {
  name: string
  tagline: string
  img: string
  tag: string
  intro: string
  why: string[]
  keyParks: { name: string; desc: string }[]
  bestTime: string
  capital: string
  currency: string
  language: string
  highlights: string[]
}

const DESTS: Record<string, DestData> = {
  tanzania: {
    name: 'Tanzania',
    tagline: 'Serengeti. Ngorongoro. Kilimanjaro. Zanzibar.',
    img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=1800&h=900&fit=crop&auto=format',
    tag: 'East Africa',
    intro: 'Tanzania is home to Africa\'s greatest wildlife spectacle — the Serengeti Migration — along with the world\'s largest intact volcanic caldera at Ngorongoro, and the continent\'s highest peak at Kilimanjaro. Add the spice island of Zanzibar for a perfect safari and beach combination.',
    why: ['Home to the largest land animal migration on Earth', 'Nine national parks and game reserves', 'Africa\'s highest peak — Kilimanjaro at 5,895m', 'Zanzibar Island for a post-safari beach extension', 'Ngorongoro Crater — the world\'s densest concentration of wildlife'],
    keyParks: [{ name: 'Serengeti National Park', desc: '14,763 km² of open savanna — the stage for the annual wildebeest migration.' }, { name: 'Ngorongoro Conservation Area', desc: 'A collapsed volcanic caldera supporting the world\'s densest Big Five population.' }, { name: 'Tarangire National Park', desc: 'Towering baobab trees and the largest elephant herds in northern Tanzania.' }, { name: 'Lake Manyara', desc: 'Flamingos, tree-climbing lions, and lush forest at the base of the Rift Valley escarpment.' }],
    bestTime: 'June–October (dry season; best for game viewing). January–February (calving season in southern Serengeti).',
    capital: 'Dodoma (administrative) / Dar es Salaam (commercial)',
    currency: 'Tanzanian Shilling (TZS) / USD widely accepted',
    language: 'Swahili & English',
    highlights: ['Serengeti Migration', 'Ngorongoro Crater', 'Kilimanjaro Trek', 'Zanzibar Beach', 'Baobab Forests'],
  },
  botswana: {
    name: 'Botswana',
    tagline: 'The Okavango Delta. Chobe. The Central Kalahari.',
    img: 'https://images.unsplash.com/photo-1589825743636-0a12a3c9bfbe?w=1800&h=900&fit=crop&auto=format',
    tag: 'Southern Africa',
    intro: 'Botswana is Africa\'s model for responsible luxury tourism — limited visitor numbers, high conservation standards, and extraordinary wildlife density. The Okavango Delta, the world\'s largest inland delta, floods seasonally to create a labyrinth of channels, islands, and lagoons teeming with wildlife.',
    why: ['Low visitor numbers by government policy', 'Highest density of elephants in Africa', 'Legendary exclusivity — many camps take under 12 guests', 'The Okavango Delta — a UNESCO World Heritage Site', 'Exceptional predator sightings in Linyanti and the Moremi'],
    keyParks: [{ name: 'Okavango Delta', desc: 'The world\'s largest inland delta — explore by mokoro (dugout canoe) and game drive.' }, { name: 'Chobe National Park', desc: 'Africa\'s highest concentration of elephants — over 120,000.' }, { name: 'Moremi Game Reserve', desc: 'The private reserve within the Okavango — some of the best predator viewing on the continent.' }, { name: 'Central Kalahari', desc: 'The second-largest game reserve in the world — remote, dramatic, and deeply wild.' }],
    bestTime: 'May–October (dry season and Delta flood; best game viewing). July–August for peak wildlife concentrations.',
    capital: 'Gaborone',
    currency: 'Botswana Pula (BWP)',
    language: 'Setswana & English',
    highlights: ['Okavango Mokoro', 'Chobe Elephants', 'Moremi Predators', 'Luxury Camps', 'Kalahari Desert'],
  },
  rwanda: {
    name: 'Rwanda',
    tagline: 'Mountain gorillas. Rainforest. Golden monkeys.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format',
    tag: 'East Africa',
    intro: 'Rwanda offers one of Africa\'s most extraordinary wildlife encounters — gorilla trekking in Volcanoes National Park. Fewer than 1,000 mountain gorillas remain on Earth, and permits to visit are strictly limited. The experience of spending an hour with a gorilla family in misty Afromontane forest is unlike anything else in travel.',
    why: ['Mountain gorilla trekking — one of Earth\'s rarest wildlife experiences', 'Nyungwe Forest for chimpanzee tracking', 'Akagera National Park for classic Big Five savanna safari', 'Rwanda is Africa\'s safest and cleanest destination', 'Easily combined with Uganda or Kenya'],
    keyParks: [{ name: 'Volcanoes National Park', desc: 'Home to five of the eight Virunga volcanoes and several gorilla families. Permit limited.' }, { name: 'Nyungwe National Park', desc: '1,000 km² of montane rainforest with 13 primate species including chimpanzees.' }, { name: 'Akagera National Park', desc: 'Classic Big Five savanna safari on Rwanda\'s eastern border with Tanzania.' }],
    bestTime: 'June–September and December–February (dry seasons; best trekking conditions).',
    capital: 'Kigali',
    currency: 'Rwandan Franc (RWF)',
    language: 'Kinyarwanda, French & English',
    highlights: ['Gorilla Trekking', 'Chimp Tracking', 'Volcanoes NP', 'Akagera Big Five', 'Kigali City'],
  },
  'south-africa': {
    name: 'South Africa',
    tagline: 'Kruger. Cape Town. The Winelands. The Garden Route.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format',
    tag: 'Southern Africa',
    intro: 'South Africa is the continent\'s most accessible safari destination — malaria-free reserves, excellent infrastructure, and world-class food and wine. Kruger National Park and its private reserves offer some of Africa\'s finest Big Five game viewing, while Cape Town and the Winelands provide a compelling urban counterpart.',
    why: ['Big Five in malaria-free reserves (Madikwe, Waterberg)', 'World-class private game reserves adjacent to Kruger', 'Cape Town — consistently rated among the world\'s greatest cities', 'Exceptional food and wine culture', 'Most accessible African safari destination for international visitors'],
    keyParks: [{ name: 'Kruger National Park', desc: '19,485 km² of Big Five territory — Africa\'s most visited national park.' }, { name: 'Sabi Sands Game Reserve', desc: 'Adjacent to Kruger — legendary for leopard sightings and ultra-luxury camps.' }, { name: 'Boulders Beach, Cape Peninsula', desc: 'African penguin colony on the Cape Peninsula — a short drive from Cape Town.' }],
    bestTime: 'May–October (dry winter season; best game viewing in the Bushveld). Year-round for Cape Town.',
    capital: 'Pretoria (administrative) / Cape Town (legislative)',
    currency: 'South African Rand (ZAR)',
    language: '11 official languages; English widely spoken',
    highlights: ['Kruger Big Five', 'Sabi Sands Leopard', 'Cape Town', 'Winelands', 'Garden Route'],
  },
  mozambique: {
    name: 'Mozambique',
    tagline: 'Bazaruto Archipelago. Gorongosa. Indian Ocean.',
    img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=1800&h=900&fit=crop&auto=format',
    tag: 'Southern Africa',
    intro: 'Mozambique is East Africa\'s best-kept secret — 2,500 km of Indian Ocean coastline, the Bazaruto Archipelago\'s impossibly blue waters, and Gorongosa National Park\'s extraordinary wildlife recovery story. Combine a Kenya or South Africa safari with Mozambique for the ultimate African escape.',
    why: ['Bazaruto Archipelago — world-class diving and snorkelling', 'Whale shark encounters year-round at Tofo Beach', 'Gorongosa National Park — one of Africa\'s great conservation success stories', 'Pristine beaches with almost no crowds', 'Excellent combination with Kenya or South Africa'],
    keyParks: [{ name: 'Bazaruto Archipelago', desc: 'A national park of islands, coral reefs, and dugong — one of Africa\'s great marine sanctuaries.' }, { name: 'Gorongosa National Park', desc: 'Dramatically recovered from civil war — now home to lion, elephant, buffalo, and 400+ birds.' }, { name: 'Quirimbas Archipelago', desc: '32 islands in the far north — remote, undeveloped, and extraordinarily beautiful.' }],
    bestTime: 'April–November (dry season; best diving and beach conditions). Whale sharks: October–March at Tofo.',
    capital: 'Maputo',
    currency: 'Mozambican Metical (MZN)',
    language: 'Portuguese; English in tourist areas',
    highlights: ['Bazaruto Diving', 'Whale Sharks', 'Gorongosa Wildlife', 'Pristine Beaches', 'Dhow Sailing'],
  },
}

interface Props { dest: string }

export default function DestinationPage({ dest }: Props) {
  const d = DESTS[dest]
  if (!d) return <div className="p-20 text-center text-[#8b7355]">Destination not found.</div>

  return (
    <div>
      <PageHero
        title={d.name}
        subtitle={d.tagline}
        img={d.img}
        alt={`${d.name} safari landscape`}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Destinations', to: '/destinations' }, { label: d.name }]}
        tag={d.tag}
        height="md"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-16 grid lg:grid-cols-3 gap-12">
        {/* Main */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Overview</h2>
            <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{d.intro}</p>
          </section>

          <section>
            <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Why {d.name}</h2>
            <ul className="space-y-2">
              {d.why.map((w) => (
                <li key={w} className="flex items-start gap-2 text-[14px] font-[Outfit] text-[#3d2b1a]">
                  <span className="text-[#c8901a] mt-0.5 shrink-0">✦</span>{w}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Key Parks & Reserves</h2>
            <div className="space-y-4">
              {d.keyParks.map((park) => (
                <div key={park.name} className="border-l-2 border-[#c8901a] pl-5">
                  <h3 className="text-[15px] font-[Outfit] font-[600] text-[#2a1a0e] mb-1">{park.name}</h3>
                  <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{park.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Best Time to Visit</h2>
            <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{d.bestTime}</p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white border border-[#e8e0d0] rounded-xl p-6 sticky top-24">
            <h3 className="text-lg font-[Fraunces] font-[400] text-[#2a1a0e] mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Quick Facts</h3>
            <div className="space-y-3 mb-6">
              {[{ label: 'Capital', value: d.capital }, { label: 'Currency', value: d.currency }, { label: 'Language', value: d.language }].map((item) => (
                <div key={item.label} className="border-b border-[#f0e8d8] pb-3">
                  <p className="text-[10px] uppercase tracking-wide text-[#8b7355] font-[Outfit] mb-0.5">{item.label}</p>
                  <p className="text-[13px] font-[Outfit] text-[#2a1a0e]">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-wide text-[#8b7355] font-[Outfit] font-[600] mb-3">Highlights</p>
              <div className="flex flex-wrap gap-1.5">
                {d.highlights.map((h) => (
                  <span key={h} className="text-[11px] font-[Outfit] text-[#8b7355] bg-[#f5f0e8] px-2 py-0.5 rounded border border-[#d4c9b4]">{h}</span>
                ))}
              </div>
            </div>
            <Link to="/plan-my-trip" className="block w-full text-center bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-6 py-3 rounded transition-colors text-sm mb-3">
              Plan a {d.name} Safari
            </Link>
            <Link to="/contact" className="block w-full text-center border border-[#3d2b1a] text-[#3d2b1a] font-[Outfit] font-[500] px-6 py-3 rounded text-sm hover:bg-[#3d2b1a] hover:text-[#f5f0e8] transition-all">
              Ask a Question
            </Link>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Other Destinations</p>
            <ul className="space-y-2">
              {Object.entries(DESTS).filter(([k]) => k !== dest).map(([k, dest2]) => (
                <li key={k}><Link to={`/destinations/${k}`} className="text-[13px] font-[Outfit] text-[#3d2b1a] hover:text-[#a0522d] transition-colors">→ {dest2.name}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
