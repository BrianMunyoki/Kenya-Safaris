export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#2a1a0e]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&h=1000&fit=crop&auto=format"
          alt="Wildebeest crossing the Mara River during the Great Migration, Masai Mara, Kenya"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e06] via-[#1a0e06]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e06]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24 w-full">
        <div className="max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#e8b84b] mb-4 font-[Outfit]">
            Kenya · Tanzania · Botswana · Rwanda
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
            Tailor-made safaris across Kenya's most extraordinary wilderness —
            from the wildebeest migration on the Mara to the elephants of Amboseli.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#a0522d] hover:bg-[#8b4020] text-[#f5f0e8] font-[Outfit] font-[500] px-8 py-3.5 rounded transition-colors text-sm tracking-wide">
              Explore Kenya Safaris
            </button>
            <button className="border border-[#c8b896]/50 hover:border-[#c8b896] text-[#c8b896] font-[Outfit] font-[400] px-8 py-3.5 rounded transition-colors text-sm tracking-wide">
              Plan My Trip
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 lg:mt-20 flex gap-8 lg:gap-16 flex-wrap">
          {[
            { value: '15+', label: 'Years in Kenya' },
            { value: '2,400+', label: 'Safaris Operated' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '12', label: 'Destinations Covered' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-2xl lg:text-3xl font-[Fraunces] font-[400] text-[#e8b84b]"
                style={{ fontFamily: 'Fraunces, Georgia, serif' }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#8b7355] font-[Outfit] tracking-wide mt-0.5 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#8b7355] font-[Outfit] [writing-mode:vertical-rl] rotate-180">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8b7355] to-transparent" />
      </div>
    </section>
  )
}
