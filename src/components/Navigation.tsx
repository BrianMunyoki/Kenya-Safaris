import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

interface NavLink { label: string; to: string; note?: string }
interface MenuGroup { heading?: string; items: NavLink[] }
interface NavItem { label: string; to?: string; groups?: MenuGroup[] }

const NAV: NavItem[] = [
  {
    label: 'Kenya Safaris',
    to: '/kenya-safaris',
    groups: [
      {
        heading: 'Masai Mara',
        items: [
          { label: '2-Day Safari', to: '/kenya-safaris/masai-mara/2-day' },
          { label: '3-Day Safari', to: '/kenya-safaris/masai-mara/3-day' },
          { label: '4-Day Safari', to: '/kenya-safaris/masai-mara/4-day' },
          { label: '5-Day Safari', to: '/kenya-safaris/masai-mara/5-day' },
          { label: '7-Day Safari', to: '/kenya-safaris/masai-mara/7-day' },
          { label: 'Safaris From Nairobi', to: '/kenya-safaris/masai-mara/from-nairobi' },
          { label: 'Fly-In Safaris', to: '/kenya-safaris/masai-mara/fly-in' },
          { label: 'Migration Safaris', to: '/kenya-safaris/masai-mara/migration', note: 'Jul–Oct' },
          { label: 'Luxury Safaris', to: '/kenya-safaris/masai-mara/luxury' },
          { label: 'Masai Mara Reserve', to: '/kenya-safaris/masai-mara/national-reserve' },
        ],
      },
      {
        heading: 'More Destinations',
        items: [
          { label: 'Amboseli Day Safari', to: '/kenya-safaris/amboseli/day' },
          { label: '2-Day Amboseli', to: '/kenya-safaris/amboseli/2-day' },
          { label: '3-Day Amboseli', to: '/kenya-safaris/amboseli/3-day' },
          { label: 'Amboseli National Park', to: '/kenya-safaris/amboseli/national-park' },
          { label: '2-Day Tsavo Safari', to: '/kenya-safaris/tsavo/2-day' },
          { label: '3-Day Tsavo Safari', to: '/kenya-safaris/tsavo/3-day' },
          { label: 'Tsavo East', to: '/kenya-safaris/tsavo/east' },
          { label: 'Tsavo West', to: '/kenya-safaris/tsavo/west' },
          { label: 'Lake Nakuru', to: '/kenya-safaris/lake-nakuru' },
        ],
      },
      {
        heading: 'Safari Types',
        items: [
          { label: 'Family Safaris', to: '/kenya-safaris/types/family' },
          { label: 'Fly-In Safaris', to: '/kenya-safaris/types/fly-in' },
          { label: 'Honeymoon Safaris', to: '/kenya-safaris/types/honeymoon' },
          { label: 'Luxury Safaris', to: '/kenya-safaris/types/luxury' },
          { label: 'Photography Safaris', to: '/kenya-safaris/types/photography' },
          { label: 'Safari & Beach', to: '/kenya-safaris/types/beach' },
          { label: 'Private Tours', to: '/kenya-safaris/types/private' },
        ],
      },
      {
        heading: 'Group Safaris',
        items: [
          { label: '2-Day Masai Mara Group', to: '/kenya-safaris/group-safaris/masai-mara/2-day' },
          { label: '3-Day Masai Mara Group', to: '/kenya-safaris/group-safaris/masai-mara/3-day' },
          { label: '4-Day Masai Mara Group', to: '/kenya-safaris/group-safaris/masai-mara/4-day' },
          { label: '5-Day Masai Mara Group', to: '/kenya-safaris/group-safaris/masai-mara/5-day' },
          { label: '7-Day Masai Mara Group', to: '/kenya-safaris/group-safaris/masai-mara/7-day' },
          { label: 'All Group Safaris', to: '/kenya-safaris/group-safaris' },
        ],
      },
      {
        heading: 'Activities',
        items: [
          { label: 'Game Drives', to: '/kenya-safaris/activities/game-drives' },
          { label: 'Mara Game Drives', to: '/kenya-safaris/activities/game-drives/masai-mara' },
          { label: 'Walking Safaris', to: '/kenya-safaris/activities/walking-safaris' },
          { label: 'Hot-Air Balloon Safaris', to: '/kenya-safaris/activities/balloon-safaris' },
          { label: 'Birdwatching', to: '/kenya-safaris/activities/birdwatching' },
          { label: 'Mountain Trekking', to: '/kenya-safaris/activities/mountain-trekking' },
        ],
      },
      {
        heading: 'Accommodation & Guides',
        items: [
          { label: 'Masai Mara Lodges', to: '/kenya-safaris/accommodation/masai-mara' },
          { label: 'Luxury Mara Camps', to: '/kenya-safaris/accommodation/masai-mara/luxury' },
          { label: 'Amboseli Lodges', to: '/kenya-safaris/accommodation/amboseli' },
          { label: 'All Kenya Lodges', to: '/kenya-safaris/accommodation/all-lodges' },
          { label: 'Kenya Safari Cost', to: '/kenya-safaris/guides/kenya-safari-cost' },
          { label: 'Masai Mara Cost', to: '/kenya-safaris/guides/masai-mara-cost' },
          { label: 'Nairobi–Mara Flights', to: '/kenya-safaris/guides/nairobi-mara-flights' },
        ],
      },
    ],
  },
  {
    label: 'Other Destinations',
    to: '/destinations',
    groups: [
      {
        heading: 'East Africa',
        items: [
          { label: 'Tanzania', to: '/destinations/tanzania', note: 'Serengeti & Ngorongoro' },
          { label: 'Rwanda', to: '/destinations/rwanda', note: 'Gorilla Trekking' },
        ],
      },
      {
        heading: 'Southern Africa',
        items: [
          { label: 'Botswana', to: '/destinations/botswana', note: 'Okavango Delta' },
          { label: 'South Africa', to: '/destinations/south-africa', note: 'Kruger & Cape' },
          { label: 'Mozambique', to: '/destinations/mozambique', note: 'Indian Ocean Coast' },
        ],
      },
    ],
  },
  {
    label: 'DMC & Corporate',
    to: '/dmc-corporate',
    groups: [
      {
        heading: 'Destination Management',
        items: [
          { label: 'VIP Arrivals & Departures', to: '/dmc-corporate' },
          { label: 'Group Logistics', to: '/dmc-corporate' },
          { label: 'Ground Handling', to: '/dmc-corporate' },
          { label: 'Crisis Management', to: '/dmc-corporate' },
        ],
      },
      {
        heading: 'Corporate & Events',
        items: [
          { label: 'MICE Travel', to: '/dmc-corporate' },
          { label: 'Corporate Retreats', to: '/dmc-corporate' },
          { label: 'Bespoke Events', to: '/dmc-corporate' },
        ],
      },
    ],
  },
  { label: 'Plan My Trip', to: '/plan-my-trip' },
  {
    label: 'About',
    to: '/about',
    groups: [
      {
        items: [
          { label: 'About Us', to: '/about' },
          { label: 'Sustainability', to: '/about/sustainability' },
          { label: 'Press & Media', to: '/about/press-media' },
        ],
      },
    ],
  },
  { label: 'Contact & FAQs', to: '/contact' },
]

const FEATURE_CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=180&fit=crop&auto=format',
    title: 'Great Migration',
    desc: 'Witness the Mara crossing Jul–Oct',
    to: '/kenya-safaris/masai-mara/migration',
  },
  {
    img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=180&fit=crop&auto=format',
    title: 'Hot-Air Balloon Safaris',
    desc: 'Sunrise flights over the Masai Mara',
    to: '/kenya-safaris/activities/balloon-safaris/masai-mara',
  },
  {
    img: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=300&h=180&fit=crop&auto=format',
    title: 'Luxury Camps',
    desc: 'Tented camps with world-class service',
    to: '/kenya-safaris/accommodation/masai-mara/luxury',
  },
]

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 130)
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const active = NAV.find((i) => i.label === activeMenu)

  return (
    <header ref={navRef} className="sticky top-0 z-50">
      {/* Top strip */}
      <div className="bg-[#2a1a0e] text-[#c8b896] text-[11px] font-[Outfit] tracking-widest uppercase px-6 lg:px-10 py-2 flex justify-between items-center">
        <span>East Africa's Premier Safari Outfitter</span>
        <div className="hidden sm:flex gap-6 items-center">
          <a href="tel:+254700000000" className="hover:text-[#e8b84b] transition-colors">+254 700 000 000</a>
          <span className="text-[#6b4226]">|</span>
          <a href="mailto:info@safarico.ke" className="hover:text-[#e8b84b] transition-colors">info@safarico.ke</a>
        </div>
      </div>

      {/* Main bar */}
      <nav className="bg-[#f5f0e8] border-b border-[#d4c9b4] px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none shrink-0">
            <span className="text-xl lg:text-[22px] font-[Fraunces] font-[400] text-[#2a1a0e] tracking-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Savanna & Beyond
            </span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#8b7355] font-[Outfit] mt-0.5">
              Kenya Safari Specialists
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-stretch h-full">
            {NAV.map((item) => {
              const isActive = activeMenu === item.label
              return (
                <li key={item.label} className="flex items-stretch">
                  <button
                    className={`relative flex items-center gap-1 px-4 xl:px-5 text-[13px] font-[Outfit] font-[500] tracking-wide transition-colors ${isActive ? 'text-[#a0522d]' : 'text-[#3d2b1a] hover:text-[#a0522d]'}`}
                    onMouseEnter={() => item.groups ? openMenu(item.label) : scheduleClose()}
                    onMouseLeave={scheduleClose}
                    onClick={() => item.groups
                      ? setActiveMenu(isActive ? null : item.label)
                      : undefined
                    }
                  >
                    {item.label}
                    {item.groups && (
                      <svg
                        width="10" height="6" viewBox="0 0 10 6" fill="none"
                        className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {isActive && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#a0522d] rounded-full" />}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link to="/plan-my-trip" className="text-[13px] font-[Outfit] font-[500] text-[#3d2b1a] border border-[#3d2b1a] px-4 py-2 rounded hover:bg-[#3d2b1a] hover:text-[#f5f0e8] transition-all duration-200">
              Plan My Trip
            </Link>
            <Link to="/contact" className="text-[13px] font-[Outfit] font-[500] bg-[#a0522d] text-[#f5f0e8] px-5 py-2 rounded hover:bg-[#8b4020] transition-colors duration-200">
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#3d2b1a]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-0.5 bg-current transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Desktop mega-menu */}
      {activeMenu && active?.groups && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 bg-[#f5f0e8] border-b border-[#d4c9b4] shadow-2xl shadow-black/10 z-40"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-[1400px] mx-auto px-10 py-10">
            <div
              className="grid gap-x-8 gap-y-2"
              style={{ gridTemplateColumns: `repeat(${Math.min(active.groups.length, 6)}, 1fr)` }}
            >
              {active.groups.map((group, gi) => (
                <div key={gi}>
                  {group.heading && (
                    <p className="text-[10px] tracking-[0.22em] uppercase text-[#8b7355] mb-3 pb-2.5 border-b border-[#d4c9b4] font-[Outfit] font-[600]">
                      {group.heading}
                    </p>
                  )}
                  <ul className="flex flex-col gap-1">
                    {group.items.map((item, ii) => (
                      <li key={ii}>
                        <Link
                          to={item.to}
                          className="flex items-baseline justify-between gap-2 text-[13px] text-[#3d2b1a] hover:text-[#a0522d] font-[Outfit] py-[3px] group/link transition-colors"
                        >
                          <span className="group-hover/link:translate-x-0.5 transition-transform duration-150 inline-block">
                            {item.label}
                          </span>
                          {item.note && (
                            <span className="text-[10px] text-[#8b7355] shrink-0">{item.note}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Feature strip for Kenya Safaris */}
            {activeMenu === 'Kenya Safaris' && (
              <div className="mt-8 pt-6 border-t border-[#d4c9b4] flex gap-4 lg:gap-6">
                {FEATURE_CARDS.map((card) => (
                  <Link
                    key={card.title}
                    to={card.to}
                    className="group/card flex gap-3 items-center hover:bg-[#ede7d9] rounded-lg p-2 transition-colors -m-2"
                  >
                    <div className="w-28 h-16 shrink-0 rounded-md overflow-hidden bg-[#d4c9b4]">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-[Fraunces] font-[400] text-[#2a1a0e]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                        {card.title}
                      </p>
                      <p className="text-[11px] text-[#8b7355] font-[Outfit] mt-0.5">{card.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#f5f0e8] border-t border-[#d4c9b4] overflow-y-auto max-h-[80vh] shadow-xl">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-[#ede7d9]">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-[13px] font-[Outfit] font-[500] text-[#3d2b1a] text-left"
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                {item.groups && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`text-[#8b7355] transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              {item.groups && mobileExpanded === item.label && (
                <div className="bg-[#ede7d9] px-6 pb-5 pt-3 space-y-5">
                  {item.groups.map((group, gi) => (
                    <div key={gi}>
                      {group.heading && (
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] mb-2 font-[Outfit] font-[600]">{group.heading}</p>
                      )}
                      <ul className="flex flex-col gap-2">
                        {group.items.map((sub, si) => (
                          <li key={si}>
                            <Link to={sub.to} className="text-[13px] text-[#3d2b1a] hover:text-[#a0522d] font-[Outfit] transition-colors">
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-3 p-6">
            <Link to="/plan-my-trip" className="flex-1 text-center text-[13px] font-[Outfit] font-[500] text-[#3d2b1a] border border-[#3d2b1a] px-4 py-2.5 rounded">
              Plan My Trip
            </Link>
            <Link to="/contact" className="flex-1 text-center text-[13px] font-[Outfit] font-[500] bg-[#a0522d] text-[#f5f0e8] px-4 py-2.5 rounded">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
