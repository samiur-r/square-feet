import type { NextPage } from 'next'

import Description from 'components/Description'
import Title from 'components/Title'

const Contact: NextPage = () => {
  return (
    <div className="dir-rtl container max-w-6xl pt-5 pb-10 flex flex-col gap-5">
      <Title value="اتصل بنا" />
      <Description
        textBlack
        value={
          '"بو شملان" ليست شركة عقارية أو شركة وساطة عقارية، كما اننا لا نتلقى اي عمولة من أي طرف مقابل عملية البيع أو الشراء أو مقابل صفقات العقارات، وبالتأكيد فإننا لا نقوم بمشاركة بيانات مستخدمينا مع أي أطراف أخرى. نحن مهمتنا فقط تسهيل أعمال قطاع تسويق العقارات.'
        }
      />
      <Description
        textBlack
        value="تساعدك منصة بوشملان من خلال الموقع الالكتروني والتطبيق المحمول بجميع الاجهزة على إيجاد العقار المثالي من خلال عرض مجموعة واسعة ومتنوعة من العقارات في كل من الدول الاتية: الكويت، قطر، عمان، البحرين، الامارات، السعوديه. حيث يمكنك بوشملان العقاري ايضا من مشاركة عقارك مباشرة مع آلاف المستأجرين والمشترين والمستثمرين والوكلاء العقاريين وغيرهم الكثير من الأطراف المهتمة من خلال تقديم قوائم شاملة ومعلومات مفصلة عن العقارات بالإضافة الى مجموعة واسعة من الخدمات التى ستجعل تجربة تسويق العقارات أكثر فاعلية."
      />
      <Description
        textBlack
        value={
          '"دليل بوشملان العقاري" هو موقع إلكتروني رائد لتسويق العقارات في دول الخليج العربي، وهو افضل واكبر موقع وتطبیق مجاني، يمكن عن طريقه البحث او الاعلان عن العقارات المختلفه مثل: شقق للايجار، بيوت للبيع، اراضي للبدل، فلل، دوبلكس، عمارات، بنتهاوس، بنايات، مزارع، محلات تجارية، مكاتب، استراحات، شاليهات.'
        }
      />
      <Description
        textBlack
        value="هدفنا من خلال بوشملان توسيع نطاق أعمالنا وترسيخ مكانتنا كأكبر منصة تسويق عقارية في دول الخليج العربي والشرق الأوسط، وسعينا دائما إلى تحسين تجربة مستخدمينا من خلال تقديم مستوى عالٍ من الدعم وتوفير الحلول الفعّالة التي تلبي احتياجاتهم ومتطلباتهم بما يتوافق مع متغيرات السوق العقاري في الخليج العربي وما يشهده من تطورات في الآونة الأخيرة، كما ونسعى الى العمل عن قرب مع المسوقين والوكلاء العقاريين للمساهمة في تطوير وتعزيز تجربة تسويق العقارات بشكل إيجابي."
      />
      <p className="text-sm font-DroidArabicKufiBold text-custom-gray">
        في حال وجود مشاكل او إستفسارات او إقتراحات، الرجاء مراسلتنا عبر الوسائل
        التالية:
      </p>
      <ul className="list-disc mr-5 p-0 flex flex-col gap-2 justify-center">
        <li>
          موبايل:{' '}
          <a className="text-primary hover: underline" href="tel:+96560444900">
            +96560444900
          </a>
        </li>
        <li>
          لبريد الالكتروني:{' '}
          <a
            className="text-primary hover: underline"
            href="mailto:boshamlanplus@gmail.com"
          >
            boshamlanplus@gmail.com
          </a>
        </li>
        <li>
          انستقرام:{' '}
          <a
            className="text-primary hover: underline"
            href="https://www.instagram.com/boshamlankw/"
          >
            boshamlankw
          </a>
        </li>
        <li>
          تويتر:{' '}
          <a
            className="text-primary hover: underline"
            href="https://twitter.com/boshamlankw"
          >
            boshamlankw
          </a>
        </li>
        <li>
          فيسبوك:{' '}
          <a
            className="text-primary hover: underline"
            href="https://www.facebook.com/boshamlanKW/"
          >
            boshamlankw
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
