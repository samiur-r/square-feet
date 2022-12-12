import Description from 'components/Description'
import Title from 'components/Title'
import Link from 'next/link'
import React from 'react'

const Guide = () => {
  return (
    <div className="bg-primary py-10 w-full">
      <div className="dir-rtl container max-w-6xl">
        <div className="mb-3">
          <Title value="بو شملان دليل عقارات الكويت" light />
        </div>
        <div className="grid gap-5 dir-rtl">
          <div>
            <Description light>
              بوشملان هو دليل الكويت العقاري الأول والاكبر والأكثر شهرة في
              الكويت ودول الخليج العربي وفيه تجد الإعلانات الخاصة بعقارات الكويت
              بمختلف أنواعها. نساعدك بالبحث عن{' '}
              <Link href="/للايجار/شقق">
                <a className="underline underline-offset-4"> شقق للايجار </a>
              </Link>{' '}
              او
              <Link href="/للايجار/شقق">
                <a className="underline underline-offset-4">بيوت للبيع</a>
              </Link>{' '}
              او{' '}
              <Link href="/للبيع/أراضي">
                <a className="underline underline-offset-4">أراضي للبدل</a>
              </Link>{' '}
              او غير ذلك.
            </Description>
          </div>
          <div>
            <Description light>
              سواء كنت مواطنا او مقيما تبحث عن عقار في الكويت{' '}
              <Link href="/للايجار">
                <a className="underline underline-offset-4"> للايجار</a>
              </Link>{' '}
              ،{' '}
              <Link href="/للبيع">
                <a className="underline underline-offset-4">للبيع</a>
              </Link>{' '}
              او{' '}
              <Link href="/للبدل">
                <a className="underline underline-offset-4">للبدل</a>
              </Link>{' '}
              او كنت دلال او وسيط عقاري وتحاول عقد صفقات عقارية، فإن زيارتك
              لدليل عقارات الكويت هي الخطوة الأولى لتحقيق هدفك بسرعه وبسهوله،
              فنحن نقدم الحلول العقارية بشكل متطور وحديث على شكل موقع الكتروني
              وكذلك تطبيق موبايل متوفر على اجهزة{' '}
              <Link href="https://play.google.com/store/apps/details?id=com.q8villa.product">
                <a className="underline underline-offset-4"> الاندرويد</a>
              </Link>{' '}
              او{' '}
              <Link href="https://apps.apple.com/kw/app/%D8%A8%D9%88%D8%B4%D9%85%D9%84%D8%A7%D9%86-%D8%B9%D9%82%D8%A7%D8%B1-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1-%D9%88-%D9%84%D9%84%D8%A8%D9%8A%D8%B9/id1185405864?mt=8">
                <a className="underline underline-offset-4">الايفون</a>
              </Link>
              .
            </Description>
          </div>
          <div>
            <Description light>
              نقدم خدماتنا بشكل مجاني للباحثين عن{' '}
              <Link href="/للبيع">
                <a className="underline underline-offset-4">عقار للشراء</a>
              </Link>{' '}
              او{' '}
              <Link href="/للايجار">
                <a className="underline underline-offset-4">للاستئجار،</a>
              </Link>{' '}
              ولسنا وسيط عقاري ولا نتدخل بأي شكل من الاشكال بين البائع والمشتري
              من استفسارات او مفاوضات واتفاقيات. ولا نتقاضى أي عمولة أو رسوم على
              الصفقات العقارية سواء كانت{' '}
              <Link href="/للايجار">
                <a className="underline underline-offset-4">للايجار</a>
              </Link>{' '}
              او{' '}
              <Link href="/للبيع">
                <a className="underline underline-offset-4">للبيع</a>
              </Link>{' '}
              او{' '}
              <Link href="/للبدل">
                <a className="underline underline-offset-4">للبدل</a>
              </Link>{' '}
              أو غيرها من الصفقات.
            </Description>
          </div>
          <div>
            <Description light>
              يمكنك كذلك إضافة إعلانك مجانًا لدينا من خلال التسجيل معنا بشكل
              مجاني ايضا ، ويجب عليك تأكيد حسابك عن طريق رسالة نصية SMS وبعدها
              ستتمكن من إضافة إعلانك وتحديد البيانات التاليه: الموبايل، المنطقة،
              نوع العقار، الغرض من الإعلان سواء كان{' '}
              <Link href="/للايجار">
                <a className="underline underline-offset-4">للايجار</a>
              </Link>{' '}
              او{' '}
              <Link href="/للبيع">
                <a className="underline underline-offset-4">للبيع،</a>
              </Link>{' '}
              تحديد السعر المطلوب، كتابة تفاصيل الإعلان والعقار مثل المساحه وعدد
              الغرف وعدد الصالات والحمامات، والأدوار، وعدد المصافط المتوفرة،
              وتوفر الاصنصير (المصعد)، ونوعية التشطيب مثل سوبر ديلوكس او بنيان
              قديم، وكذلك يمكنك بشكل اختياري إضافة صور العقار مع الإعلان.
            </Description>
          </div>
          <div>
            <Description light>
              ننوه ان الاسم القديم لبو شملان هو كويت فيلا او Q8Villa وقد قمنا
              بتغيير الاسم في 2018 حتى نتمكن من التوسع ودخول دول أخرى تحت شعار
              واسم واحد.
            </Description>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
