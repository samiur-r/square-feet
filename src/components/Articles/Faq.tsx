/* eslint-disable jsx-a11y/anchor-is-valid */
import Accordion from 'components/Accordion'
import React from 'react'

const faqs = [
  {
    id: 0,
    question:
      'كم عدد إعلانات العقارات المعروضة حاليًا للايجار او للبيع في الكويت على موقع بوشملان؟',
    answer:
      'عدد إعلانات العقارات المعروضة للايجار او للبيع في الكويت هو 6048 إعلان جديد'
  },
  {
    id: 1,
    question: 'كم عدد المكاتب النشيطة والمتخصصة في الكويت على موقع بوشملان؟',
    answer: 'يوجد في بوشملان 168 مكتب نشيط ومتخصص في الكويت'
  },
  {
    id: 2,
    question:
      'ما هي أنواع العقارات المعروضة للايجار او للبيع في الكويت على موقع بوشملان؟',
    answer:
      'أنواع العقارات المعروضة للايجار او للبيع في الكويت هي أراضي ,بيوت ,تجاري ,دولي ,شاليهات ,شقق ,عمارات ,مزارع'
  },
  {
    id: 3,
    question:
      'كم تتراوح أسعار العقارات المعروضة للايجار او للبيع في الكويت على بوشملان؟',
    answer:
      'أسعار العقارات المعروضة للايجار او للبيع في الكويت تبدأ من 350 دك وتصل إلى 870,000 دك'
  },
  {
    id: 4,
    question:
      'كم أرخص أسعار العقارات المعروضة للايجار او للبيع في الكويت على موقع بوشملان؟',
    answer:
      'تبدأ أسعار العقارات المعروضة للايجار او للبيع في الكويت إبتداءً من 350 دك'
  },
  {
    id: 5,
    question:
      'ما هو متوسط سعر العقارات المعروضة للايجار او للبيع في الكويت على موقع بوشملان؟',
    answer:
      'متوسط أسعار العقارات المعروضة للايجار او للبيع في الكويت هو 183,233 دك'
  }
]

const Faq = () => {
  return (
    <div className="bg-primary py-10">
      <div className="container max-w-6xl">
        <div className="dir-rtl mb-3 text-white text-2xl font-semibold">
          الأسئلة الشائعة عن العقارات المعروضة للايجار او للبيع في الكويت
        </div>
        <div className="text-white text-sm md:text-lg dir-rtl">
          {faqs.map((faq) => (
            <Accordion key={faq.id} title={faq.question} content={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
