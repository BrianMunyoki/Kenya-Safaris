import PageHero from '../../components/PageHero'
import SafariCard from '../../components/SafariCard'

const PACKAGES = [
  { title: '2-Day Masai Mara Group Safari', duration: '2 Days / 1 Night', description: 'Join a shared 4×4 with up to 6 guests — the most affordable way to experience the Masai Mara.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Group game drive Masai Mara', to: '/kenya-safaris/group-safaris/masai-mara/2-day', price: 'USD 295 pp', highlights: ['Shared Vehicle', 'Budget Friendly', 'Tented Camp'] },
  { title: '3-Day Masai Mara Group Safari', duration: '3 Days / 2 Nights', description: 'Two full game-drive days in a shared vehicle — the ideal balance of value and experience.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Wildlife viewing in Masai Mara', to: '/kenya-safaris/group-safaris/masai-mara/3-day', price: 'USD 425 pp', highlights: ['Big Five', 'Shared 4×4', 'Full Board'], badge: 'Most Popular' },
  { title: '4-Day Masai Mara Group Safari', duration: '4 Days / 3 Nights', description: 'Three days to properly explore the reserve — Mara Triangle, central plains, and Sand River sector.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Safari vehicle in Masai Mara', to: '/kenya-safaris/group-safaris/masai-mara/4-day', price: 'USD 545 pp', highlights: ['Multiple Zones', 'Village Visit', 'Full Board'] },
  { title: '5-Day Masai Mara Group Safari', duration: '5 Days / 4 Nights', description: 'A thorough group safari experience — bush walks, cultural visits, and four game-drive days.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Masai Mara game drive sunset', to: '/kenya-safaris/group-safaris/masai-mara/5-day', price: 'USD 695 pp', highlights: ['Bush Walk', 'Maasai Village', 'Big Five'] },
  { title: '7-Day Masai Mara Group Safari', duration: '7 Days / 6 Nights', description: 'The ultimate group experience — a full week covering every zone of the Masai Mara ecosystem.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Elephants in Masai Mara', to: '/kenya-safaris/group-safaris/masai-mara/7-day', price: 'USD 995 pp', highlights: ['All Zones', 'Full Immersion', 'Cultural Visits'], badge: 'Best Value' },
]

export default function GroupSafaris() {
  return (
    <div>
      <PageHero
        title="Kenya Group Safaris"
        subtitle="Shared departures, shared vehicles, and significantly lower prices — without compromising on the quality of your wildlife experience."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Group game drive in Masai Mara"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Group Safaris' }]}
        tag="Budget-Friendly · Shared Vehicles"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Masai Mara Group Packages</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Choose Your Group Safari</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PACKAGES.map((p) => <SafariCard key={p.title} {...p} />)}
        </div>
        <div className="mt-14 bg-[#ede7d9] rounded-2xl p-8 lg:p-10">
          <h3 className="text-xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>How Group Safaris Work</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-[14px] font-[Outfit] text-[#6b4226] font-[300]">
            <div><div className="w-6 h-px bg-[#c8901a] mb-3" /><strong className="text-[#2a1a0e] block mb-1">Shared vehicles</strong>Up to 6 guests per pop-top 4×4 safari vehicle. You may be grouped with other travellers.</div>
            <div><div className="w-6 h-px bg-[#c8901a] mb-3" /><strong className="text-[#2a1a0e] block mb-1">Fixed departures</strong>We run group departures most days from Nairobi. Check current availability with our team.</div>
            <div><div className="w-6 h-px bg-[#c8901a] mb-3" /><strong className="text-[#2a1a0e] block mb-1">Private upgrade</strong>Want the vehicle to yourselves? Upgrade to a private safari at any time — we'll quote you the difference.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
