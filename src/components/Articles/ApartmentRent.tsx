import Description from 'components/Description'
import Title from 'components/Title'
import Link from 'next/link'
import React from 'react'

const ApartmentRent = () => {
  return (
    <div>
      <div className="dir-rtl container max-w-6xl px-5">
        <div className="mb-3">
          <Title value="شقق للايجار في الكويت" light />
        </div>
        <div className="text-white text-sm md:text-lg">
          <div>
            <Description light>
              من خلال بو شملان يمكنك البحث في آلاف الشقق والعقارات المعروضه{' '}
              <Link href="للايجار">
                <a className="underline underline-offset-4">للايجار</a>
              </Link>
              او{' '}
              <Link href="للبيع">
                <a className="underline underline-offset-4">للبيع</a>
              </Link>
              او{' '}
              <Link href="للبدل">
                <a className="underline underline-offset-4">للبدل</a>
              </Link>
              في الكويت من الملاك مباشره او من خلال{' '}
              <Link href="المكاتب">
                <a className="underline underline-offset-4">المكاتب العقارية</a>
              </Link>{' '}
              . باستخدام محرك البحث المبسط تستطيع تحديد البيانات التالية:
            </Description>
          </div>
          <ul className="list-disc my-5 mx-5 grid gap-3">
            <li>
              <Description light>
                الغرض من الإعلان:{' '}
                <Link href="للبيع">
                  <a className="underline underline-offset-4">للبيع</a>
                </Link>
                او{' '}
                <Link href="للايجار">
                  <a className="underline underline-offset-4">للايجار</a>
                </Link>
                او{' '}
                <Link href="للبدل">
                  <a className="underline underline-offset-4">للبدل</a>
                </Link>
              </Description>
            </li>
            <li>
              <Description light>
                نوع العقار: مثل شقق، بيوت، فلل، ادوار، أراضي، عمارات، محلات
                تجاريه، مكاتب، مزارع، شاليهات، .. الخ
              </Description>
            </li>
            <li>
              <Description light>
                المنطقة: ويمكنك تحديد أي منطقة من مناطق الكويت من خلال كتابة أو
                اختيار اسم المنطقه مثل سلوى، السالمية، مبارك الكبير، الجابرية،
                حولي، المنقف، سعد العبدالله، صباح السالم، جابر الأحمد، صباح
                الأحمد، الخيران، ابوفطيرة، الفنيطيس، الرميثيه، المسايل، وغيرها
                من مناطق الكويت.
              </Description>
            </li>
          </ul>
          <div>
            <Description light>
              وبعد تحديد خيارات البحث ستجد أكبر عدد ممكن من الإعلانات العقارية
              وستتمكن من الوصول إلى أكبر عدد ممكن من الإعلانات المرتبطة بطلبك.
              وعندها يمكنك التواصل مع صاحب الإعلان بشكل مباشر عن طريق الاتصال او
              خلال الواتس اب حسب اختيارك، وهنا ينتهي دور بو شملان العقاري حسب
              شروطه حيث انه لا يتدخل بين الأطراف المعنية في تفاصيل الصفقات
              العقارية.
            </Description>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentRent
