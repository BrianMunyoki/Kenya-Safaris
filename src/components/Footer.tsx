import { Link } from 'react-router'

const COLS = [
  {
    heading: 'Kenya Safaris',
    links: [
      { label: 'Masai Mara Safaris', to: '/kenya-safaris/masai-mara' },
      { label: 'Amboseli Safaris', to: '/kenya-safaris/amboseli' },
      { label: 'Tsavo Safaris', to: '/kenya-safaris/tsavo' },
      { label: 'Lake Nakuru', to: '/kenya-safaris/lake-nakuru' },
      { label: 'Group Safaris', to: '/kenya-safaris/group-safaris' },
      { label: 'Safari Packages', to: '/kenya-safaris/packages' },
    ],
  },
  {
    heading: 'Safari Types',
    links: [
      { label: 'Luxury Safaris', to: '/kenya-safaris/types/luxury' },
      { label: 'Family Safaris', to: '/kenya-safaris/types/family' },
      { label: 'Honeymoon Safaris', to: '/kenya-safaris/types/honeymoon' },
      { label: 'Photography Safaris', to: '/kenya-safaris/types/photography' },
      { label: 'Fly-In Safaris', to: '/kenya-safaris/types/fly-in' },
      { label: 'Safari & Beach', to: '/kenya-safaris/types/beach' },
    ],
  },
  {
    heading: 'Destinations',
    links: [
      { label: 'Tanzania', to: '/destinations/tanzania' },
      { label: 'Botswana', to: '/destinations/botswana' },
      { label: 'Rwanda', to: '/destinations/rwanda' },
      { label: 'South Africa', to: '/destinations/south-africa' },
      { label: 'Mozambique', to: '/destinations/mozambique' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Sustainability', to: '/about/sustainability' },
      { label: 'DMC & Corporate', to: '/dmc-corporate' },
      { label: 'Press & Media', to: '/about/press-media' },
      { label: 'Contact & FAQs', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#2a1a0e] text-[#c8b896]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex flex-col leading-none mb-4">
              <span className="text-[22px] font-[Fraunces] font-[400] text-[#f5f0e8]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                Savanna & Beyond
              </span>
              <span className="text-[9px] tracking-[0.28em] uppercase text-[#8b7355] mt-1 font-[Outfit]">
                Kenya Safari Specialists
              </span>
            </Link>
            <p className="text-[13px] font-[Outfit] font-[300] leading-relaxed text-[#8b7355] max-w-[220px]">
              Tailor-made safaris across East and Southern Africa since 2009.
            </p>
            <div className="mt-6 flex gap-3">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((s) => (
                <a key={s} href="#" aria-label={s} className="w-8 h-8 rounded-full border border-[#6b4226] flex items-center justify-center hover:border-[#c8901a] hover:text-[#c8901a] transition-colors text-[11px] uppercase font-[Outfit]">
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#8b7355] mb-4 font-[Outfit] font-[600]">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13px] font-[Outfit] font-[300] text-[#c8b896] hover:text-[#f5f0e8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-[#3d2b1a] pt-8 mb-8 flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-1">Phone / WhatsApp</p>
            <a href="tel:+254700000000" className="text-[14px] font-[Outfit] text-[#f5f0e8] hover:text-[#e8b84b] transition-colors">
              +254 700 000 000
            </a>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-1">Email</p>
            <a href="mailto:info@safarico.ke" className="text-[14px] font-[Outfit] text-[#f5f0e8] hover:text-[#e8b84b] transition-colors">
              info@safarico.ke
            </a>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8b7355] font-[Outfit] font-[600] mb-1">Based In</p>
            <p className="text-[14px] font-[Outfit] text-[#f5f0e8]">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-[11px] font-[Outfit] text-[#6b4226]">
          <p>© 2026 Savanna & Beyond Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c8b896] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c8b896] transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-[#c8b896] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
