import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#2a1a0e] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=800&fit=crop&auto=format" alt="Masai Mara" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center w-full">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#e8b84b] mb-4 font-[Outfit]">404 — Page Not Found</p>
        <h1 className="text-5xl lg:text-7xl font-[Fraunces] font-[300] text-[#f5f0e8] mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
          Lost in the bush.
        </h1>
        <p className="text-[#c8b896] font-[Outfit] font-[300] mb-10 max-w-md mx-auto">
          The page you're looking for has wandered off into the savanna. Let us guide you back.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/" className="bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-7 py-3 rounded text-sm transition-colors">
            Back to Home
          </Link>
          <Link to="/kenya-safaris" className="border border-[#c8b896]/50 text-[#c8b896] font-[Outfit] font-[400] px-7 py-3 rounded text-sm hover:border-[#c8b896] transition-colors">
            Explore Safaris
          </Link>
        </div>
      </div>
    </section>
  )
}
