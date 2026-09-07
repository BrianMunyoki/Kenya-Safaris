import { Link } from 'react-router'

interface SafariCardProps {
  title: string
  duration?: string
  description: string
  img: string
  alt: string
  to: string
  price?: string
  highlights?: string[]
  badge?: string
}

export default function SafariCard({ title, duration, description, img, alt, to, price, highlights, badge }: SafariCardProps) {
  return (
    <Link to={to} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#e8e0d0] hover:border-[#a0522d]/40 hover:shadow-lg hover:shadow-[#a0522d]/10 transition-all duration-300">
      <div className="relative h-52 bg-[#d4c9b4] overflow-hidden">
        <img src={img} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {badge && (
          <span className="absolute top-3 left-3 bg-[#a0522d] text-[#f5f0e8] text-[10px] tracking-[0.15em] uppercase font-[Outfit] font-[500] px-2.5 py-1 rounded">
            {badge}
          </span>
        )}
        {duration && (
          <span className="absolute bottom-3 right-3 bg-[#2a1a0e]/80 backdrop-blur-sm text-[#f5f0e8] text-[11px] font-[Outfit] px-2.5 py-1 rounded">
            {duration}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-[Fraunces] font-[400] text-[#2a1a0e] mb-2 group-hover:text-[#a0522d] transition-colors" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
          {title}
        </h3>
        <p className="text-[13px] text-[#6b4226] font-[Outfit] font-[300] leading-relaxed mb-4 flex-1">
          {description}
        </p>
        {highlights && highlights.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mb-4">
            {highlights.map((h) => (
              <li key={h} className="text-[11px] font-[Outfit] text-[#8b7355] bg-[#f5f0e8] px-2 py-0.5 rounded border border-[#d4c9b4]">
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center justify-between pt-3 border-t border-[#f0e8d8]">
          {price ? (
            <div>
              <span className="text-[10px] text-[#8b7355] font-[Outfit] uppercase tracking-wide">From</span>
              <p className="text-base font-[Fraunces] font-[400] text-[#a0522d]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                {price}
              </p>
            </div>
          ) : <span />}
          <span className="text-[12px] font-[Outfit] font-[500] text-[#a0522d] group-hover:translate-x-1 transition-transform duration-200 inline-block">
            View details →
          </span>
        </div>
      </div>
    </Link>
  )
}
