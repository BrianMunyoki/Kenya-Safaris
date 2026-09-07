import { Link } from 'react-router'
import PageHero from '../../components/PageHero'
import SafariCard from '../../components/SafariCard'

const DESTINATIONS = [
  { name: 'Masai Mara', desc: 'Big cats, migration, endless plains', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', to: '/kenya-safaris/masai-mara', badge: 'Most Popular' },
  { name: 'Amboseli', desc: 'Elephants beneath Kilimanjaro', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', to: '/kenya-safaris/amboseli' },
  { name: 'Tsavo', desc: 'Red elephants & vast wilderness', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', to: '/kenya-safaris/tsavo' },
  { name: 'Lake Nakuru', desc: 'Flamingos & rhino sanctuary', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=600&h=400&fit=crop&auto=format', to: '/kenya-safaris/lake-nakuru' },
]

const FEATURED_PACKAGES = [
  { title: '3-Day Masai Mara Safari', duration: '3 Days / 2 Nights', description: 'Two full game-drive days in Africa\'s most celebrated reserve, staying at a classic bush camp.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Lion pride in Masai Mara', to: '/kenya-safaris/masai-mara/3-day', price: 'USD 595 pp', highlights: ['Big Five', 'Game Drives', 'Camp'], badge: 'Best Value' },
  { title: 'Migration Safari', duration: '5 Days / 4 Nights', description: 'Time your visit for the river crossings — the world\'s greatest wildlife spectacle.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', alt: 'Wildebeest river crossing', to: '/kenya-safaris/masai-mara/migration', price: 'USD 1,295 pp', highlights: ['Migration', 'River Crossing', 'Jul–Oct'], badge: 'Seasonal' },
  { title: '3-Day Amboseli Safari', duration: '3 Days / 2 Nights', description: 'Elephant herds against the snow-capped backdrop of Kilimanjaro — Kenya\'s most photogenic setting.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', alt: 'Elephants with Kilimanjaro', to: '/kenya-safaris/amboseli/3-day', price: 'USD 695 pp', highlights: ['Elephants', 'Kilimanjaro', 'Photography'] },
  { title: 'Luxury Masai Mara', duration: '4 Days / 3 Nights', description: 'Premium tented camps, private game drives, and sundowner cocktails on the open plain.', img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=600&h=400&fit=crop&auto=format', alt: 'Luxury tent at sunset', to: '/kenya-safaris/masai-mara/luxury', price: 'USD 2,450 pp', highlights: ['Luxury Tents', 'Private Drives', 'Exclusive'], badge: 'Premium' },
]

const TYPES = [
  { label: 'Family Safaris', to: '/kenya-safaris/types/family', icon: '◈' },
  { label: 'Honeymoon', to: '/kenya-safaris/types/honeymoon', icon: '♡' },
  { label: 'Photography', to: '/kenya-safaris/types/photography', icon: '◉' },
  { label: 'Luxury', to: '/kenya-safaris/types/luxury', icon: '✦' },
  { label: 'Fly-In', to: '/kenya-safaris/types/fly-in', icon: '◬' },
  { label: 'Safari & Beach', to: '/kenya-safaris/types/beach', icon: '◇' },
  { label: 'Group Safaris', to: '/kenya-safaris/group-safaris', icon: '◎' },
  { label: 'Private Tours', to: '/kenya-safaris/types/private', icon: '◐' },
]

export default function KenyaSafarisHub() {
  return (
    <div>
      <PageHero
        title="Kenya Safaris"
        subtitle="From the Great Migration on the Masai Mara to elephant herds at Amboseli — Kenya offers the full spectrum of African wildlife experience."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Panoramic view of the Masai Mara at dawn"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris' }]}
        tag="East Africa's Premier Safari Destination"
        height="md"
      />

      {/* Destinations */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Where to go</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Kenya's Wildlife Destinations</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {DESTINATIONS.map((d) => (
            <Link key={d.name} to={d.to} className="group relative rounded-xl overflow-hidden bg-[#d4c9b4] aspect-[4/5]">
              <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e06]/80 to-transparent" />
              {d.badge && <span className="absolute top-3 left-3 bg-[#a0522d] text-[#f5f0e8] text-[10px] tracking-[0.15em] uppercase font-[Outfit] font-[500] px-2.5 py-1 rounded">{d.badge}</span>}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-lg font-[Fraunces] font-[400] text-[#f5f0e8]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{d.name}</p>
                <p className="text-[12px] text-[#c8b896] font-[Outfit] mt-0.5">{d.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured packages */}
      <section className="bg-[#ede7d9] py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Top picks</p>
              <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Featured Safari Packages</h2>
            </div>
            <Link to="/kenya-safaris/packages" className="hidden sm:inline-block text-[13px] font-[Outfit] font-[500] text-[#a0522d]">View all →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_PACKAGES.map((p) => <SafariCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Safari types */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Browse by type</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Safari Styles</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {TYPES.map((t) => (
            <Link key={t.label} to={t.to} className="group border border-[#d4c9b4] rounded-xl p-6 hover:border-[#a0522d] hover:bg-white transition-all duration-200 flex flex-col gap-2">
              <span className="text-2xl text-[#c8901a]">{t.icon}</span>
              <span className="text-[14px] font-[Outfit] font-[500] text-[#2a1a0e] group-hover:text-[#a0522d] transition-colors">{t.label}</span>
              <span className="text-[11px] font-[Outfit] text-[#a0522d] opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-[#2a1a0e] py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-wrap gap-4 justify-center">
          {[
            { label: 'All Packages', to: '/kenya-safaris/packages' },
            { label: 'Activities', to: '/kenya-safaris/activities' },
            { label: 'Accommodation', to: '/kenya-safaris/accommodation' },
            { label: 'Safari Guides & Blog', to: '/kenya-safaris/guides' },
            { label: 'Plan My Trip', to: '/plan-my-trip' },
          ].map((l) => (
            <Link key={l.label} to={l.to} className="text-[13px] font-[Outfit] font-[500] text-[#c8b896] border border-[#3d2b1a] px-5 py-2.5 rounded hover:border-[#c8901a] hover:text-[#e8b84b] transition-all">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
