import React, { useState, Fragment, useEffect, Suspense } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import CTA from './CTA'

const DynamicFilterAutoComplete = dynamic(
  () => import('components/FilterAutoComplete'),
  {
    suspense: true
  }
)

const realEstate = [
  {
    title: 'للايجار في الكويت',
    subItems: [
      {
        title: 'بيوت للايجار',
        href: ''
      },
      {
        title: 'شقق للايجار',
        href: ''
      },
      {
        title: 'أراضي للايجار',
        href: ''
      },
      {
        title: 'تجاري للايجار',
        href: ''
      },
      {
        title: 'عمارات للايجار',
        href: ''
      },
      {
        title: 'شاليهات للايجار',
        href: ''
      },
      {
        title: 'مزارع للايجار',
        href: ''
      }
    ]
  },
  {
    title: 'للبيع في الكويت',
    subItems: [
      {
        title: 'بيوت للبيع',
        href: ''
      },
      {
        title: 'شقق للبيع',
        href: ''
      },
      {
        title: 'أراضي للبيع',
        href: ''
      },
      {
        title: 'تجاري للبيع',
        href: ''
      },
      {
        title: 'عمارات للبيع',
        href: ''
      },
      {
        title: 'شاليهات للبيع',
        href: ''
      },
      {
        title: 'مزارع للبيع',
        href: ''
      },
      {
        title: 'دولي للبيع',
        href: ''
      }
    ]
  },
  {
    title: 'للبدل في الكويت',
    subItems: [
      {
        title: 'بيوت للبدل',
        href: ''
      },
      {
        title: 'شقق للبدل',
        href: ''
      },
      {
        title: 'أراضي للبدل',
        href: ''
      }
    ]
  }
]

const navItems = [
  {
    title: 'تسجيل',
    href: '/'
  },
  {
    title: 'دخول',
    href: '/'
  },
  {
    title: 'المكاتب',
    href: '/'
  },
  {
    title: 'الرئيسية',
    href: '/'
  }
]

const mobileNavItems = [
  {
    title: 'الرئيسية / بحث',
    href: '/',
    icon: '/images/home_search.svg'
  },
  {
    title: 'دخول / تسجيل',
    href: '/',
    icon: '/images/sign_in.svg'
  },
  {
    title: 'إعلان مجانًا',
    href: '/',
    icon: '/images/add_circle_outlined.png'
  },
  {
    title: 'المكاتب',
    href: '/',
    icon: '/images/briefcase_outlined.svg'
  }
]

const socialLinks = [
  {
    href: 'https://www.facebook.com/boshamlanKW/',
    imagePath: '/images/facebook-dark.svg'
  },
  {
    href: 'https://twitter.com/boshamlankw',
    imagePath: '/images/twitter-dark.svg'
  },
  {
    href: 'https://www.instagram.com/boshamlankw/',
    imagePath: '/images/instagram-dark.svg'
  },
  {
    href: 'https://boshamlan.com',
    imagePath: '/images/global.svg'
  }
]

const propertyTypes = [
  {
    id: 0,
    title: 'الكل'
  },
  {
    id: 1,
    title: 'كبد'
  },
  {
    id: 2,
    title: 'شقه'
  },
  {
    id: 3,
    title: 'أرض'
  },
  {
    id: 4,
    title: 'عماره'
  },
  {
    id: 5,
    title: 'تجاري'
  },
  {
    id: 6,
    title: 'شاليه'
  },
  {
    id: 7,
    title: 'مزرعه'
  },
  {
    id: 8,
    title: 'دولي'
  }
]

const purposes = [
  {
    id: 0,
    title: 'للبدل'
  },
  {
    id: 1,
    title: 'للبيع'
  },
  {
    id: 2,
    title: 'للايجار'
  }
]

const locations = [
  {
    id: 0,
    title: 'محافظة مبارك الكب',
    type: 'state',
    count: 0
  },
  {
    id: 1,
    title: 'ابوفطيره',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 2,
    title: 'الفنيطيس',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 3,
    title: 'المسايل',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 4,
    title: 'صباح السالم',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 5,
    title: 'مبارك الكبير',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 6,
    title: 'ابو الحصانيه',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 7,
    title: 'المسيله',
    type: 'city',
    count: 0
  },
  {
    id: 8,
    title: 'العدان',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 9,
    title: 'القصور',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 10,
    title: 'اسواق القرين - غرب ابوفطيره',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 11,
    title: 'الحرفيه',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 12,
    title: 'القرين',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 13,
    title: 'صبحان',
    type: 'city',
    count: 0,
    state_id: 0
  },
  {
    id: 14,
    title: 'محافظة حولي',
    type: 'state',
    count: 0
  },
  {
    id: 15,
    title: 'السلام',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 16,
    title: 'الجابريه',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 17,
    title: 'الزهراء',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 18,
    title: 'الصديق',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 19,
    title: 'حطين',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 20,
    title: 'مشرف',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 21,
    title: 'الشهداء',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 22,
    title: 'بيان',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 23,
    title: 'غرب مشرف - مبارك العبدالله',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 24,
    title: 'سلوى',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 25,
    title: 'الرميثيه',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 26,
    title: 'السالميه',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 27,
    title: 'الشعب السكني',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 28,
    title: 'البدع',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 29,
    title: 'حولي',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 30,
    title: 'الشعب البحري',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 31,
    title: 'ميدان حولي',
    type: 'city',
    count: 0,
    state_id: 14
  },
  {
    id: 32,
    title: 'محافظة الاحمدي',
    type: 'state',
    count: 0
  },
  {
    id: 33,
    title: 'صباح الاحمد السكنيه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 34,
    title: 'الوفره السكنيه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 35,
    title: 'الصباحيه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 36,
    title: 'على صباح السالم - ام الهيمان',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 37,
    title: 'الفنطاس',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 38,
    title: 'الخيران السكنيه - الجانب البري',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 39,
    title: 'الظهر',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 40,
    title: 'صباح الاحمد البحريه - الخيران',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 41,
    title: 'الوفره',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 42,
    title: 'المنقف',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 43,
    title: 'فهد الاحمد',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 44,
    title: 'الاحمدي',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 45,
    title: 'العقيله',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 46,
    title: 'جابر العلي',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 47,
    title: 'ميناء عبدالله',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 48,
    title: 'الجليعه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 49,
    title: 'الرقه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 50,
    title: 'جنوب صباح الاحمد',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 51,
    title: 'بنيدر',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 52,
    title: 'الفحيحيل',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 53,
    title: 'الزور',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 54,
    title: 'الشعيبه الصناعيه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 55,
    title: 'النويصيب',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 56,
    title: 'المهبوله',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 57,
    title: 'اسطبلات الاحمدي',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 58,
    title: 'الضباعيه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 59,
    title: 'هديه',
    type: 'city',
    count: 0,
    state_id: 32
  },
  {
    id: 60,
    title: 'محافظة العاصمه',
    type: 'state',
    count: 0
  },
  {
    id: 61,
    title: 'قرطبه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 62,
    title: 'السره',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 63,
    title: 'جابر الاحمد',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 64,
    title: 'الروضه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 65,
    title: 'الخالديه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 66,
    title: 'الدسمه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 67,
    title: 'الشاميه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 68,
    title: 'النزهه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 69,
    title: 'اليرموك',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 70,
    title: 'كيفان',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 71,
    title: 'شمال غرب الصليبيخات',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 72,
    title: 'الدعيه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 73,
    title: 'العديليه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 74,
    title: 'القيروان',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 75,
    title: 'الفيحاء',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 76,
    title: 'القادسيه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 77,
    title: 'عبدالله السالم',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 78,
    title: 'بنيد القار',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 79,
    title: 'غرناطه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 80,
    title: 'دسمان',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 81,
    title: 'الدوحه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 82,
    title: 'الصليبيخات',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 83,
    title: 'الشرق',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 84,
    title: 'الشويخ السكنيه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 85,
    title: 'المنصوريه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 86,
    title: 'المرقاب',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 87,
    title: 'المباركيه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 88,
    title: 'الشويخ الصناعيه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 89,
    title: 'القبله - جبله',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 90,
    title: 'النهضه',
    type: 'city',
    count: 0,
    state_id: 60
  },
  {
    id: 91,
    title: 'محافظة الفروانيه',
    type: 'state',
    count: 0
  },
  {
    id: 92,
    title: 'غرب عبدالله المبارك',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 93,
    title: 'الرابيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 94,
    title: 'العارضيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 95,
    title: 'الاندلس',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 96,
    title: 'عبدالله المبارك - غرب الجليب',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 97,
    title: 'الفروانيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 98,
    title: 'صباح الناصر',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 99,
    title: 'خيطان',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 100,
    title: 'جنوب عبدالله المبارك',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 101,
    title: 'جليب الشيوخ - الحساوي',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 102,
    title: 'اسطبلات الفروانيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 103,
    title: 'الفردوس',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 104,
    title: 'العمريه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 105,
    title: 'اشبيليه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 106,
    title: 'الضجيج',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 107,
    title: 'الري',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 108,
    title: 'الرقعي',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 109,
    title: 'الرحاب',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 110,
    title: 'العارضيه الحرفيه - الصناعيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 111,
    title: 'محافظة الجهراء',
    type: 'state',
    count: 0,
    state_id: 90
  },
  {
    id: 112,
    title: 'النعيم',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 113,
    title: 'العيون',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 114,
    title: 'الهجن',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 115,
    title: 'صناعيه الجهراء',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 116,
    title: 'سعد العبد الله',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 117,
    title: 'جنوب سعد العبدالله',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 118,
    title: 'تيماء',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 119,
    title: 'امغره الصناعيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 120,
    title: 'الواحه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 121,
    title: 'اسطبلات الجهراء',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 122,
    title: 'الجهراء القديمه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 123,
    title: 'النسيم',
    type: 'city',
    count: 0
  },
  {
    id: 124,
    title: 'المطلاع',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 125,
    title: 'القصر',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 126,
    title: 'العبدلي',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 127,
    title: 'الصليبيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 128,
    title: 'الصبيه',
    type: 'city',
    count: 0,
    state_id: 90
  },
  {
    id: 129,
    title: 'كبد',
    type: 'city',
    count: 0,
    state_id: 90
  }
]

const Nav: React.FC = () => {
  const { pathname } = useRouter()
  const [showSubRealState, setShowSubRealState] = useState([
    false,
    false,
    false
  ])
  const [activeItem, setActiveItem] = useState(navItems[3].title)
  const [activeItemOnMobile, setActiveItemOnMobile] = useState(
    mobileNavItems[0].title
  )
  const [isFilterPage, setIsFilterPage] = useState(false)
  const [isLocationDropDownOpen, setIsLocationDropDownOpen] = useState(false)

  const handleShowSubRealState = (index: number) => {
    setShowSubRealState(
      showSubRealState.map((item, i) => (i === index ? !item : item))
    )
  }

  const handleNavChange = (item: { title: string; href: string }) => {
    setActiveItem(item.title)
  }

  const handleMobileNavChange = (item: {
    title: string
    href: string
    icon: string
  }) => {
    setActiveItemOnMobile(item.title)
  }

  useEffect(() => {
    setIsFilterPage(pathname === '/filter')
  }, [pathname])

  return (
    <Popover className="fixed top-0 bg-white shadow-md md:shadow-sm w-full z-20 h-20 md:h-24">
      <div className="container max-w-6xl h-full items-center flex">
        <div
          className={`${
            isFilterPage && 'border'
          } w-full flex items-center justify-between md:space-x-10 rounded-lg md:border-0`}
        >
          {isFilterPage && (
            <Suspense fallback="Loading...">
              <DynamicFilterAutoComplete
                locations={locations}
                purposes={purposes}
                propertyTypes={propertyTypes}
                isfilterComboboxOpen={isLocationDropDownOpen}
                handleIsfilterComboboxOpen={setIsLocationDropDownOpen}
              />
            </Suspense>
          )}
          {!isFilterPage && (
            <div className="hidden md:flex w-3/12">
              <CTA
                title="إضافة إعلان"
                backgroundColor="primary"
                Icon={<PlusCircleIcon className="h-6 w-6 ml-3" />}
              />
            </div>
          )}
          {!isFilterPage && (
            <Popover.Group
              as="nav"
              className="hidden md:flex justify-between w-7/12"
            >
              <Popover className="relative">
                {() => (
                  <>
                    <Popover.Button className="group inline-flex mt-1 items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none">
                      <ChevronDownIcon
                        className="text-base mr-2 h-5 w-5 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span>عقارات الكویت</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 transform">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="bg-white w-48">
                            {realEstate.map((item, index) => (
                              <button
                                type="submit"
                                key={item.title}
                                className="rounded-lg w-full p-3"
                                onClick={() => handleShowSubRealState(index)}
                              >
                                <div className="flex items-center justify-between">
                                  <ChevronDownIcon
                                    className="mr-2 h-5 w-5 group-hover:text-gray-500 text-base"
                                    aria-hidden="true"
                                  />
                                  <p className="text-base font-medium text-gray-900">
                                    {item.title}
                                  </p>
                                </div>
                                <div
                                  className={`${
                                    showSubRealState[index] ? 'flex' : 'hidden'
                                  } flex-col mt-2 shadow py-2`}
                                >
                                  {item.subItems?.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                    >
                                      <p className="hover:bg-gray-50">
                                        {subItem.title}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {navItems.map((item) => (
                <button
                  type="submit"
                  onClick={() => handleNavChange(item)}
                  className={`${
                    activeItem === item.title
                      ? "text-primary after:content-['.'] after:text-primary after:text-3xl after:font-bold after:absolute after:-bottom-4 after:w-full after:left-0"
                      : 'text-base'
                  } font-medium hover:text-primary relative`}
                  key={item.title}
                >
                  {item.title}
                </button>
              ))}
            </Popover.Group>
          )}
          <div
            className={`${
              isFilterPage && 'hidden'
            } flex justify-center items-center pl-10 md:pl-0 w-full md:w-2/12`}
          >
            <span className="sr-only">Company Logo</span>
            <Link href="/">
              <a className="block relative w-36 h-11">
                <Image layout="fill" src="/images/logo.svg" alt="logo" />
              </a>
            </Link>
          </div>
          <div className={`${!isFilterPage && 'md:hidden'}`}>
            <div
              className={`${
                isLocationDropDownOpen ? 'block md:hidden' : 'hidden'
              }`}
            >
              <ChevronRightIcon
                className="h-9 w-9 text-gray-600"
                aria-hidden="true"
              />
            </div>
            <Popover.Button
              className={`${
                isLocationDropDownOpen && 'hidden md:inline-flex'
              } inline-flex items-center justify-center rounded-md bg-white p-2 text-black-400 hover:bg-black-100 hover:text-gray-500 focus:outline-none`}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-9 w-9 font-bold" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className={`${
            !isFilterPage && 'md:hidden'
          } fixed h-full top-0 right-0 transform transition w-10/12 md:w-3/12`}
        >
          <div className="bg-black opacity-50 right-0 w-screen absolute h-full z-10 pointer-events-none" />
          <div className="rounded-lg bg-white shadow-2xl h-full flex flex-col justify-between relative z-20">
            <div>
              <div className="flex items-center justify-between px-4 pt-5 pb-3">
                <div>
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="relative w-36 h-11">
                  <Link href="/">
                    <a>
                      <Image layout="fill" src="/images/logo.svg" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <hr className="h-px bg-gray-400 border-0" />

              {/* nav items */}
              <div className="mt-6 flex flex-col gap-3">
                {mobileNavItems.map((item) => (
                  <Link href={item.href} key={item.title}>
                    <button
                      type="submit"
                      onClick={() => handleMobileNavChange(item)}
                      className={`${
                        activeItemOnMobile === item.title && 'bg-blue-100'
                      } flex items-center gap-4 justify-end pr-5 py-2 ml-5 rounded-l-2xl hover:bg-blue-100 cursor-pointer transition-colors ease-in-out duration-500`}
                    >
                      <p
                        className={`${
                          item.title === 'إعلان مجانًا' && 'text-secondary'
                        } font-semibold`}
                      >
                        {item.title}
                      </p>
                      <Image
                        src={item.icon}
                        height={30}
                        width={30}
                        alt="nav_item"
                      />
                    </button>
                  </Link>
                ))}
                <Popover className="relative ml-5 rounded-l-2xl">
                  {() => (
                    <>
                      <Popover.Button className="group py-1 inline-flex mt-1 pl-5 items-center justify-between w-full rounded-l-2xl bg-white text-base font-medium hover:bg-blue-100 transition-colors ease-in-out duration-500 focus:outline-none">
                        <ChevronDownIcon
                          className="text-base h-5 w-5 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <div className="flex items-center gap-4 justify-end pr-5 py-2 ml-5 rounded-l-2xl cursor-pointer">
                          <p className="font-semibold">عقارات الكویت</p>
                          <Image
                            src="/images/building-solid.svg"
                            height={25}
                            width={25}
                            alt="home_search"
                          />
                        </div>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-20 transform">
                          <div className="overflow-hidden rounded-lg w-full shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="bg-white w-full">
                              {realEstate.map((item, index) => (
                                <button
                                  type="submit"
                                  key={item.title}
                                  className="rounded-lg w-full p-3"
                                  onClick={() => handleShowSubRealState(index)}
                                >
                                  <div className="flex items-center justify-between">
                                    <ChevronDownIcon
                                      className="ml-2 h-5 w-5 group-hover:text-gray-500 text-base"
                                      aria-hidden="true"
                                    />
                                    <p className="text-base font-medium text-gray-900">
                                      {item.title}
                                    </p>
                                  </div>
                                  <div
                                    className={`${
                                      showSubRealState[index]
                                        ? 'flex'
                                        : 'hidden'
                                    } flex-col mt-2 shadow py-2`}
                                  >
                                    {item.subItems?.map((subItem) => (
                                      <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                      >
                                        <p className="hover:bg-gray-50">
                                          {subItem.title}
                                        </p>
                                      </Link>
                                    ))}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </div>
            <div className="px-5 w-full flex justify-center gap-5 mb-5">
              {socialLinks.map((link) => (
                <Link href={link.href} key={Math.random()}>
                  <button
                    type="submit"
                    className="px-3 py-2 flex items-center bg-gray-100 rounded-lg cursor-pointer"
                  >
                    <Image
                      src={link.imagePath}
                      width={21}
                      height={24}
                      alt="social_link"
                    />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Nav
