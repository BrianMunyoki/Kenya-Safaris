import { Link } from 'react-router'
import PageHero from '../../components/PageHero'

export default function LakeNakuruSafaris() {
  return (
    <div>
      <PageHero
        title="Lake Nakuru Safaris"
        subtitle="A soda lake fringed by a million flamingos, a rhino sanctuary, and prolific birdlife in the Great Rift Valley."
        img="https://images.unsplash.com/photo-1504173010664-32509107de42?w=1800&h=900&fit=crop&auto=format"
        alt="Flamingos at Lake Nakuru"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Kenya Safaris', to: '/kenya-safaris' }, { label: 'Lake Nakuru' }]}
        tag="Rift Valley · Flamingos · Rhino"
        height="md"
      />
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-[Fraunces] font-[300] text-[#2a1a0e] mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>About Lake Nakuru</h2>
          <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-5">
            Lake Nakuru National Park surrounds the shallow alkaline lake in the Great Rift Valley, 160 km northwest of Nairobi. The park is most famous for its extraordinary concentrations of lesser flamingos — at peak numbers, over a million birds coat the lake shore in a continuous pink band.
          </p>
          <p className="text-[15px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-6">
            Beyond flamingos, the park harbours both black and white rhino in a protected sanctuary, as well as lion, leopard, giraffe, buffalo, and waterbuck. The euphorbia forest on the eastern shore is one of the most unusual habitats in Kenya.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[['Size', '188 km²'], ['Distance from Nairobi', '160 km (2 hrs)'], ['Rhino Status', 'Sanctuary (both species)'], ['Best For', 'Flamingos & birds'], ['Park Fee', 'USD 60 pp/day'], ['Altitude', '1,753m']].map(([k, v]) => (
              <div key={k} className="border-b border-[#e8e0d0] pb-3">
                <p className="text-[10px] uppercase tracking-wide text-[#8b7355] font-[Outfit] mb-0.5">{k}</p>
                <p className="text-[14px] font-[Outfit] font-[500] text-[#2a1a0e]">{v}</p>
              </div>
            ))}
          </div>
          <Link to="/plan-my-trip" className="inline-block bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-7 py-3 rounded text-sm transition-colors">
            Plan a Nakuru Safari
          </Link>
        </div>
        <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1504173010664-32509107de42?w=700&h=450&fit=crop&auto=format" alt="Flamingos at Lake Nakuru" className="rounded-xl w-full object-cover h-64" />
          <div className="bg-[#ede7d9] rounded-xl p-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-3">Combine with</p>
            <ul className="space-y-2">
              {[{ label: 'Masai Mara (2-day add-on)', to: '/kenya-safaris/masai-mara/2-day' }, { label: 'Lake Naivasha & Hell\'s Gate', to: '/kenya-safaris/guides/naivasha-hellsgate' }, { label: 'Multi-Destination Packages', to: '/kenya-safaris/packages/multi-destination' }].map((l) => (
                <li key={l.label}><Link to={l.to} className="text-[13px] font-[Outfit] text-[#3d2b1a] hover:text-[#a0522d] transition-colors">→ {l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
