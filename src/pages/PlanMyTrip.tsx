import { useState } from 'react'
import PageHero from '../components/PageHero'

const DESTINATIONS = ['Masai Mara', 'Amboseli', 'Tsavo East', 'Tsavo West', 'Lake Nakuru', 'Tanzania', 'Botswana', 'Rwanda', 'South Africa', 'Mozambique']
const DURATIONS = ['3–4 days', '5–7 days', '8–10 days', '11–14 days', '15+ days']
const BUDGETS = ['Budget (< USD 200/pp/day)', 'Mid-range (USD 200–400/pp/day)', 'Luxury (USD 400–800/pp/day)', 'Ultra-luxury (USD 800+/pp/day)']
const TYPES = ['Private Safari', 'Group Safari', 'Fly-In Safari', 'Family Safari', 'Honeymoon', 'Photography Safari', 'Corporate / Group Event']

export default function PlanMyTrip() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [form, setForm] = useState({ name: '', email: '', phone: '', dates: '', guests: '2', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const toggle = (group: string, val: string) => {
    setSelected((prev) => {
      const existing = prev[group] ?? []
      return { ...prev, [group]: existing.includes(val) ? existing.filter((v) => v !== val) : [...existing, val] }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        title="Plan My Trip"
        subtitle="Tell us where you want to go, how long you have, and what matters most. We'll design a bespoke itinerary within 24 hours — at no obligation."
        img="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format"
        alt="Safari planning with map"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Plan My Trip' }]}
        tag="Tailor-Made Safari Planning"
        height="sm"
      />

      <section className="max-w-3xl mx-auto px-6 py-16 lg:py-20">
        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-6">✦</div>
            <h2 className="text-3xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Thank you, {form.name.split(' ')[0]}.
            </h2>
            <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed max-w-md mx-auto">
              Your enquiry has been received. A member of our team will be in touch within 24 hours with a bespoke itinerary proposal.
            </p>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="flex gap-2 mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`flex-1 h-1 rounded-full transition-all duration-300 ${s <= step ? 'bg-[#a0522d]' : 'bg-[#d4c9b4]'}`} />
              ))}
            </div>

            {/* Step 1 — Preferences */}
            {step === 1 && (
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Where would you like to go?</h2>
                  <p className="text-[13px] text-[#8b7355] font-[Outfit] mb-5">Select all that interest you</p>
                  <div className="flex flex-wrap gap-2">
                    {DESTINATIONS.map((d) => (
                      <button key={d} onClick={() => toggle('destinations', d)} className={`text-[13px] font-[Outfit] font-[500] px-4 py-2 rounded-full border transition-all ${(selected.destinations ?? []).includes(d) ? 'bg-[#a0522d] text-[#f5f0e8] border-[#a0522d]' : 'text-[#3d2b1a] border-[#d4c9b4] hover:border-[#a0522d]'}`}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>How long is your trip?</h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {DURATIONS.map((d) => (
                      <button key={d} onClick={() => toggle('duration', d)} className={`text-[13px] font-[Outfit] font-[500] px-4 py-2 rounded-full border transition-all ${(selected.duration ?? []).includes(d) ? 'bg-[#a0522d] text-[#f5f0e8] border-[#a0522d]' : 'text-[#3d2b1a] border-[#d4c9b4] hover:border-[#a0522d]'}`}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>What's your budget per person per day?</h2>
                  <div className="flex flex-col gap-2 mt-4">
                    {BUDGETS.map((b) => (
                      <button key={b} onClick={() => toggle('budget', b)} className={`text-[13px] font-[Outfit] font-[500] px-5 py-3 rounded-lg border text-left transition-all ${(selected.budget ?? []).includes(b) ? 'bg-[#a0522d] text-[#f5f0e8] border-[#a0522d]' : 'text-[#3d2b1a] border-[#d4c9b4] hover:border-[#a0522d]'}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>What type of safari?</h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {TYPES.map((t) => (
                      <button key={t} onClick={() => toggle('type', t)} className={`text-[13px] font-[Outfit] font-[500] px-4 py-2 rounded-full border transition-all ${(selected.type ?? []).includes(t) ? 'bg-[#a0522d] text-[#f5f0e8] border-[#a0522d]' : 'text-[#3d2b1a] border-[#d4c9b4] hover:border-[#a0522d]'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="w-full bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] py-3.5 rounded transition-colors">
                  Next: Your Details →
                </button>
              </div>
            )}

            {/* Step 2 — Contact */}
            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(3) }} className="space-y-6">
                <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Your contact details</h2>
                {[{ id: 'name', label: 'Full Name', type: 'text', required: true }, { id: 'email', label: 'Email Address', type: 'email', required: true }, { id: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: false }, { id: 'dates', label: 'Preferred Travel Dates', type: 'text', required: false }].map((field) => (
                  <div key={field.id}>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">{field.label}{!field.required && ' (optional)'}</label>
                    <input type={field.type} required={field.required} value={form[field.id as keyof typeof form]} onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))} className="w-full border border-[#d4c9b4] bg-white text-[#2a1a0e] font-[Outfit] px-4 py-3 rounded-lg text-[14px] focus:outline-none focus:border-[#a0522d] transition-colors placeholder:text-[#c8b896]" placeholder={field.label} />
                  </div>
                ))}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Number of Guests</label>
                  <select value={form.guests} onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))} className="w-full border border-[#d4c9b4] bg-white text-[#2a1a0e] font-[Outfit] px-4 py-3 rounded-lg text-[14px] focus:outline-none focus:border-[#a0522d] transition-colors">
                    {['1', '2', '3', '4', '5', '6', '7–10', '11–20', '20+'].map((n) => <option key={n} value={n}>{n} guest{n === '1' ? '' : 's'}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Additional Notes (optional)</label>
                  <textarea rows={4} value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} className="w-full border border-[#d4c9b4] bg-white text-[#2a1a0e] font-[Outfit] px-4 py-3 rounded-lg text-[14px] focus:outline-none focus:border-[#a0522d] transition-colors resize-none placeholder:text-[#c8b896]" placeholder="Special requirements, interests, accessibility needs..." />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-[#d4c9b4] text-[#3d2b1a] font-[Outfit] font-[500] py-3.5 rounded hover:bg-[#ede7d9] transition-colors">
                    ← Back
                  </button>
                  <button type="submit" className="flex-1 bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] py-3.5 rounded transition-colors">
                    Next: Review →
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 — Review & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h2 className="text-2xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Review your enquiry</h2>
                <div className="bg-[#ede7d9] rounded-xl p-6 space-y-4 text-[13px] font-[Outfit]">
                  {[
                    { label: 'Name', value: form.name },
                    { label: 'Email', value: form.email },
                    { label: 'Guests', value: form.guests },
                    { label: 'Destinations', value: (selected.destinations ?? []).join(', ') || 'Not specified' },
                    { label: 'Duration', value: (selected.duration ?? []).join(', ') || 'Not specified' },
                    { label: 'Budget', value: (selected.budget ?? []).join(', ') || 'Not specified' },
                    { label: 'Safari Type', value: (selected.type ?? []).join(', ') || 'Not specified' },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 border-b border-[#d4c9b4] pb-3">
                      <span className="text-[#8b7355] font-[500] min-w-[100px]">{row.label}</span>
                      <span className="text-[#2a1a0e]">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 border border-[#d4c9b4] text-[#3d2b1a] font-[Outfit] font-[500] py-3.5 rounded hover:bg-[#ede7d9] transition-colors">
                    ← Edit
                  </button>
                  <button type="submit" className="flex-1 bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] py-3.5 rounded transition-colors">
                    Send Enquiry
                  </button>
                </div>
                <p className="text-[11px] text-[#8b7355] font-[Outfit] text-center">No payment required. Our team will respond within 24 hours.</p>
              </form>
            )}
          </>
        )}
      </section>
    </div>
  )
}
