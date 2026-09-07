import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

const GUIDES = [
  { title: 'Kenya Safari Cost', desc: 'A complete breakdown of what a Kenya safari costs — from budget camping to ultra-luxury, including park fees, guides, transport, and flights.', to: '/kenya-safaris/guides/kenya-safari-cost', tag: 'Budget Guide', readTime: '12 min read' },
  { title: 'Masai Mara Safari Cost', desc: 'Specific pricing data for Masai Mara safaris — accommodation tiers, seasonal variations, and how to get the best value.', to: '/kenya-safaris/guides/masai-mara-cost', tag: 'Budget Guide', readTime: '9 min read' },
  { title: 'Nairobi to Masai Mara Flights', desc: 'Everything about flying to the Mara — Wilson Airport, scheduled vs charter, airstrip locations, and what to expect.', to: '/kenya-safaris/guides/nairobi-mara-flights', tag: 'Getting There', readTime: '7 min read' },
  { title: 'Kenya Safari Accommodation Guide', desc: 'How to choose between lodge types — tented camps vs lodges vs private conservancies — and what each category offers.', to: '/kenya-safaris/guides/accommodation', tag: 'Accommodation', readTime: '10 min read' },
  { title: 'Lake Naivasha & Hell\'s Gate Guide', desc: 'Day trip or overnight guide to two of the Rift Valley\'s most rewarding stops — hippos, cycling through a gorge, and geysers.', to: '/kenya-safaris/guides/naivasha-hellsgate', tag: 'Destination', readTime: '8 min read' },
]

export default function GuidesIndex() {
  return (
    <div>
      <PageHero
        title="Kenya Safari Guides"
        subtitle="Practical, expert-written guides to planning your Kenya safari — costs, logistics, timing, and destination information from people who live here."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Safari guide vehicle in Kenya"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Guides & Blog' }]}
        tag="Expert Guides"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES.map((g) => (
            <Link key={g.title} to={g.to} className="group bg-white border border-[#e8e0d0] rounded-xl p-7 hover:border-[#a0522d]/50 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] bg-[#f5f0e8] px-3 py-1 rounded">{g.tag}</span>
                <span className="text-[11px] text-[#8b7355] font-[Outfit]">{g.readTime}</span>
              </div>
              <h3 className="text-lg font-[Fraunces] font-[400] text-[#2a1a0e] mb-3 group-hover:text-[#a0522d] transition-colors flex-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{g.title}</h3>
              <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-4">{g.desc}</p>
              <span className="text-[12px] font-[Outfit] font-[500] text-[#a0522d] group-hover:translate-x-1 transition-transform inline-block">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
