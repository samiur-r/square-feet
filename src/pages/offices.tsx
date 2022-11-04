import type { NextPage } from 'next'

import Office from 'components/Office'
import OfficesArticle from 'components/Articles/OfficesArticle'

const officeList = [
  {
    id: 1,
    thumbnail: '/images/nopic-ar.jpg',
    title: 'شركة الضمان الذهبي العقارية',
    phone: '99491575',
    socialLinks: [
      {
        image: '/images/facebook-filled.svg',
        href: '/'
      },
      {
        image: '/images/twitter-filled.svg',
        href: '/'
      },
      {
        image: '/images/instagram-filled.svg',
        href: '/'
      },
      {
        image: '/images/email-filled.svg',
        href: '/'
      }
    ]
  },
  {
    id: 2,
    thumbnail: '/images/nopic-ar.jpg',
    title: 'شركة الضمان الذهبي العقارية',
    phone: '99491575',
    socialLinks: [
      {
        image: '/images/facebook-filled.svg',
        href: '/'
      },
      {
        image: '/images/twitter-filled.svg',
        href: '/'
      },
      {
        image: '/images/instagram-filled.svg',
        href: '/'
      },
      {
        image: '/images/email-filled.svg',
        href: '/'
      }
    ]
  },
  {
    id: 3,
    thumbnail: '/images/nopic-ar.jpg',
    title: 'شركة الضمان الذهبي العقارية',
    phone: '99491575',
    socialLinks: [
      {
        image: '/images/facebook-filled.svg',
        href: '/'
      },
      {
        image: '/images/twitter-filled.svg',
        href: '/'
      },
      {
        image: '/images/instagram-filled.svg',
        href: '/'
      },
      {
        image: '/images/email-filled.svg',
        href: '/'
      }
    ]
  },
  {
    id: 4,
    thumbnail: '/images/nopic-ar.jpg',
    title: 'شركة الضمان الذهبي العقارية',
    phone: '99491575',
    socialLinks: [
      {
        image: '/images/facebook-filled.svg',
        href: '/'
      },
      {
        image: '/images/twitter-filled.svg',
        href: '/'
      },
      {
        image: '/images/instagram-filled.svg',
        href: '/'
      },
      {
        image: '/images/email-filled.svg',
        href: '/'
      }
    ]
  },
  {
    id: 5,
    thumbnail: '/images/nopic-ar.jpg',
    title: 'شركة الضمان الذهبي العقارية',
    phone: '99491575',
    socialLinks: [
      {
        image: '/images/facebook-filled.svg',
        href: '/'
      },
      {
        image: '/images/twitter-filled.svg',
        href: '/'
      },
      {
        image: '/images/instagram-filled.svg',
        href: '/'
      },
      {
        image: '/images/email-filled.svg',
        href: '/'
      }
    ]
  },
  {
    id: 6,
    thumbnail: '/images/nopic-ar.jpg',
    title: 'شركة الضمان الذهبي العقارية',
    phone: '99491575',
    socialLinks: [
      {
        image: '/images/facebook-filled.svg',
        href: '/'
      },
      {
        image: '/images/twitter-filled.svg',
        href: '/'
      },
      {
        image: '/images/instagram-filled.svg',
        href: '/'
      },
      {
        image: '/images/email-filled.svg',
        href: '/'
      }
    ]
  }
]

const Offices: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-5">
      <div className="dir-rtl container max-w-6xl py-10 flex flex-col items-center gap-5">
        <Office officeList={officeList} />
      </div>
      <OfficesArticle />
    </div>
  )
}

export default Offices
