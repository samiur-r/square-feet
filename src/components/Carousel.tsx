import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'

import isImage from 'utils/isImage'

interface SliderProps {
  media: string[]
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Slider: React.FC<SliderProps> = ({ media, open, setOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const next = () => {
    setCurrentImageIndex((curr) => curr + 1)
  }

  const prev = () => {
    setCurrentImageIndex((curr) => curr - 1)
  }

  const updateCurrentImageIndex = (index: number) => {
    if (currentImageIndex !== index) {
      setCurrentImageIndex(index)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-stone-800 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 top-0 z-30">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="bg-stone-800 transform transition-all">
              <div className="dir-ltr">
                <div className="h-screen flex flex-col justify-center md:justify-between overflow-hidden -mt-40 md:mt-0 md:pt-2">
                  <Carousel
                    selectedItem={currentImageIndex}
                    onChange={updateCurrentImageIndex}
                    showIndicators={false}
                    showArrows={false}
                    infiniteLoop
                    transitionTime={200}
                    useKeyboardArrows
                    showStatus={false}
                    renderThumbs={() =>
                      media.map((src) =>
                        isImage(src) ? (
                          <Image
                            key={Math.random()}
                            src={`${src}`}
                            width={100}
                            height={100}
                            objectFit="contain"
                            alt="post_image"
                          />
                        ) : (
                          // eslint-disable-next-line jsx-a11y/media-has-caption
                          <video
                            key={Math.random()}
                            className="2xl:w-96 2xl:h-96 w-20 h-20"
                            playsInline
                          >
                            <source src={`${src}#t=0.001`} type="video/mp4" />
                            <source src={`${src}#t=0.001`} type="video/webm" />
                            <source src={`${src}#t=0.001`} type="video/ogg" />
                            <source
                              src={`${src}#t=0.001`}
                              type="video/quicktime"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )
                      )
                    }
                  >
                    {media.map((src) =>
                      isImage(src) ? (
                        <Image
                          key={Math.random()}
                          src={`${src}`}
                          alt="post_image"
                          width={500}
                          height={500}
                          objectFit="contain"
                        />
                      ) : (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <video
                          key={Math.random()}
                          className="md:w-96 md:h-96 w-80 h-80 object-contain"
                          controls
                          playsInline
                        >
                          <source src={`${src}#t=0.001`} type="video/mp4" />
                          <source src={`${src}#t=0.001`} type="video/webm" />
                          <source src={`${src}#t=0.001`} type="video/ogg" />
                          <source
                            src={`${src}#t=0.001`}
                            type="video/quicktime"
                          />
                          Your browser does not support the video tag.
                        </video>
                      )
                    )}
                  </Carousel>
                </div>
                <div className="absolute top-0 right-0 w-8 md:w-10 cursor-pointer mt-44 mr-2 md:m-2 z-10">
                  <XMarkIcon
                    className="text-white"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="absolute top-0 left-0 h-full flex items-center w-16 cursor-pointer">
                  <ChevronLeftIcon className="text-white" onClick={prev} />
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center w-16 cursor-pointer">
                  <ChevronRightIcon className="text-white" onClick={next} />
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Slider
