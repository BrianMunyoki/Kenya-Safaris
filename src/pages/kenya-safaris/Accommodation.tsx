import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

const LODGES = [
  { name: 'Masai Mara Accommodation', desc: 'From budget tented camps to ultra-luxury lodges — the Mara has over 60 properties inside and adjacent to the reserve.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/accommodation/masai-mara', tag: 'Masai Mara' },
  { name: 'Luxury Masai Mara Lodges', desc: 'The finest tented camps in Africa — private plunge pools, candlelit dinners, and guides who know every lion by name.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/accommodation/masai-mara/luxury', tag: 'Luxury · Mara' },
  { name: 'Amboseli Lodges', desc: 'Wake up to Kilimanjaro framed in your window — Amboseli\'s lodges are positioned for the most dramatic mountain views in Africa.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/accommodation/amboseli', tag: 'Amboseli' },
  { name: 'All Kenya Lodges', desc: 'Browse our full directory of safari lodges and camps across all of Kenya\'s major national parks and conservancies.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/accommodation/all-lodges', tag: 'All Kenya' },
]

const CATEGORIES = [
  { label: 'Luxury Tented Camps', desc: 'En-suite bathrooms, king beds, private decks — all under canvas in the heart of the reserve.' },
  { label: 'Mid-Range Lodges', desc: 'Comfortable en-suite rooms, restaurant, pool, and reliable game drive vehicles.' },
  { label: 'Budget Camps', desc: 'Simple, clean tented accommodation with shared facilities. Ideal for longer trips.' },
  { label: 'Private Conservancies', desc: 'Exclusive camps on private land adjacent to the national reserve — fewer vehicles, more freedom.' },
]

export default function Accommodation() {
  return (
    <div>
      <PageHero
        title="Kenya Safari Accommodation"
        subtitle="From canvas under the stars to five-star bush lodges — Kenya's safari accommodation spans every budget and style."
        img="https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=1800&h=900&fit=crop&auto=format"
        alt="Luxury tented camp interior with bush view"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Accommodation' }]}
        tag="Lodges & Camps"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {LODGES.map((l) => (
            <Link key={l.name} to={l.to} className="group bg-white border border-[#e8e0d0] rounded-xl overflow-hidden hover:border-[#a0522d]/40 hover:shadow-lg transition-all duration-300">
              <div className="h-44 bg-[#d4c9b4] overflow-hidden">
                <img src={l.img} alt={l.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600]">{l.tag}</span>
                <h3 className="text-[15px] font-[Fraunces] font-[400] text-[#2a1a0e] mt-1 mb-2 group-hover:text-[#a0522d] transition-colors" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{l.name}</h3>
                <p className="text-[12px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{l.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-[#ede7d9] rounded-2xl p-8 lg:p-10">
          <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Accommodation Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((c) => (
              <div key={c.label}>
                <div className="w-6 h-px bg-[#c8901a] mb-3" />
                <h3 className="text-[14px] font-[Outfit] font-[600] text-[#2a1a0e] mb-2">{c.label}</h3>
                <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
