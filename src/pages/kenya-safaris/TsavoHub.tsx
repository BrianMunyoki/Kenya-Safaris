import { Link } from 'react-router'
import PageHero from '../../components/PageHero'
import SafariCard from '../../components/SafariCard'

const PACKAGES = [
  { title: '2-Day Tsavo Safari', duration: '2 Days / 1 Night', description: 'Kenya\'s largest wilderness in a compact package — red elephants, Lugard Falls, and the vast open plains.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', alt: 'Tsavo landscape', to: '/kenya-safaris/tsavo/2-day', price: 'USD 375 pp', highlights: ['Red Elephants', 'Lugard Falls', 'Baobabs'] },
  { title: '3-Day Tsavo Safari', duration: '3 Days / 2 Nights', description: 'Split between Tsavo East and West — open plains and volcanic drama combined in a single safari.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop&auto=format', alt: 'Elephant in Tsavo', to: '/kenya-safaris/tsavo/3-day', price: 'USD 575 pp', highlights: ['East & West', 'Mzima Springs', 'Crater Walk'], badge: 'Best Value' },
]

const PARKS = [
  { title: 'Tsavo East', desc: 'Open plains, the Galana River, and Kenya\'s largest elephant herds — stained red by the iron-rich soil.', to: '/kenya-safaris/tsavo/east', tag: '13,747 km²' },
  { title: 'Tsavo West', desc: 'Volcanic craters, lava fields, Mzima Springs, and a black rhino sanctuary in a dramatically varied landscape.', to: '/kenya-safaris/tsavo/west', tag: '9,065 km²' },
]

export default function TsavoHub() {
  return (
    <div>
      <PageHero
        title="Tsavo Safaris"
        subtitle="Kenya's largest and most underrated wilderness — two vast national parks, red elephants, and volcanic landscapes seen by relatively few visitors."
        img="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&h=900&fit=crop&auto=format"
        alt="Tsavo landscape with red dust and elephants"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Tsavo' }]}
        tag="Kenya's Largest Wilderness"
        height="md"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">Packages</p>
          <h2 className="text-3xl lg:text-4xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Tsavo Safari Packages</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14 max-w-2xl">
          {PACKAGES.map((p) => <SafariCard key={p.title} {...p} />)}
        </div>

        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-2">The two parks</p>
          <h2 className="text-3xl font-[Fraunces] font-[300] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Tsavo East vs Tsavo West</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          {PARKS.map((park) => (
            <Link key={park.title} to={park.to} className="group border border-[#d4c9b4] rounded-xl p-8 hover:border-[#a0522d] hover:shadow-lg transition-all bg-white">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600]">{park.tag}</span>
              <h3 className="text-xl font-[Fraunces] font-[400] text-[#2a1a0e] mt-2 mb-3 group-hover:text-[#a0522d] transition-colors" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{park.title}</h3>
              <p className="text-[14px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed">{park.desc}</p>
              <span className="inline-block mt-4 text-[13px] font-[Outfit] font-[500] text-[#a0522d]">Park Guide →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
