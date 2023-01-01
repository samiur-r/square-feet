import type { NextPage } from 'next'

import AutoComplete from 'components/AutoComplete'
import ListBox from 'components/ListBox'
import Title from 'components/Title'
import Description from 'components/Description'
import { useEffect, useState } from 'react'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const CreatePost: NextPage = () => {
  const [scrollToTop, setScrollToTop] = useState(false)

  const scrollToAutocomplete = () => {
    setScrollToTop(true)
  }

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({
        top: 200,
        left: 0,
        behavior: 'smooth'
      })
      setScrollToTop(false)
    }
  }, [scrollToTop])

  return (
    <div className="dir-rtl container max-w-6xl py-10 flex flex-col gap-3 items-center">
      <div className="md:text-center w-full">
        <Title value="إضافة إعلان" />
      </div>
      <div className="w-full md:text-center">
        <Description value="أدخل البيانات التالية لإضافة اعلان" />
      </div>
      <form className="w-full max-w-md mt-8 md:mt-10">
        <div className="relative">
          <input
            type="number"
            name="phone"
            id="phone"
            className="block bg-custom-gray-3 px-4 py-2.5 md:py-4 w-full text-custom-gray rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            value="65432165"
            readOnly
          />
          <label
            htmlFor="phone"
            className="absolute cursor-text text-md text-custom-gray duration-300 top-2 transform -translate-y-5 scale-75 z-10 bg-white px-1 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0"
          >
            رقم الموبايل{' '}
          </label>
        </div>
        <div
          className="mt-8 md:mt-10"
          onClick={() => {
            if (window?.innerWidth < 768) scrollToAutocomplete()
          }}
        >
          <AutoComplete locations={locations} />
        </div>
        <div className="mt-8 md:mt-10">
          <ListBox
            selectedOpt={undefined}
            options={propertyTypes}
            placeholder="نوع العقار"
            isFloatingLabel
          />
        </div>
        <div className="mt-8 md:mt-10">
          <ListBox
            selectedOpt={undefined}
            options={purposes}
            placeholder="الغرض"
            isFloatingLabel
          />
        </div>
        <div className="relative mt-8 md:mt-10">
          <input
            type="number"
            name="price"
            id="price"
            className="block px-4 py-2.5 md:py-4 shadow-sm w-full text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            htmlFor="price"
            className="whitespace-nowrap absolute cursor-text text-md text-custom-gray duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 -right-1 peer-focus:-right-1 peer-placeholder-shown:right-0"
          >
            السعر (اختياري)
          </label>
        </div>
        <div className="relative mt-8 md:mt-10">
          <textarea
            name="description"
            rows={7}
            className="block p-4 w-full text-base text-black bg-transparent rounded-lg border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            htmlFor="description"
            className="absolute pointer-events-none cursor-text text-md text-custom-gray duration-300 transform -translate-y-4 scale-75 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0 peer-focus:-right-3"
          >
            اكتب تفاصيل الاعلان هنا{' '}
          </label>
        </div>
        <div className="flex justify-center items-center w-full mt-8 md:mt-10">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col justify-center items-center w-full h-52 rounded-lg border border-custom-gray-border cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <p className="mb-2 mt-2 text-base text-primary flex flex-col items-center">
                إضافة الصور
                <span className="block text-custom-gray">(اختياري)</span>
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="flex items-center gap-3 mt-8 md:mt-10">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-custom-gray rounded border-custom-gray-border focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="checked-checkbox" className="font-medium">
            <a className="hover:underline flex gap-3 cursor-pointer">
              <p className="text-primary text-xs md:text-sm">
                إجعل إعلاني مميزًا مقابل 12 دك
              </p>
              <p className="text-secondary text-xs md:text-sm whitespace-nowrap">
                (لمعرفة المزيد)
              </p>
            </a>
          </label>
        </div>
        <div className="mt-3 md:mt-5">
          <button
            type="submit"
            className="bg-secondary text-white rounded-lg w-full mt-8 py-3 md:py-4 hover:opacity-90 transition-opacity duration-300"
          >
            إضافة الإعلان{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
