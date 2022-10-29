import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Slider = () => {
  const [open, setOpen] = useState(true)

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

  const sliderMedia = [
    'slide-placeholder.svg',
    'slide-placeholder.svg',
    'slide-placeholder.svg'
  ]

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

        <div className="fixed inset-0 z-30 overflow-y-auto">
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
                <div className="h-screen flex flex-col justify-center md:justify-between 2xl:justify-center overflow-hidden">
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
                      sliderMedia.map((media) => (
                        <Image
                          key={Math.random()}
                          src={`/images/${media}`}
                          width={150}
                          height={150}
                          objectFit="contain"
                          alt=""
                        />
                      ))
                    }
                  >
                    {sliderMedia.map((media) => (
                      <Image
                        key={Math.random()}
                        src={`/images/${media}`}
                        alt=""
                        width={600}
                        height={600}
                        objectFit="contain"
                      />
                    ))}
                  </Carousel>
                </div>
                <div className="absolute top-0 right-0 w-8 md:w-16 cursor-pointer m-2 z-10">
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
