import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

const TYPES = [
  { title: 'Family Kenya Safaris', desc: 'Child-friendly camps, dedicated family vehicles, and itineraries paced for children — without sacrificing the wildlife experience.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=280&fit=crop&auto=format', to: '/kenya-safaris/types/family', tag: 'Families' },
  { title: 'Fly-In Kenya Safaris', desc: 'Charter flights between parks save days of driving and maximise your time in the field. Available for all major reserves.', img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=400&h=280&fit=crop&auto=format', to: '/kenya-safaris/types/fly-in', tag: 'Fly-In' },
  { title: 'Honeymoon Safaris', desc: 'Private vehicles, en-suite luxury tents, in-room dining, and bush dinners under the stars — romance amplified by the African wilderness.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400&h=280&fit=crop&auto=format', to: '/kenya-safaris/types/honeymoon', tag: 'Honeymoon' },
  { title: 'Luxury Kenya Safaris', desc: 'Kenya invented the luxury safari camp. The finest properties offer thread-count linen, fine dining, and private plunge pools with uninterrupted bush views.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400&h=280&fit=crop&auto=format', to: '/kenya-safaris/types/luxury', tag: 'Luxury' },
  { title: 'Photography Safaris', desc: 'Dedicated photo vehicles with bean bags and roof hatches, expert photography guides, and strategic positioning for the best light.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=280&fit=crop&auto=format', to: '/kenya-safaris/types/photography', tag: 'Photography' },
  { title: 'Safari & Beach', desc: 'Combine a Masai Mara safari with time on Kenya\'s Indian Ocean coast — Diani Beach, Watamu, or Lamu island.', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=400&h=280&fit=crop&auto=format', to: '/kenya-safaris/types/beach', tag: 'Safari & Beach' },
  { title: 'Private Safari Tours', desc: 'The vehicle, guide, and itinerary are entirely yours. Depart when you want, stop for as long as you like, go where the wildlife is.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=280&fit=crop&auto=format', to: '/kenya-safaris/types/private', tag: 'Private' },
]

export default function SafariTypes() {
  return (
    <div>
      <PageHero
        title="Safari Types"
        subtitle="Whether you're planning a family adventure, a honeymoon, or a photography expedition — we design every itinerary around your specific needs."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Variety of safari experiences in Kenya"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Safari Types' }]}
        tag="Find Your Safari Style"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TYPES.map((t) => (
            <Link key={t.title} to={t.to} className="group bg-white border border-[#e8e0d0] rounded-xl overflow-hidden hover:border-[#a0522d]/40 hover:shadow-lg transition-all duration-300">
              <div className="h-44 bg-[#d4c9b4] overflow-hidden">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600]">{t.tag}</span>
                <h3 className="text-lg font-[Fraunces] font-[400] text-[#2a1a0e] mt-1.5 mb-3 group-hover:text-[#a0522d] transition-colors" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{t.title}</h3>
                <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{t.desc}</p>
                <span className="inline-block mt-4 text-[12px] font-[Outfit] font-[500] text-[#a0522d] group-hover:translate-x-1 transition-transform">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
