import Link from 'next/link'
import React, { useState } from 'react'
import Faq from './Faq'

const Filter = () => {
  const [showFull, setShowFull] = useState(false)

  return (
    <div className="text-sm md:text-lg flex flex-col gap-5">
      <p>
        تفكر في شراء شاليه في الكويت؟ الان يمكنك البحث عن افضل الشاليهات من بين
        الإعلانات التي يوفرها لك بوشملان دليل{' '}
        <Link href="/للبيع">
          <a className="underline underline-offset-4">العقارات</a>
        </Link>{' '}
        لاجدد الشاليهات المعروضة بالساحل الكويتي وبمناطق متعدده، حيث يعرض في بو
        شملان نوعين من الشاليهات وهما شاليهات استثمارية وشاليهات خاصة حيث يتوافق
        الهدف منهما وهو الحصول على اجازه وراحه لجميع افراد العائله والتمتع
        بمساحته. وقبل أن تحسم قرار شراء الشاليه تاكد من توفر شروط الخصوصيه و
        الخدمات والمرافق الأساسية القريبة منه، وإن كانت النية من شرائه هي
        للاستثمار فحاول الاستفسار عن تأجير الشاليهات و معرفة العائد الاستثماري
        ان كان مناسبا وكيفية حسابه
      </p>
      <p>ويوجد الشاليهات البحرية الخاصة على أراض تملكها...</p>
      {!showFull && (
        <div>
          <button
            type="submit"
            className="underline text-primary"
            onClick={() => setShowFull(true)}
          >
            المزيد
          </button>
        </div>
      )}
      <div
        className={`${
          showFull ? 'max-h-384' : 'max-h-0'
        } flex flex-col gap-5 overflow-y-hidden transition-all duration-2000 ease-in-out`}
      >
        <p>
          الدولة وتمثل المنشآت او المباني التي تقام خارج حد التنظيم العام وفق
          عقود ايجار مع املاك الدولة لأغراض ترفيهية.إذ قامت حكومة الكويت سابقا
          بتوزيع قطع من أراضي الفضاء في بعض المناطق المطلة على السواحل الكويتية
          مباشره مثل: الجليعه، الخيران، النويصيب، الزور، الدوحة .. الخ ، لغرض
          استخدامها كاستراحات ومنتجعات شخصية للمواطنين ،وتم ذلك بنظام القرعة
          وبصفة ايجار سنوي رمزي بواقع دينار واحد لكل متر مربع وفقا لعقود أبرمت
          مع إدارة أملاك الدولة التابعة لوزارة المالية .
        </p>
        <p>
          كما يختلف البناء والتصميم والتنفيذ المعماري للشاليهات في الوقت الحالي
          عن السابق وأصبح الآن يتكون من صاله وغرفتين نوم تقريبا ومطبخ وتبعاتها
          ثم تدرج التصميم الى بناء شاليه من دور واحد تقريبا مع اضافة غرف النوم
          وبعض المستجدات الى أن تطور حاليا الى بناء فيلا كامله مكونه من طابقين
          أو أكثر وملحقاتها الكامله بمساحه كبيره بحوالي ألف و200 متر مربع مع
          ارتداد كبير للبحر وصلت تكلفة بناء بعضها إلى أكثر من 350 الف دينار
          حاليا.
        </p>
        <p>
          وأصبح الشاليه لدى البعض عنصرا أساسيا للاستمتاع بالعطل لما يوفره من جو
          خاص بعيدا عن صخب المدينة لاسيما أنه يراعى في تصميمه ضرورة توفير عناصر
          الراحة والاستمتاع في ممارسه الرياضه المائيه المتنوعه.
        </p>
        <p>
          و يتراوح سعر المتر الطولي للواجهه البحريه في منطقتي بنيدر الجليعة بين
          20 و24 ألف دينار حق الانتفاع وعند قيمة تتراوح ما بين 10 الى 13 الف
          دينار في منطقة الزور، فيما تراوح سعر المتر الطولي بين 7 و 10 الف دينار
          في النويصيب بلغ 12 ألف دينار في الخيران. اما في ميناء عبدالله
          والضباعيه، يصل مابين 12 الف و15 الف دينار كماهو الحال في محافظه
          الجهراء بمواقع شاليهات منطقه كاظمه وشاليهات منطقه الصبيه أيضا.
        </p>
        <Faq bgPrimary={false} textDark />
      </div>
    </div>
  )
}

export default Filter
