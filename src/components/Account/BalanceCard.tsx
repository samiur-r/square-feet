import Description from 'components/Description'
import Link from 'next/link'
import React from 'react'

interface BalanceCardProps {
  headline: string
  items: Array<{ title: string; value: string | number }>
  ctaList: Array<{ title: string; href: string }>
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  headline,
  items,
  ctaList
}) => {
  return (
    <div className="border border-custom-gray-border w-full max-w-md px-10 py-3 md:py-8 rounded-lg bg-white">
      <h2 className="text-base md:text-2xl text-center">{headline}</h2>
      <div className="mt-2 md:mt-8 flex gap-5 md:gap-10 justify-center w-full">
        {items.map((item) => (
          <div
            key={Math.random()}
            className="flex flex-col justify-center items-center gap-1"
          >
            <p className="text-lg whitespace-nowrap text-primary">
              {item.value}
            </p>
            <span className="overflow-hidden whitespace-nowrap">
              <Description value={item.title} />
            </span>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-3">
        {ctaList.map((cta, index) => (
          <Link href={cta.href} key={`${cta.title + index}`}>
            <button
              type="submit"
              className={`${
                index === 1
                  ? 'bg-white text-secondary shadow-md border'
                  : 'bg-secondary text-white'
              } rounded-lg mt-4 md:mt-8 py-2 md:py-4 w-full max-w-xs hover:opacity-90 transition-opacity duration-300`}
            >
              {cta.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BalanceCard
