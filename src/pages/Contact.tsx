import { useState } from 'react'
import PageHero from '../components/PageHero'

const FAQS = [
  { q: 'What is the best time to visit the Masai Mara?', a: 'The Mara is excellent year-round, but the Great Migration river crossings occur July–October. January–March offers the calving season on the Serengeti side of the ecosystem.' },
  { q: 'Do I need a visa to visit Kenya?', a: 'Most nationalities require an eVisa, obtained online at evisa.go.ke before travel. Processing takes 3–5 business days. We can advise on current requirements for your nationality.' },
  { q: 'What vaccinations do I need for Kenya?', a: 'Yellow fever vaccination is required if arriving from a yellow-fever endemic country. We recommend consulting a travel health clinic. Malaria prophylaxis is advised for safari areas.' },
  { q: 'How do I get from Nairobi to the Masai Mara?', a: 'Options are a 5–6 hour road journey by safari vehicle or a 45-minute charter flight from Wilson Airport. We arrange both as part of your safari package.' },
  { q: 'Can you accommodate dietary requirements?', a: 'Yes — all major camps cater for vegetarian, vegan, gluten-free, and halal requirements with advance notice. Please inform us when booking.' },
  { q: 'What is your cancellation policy?', a: 'Full refund up to 60 days before travel. 50% refund 30–59 days. Within 30 days, the deposit is non-refundable. We strongly recommend comprehensive travel insurance.' },
  { q: 'Is Kenya safe for tourists?', a: 'Kenya\'s national parks and Nairobi\'s tourist areas are very safe. We monitor travel advisories daily and have protocols for all scenarios. We have operated for 15 years without a security incident involving guests.' },
  { q: 'Do you offer private safaris?', a: 'Yes — all our safaris can be operated privately, with a dedicated vehicle and guide for your party alone. Group departures are also available at lower per-person rates.' },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        title="Contact & FAQs"
        subtitle="We're a small, owner-operated team — when you call or email, you speak directly to the people who will plan and guide your safari."
        img="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format"
        alt="Safari landscape at sunset"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact & FAQs' }]}
        tag="Get in Touch"
        height="sm"
      />

      {/* Contact grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Send a Message</p>
          <h2 className="text-2xl lg:text-3xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>We'll respond within 24 hours.</h2>
          {submitted ? (
            <div className="text-center py-12 border border-[#d4c9b4] rounded-xl">
              <div className="text-4xl mb-4">✦</div>
              <p className="text-lg font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Message received.</p>
              <p className="text-[14px] text-[#8b7355] font-[Outfit] mt-2">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[{ id: 'name', label: 'Full Name', type: 'text' }, { id: 'email', label: 'Email', type: 'email' }, { id: 'phone', label: 'Phone / WhatsApp (optional)', type: 'tel' }].map((f) => (
                <div key={f.id}>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">{f.label}</label>
                  <input type={f.type} required={!f.label.includes('optional')} value={form[f.id as keyof typeof form]} onChange={(e) => setForm((prev) => ({ ...prev, [f.id]: e.target.value }))} className="w-full border border-[#d4c9b4] bg-white text-[#2a1a0e] font-[Outfit] px-4 py-3 rounded-lg text-[14px] focus:outline-none focus:border-[#a0522d] transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Subject</label>
                <select required value={form.subject} onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))} className="w-full border border-[#d4c9b4] bg-white text-[#2a1a0e] font-[Outfit] px-4 py-3 rounded-lg text-[14px] focus:outline-none focus:border-[#a0522d] transition-colors">
                  <option value="">Select a subject...</option>
                  {['Safari Enquiry', 'Quote Request', 'Booking Question', 'DMC / Corporate', 'Press / Media', 'General Question'].map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} className="w-full border border-[#d4c9b4] bg-white text-[#2a1a0e] font-[Outfit] px-4 py-3 rounded-lg text-[14px] focus:outline-none focus:border-[#a0522d] transition-colors resize-none" placeholder="Tell us about your travel plans, dates, interests..." />
              </div>
              <button type="submit" className="w-full bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] py-3.5 rounded transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Find Us</p>
          <h2 className="text-2xl lg:text-3xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Nairobi-based. Africa-wide.</h2>
          <div className="space-y-6 mb-10">
            {[
              { label: 'Phone / WhatsApp', value: '+254 700 000 000', href: 'tel:+254700000000' },
              { label: 'Email', value: 'info@safarico.ke', href: 'mailto:info@safarico.ke' },
              { label: 'Office Hours', value: 'Mon–Fri 08:00–18:00 EAT | Sat 08:00–13:00', href: null },
              { label: 'Address', value: 'Karen, Nairobi, Kenya', href: null },
            ].map((item) => (
              <div key={item.label} className="border-b border-[#e8e0d0] pb-5">
                <p className="text-[10px] uppercase tracking-wide text-[#8b7355] font-[Outfit] font-[600] mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-[15px] font-[Outfit] text-[#2a1a0e] hover:text-[#a0522d] transition-colors">{item.value}</a>
                ) : (
                  <p className="text-[15px] font-[Outfit] text-[#2a1a0e]">{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="bg-[#ede7d9] rounded-xl p-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Emergency Line</p>
            <p className="text-[14px] font-[Outfit] font-[300] text-[#6b4226] leading-relaxed mb-3">
              For guests currently on safari, our 24-hour operations line is available at all times.
            </p>
            <p className="text-[16px] font-[Outfit] font-[500] text-[#a0522d]">+254 700 111 000</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#ede7d9] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">FAQs</p>
            <h2 className="text-3xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#e8e0d0]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-[#faf7f2] transition-colors"
                >
                  <span className="text-[14px] font-[Outfit] font-[500] text-[#2a1a0e] pr-6">{faq.q}</span>
                  <span className={`text-[#a0522d] shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[14px] font-[Outfit] font-[300] text-[#6b4226] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
