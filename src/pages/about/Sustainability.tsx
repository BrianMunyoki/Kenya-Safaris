import PageHero from '../../components/PageHero'
import { Link } from 'react-router'

const PILLARS = [
  { title: 'Wildlife Conservation', icon: '◉', desc: 'We contribute 2% of every booking to the Mara–Serengeti conservation fund and support anti-poaching units in the reserves we operate in.' },
  { title: 'Community Investment', icon: '◎', desc: 'Over 85% of our staff come from Maasai and Kikuyu communities adjacent to the parks. We run a scholarship fund supporting 34 students annually.' },
  { title: 'Low-Impact Travel', icon: '◇', desc: 'Maximum vehicle numbers per sighting, off-road driving only in conservancies with lower visitor density, and strict adherence to park codes of conduct.' },
  { title: 'Carbon Commitment', icon: '◈', desc: 'We offset all ground transport emissions through the Lewa Wildlife Conservancy reforestation programme and are working toward net-zero by 2028.' },
  { title: 'Camp Standards', icon: '✦', desc: 'We only partner with lodges and camps that meet our sustainability checklist — solar power, waste management, grey water systems, and local procurement.' },
  { title: 'Responsible Photography', icon: '◐', desc: 'Our guides are trained in responsible wildlife photography ethics — no baiting, no crowding, no disturbing natural behaviour for a shot.' },
]

export default function Sustainability() {
  return (
    <div>
      <PageHero
        title="Sustainability"
        subtitle="Responsible travel is not an add-on — it's how we operate. Our commitment to the wild places and people of Kenya is written into every decision we make."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Masai Mara wilderness"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Sustainability' }]}
        tag="Responsible Safari"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-white border border-[#e8e0d0] rounded-xl p-7">
              <span className="text-2xl text-[#c8901a] block mb-4">{p.icon}</span>
              <h3 className="text-[16px] font-[Fraunces] font-[400] text-[#2a1a0e] mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{p.title}</h3>
              <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#2a1a0e] rounded-2xl p-8 lg:p-12 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#e8b84b] font-[Outfit] mb-4">Travelife Certified Partner</p>
          <h2 className="text-2xl lg:text-3xl font-[Fraunces] font-[300] text-[#f5f0e8] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Africa is worth protecting.</h2>
          <p className="text-[#c8b896] font-[Outfit] font-[300] max-w-xl mx-auto mb-8">The wilderness that makes our safaris extraordinary is only here because it has been protected. Every safari we operate is a vote for conservation.</p>
          <Link to="/plan-my-trip" className="inline-block bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-7 py-3 rounded text-sm transition-colors">
            Plan a Responsible Safari
          </Link>
        </div>
      </section>
    </div>
  )
}
