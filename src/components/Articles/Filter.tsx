import React, { useState } from 'react'
import Faq from './Faq'

const Filter: React.FC<{ articles: string[] }> = ({ articles }) => {
  const [showFull, setShowFull] = useState(false)

  if (!articles || !articles.length) return null

  return (
    <div className="text-sm md:text-lg flex flex-col gap-5">
      <div
        className="inner-html dir-rtl"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: articles[0] }}
      />

      {!showFull && articles && articles.length > 1 && (
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
        <div
          className="inner-html dir-rtl"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: articles[1] }}
        />
        <Faq bgPrimary={false} textDark />
      </div>
    </div>
  )
}

export default Filter
