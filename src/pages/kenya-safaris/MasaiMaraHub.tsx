import { Link } from 'react-router'
import PageHero from '../../components/PageHero'
import SafariCard from '../../components/SafariCard'

const PACKAGES = [
  { title: '2-Day Masai Mara Safari', duration: '2 Days / 1 Night', description: 'A compact introduction — one full afternoon and morning game drive to experience the Mara\'s legendary predators.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Masai Mara game drive', to: '/kenya-safaris/masai-mara/2-day', price: 'USD 395 pp', highlights: ['Big Cats', 'Game Drive', 'Tented Camp'] },
  { title: '3-Day Masai Mara Safari', duration: '3 Days / 2 Nights', description: 'The most popular option — two full days gives you the best odds of witnessing the Mara\'s Big Five.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Lion in Masai Mara', to: '/kenya-safaris/masai-mara/3-day', price: 'USD 595 pp', highlights: ['Big Five', 'Game Drives', 'Camp'], badge: 'Most Popular' },
  { title: '4-Day Masai Mara Safari', duration: '4 Days / 3 Nights', description: 'Three days of game driving — enough time to explore multiple zones of the reserve and cover more ground.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Masai Mara sunset', to: '/kenya-safaris/masai-mara/4-day', price: 'USD 795 pp', highlights: ['Big Five', 'Multiple Zones', 'Full Board'] },
  { title: '5-Day Masai Mara Safari', duration: '5 Days / 4 Nights', description: 'An unhurried Mara stay — time for game drives, a Maasai village visit, and a dawn bush walk.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Cheetah on the Mara', to: '/kenya-safaris/masai-mara/5-day', price: 'USD 995 pp', highlights: ['Big Five', 'Village Visit', 'Bush Walk'] },
  { title: '7-Day Masai Mara Safari', duration: '7 Days / 6 Nights', description: 'The ultimate Mara immersion — spend a week exploring every corner of the reserve with a dedicated guide.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Elephants crossing Mara River', to: '/kenya-safaris/masai-mara/7-day', price: 'USD 1,595 pp', highlights: ['Big Five', 'All Zones', 'Private Guide'], badge: 'Immersive' },
  { title: 'Migration Safari', duration: '5 Days / 4 Nights', description: 'Witness the wildebeest river crossings — timed for the peak of the Great Migration season.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', alt: 'Wildebeest crossing Mara River', to: '/kenya-safaris/masai-mara/migration', price: 'USD 1,295 pp', highlights: ['Migration', 'River Crossings', 'Jul–Oct'], badge: 'Seasonal' },
  { title: 'Fly-In Safari', duration: '3 Days / 2 Nights', description: 'Skip the drive — fly from Nairobi in 45 minutes and land right in the heart of the reserve.', img: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?w=600&h=400&fit=crop&auto=format', alt: 'Small aircraft in Masai Mara', to: '/kenya-safaris/masai-mara/fly-in', price: 'USD 1,195 pp', highlights: ['Charter Flight', 'Bush Airstrip', 'Premium Camp'] },
  { title: 'Luxury Masai Mara', duration: '4 Days / 3 Nights', description: 'Five-star tented camps, private game vehicles, and butler service in the heart of the Mara.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', alt: 'Luxury tented camp interior', to: '/kenya-safaris/masai-mara/luxury', price: 'USD 2,450 pp', highlights: ['5-Star Camp', 'Private Vehicle', 'All-Inclusive'], badge: 'Premium' },
]

const FACTS = [
  { label: 'Location', value: 'Narok County, southwestern Kenya' },
  { label: 'Size', value: '1,510 km²' },
  { label: 'Best Time', value: 'Year-round; Migration Jul–Oct' },
  { label: 'Drive from Nairobi', value: '5–6 hours' },
  { label: 'Flight from Nairobi', value: '45 minutes' },
  { label: 'Big Five', value: 'All present year-round' },
]

export default function MasaiMaraHub() {
  return (
    <div>
      <PageHero
        title="Masai Mara Safaris"
        subtitle="Kenya's most celebrated reserve — home to the Big Five, the Great Migration, and Africa's greatest concentration of predators."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Lion pride at dawn in the Masai Mara"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Masai Mara' }]}
        tag="Kenya's Crown Jewel"
        height="md"
      />

      {/* Quick facts */}
      <section className="bg-[#2a1a0e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {FACTS.map((f) => (
            <div key={f.label}>
              <p className="text-[9px] tracking-[0.22em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-1">{f.label}</p>
              <p className="text-[13px] font-[Outfit] text-[#f5f0e8]">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">All packages</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Masai Mara Safari Packages</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((p) => <SafariCard key={p.title} {...p} />)}
        </div>
      </section>

      {/* About the reserve */}
      <section className="bg-[#ede7d9] py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Park Guide</p>
            <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>About Masai Mara National Reserve</h2>
            <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-4">
              The Masai Mara National Reserve covers 1,510 km² of open savanna in southwestern Kenya. Together with Tanzania's Serengeti, it forms a 25,000 km² ecosystem that supports the largest terrestrial mammal migration on Earth.
            </p>
            <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-6">
              The Mara is famous for its remarkable density of lions — the highest in Africa — as well as large populations of cheetah, leopard, elephant, buffalo, and giraffe. Year-round game viewing means there is never truly a bad time to visit.
            </p>
            <Link to="/kenya-safaris/masai-mara/national-reserve" className="text-[13px] font-[Outfit] font-[500] text-[#a0522d] border border-[#a0522d] px-5 py-2.5 rounded hover:bg-[#a0522d] hover:text-[#f5f0e8] transition-all inline-block">
              Full Reserve Guide →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=500&fit=crop&auto=format" alt="Lions in Masai Mara" className="rounded-xl object-cover w-full h-64" />
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop&auto=format" alt="Wildebeest herd" className="rounded-xl object-cover w-full h-36 self-end" />
            <img src="https://images.unsplash.com/photo-1520116468816-95b69f847357?w=400&h=300&fit=crop&auto=format" alt="Hot air balloon over Mara" className="rounded-xl object-cover w-full h-36 col-start-2 row-start-1" />
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 flex flex-wrap gap-3">
        <p className="w-full text-[12px] font-[Outfit] font-[600] text-[#8b7355] uppercase tracking-widest mb-2">Also explore</p>
        {[
          { label: 'Masai Mara Group Safaris', to: '/kenya-safaris/group-safaris/masai-mara/3-day' },
          { label: 'Mara Balloon Safari', to: '/kenya-safaris/activities/balloon-safaris/masai-mara' },
          { label: 'Mara Accommodation', to: '/kenya-safaris/accommodation/masai-mara' },
          { label: 'Safari From Nairobi', to: '/kenya-safaris/masai-mara/from-nairobi' },
          { label: 'Migration Cost Guide', to: '/kenya-safaris/guides/masai-mara-cost' },
        ].map((l) => (
          <Link key={l.label} to={l.to} className="text-[13px] font-[Outfit] text-[#3d2b1a] border border-[#d4c9b4] px-4 py-2 rounded hover:border-[#a0522d] hover:text-[#a0522d] transition-all">
            {l.label}
          </Link>
        ))}
      </section>
    </div>
  )
}
