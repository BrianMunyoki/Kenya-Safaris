import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

const TEAM = [
  { name: 'James Kariuki', role: 'Founder & Head Guide', exp: '22 years', img: 'https://images.unsplash.com/photo-1589825743636-0a12a3c9bfbe?w=300&h=300&fit=crop&auto=format' },
  { name: 'Amina Ochieng', role: 'Head of Operations', exp: '14 years', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=300&h=300&fit=crop&auto=format' },
  { name: 'David Nkosi', role: 'Senior Safari Guide', exp: '18 years', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=300&fit=crop&auto=format' },
  { name: 'Sarah Wanjiru', role: 'DMC & Corporate Manager', exp: '11 years', img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=300&h=300&fit=crop&auto=format' },
]

export default function AboutUs() {
  return (
    <div>
      <PageHero
        title="About Savanna & Beyond"
        subtitle="Owner-operated, Kenya-based, and deeply committed to the places and people that make East African travel extraordinary."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Safari guide looking over the Masai Mara"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        tag="Our Story"
        height="sm"
      />

      {/* Story */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Our Story</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-6 leading-[1.15]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            Born on the plains<br />of the Masai Mara.
          </h2>
          <div className="space-y-4 text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">
            <p>Savanna & Beyond was founded in 2009 by James Kariuki, a KPSGA-certified guide who spent a decade working for international safari companies before realising that the people who understood Kenya best were rarely the ones designing the itineraries.</p>
            <p>We started with two vehicles and a simple premise: build safaris the way a knowledgeable friend would — with genuine expertise, complete transparency, and an uncompromising commitment to the client experience.</p>
            <p>Fifteen years later, we operate across Kenya and five other African countries. Our team of 40 includes some of the most experienced field guides in East Africa, a dedicated DMC division, and an operations team that runs 24 hours a day, 365 days a year.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[{ val: '2009', label: 'Founded' }, { val: '40+', label: 'Team Members' }, { val: '6', label: 'Countries' }].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-[Fraunces] font-[400] text-[#a0522d]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{s.val}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#8b7355] font-[Outfit]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=500&fit=crop&auto=format" alt="James Kariuki guiding" className="rounded-xl object-cover w-full h-64 lg:h-80" />
          <div className="flex flex-col gap-3">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop&auto=format" alt="Safari camp" className="rounded-xl object-cover w-full h-36 lg:h-44" />
            <img src="https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400&h=300&fit=crop&auto=format" alt="Team in the field" className="rounded-xl object-cover w-full h-36 lg:h-44" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#ede7d9] py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">The people behind your safari</p>
            <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Our Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-[#d4c9b4] mx-auto mb-4">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[15px] font-[Fraunces] font-[400] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{t.name}</p>
                <p className="text-[12px] text-[#8b7355] font-[Outfit] mt-0.5">{t.role}</p>
                <p className="text-[11px] text-[#c8901a] font-[Outfit] mt-1">{t.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-wrap gap-x-12 gap-y-6 items-center justify-center">
          {['KATA Licensed', 'KATO Member', 'KPSGA Certified Guides', 'Travelife Sustainable Partner', 'TripAdvisor Certificate of Excellence'].map((cert) => (
            <div key={cert} className="text-center">
              <div className="w-12 h-px bg-[#c8901a] mx-auto mb-2" />
              <p className="text-[12px] font-[Outfit] font-[500] text-[#8b7355] uppercase tracking-wide">{cert}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 flex gap-3 flex-wrap">
        <Link to="/about/sustainability" className="text-[13px] font-[Outfit] font-[500] border border-[#a0522d] text-[#a0522d] px-5 py-2.5 rounded hover:bg-[#a0522d] hover:text-[#f5f0e8] transition-all">
          Our Sustainability Commitment →
        </Link>
        <Link to="/contact" className="text-[13px] font-[Outfit] font-[500] bg-[#a0522d] text-[#f5f0e8] px-5 py-2.5 rounded hover:bg-[#8b4020] transition-colors">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
