import React, { useState } from 'react'
import Link from 'next/link'

import ListBox from 'components/ListBox'
// import AutoComplete from 'components/AutoComplete'
// import FilterAutoComplete from 'components/FilterAutoComplete'
import CTA from 'components/CTA'

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

// const locations = [
//   {
//     id: 0,
//     title: 'محافظة مبارك الكب',
//     type: 'state',
//     count: 0
//   },
//   {
//     id: 1,
//     title: 'ابوفطيره',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 2,
//     title: 'الفنيطيس',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 3,
//     title: 'المسايل',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 4,
//     title: 'صباح السالم',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 5,
//     title: 'مبارك الكبير',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 6,
//     title: 'ابو الحصانيه',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 7,
//     title: 'المسيله',
//     type: 'city',
//     count: 0
//   },
//   {
//     id: 8,
//     title: 'العدان',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 9,
//     title: 'القصور',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 10,
//     title: 'اسواق القرين - غرب ابوفطيره',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 11,
//     title: 'الحرفيه',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 12,
//     title: 'القرين',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 13,
//     title: 'صبحان',
//     type: 'city',
//     count: 0,
//     state_id: 0
//   },
//   {
//     id: 14,
//     title: 'محافظة حولي',
//     type: 'state',
//     count: 0
//   },
//   {
//     id: 15,
//     title: 'السلام',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 16,
//     title: 'الجابريه',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 17,
//     title: 'الزهراء',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 18,
//     title: 'الصديق',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 19,
//     title: 'حطين',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 20,
//     title: 'مشرف',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 21,
//     title: 'الشهداء',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 22,
//     title: 'بيان',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 23,
//     title: 'غرب مشرف - مبارك العبدالله',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 24,
//     title: 'سلوى',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 25,
//     title: 'الرميثيه',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 26,
//     title: 'السالميه',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 27,
//     title: 'الشعب السكني',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 28,
//     title: 'البدع',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 29,
//     title: 'حولي',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 30,
//     title: 'الشعب البحري',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 31,
//     title: 'ميدان حولي',
//     type: 'city',
//     count: 0,
//     state_id: 14
//   },
//   {
//     id: 32,
//     title: 'محافظة الاحمدي',
//     type: 'state',
//     count: 0
//   },
//   {
//     id: 33,
//     title: 'صباح الاحمد السكنيه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 34,
//     title: 'الوفره السكنيه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 35,
//     title: 'الصباحيه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 36,
//     title: 'على صباح السالم - ام الهيمان',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 37,
//     title: 'الفنطاس',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 38,
//     title: 'الخيران السكنيه - الجانب البري',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 39,
//     title: 'الظهر',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 40,
//     title: 'صباح الاحمد البحريه - الخيران',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 41,
//     title: 'الوفره',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 42,
//     title: 'المنقف',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 43,
//     title: 'فهد الاحمد',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 44,
//     title: 'الاحمدي',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 45,
//     title: 'العقيله',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 46,
//     title: 'جابر العلي',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 47,
//     title: 'ميناء عبدالله',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 48,
//     title: 'الجليعه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 49,
//     title: 'الرقه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 50,
//     title: 'جنوب صباح الاحمد',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 51,
//     title: 'بنيدر',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 52,
//     title: 'الفحيحيل',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 53,
//     title: 'الزور',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 54,
//     title: 'الشعيبه الصناعيه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 55,
//     title: 'النويصيب',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 56,
//     title: 'المهبوله',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 57,
//     title: 'اسطبلات الاحمدي',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 58,
//     title: 'الضباعيه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 59,
//     title: 'هديه',
//     type: 'city',
//     count: 0,
//     state_id: 32
//   },
//   {
//     id: 60,
//     title: 'محافظة العاصمه',
//     type: 'state',
//     count: 0
//   },
//   {
//     id: 61,
//     title: 'قرطبه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 62,
//     title: 'السره',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 63,
//     title: 'جابر الاحمد',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 64,
//     title: 'الروضه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 65,
//     title: 'الخالديه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 66,
//     title: 'الدسمه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 67,
//     title: 'الشاميه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 68,
//     title: 'النزهه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 69,
//     title: 'اليرموك',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 70,
//     title: 'كيفان',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 71,
//     title: 'شمال غرب الصليبيخات',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 72,
//     title: 'الدعيه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 73,
//     title: 'العديليه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 74,
//     title: 'القيروان',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 75,
//     title: 'الفيحاء',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 76,
//     title: 'القادسيه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 77,
//     title: 'عبدالله السالم',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 78,
//     title: 'بنيد القار',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 79,
//     title: 'غرناطه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 80,
//     title: 'دسمان',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 81,
//     title: 'الدوحه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 82,
//     title: 'الصليبيخات',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 83,
//     title: 'الشرق',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 84,
//     title: 'الشويخ السكنيه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 85,
//     title: 'المنصوريه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 86,
//     title: 'المرقاب',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 87,
//     title: 'المباركيه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 88,
//     title: 'الشويخ الصناعيه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 89,
//     title: 'القبله - جبله',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 90,
//     title: 'النهضه',
//     type: 'city',
//     count: 0,
//     state_id: 60
//   },
//   {
//     id: 91,
//     title: 'محافظة الفروانيه',
//     type: 'state',
//     count: 0
//   },
//   {
//     id: 92,
//     title: 'غرب عبدالله المبارك',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 93,
//     title: 'الرابيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 94,
//     title: 'العارضيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 95,
//     title: 'الاندلس',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 96,
//     title: 'عبدالله المبارك - غرب الجليب',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 97,
//     title: 'الفروانيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 98,
//     title: 'صباح الناصر',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 99,
//     title: 'خيطان',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 100,
//     title: 'جنوب عبدالله المبارك',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 101,
//     title: 'جليب الشيوخ - الحساوي',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 102,
//     title: 'اسطبلات الفروانيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 103,
//     title: 'الفردوس',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 104,
//     title: 'العمريه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 105,
//     title: 'اشبيليه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 106,
//     title: 'الضجيج',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 107,
//     title: 'الري',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 108,
//     title: 'الرقعي',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 109,
//     title: 'الرحاب',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 110,
//     title: 'العارضيه الحرفيه - الصناعيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 111,
//     title: 'محافظة الجهراء',
//     type: 'state',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 112,
//     title: 'النعيم',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 113,
//     title: 'العيون',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 114,
//     title: 'الهجن',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 115,
//     title: 'صناعيه الجهراء',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 116,
//     title: 'سعد العبد الله',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 117,
//     title: 'جنوب سعد العبدالله',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 118,
//     title: 'تيماء',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 119,
//     title: 'امغره الصناعيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 120,
//     title: 'الواحه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 121,
//     title: 'اسطبلات الجهراء',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 122,
//     title: 'الجهراء القديمه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 123,
//     title: 'النسيم',
//     type: 'city',
//     count: 0
//   },
//   {
//     id: 124,
//     title: 'المطلاع',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 125,
//     title: 'القصر',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 126,
//     title: 'العبدلي',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 127,
//     title: 'الصليبيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 128,
//     title: 'الصبيه',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   },
//   {
//     id: 129,
//     title: 'كبد',
//     type: 'city',
//     count: 0,
//     state_id: 90
//   }
// ]

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

const SearchBox = () => {
  const [purpose, setPurpose] = useState({
    id: purposes[2].id,
    title: purposes[2].title
  })
  // const [isfilterComboboxOpen, setIsfilterComboboxOpen] = useState(false)
  // const [canUpdateFilterAutoCompleteShow, setCanUpdateFilterAutoCompleteShow] =
  //   useState(false)
  // const [showFilterCombobox, setShowFilterCombobox] = useState(false)
  // const [locationSelected, setLocationSelected] = useState<
  //   { id: number; title: string; type: string } | undefined
  // >()

  // const handleLocationChanged = (id: number, title: string, type: string) => {
  //   setLocationSelected({ id, title, type })
  // }

  // useEffect(() => {
  //   if (canUpdateFilterAutoCompleteShow) setShowFilterCombobox(true)
  // }, [canUpdateFilterAutoCompleteShow])

  // useEffect(() => {
  //   setShowFilterCombobox(isfilterComboboxOpen)
  // }, [isfilterComboboxOpen])

  return (
    <>
      <div className="container relative z-10 max-w-6xl md:flex gap-5 grid grid-cols-1 w-full md:w-auto px-8 py-12 md:-mt-20 md:rounded-lg md:shadow-md bg-custom-white-lighter md:bg-white">
        <Link href="/filter">
          <div className="grid h-max md:w-2/12 w-full mt-5 md:mt-0 order-4 md:order-1">
            <CTA title="إبحث الآن" backgroundColor="secondary" />
          </div>
        </Link>
        <div className="md:hidden cursor-pointer grid grid-cols-3 rounded-full border">
          {purposes.map((purposeItem, index) => (
            <button
              key={purposeItem.id}
              type="submit"
              className={`${
                purposeItem.id === purpose.id && 'bg-primary text-white'
              } ${
                index === 0 ? 'rounded-l-full' : index === 2 && 'rounded-r-full'
              } flex justify-center items-center px-3 py-2.5 border-r`}
              onClick={() =>
                setPurpose({ id: purposeItem.id, title: purposeItem.title })
              }
            >
              {purposeItem.title}
            </button>
          ))}
        </div>
        <div className="md:w-3/12 hidden md:flex gap-5 h-14 justify-center order-1 md:order-2">
          {purposes.map((purposeItem, index) => (
            <div className="flex items-center w-max" key={purposeItem.id}>
              <label
                htmlFor={`default-radio-${index + 1}`}
                className="text-base font-medium text-gray-900"
              >
                {purposeItem.title}
                <input
                  id={`default-radio-${index + 1}`}
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 ml-2 accent-orange-600"
                  defaultChecked={purposeItem.id === purpose.id}
                  onClick={() =>
                    setPurpose({ id: purposeItem.id, title: purposeItem.title })
                  }
                />
              </label>
            </div>
          ))}
        </div>
        <div className="md:w-3/12 order-3 place-items-center">
          <ListBox
            selectedOpt={propertyTypes[0]}
            options={propertyTypes}
            showFilterIcon
            bgGray
          />
        </div>
        {/* <div className="md:w-4/12 order-2 md:order-4">
          <AutoComplete
            locations={locations}
            isHomePage
            canUpdateFilterAutoCompleteShow={canUpdateFilterAutoCompleteShow}
            handleCanUpdateFilterAutoCompleteShow={
              setCanUpdateFilterAutoCompleteShow
            }
            selectedLocation={locationSelected}
          />
        </div> */}
      </div>
      {/* {showFilterCombobox && (
        <div className="fixed md:hidden w-screen h-full z-20 pt-1 px-5 bg-white top-0 left-0">
          <FilterAutoComplete
            locations={locations}
            purposes={purposes}
            propertyTypes={propertyTypes}
            isfilterComboboxOpen={isfilterComboboxOpen}
            handleIsfilterComboboxOpen={setIsfilterComboboxOpen}
            showOptions
            handleLocationChanged={handleLocationChanged}
          />
        </div>
      )} */}
    </>
  )
}

export default SearchBox
