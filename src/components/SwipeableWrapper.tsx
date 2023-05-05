import { useState } from 'react'
import { useRouter } from 'next/router'
import { Swipeable, SwipeableProps } from 'react-swipeable'

type SwipeableWrapperProps = {
  children: React.ReactNode
} & SwipeableProps

const SwipeableWrapper = ({
  children,
  ...swipeableProps
}: SwipeableWrapperProps) => {
  const router = useRouter()
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null)

  const handleSwipe = (deltaX: number) => {
    if (deltaX > 100) {
      setSwipeDirection('right')
    } else if (deltaX < -100) {
      setSwipeDirection('left')
    }
  }

  const handleSwipeEnd = () => {
    if (swipeDirection === 'right') {
      router.back()
    }
    setSwipeDirection(null)
  }

  return (
    <Swipeable
      onSwiping={({ deltaX }: any) => handleSwipe(deltaX)}
      onSwiped={handleSwipeEnd}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...swipeableProps}
    >
      {children}
    </Swipeable>
  )
}

export default SwipeableWrapper
