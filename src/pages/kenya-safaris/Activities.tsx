import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

const ACTIVITIES = [
  { title: 'Game Drives', desc: 'The cornerstone of every Kenya safari — open-sided or pop-top 4×4 vehicles guided by KPSGA-certified naturalists across the savanna.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/activities/game-drives', sub: [{ label: 'Masai Mara Game Drives', to: '/kenya-safaris/activities/game-drives/masai-mara' }] },
  { title: 'Hot-Air Balloon Safaris', desc: 'Drift over the Masai Mara at first light — an hour of silent flight above the herds, followed by a champagne breakfast in the bush.', img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/activities/balloon-safaris', sub: [{ label: 'Masai Mara Balloon Safari', to: '/kenya-safaris/activities/balloon-safaris/masai-mara' }] },
  { title: 'Walking Safaris', desc: 'Experience the bush on foot with an armed and fully trained guide — closer to the ground, more tuned to the details that a vehicle misses.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/activities/walking-safaris', sub: [] },
  { title: 'Birdwatching', desc: 'Kenya has over 1,100 recorded bird species. The Mara alone hosts 470 — from Martial Eagles to Lilac-Breasted Rollers and Secretary Birds.', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/activities/birdwatching', sub: [] },
  { title: 'Mountain Trekking', desc: 'Mount Kenya (5,199m), the Aberdares, and the Ngong Hills offer everything from half-day hikes to multi-day technical ascents.', img: 'https://images.unsplash.com/photo-1589825743636-0a12a3c9bfbe?w=500&h=320&fit=crop&auto=format', to: '/kenya-safaris/activities/mountain-trekking', sub: [] },
]

export default function Activities() {
  return (
    <div>
      <PageHero
        title="Safari Activities"
        subtitle="Beyond the game drive — walking safaris, balloon flights, birdwatching, and mountain trekking across Kenya's extraordinary landscapes."
        img="https://images.unsplash.com/photo-1520116468816-95b69f847357?w=1800&h=900&fit=crop&auto=format"
        alt="Hot air balloon over Masai Mara"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Activities' }]}
        tag="Experiences"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 space-y-14">
        {ACTIVITIES.map((act, i) => (
          <div key={act.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
              <h2 className="text-2xl lg:text-3xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{act.title}</h2>
              <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-5">{act.desc}</p>
              <div className="flex flex-wrap gap-3">
                <Link to={act.to} className="text-[13px] font-[Outfit] font-[500] bg-[#a0522d] text-[#f5f0e8] px-5 py-2.5 rounded hover:bg-[#8b4020] transition-colors">
                  Learn More
                </Link>
                {act.sub.map((s) => (
                  <Link key={s.label} to={s.to} className="text-[13px] font-[Outfit] font-[500] border border-[#a0522d] text-[#a0522d] px-5 py-2.5 rounded hover:bg-[#a0522d] hover:text-[#f5f0e8] transition-all">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className={`rounded-2xl overflow-hidden bg-[#d4c9b4] h-72 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <img src={act.img} alt={act.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
