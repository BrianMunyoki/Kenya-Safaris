import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

const DESTINATIONS = [
  { name: 'Tanzania', tag: 'East Africa', desc: 'Serengeti National Park, Ngorongoro Crater, Mount Kilimanjaro, and the spice island of Zanzibar — Africa\'s most varied single-country safari.', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=600&h=400&fit=crop&auto=format', to: '/destinations/tanzania', highlights: ['Serengeti', 'Ngorongoro', 'Kilimanjaro', 'Zanzibar'] },
  { name: 'Botswana', tag: 'Southern Africa', desc: 'The Okavango Delta, Chobe National Park, and the Central Kalahari — vast, exclusive, and committed to low-impact conservation.', img: 'https://images.unsplash.com/photo-1589825743636-0a12a3c9bfbe?w=600&h=400&fit=crop&auto=format', to: '/destinations/botswana', highlights: ['Okavango Delta', 'Chobe', 'Kalahari', 'Luxury'] },
  { name: 'Rwanda', tag: 'East Africa', desc: 'Mountain gorilla trekking in Volcanoes National Park — one of the most profound wildlife encounters on the planet.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', to: '/destinations/rwanda', highlights: ['Gorilla Trekking', 'Volcanoes NP', 'Nyungwe Forest', 'Kigali'] },
  { name: 'South Africa', tag: 'Southern Africa', desc: 'Kruger National Park, the Cape Peninsula, the Winelands, and the Garden Route — Africa\'s most complete travel destination.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', to: '/destinations/south-africa', highlights: ['Kruger', 'Cape Town', 'Winelands', 'Garden Route'] },
  { name: 'Mozambique', tag: 'Southern Africa', desc: 'Turquoise Indian Ocean waters, dhow sailing, whale sharks, and some of the most pristine coral reefs on Earth.', img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=600&h=400&fit=crop&auto=format', to: '/destinations/mozambique', highlights: ['Bazaruto Archipelago', 'Gorongosa', 'Pemba', 'Dive & Snorkel'] },
]

export default function DestinationsHub() {
  return (
    <div>
      <PageHero
        title="Other African Destinations"
        subtitle="Kenya is our home — but Africa doesn't end at the border. We operate exceptional safaris across East and Southern Africa."
        img="https://images.unsplash.com/photo-1504173010664-32509107de42?w=1800&h=900&fit=crop&auto=format"
        alt="African savanna panorama"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Destinations' }]}
        tag="East & Southern Africa"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 space-y-10">
        {DESTINATIONS.map((d, i) => (
          <Link key={d.name} to={d.to} className={`group grid lg:grid-cols-5 gap-0 bg-white border border-[#e8e0d0] rounded-2xl overflow-hidden hover:border-[#a0522d]/40 hover:shadow-xl hover:shadow-[#a0522d]/5 transition-all duration-300 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`lg:col-span-2 h-60 lg:h-auto bg-[#d4c9b4] overflow-hidden ${i % 2 === 1 ? 'lg:col-start-4' : ''}`}>
              <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className={`lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">{d.tag}</span>
              <h2 className="text-2xl lg:text-3xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-3 group-hover:text-[#a0522d] transition-colors" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{d.name}</h2>
              <p className="text-[14px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-5">{d.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {d.highlights.map((h) => (
                  <span key={h} className="text-[11px] font-[Outfit] text-[#8b7355] bg-[#f5f0e8] px-2.5 py-1 rounded border border-[#d4c9b4]">{h}</span>
                ))}
              </div>
              <span className="text-[13px] font-[Outfit] font-[500] text-[#a0522d] group-hover:translate-x-1 transition-transform inline-block">Explore {d.name} →</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
