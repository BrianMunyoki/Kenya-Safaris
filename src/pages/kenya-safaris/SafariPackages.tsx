import PageHero from '../../components/PageHero'
import SafariCard from '../../components/SafariCard'

const ALL = [
  { title: '2-Day Masai Mara Safari', duration: '2 Days / 1 Night', description: 'Compact Mara experience — one night, two game drives.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Masai Mara game drive', to: '/kenya-safaris/masai-mara/2-day', price: 'USD 395 pp', highlights: ['Big Five', 'Tented Camp'] },
  { title: '3-Day Masai Mara Safari', duration: '3 Days / 2 Nights', description: 'Our most popular package — two full game-drive days.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop&auto=format', alt: 'Lions in Masai Mara', to: '/kenya-safaris/masai-mara/3-day', price: 'USD 595 pp', highlights: ['Big Five', 'Game Drives'], badge: 'Best Seller' },
  { title: 'Migration Safari', duration: '5 Days / 4 Nights', description: 'Wildebeest crossing the Mara River — Jul–Oct only.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', alt: 'Wildebeest migration', to: '/kenya-safaris/masai-mara/migration', price: 'USD 1,295 pp', highlights: ['Migration', 'River Crossing'], badge: 'Seasonal' },
  { title: 'Luxury Masai Mara', duration: '4 Days / 3 Nights', description: 'Five-star camps, private vehicle, butler service.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', alt: 'Luxury camp Masai Mara', to: '/kenya-safaris/masai-mara/luxury', price: 'USD 2,450 pp', highlights: ['5-Star', 'Private Vehicle'], badge: 'Premium' },
  { title: '3-Day Amboseli Safari', duration: '3 Days / 2 Nights', description: 'Elephant herds below Kilimanjaro — the classic Amboseli.', img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&h=400&fit=crop&auto=format', alt: 'Amboseli elephants', to: '/kenya-safaris/amboseli/3-day', price: 'USD 695 pp', highlights: ['Elephants', 'Kilimanjaro'] },
  { title: '3-Day Tsavo Safari', duration: '3 Days / 2 Nights', description: 'Kenya\'s largest park — red elephants and volcanic drama.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', alt: 'Tsavo landscape', to: '/kenya-safaris/tsavo/3-day', price: 'USD 575 pp', highlights: ['Red Elephants', 'East & West'] },
  { title: 'All Kenya Safari Packages', duration: 'Multi-day', description: 'Browse our full catalogue of Kenya safari packages.', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=600&h=400&fit=crop&auto=format', alt: 'Kenya safari landscape', to: '/kenya-safaris/packages/all-kenya', price: 'From USD 395 pp', highlights: ['All Destinations', 'Custom Dates'] },
  { title: 'Multi-Destination Kenya', duration: '7–14 Days', description: 'Combine Masai Mara, Amboseli, Tsavo, and Nakuru in one extended safari.', img: 'https://images.unsplash.com/photo-1504173010664-32509107de42?w=600&h=400&fit=crop&auto=format', alt: 'Multi-destination Kenya safari', to: '/kenya-safaris/packages/multi-destination', price: 'From USD 1,895 pp', highlights: ['Multiple Parks', 'Tailor-Made'] },
]

export default function SafariPackages() {
  return (
    <div>
      <PageHero
        title="Kenya Safari Packages"
        subtitle="Every package is available on flexible dates and can be customised to your group size, budget, and accommodation preferences."
        img="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=900&fit=crop&auto=format"
        alt="Kenya safari overview"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Packages' }]}
        tag="All Kenya Safari Packages"
        height="sm"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>All Safari Packages</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ALL.map((p) => <SafariCard key={p.title} {...p} />)}
        </div>
      </section>
    </div>
  )
}
