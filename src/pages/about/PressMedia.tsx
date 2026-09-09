import PageHero from '../../components/PageHero'

const PRESS = [
  { pub: 'Condé Nast Traveller', year: '2025', title: '"The Best Safari Companies in Africa"', excerpt: 'Savanna & Beyond continues to set the benchmark for tailor-made Kenya safaris, combining deep field expertise with an unwavering commitment to responsible travel.' },
  { pub: 'The Guardian', year: '2025', title: '"Kenya\'s Hidden Safari Gems"', excerpt: 'James Kariuki and his team know the Mara like few others — our guide spent two days pointing out lion families by name.' },
  { pub: 'Travel + Leisure', year: '2024', title: '"Top 25 Safari Outfitters Worldwide"', excerpt: 'Recognised for exceptional personalised service and consistent excellence in guiding quality.' },
  { pub: 'BBC Wildlife Magazine', year: '2024', title: '"Migration Specialists"', excerpt: 'For the Great Migration, Savanna & Beyond\'s guides hold decades of experience reading the crossings — and it shows.' },
]

const AWARDS = [
  'Travelife Gold Certification 2024', 'TripAdvisor Travellers\' Choice 2023–2025', 'Kenya Tourism Federation Award 2024', 'World Travel Awards — East Africa\'s Leading Safari Company 2024',
]

export default function PressMedia() {
  return (
    <div>
      <PageHero
        title="Press & Media"
        subtitle="Press coverage, awards, and media enquiries for Savanna & Beyond Kenya."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Kenya safari landscape"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Press & Media' }]}
        tag="Media"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-6">Press Coverage</p>
            {PRESS.map((p) => (
              <div key={p.pub} className="border-b border-[#e8e0d0] pb-7 mb-7">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[13px] font-[Outfit] font-[600] text-[#a0522d]">{p.pub}</span>
                  <span className="text-[11px] text-[#8b7355] font-[Outfit]">{p.year}</span>
                </div>
                <h3 className="text-lg font-[Fraunces] font-[400] text-[#2a1a0e] mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{p.title}</h3>
                <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed italic">"{p.excerpt}"</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-5">Awards & Recognition</p>
            <ul className="space-y-3">
              {AWARDS.map((a) => (
                <li key={a} className="flex items-start gap-2 text-[14px] font-[Outfit] text-[#3d2b1a]">
                  <span className="text-[#c8901a]">✦</span>{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside>
          <div className="bg-[#ede7d9] rounded-xl p-7 sticky top-24">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-4">Media Enquiries</p>
            <p className="text-[14px] font-[Outfit] font-[300] text-[#6b4226] leading-relaxed mb-5">
              For press trips, interviews, photography access, or media partnerships, please contact our communications team.
            </p>
           <div>
  <p className="text-[#8b7355] text-[11px] uppercase tracking-wide mb-0.5">Telephone</p>
  <p className="text-[#2a1a0e]">+254 728 515 826</p>
</div>
            <div className="mt-6 pt-5 border-t border-[#d4c9b4]">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">High-Res Assets</p>
              <p className="text-[12px] font-[Outfit] font-[300] text-[#6b4226] mb-4">Photography and brand assets available on request for editorial use.</p>
              <a href="mailto:info@kenyasavannah.com" className="block w-full text-center text-[13px] font-[Outfit] font-[500] bg-[#a0522d] text-[#f5f0e8] px-5 py-2.5 rounded hover:bg-[#8b4020] transition-colors">
                Request Assets
              </a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
