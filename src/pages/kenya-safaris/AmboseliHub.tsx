import { Link } from 'react-router'
import PageHero from '../../components/PageHero'
import SafariCard from '../../components/SafariCard'

const PACKAGES = [
  { title: 'Amboseli Day Safari', duration: 'Full Day', description: 'A same-day excursion from Nairobi — elephant herds and Kilimanjaro views in a single long day.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', alt: 'Elephants at Amboseli', to: '/kenya-safaris/amboseli/day', price: 'USD 250 pp', highlights: ['Day Trip', 'Elephants', 'Kilimanjaro'] },
  { title: '2-Day Amboseli Safari', duration: '2 Days / 1 Night', description: 'Overnight at the park — experience the magic of dawn light on Kilimanjaro and the elephant herds below.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', alt: 'Amboseli at sunrise', to: '/kenya-safaris/amboseli/2-day', price: 'USD 445 pp', highlights: ['Overnight', 'Sunrise', 'Big Five'] },
  { title: '3-Day Amboseli Safari', duration: '3 Days / 2 Nights', description: 'Two full game-drive days to explore all five ecosystems and spend quality time with Amboseli\'s elephant families.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', alt: 'Elephant family Amboseli', to: '/kenya-safaris/amboseli/3-day', price: 'USD 695 pp', highlights: ['Big Five', 'Swamp Walk', 'Maasai Visit'], badge: 'Most Popular' },
]

export default function AmboseliHub() {
  return (
    <div>
      <PageHero
        title="Amboseli Safaris"
        subtitle="Elephant herds and the world's most iconic mountain — Amboseli delivers Kenya's most photographed wildlife landscape."
        img="https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=1800&h=900&fit=crop&auto=format"
        alt="Elephant herd with Mount Kilimanjaro"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Amboseli' }]}
        tag="Elephants & Kilimanjaro"
        height="md"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Packages</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Amboseli Safari Packages</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {PACKAGES.map((p) => <SafariCard key={p.title} {...p} />)}
        </div>
        <div className="bg-[#ede7d9] rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Park Guide</p>
            <h3 className="text-2xl lg:text-3xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Amboseli National Park</h3>
            <p className="text-[14px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-5">
              Amboseli covers 392 km² at the foot of Africa's highest mountain. Its ancient lakebed, seasonal swamps, and acacia woodland support 1,500+ elephants — the most intensively studied elephant population in the world.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-[13px] font-[Outfit]">
              {[['Size', '392 km²'], ['Distance from Nairobi', '240 km (3.5 hrs)'], ['Best Time', 'Oct–Mar (dry)'], ['Park Fee', 'USD 60 pp/day']].map(([k, v]) => (
                <div key={k}><p className="text-[#8b7355] text-[11px] uppercase tracking-wide mb-0.5">{k}</p><p className="text-[#2a1a0e] font-[500]">{v}</p></div>
              ))}
            </div>
            <Link to="/kenya-safaris/amboseli/national-park" className="text-[13px] font-[Outfit] font-[500] text-[#a0522d] border border-[#a0522d] px-5 py-2.5 rounded hover:bg-[#a0522d] hover:text-[#f5f0e8] transition-all inline-block">
              Full Park Guide →
            </Link>
          </div>
          <img src="https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format" alt="Amboseli elephants" className="rounded-xl object-cover w-full h-64" />
        </div>
      </section>
    </div>
  )
}
