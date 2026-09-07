import { Outlet, ScrollRestoration } from 'react-router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Root() {
  return (
    <div className="min-h-full flex flex-col bg-[#f5f0e8]">
      <ScrollRestoration />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
