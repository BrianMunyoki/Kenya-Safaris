import { Link } from 'react-router'
import PageHero from '../components/PageHero'

const SERVICES = [
  { title: 'VIP Arrival & Departure', desc: 'Meet-and-greet at Jomo Kenyatta International Airport, fast-track immigration assistance, private transfers, and porter service — first and last impressions handled flawlessly.', icon: '✈' },
  { title: 'Group Logistics', desc: 'End-to-end logistics management for groups of 10 to 500 — rooming lists, meal management, transport coordination, and real-time communication protocols.', icon: '◎' },
  { title: 'Ground Handling', desc: 'Full-service ground handling across Kenya and East Africa — vetted vehicle fleets, licensed guide teams, and 24/7 operations desk.', icon: '◈' },
  { title: 'Crisis Management', desc: 'Dedicated crisis protocols, medical evacuation partnerships, and 24-hour response teams. Your delegates are never on their own.', icon: '◉' },
  { title: 'MICE Travel', desc: 'Conferences, incentive travel, exhibitions, and corporate events across Kenya\'s finest venues — from Nairobi hotels to tented conference facilities in the bush.', icon: '◐' },
  { title: 'Corporate Retreats', desc: 'Safari-based leadership retreats and team-building programmes in the Masai Mara, Amboseli, or the Rift Valley — where nature amplifies perspective.', icon: '◇' },
  { title: 'Bespoke Events', desc: 'Private dinners under the stars, sundowner experiences on the escarpment, bush weddings, and product launches — designed around your brand.', icon: '✦' },
]

const CLIENTS = ['Multinational Corporations', 'Event Management Companies', 'International NGOs', 'Diplomatic Missions', 'Luxury Travel Agencies', 'Sports & Entertainment Groups']

export default function DmcCorporate() {
  return (
    <div>
      <PageHero
        title="DMC & Corporate Travel"
        subtitle="Kenya's trusted destination management partner — handling groups, incentives, corporate events, and VIP travel with precision and discretion."
        img="https://images.unsplash.com/photo-1504173010664-32509107de42?w=1800&h=900&fit=crop&auto=format"
        alt="Corporate event in Kenya bush setting"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'DMC & Corporate' }]}
        tag="Destination Management"
        height="sm"
      />

      {/* Services */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Services</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>What We Handle</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-white border border-[#e8e0d0] rounded-xl p-7 hover:border-[#a0522d]/30 hover:shadow-md transition-all">
              <span className="text-2xl text-[#c8901a] block mb-4">{s.icon}</span>
              <h3 className="text-[16px] font-[Fraunces] font-[400] text-[#2a1a0e] mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{s.title}</h3>
              <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="bg-[#2a1a0e] rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#e8b84b] font-[Outfit] font-[600] mb-3">Why Savanna & Beyond DMC</p>
            <h2 className="text-2xl lg:text-3xl font-[Fraunces] font-[300] text-[#f5f0e8] mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Decades of in-market expertise.</h2>
            <div className="space-y-4">
              {['KATA and KATO licensed DMC operator', 'Fleet of 40+ safari vehicles and coaches', 'Multilingual guide and logistics team', 'Vetted hotel and venue partners across Kenya', '24/7 operations desk and dedicated account managers', 'Comprehensive liability insurance and bonding'].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[14px] font-[Outfit] font-[300] text-[#c8b896]">
                  <span className="text-[#e8b84b] shrink-0 mt-0.5">✦</span>{item}
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-block mt-8 bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-7 py-3 rounded text-sm transition-colors">
              Request a Proposal
            </Link>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#e8b84b] font-[Outfit] font-[600] mb-4">We work with</p>
            <div className="flex flex-wrap gap-2">
              {CLIENTS.map((c) => (
                <span key={c} className="text-[12px] font-[Outfit] text-[#c8b896] border border-[#3d2b1a] px-3 py-1.5 rounded">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
