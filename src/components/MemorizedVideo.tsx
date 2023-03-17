import React, { memo } from 'react'

const MemorizedVideo: React.FC<{ src: string; isThumbnail?: boolean }> = ({
  src,
  isThumbnail
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      className={`${isThumbnail ? 'w-96 h-96' : 'max-w-3xl'}`}
      controls={!isThumbnail}
    >
      <source src={`${src}`} />
      Your browser does not support the video tag.
    </video>
  )
}

export default memo(MemorizedVideo)
