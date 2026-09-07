import { Link } from 'react-router'

interface Breadcrumb { label: string; to?: string }

interface PageHeroProps {
  title: string
  subtitle?: string
  img: string
  alt: string
  breadcrumbs?: Breadcrumb[]
  tag?: string
  cta?: { label: string; to: string }
  height?: 'sm' | 'md' | 'lg'
}

export default function PageHero({ title, subtitle, img, alt, breadcrumbs, tag, cta, height = 'md' }: PageHeroProps) {
  const heights = { sm: 'min-h-[40vh]', md: 'min-h-[60vh]', lg: 'min-h-[80vh]' }
  return (
    <section className={`relative ${heights[height]} flex items-end bg-[#2a1a0e] overflow-hidden`}>
      <div className="absolute inset-0">
        <img src={img} alt={alt} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e06] via-[#1a0e06]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e06]/40 to-transparent" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-12 lg:pb-16 w-full">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 mb-4 flex-wrap">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#6b4226] text-xs">/</span>}
                {b.to ? (
                  <Link to={b.to} className="text-[11px] tracking-[0.15em] uppercase font-[Outfit] text-[#8b7355] hover:text-[#c8b896] transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-[11px] tracking-[0.15em] uppercase font-[Outfit] text-[#c8b896]">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {tag && (
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#e8b84b] mb-3 font-[Outfit]">{tag}</p>
        )}
        <h1
          className="text-3xl lg:text-5xl xl:text-6xl font-[Fraunces] font-[300] text-[#f5f0e8] leading-[1.08] mb-4 max-w-3xl"
          style={{ fontFamily: 'Fraunces, Georgia, serif' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-base lg:text-lg text-[#c8b896] font-[Outfit] font-[300] leading-relaxed max-w-xl mb-6">
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            to={cta.to}
            className="inline-block bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-7 py-3 rounded text-sm tracking-wide transition-colors"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}
