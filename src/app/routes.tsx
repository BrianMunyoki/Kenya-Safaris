import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from '../pages/Home'
import KenyaSafarisHub from '../pages/kenya-safaris/KenyaSafarisHub'
import MasaiMaraHub from '../pages/kenya-safaris/MasaiMaraHub'
import AmboseliHub from '../pages/kenya-safaris/AmboseliHub'
import TsavoHub from '../pages/kenya-safaris/TsavoHub'
import LakeNakuruSafaris from '../pages/kenya-safaris/LakeNakuruSafaris'
import GroupSafaris from '../pages/kenya-safaris/GroupSafaris'
import SafariPackages from '../pages/kenya-safaris/SafariPackages'
import SafariTypes from '../pages/kenya-safaris/SafariTypes'
import Activities from '../pages/kenya-safaris/Activities'
import Accommodation from '../pages/kenya-safaris/Accommodation'
import GuidesIndex from '../pages/kenya-safaris/GuidesIndex'
import SafariPackagePage from '../pages/kenya-safaris/SafariPackagePage'
import DestinationsHub from '../pages/destinations/DestinationsHub'
import DestinationPage from '../pages/destinations/DestinationPage'
import DmcCorporate from '../pages/DmcCorporate'
import PlanMyTrip from '../pages/PlanMyTrip'
import AboutUs from '../pages/about/AboutUs'
import Sustainability from '../pages/about/Sustainability'
import PressMedia from '../pages/about/PressMedia'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },

      // Kenya Safaris hub
      { path: 'kenya-safaris', Component: KenyaSafarisHub },

      // Masai Mara
      { path: 'kenya-safaris/masai-mara', Component: MasaiMaraHub },
      { path: 'kenya-safaris/masai-mara/2-day', element: <SafariPackagePage pkg="masai-mara-2day" /> },
      { path: 'kenya-safaris/masai-mara/3-day', element: <SafariPackagePage pkg="masai-mara-3day" /> },
      { path: 'kenya-safaris/masai-mara/4-day', element: <SafariPackagePage pkg="masai-mara-4day" /> },
      { path: 'kenya-safaris/masai-mara/5-day', element: <SafariPackagePage pkg="masai-mara-5day" /> },
      { path: 'kenya-safaris/masai-mara/7-day', element: <SafariPackagePage pkg="masai-mara-7day" /> },
      { path: 'kenya-safaris/masai-mara/from-nairobi', element: <SafariPackagePage pkg="masai-mara-nairobi" /> },
      { path: 'kenya-safaris/masai-mara/fly-in', element: <SafariPackagePage pkg="masai-mara-flyin" /> },
      { path: 'kenya-safaris/masai-mara/migration', element: <SafariPackagePage pkg="masai-mara-migration" /> },
      { path: 'kenya-safaris/masai-mara/luxury', element: <SafariPackagePage pkg="masai-mara-luxury" /> },
      { path: 'kenya-safaris/masai-mara/national-reserve', element: <SafariPackagePage pkg="masai-mara-reserve" /> },

      // Amboseli
      { path: 'kenya-safaris/amboseli', Component: AmboseliHub },
      { path: 'kenya-safaris/amboseli/day', element: <SafariPackagePage pkg="amboseli-day" /> },
      { path: 'kenya-safaris/amboseli/2-day', element: <SafariPackagePage pkg="amboseli-2day" /> },
      { path: 'kenya-safaris/amboseli/3-day', element: <SafariPackagePage pkg="amboseli-3day" /> },
      { path: 'kenya-safaris/amboseli/national-park', element: <SafariPackagePage pkg="amboseli-park" /> },

      // Tsavo
      { path: 'kenya-safaris/tsavo', Component: TsavoHub },
      { path: 'kenya-safaris/tsavo/2-day', element: <SafariPackagePage pkg="tsavo-2day" /> },
      { path: 'kenya-safaris/tsavo/3-day', element: <SafariPackagePage pkg="tsavo-3day" /> },
      { path: 'kenya-safaris/tsavo/east', element: <SafariPackagePage pkg="tsavo-east" /> },
      { path: 'kenya-safaris/tsavo/west', element: <SafariPackagePage pkg="tsavo-west" /> },

      // Lake Nakuru
      { path: 'kenya-safaris/lake-nakuru', Component: LakeNakuruSafaris },

      // Group safaris
      { path: 'kenya-safaris/group-safaris', Component: GroupSafaris },
      { path: 'kenya-safaris/group-safaris/masai-mara/2-day', element: <SafariPackagePage pkg="group-mara-2day" /> },
      { path: 'kenya-safaris/group-safaris/masai-mara/3-day', element: <SafariPackagePage pkg="group-mara-3day" /> },
      { path: 'kenya-safaris/group-safaris/masai-mara/4-day', element: <SafariPackagePage pkg="group-mara-4day" /> },
      { path: 'kenya-safaris/group-safaris/masai-mara/5-day', element: <SafariPackagePage pkg="group-mara-5day" /> },
      { path: 'kenya-safaris/group-safaris/masai-mara/7-day', element: <SafariPackagePage pkg="group-mara-7day" /> },

      // Packages
      { path: 'kenya-safaris/packages', Component: SafariPackages },
      { path: 'kenya-safaris/packages/all-kenya', element: <SafariPackagePage pkg="all-kenya" /> },
      { path: 'kenya-safaris/packages/multi-destination', element: <SafariPackagePage pkg="multi-destination" /> },

      // Safari types
      { path: 'kenya-safaris/types', Component: SafariTypes },
      { path: 'kenya-safaris/types/family', element: <SafariPackagePage pkg="type-family" /> },
      { path: 'kenya-safaris/types/fly-in', element: <SafariPackagePage pkg="type-flyin" /> },
      { path: 'kenya-safaris/types/honeymoon', element: <SafariPackagePage pkg="type-honeymoon" /> },
      { path: 'kenya-safaris/types/luxury', element: <SafariPackagePage pkg="type-luxury" /> },
      { path: 'kenya-safaris/types/photography', element: <SafariPackagePage pkg="type-photography" /> },
      { path: 'kenya-safaris/types/beach', element: <SafariPackagePage pkg="type-beach" /> },
      { path: 'kenya-safaris/types/private', element: <SafariPackagePage pkg="type-private" /> },

      // Activities
      { path: 'kenya-safaris/activities', Component: Activities },
      { path: 'kenya-safaris/activities/game-drives', element: <SafariPackagePage pkg="activity-gamedrives" /> },
      { path: 'kenya-safaris/activities/game-drives/masai-mara', element: <SafariPackagePage pkg="activity-mara-gamedrives" /> },
      { path: 'kenya-safaris/activities/walking-safaris', element: <SafariPackagePage pkg="activity-walking" /> },
      { path: 'kenya-safaris/activities/balloon-safaris', element: <SafariPackagePage pkg="activity-balloon" /> },
      { path: 'kenya-safaris/activities/balloon-safaris/masai-mara', element: <SafariPackagePage pkg="activity-mara-balloon" /> },
      { path: 'kenya-safaris/activities/birdwatching', element: <SafariPackagePage pkg="activity-birding" /> },
      { path: 'kenya-safaris/activities/mountain-trekking', element: <SafariPackagePage pkg="activity-trekking" /> },

      // Accommodation
      { path: 'kenya-safaris/accommodation', Component: Accommodation },
      { path: 'kenya-safaris/accommodation/masai-mara', element: <SafariPackagePage pkg="accom-mara" /> },
      { path: 'kenya-safaris/accommodation/masai-mara/luxury', element: <SafariPackagePage pkg="accom-mara-luxury" /> },
      { path: 'kenya-safaris/accommodation/amboseli', element: <SafariPackagePage pkg="accom-amboseli" /> },
      { path: 'kenya-safaris/accommodation/all-lodges', element: <SafariPackagePage pkg="accom-all" /> },

      // Guides
      { path: 'kenya-safaris/guides', Component: GuidesIndex },
      { path: 'kenya-safaris/guides/kenya-safari-cost', element: <SafariPackagePage pkg="guide-cost" /> },
      { path: 'kenya-safaris/guides/masai-mara-cost', element: <SafariPackagePage pkg="guide-mara-cost" /> },
      { path: 'kenya-safaris/guides/nairobi-mara-flights', element: <SafariPackagePage pkg="guide-flights" /> },
      { path: 'kenya-safaris/guides/accommodation', element: <SafariPackagePage pkg="guide-accom" /> },
      { path: 'kenya-safaris/guides/naivasha-hellsgate', element: <SafariPackagePage pkg="guide-naivasha" /> },

      // Other African destinations
      { path: 'destinations', Component: DestinationsHub },
      { path: 'destinations/tanzania', element: <DestinationPage dest="tanzania" /> },
      { path: 'destinations/botswana', element: <DestinationPage dest="botswana" /> },
      { path: 'destinations/rwanda', element: <DestinationPage dest="rwanda" /> },
      { path: 'destinations/south-africa', element: <DestinationPage dest="south-africa" /> },
      { path: 'destinations/mozambique', element: <DestinationPage dest="mozambique" /> },

      // DMC
      { path: 'dmc-corporate', Component: DmcCorporate },

      // Plan my trip
      { path: 'plan-my-trip', Component: PlanMyTrip },

      // About
      { path: 'about', Component: AboutUs },
      { path: 'about/sustainability', Component: Sustainability },
      { path: 'about/press-media', Component: PressMedia },

      // Contact
      { path: 'contact', Component: Contact },

      { path: '*', Component: NotFound },
    ],
  },
])
