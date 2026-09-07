import { Link } from 'react-router'
import SafariCard from '../components/SafariCard'

const FEATURED = [
  {
    title: '3-Day Masai Mara Safari',
    duration: '3 Days / 2 Nights',
    description: 'The classic Mara experience — big cats, vast plains, and two full days of game drives in the most storied reserve in Africa.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format',
    alt: 'Lions on the Masai Mara at sunset',
    to: '/kenya-safaris/masai-mara/3-day',
    price: 'USD 595 pp',
    highlights: ['Big Five', 'Game Drives', 'Tented Camp'],
    badge: 'Most Popular',
  },
  {
    title: 'Masai Mara Migration Safari',
    duration: '5 Days / 4 Nights',
    description: 'Witness a million wildebeest cross the Mara River — one of the greatest wildlife spectacles on Earth. July to October.',
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format',
    alt: 'Wildebeest crossing the Mara River',
    to: '/kenya-safaris/masai-mara/migration',
    price: 'USD 1,295 pp',
    highlights: ['Great Migration', 'River Crossings', 'Jul–Oct'],
    badge: 'Seasonal',
  },
  {
    title: '3-Day Amboseli Safari',
    duration: '3 Days / 2 Nights',
    description: 'Elephant herds against the snow-capped backdrop of Kilimanjaro — Amboseli delivers Africa\'s most iconic photography landscapes.',
    img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format',
    alt: 'Elephants at Amboseli with Mount Kilimanjaro',
    to: '/kenya-safaris/amboseli/3-day',
    price: 'USD 695 pp',
    highlights: ['Elephants', 'Kilimanjaro Views', 'Photography'],
  },
  {
    title: 'Hot-Air Balloon Safari',
    duration: 'Half Day',
    description: 'Drift silently over the Mara at sunrise. Watch the plains come alive below you before landing for a champagne bush breakfast.',
    img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=600&h=400&fit=crop&auto=format',
    alt: 'Hot air balloon over Masai Mara at sunrise',
    to: '/kenya-safaris/activities/balloon-safaris/masai-mara',
    price: 'USD 490 pp',
    highlights: ['Sunrise', 'Aerial Views', 'Champagne Breakfast'],
  },
]

const DESTINATIONS = [
  { name: 'Masai Mara', desc: 'Kenya\'s crown jewel', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=350&fit=crop&auto=format', to: '/kenya-safaris/masai-mara' },
  { name: 'Amboseli', desc: 'Elephants & Kilimanjaro', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=500&h=350&fit=crop&auto=format', to: '/kenya-safaris/amboseli' },
  { name: 'Tsavo', desc: 'Red elephants & lava flows', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&h=350&fit=crop&auto=format', to: '/kenya-safaris/tsavo' },
  { name: 'Tanzania', desc: 'Serengeti & Ngorongoro', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=500&h=350&fit=crop&auto=format', to: '/destinations/tanzania' },
  { name: 'Rwanda', desc: 'Gorilla trekking', img: 'https://images.unsplash.com/photo-1589825743636-0a12a3c9bfbe?w=500&h=350&fit=crop&auto=format', to: '/destinations/rwanda' },
]

const TYPES = [
  { label: 'Luxury', icon: '✦', to: '/kenya-safaris/types/luxury' },
  { label: 'Family', icon: '◈', to: '/kenya-safaris/types/family' },
  { label: 'Honeymoon', icon: '♡', to: '/kenya-safaris/types/honeymoon' },
  { label: 'Photography', icon: '◉', to: '/kenya-safaris/types/photography' },
  { label: 'Fly-In', icon: '◬', to: '/kenya-safaris/types/fly-in' },
  { label: 'Safari & Beach', icon: '◇', to: '/kenya-safaris/types/beach' },
  { label: 'Group', icon: '◎', to: '/kenya-safaris/group-safaris' },
  { label: 'Private', icon: '◐', to: '/kenya-safaris/types/private' },
]

const STATS = [
  { value: '15+', label: 'Years in Kenya' },
  { value: '2,400+', label: 'Safaris Operated' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12', label: 'Destinations Covered' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end bg-[#2a1a0e] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=1000&fit=crop&auto=format"
            alt="Wildebeest crossing the Mara River during the Great Migration"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e06] via-[#1a0e06]/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e06]/55 to-transparent" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#e8b84b] mb-5 font-[Outfit]">
              Kenya · Tanzania · Botswana · Rwanda · South Africa
            </p>
            <h1
              className="text-4xl lg:text-6xl xl:text-7xl font-[Fraunces] font-[300] text-[#f5f0e8] leading-[1.05] mb-6"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              Africa, as it{' '}
              <em className="italic font-[400] text-[#e8b84b]">ought</em>
              <br />
              to be seen.
            </h1>
            <p className="text-base lg:text-lg text-[#c8b896] font-[Outfit] font-[300] leading-relaxed mb-10 max-w-lg">
              Tailor-made safaris across Kenya's most extraordinary wilderness — from the wildebeest migration on the Mara to the elephant herds of Amboseli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kenya-safaris" className="inline-block bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-8 py-3.5 rounded transition-colors text-sm tracking-wide text-center">
                Explore Kenya Safaris
              </Link>
              <Link to="/plan-my-trip" className="inline-block border border-[#c8b896]/50 hover:border-[#c8b896] text-[#c8b896] font-[Outfit] font-[400] px-8 py-3.5 rounded transition-colors text-sm tracking-wide text-center">
                Plan My Trip
              </Link>
            </div>
          </div>
          <div className="mt-14 lg:mt-20 flex gap-10 lg:gap-16 flex-wrap">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl lg:text-3xl font-[Fraunces] font-[400] text-[#e8b84b]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{s.value}</p>
                <p className="text-[10px] text-[#8b7355] font-[Outfit] tracking-widest mt-0.5 uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] [writing-mode:vertical-rl] rotate-180">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#8b7355] to-transparent" />
        </div>
      </section>

      {/* Safari Types strip */}
      <section className="bg-[#2a1a0e] border-b border-[#3d2b1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex gap-0 overflow-x-auto">
          {TYPES.map((t, i) => (
            <Link
              key={t.label}
              to={t.to}
              className={`flex items-center gap-2 px-5 py-2.5 text-[12px] font-[Outfit] font-[500] tracking-wide whitespace-nowrap transition-colors hover:text-[#e8b84b] text-[#8b7355] ${i > 0 ? 'border-l border-[#3d2b1a]' : ''}`}
            >
              <span className="text-[#c8901a] text-base">{t.icon}</span>
              {t.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured safaris */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Featured</p>
            <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Signature Safaris
            </h2>
          </div>
          <Link to="/kenya-safaris" className="hidden sm:inline-block text-[13px] font-[Outfit] font-[500] text-[#a0522d] hover:text-[#8b4020] transition-colors">
            View all safaris →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED.map((s) => <SafariCard key={s.title} {...s} />)}
        </div>
      </section>

      {/* Destinations grid */}
      <section className="bg-[#ede7d9] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Where to go</p>
            <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Explore by Destination
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {DESTINATIONS.map((d) => (
              <Link key={d.name} to={d.to} className="group relative rounded-xl overflow-hidden bg-[#d4c9b4] aspect-[3/4]">
                <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e06]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-base font-[Fraunces] font-[400] text-[#f5f0e8]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{d.name}</p>
                  <p className="text-[11px] text-[#c8b896] font-[Outfit]">{d.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Why Savanna & Beyond</p>
            <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-6 leading-[1.15]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Expertise built on<br /><em className="italic">fifteen years in the field</em>
            </h2>
            <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-8">
              We are a Kenya-based, owner-operated safari company. Every itinerary is designed from scratch — no group tours, no fixed departures, no compromises. Our guides are Kenya Professional Safari Guides Association certified with an average of 12 years of guiding experience.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: 'Kenya-Based Team', desc: 'We live and work in the places we show you.' },
                { label: 'KPSGA-Certified Guides', desc: 'Expert naturalists with 12+ years average experience.' },
                { label: 'Tailor-Made Only', desc: 'Every itinerary is custom-built for you.' },
                { label: 'Transparent Pricing', desc: 'No hidden costs, no surprise add-ons.' },
              ].map((f) => (
                <div key={f.label}>
                  <div className="w-6 h-px bg-[#c8901a] mb-3" />
                  <p className="text-sm font-[Outfit] font-[600] text-[#2a1a0e] mb-1">{f.label}</p>
                  <p className="text-[12px] text-[#8b7355] font-[Outfit] font-[300] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block text-[13px] font-[Outfit] font-[500] text-[#a0522d] border border-[#a0522d] px-6 py-2.5 rounded hover:bg-[#a0522d] hover:text-[#f5f0e8] transition-all">
              About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1504173010664-32509107de42?w=400&h=500&fit=crop&auto=format" alt="Safari guide with guests" className="rounded-xl object-cover w-full h-64 lg:h-80" />
            <img src="https://images.unsplash.com/photo-1589825743636-0a12a3c9bfbe?w=400&h=300&fit=crop&auto=format" alt="Luxury tented camp in the bush" className="rounded-xl object-cover w-full h-40 lg:h-52 self-end" />
            <img src="https://images.unsplash.com/photo-1520116468816-95b69f847357?w=400&h=300&fit=crop&auto=format" alt="Hot air balloon over Masai Mara" className="rounded-xl object-cover w-full h-40 lg:h-52 col-start-2 row-start-1" />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative bg-[#2a1a0e] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&h=500&fit=crop&auto=format"
          alt="Sunset over the African savanna"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#e8b84b] mb-4 font-[Outfit]">Start planning</p>
          <h2 className="text-3xl lg:text-5xl font-[Fraunces] font-[300] text-[#f5f0e8] mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            Your safari begins with a conversation.
          </h2>
          <p className="text-[#c8b896] font-[Outfit] font-[300] max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us your travel dates, interests, and budget. We'll craft a bespoke itinerary — at no obligation and no cost.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/plan-my-trip" className="bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-8 py-3.5 rounded text-sm tracking-wide transition-colors">
              Plan My Safari
            </Link>
            <Link to="/contact" className="border border-[#c8b896]/50 hover:border-[#c8b896] text-[#c8b896] font-[Outfit] font-[400] px-8 py-3.5 rounded text-sm tracking-wide transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
