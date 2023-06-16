import React from 'react'

interface TooltipProps {
  text: string | undefined
  children: React.ReactElement
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = React.useState(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md z-10">
          {text ?? ''}
        </div>
      )}
    </div>
  )
}

export default Tooltip
