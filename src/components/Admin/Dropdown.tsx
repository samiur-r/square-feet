import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Cog8ToothIcon } from '@heroicons/react/24/solid'

interface ActionType {
  title: string
  icon: any
  handleClick: (val?: any) => void
}

interface DropDownProps {
  items: ActionType[]
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  return (
    <Menu as="div" className="relative inline-block text-left ml-2">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-custom-gray-2 hover:bg-primary transition-all px-2 py-1 text-sm font-semibold text-white shadow-sm">
          <Cog8ToothIcon
            className="h-5 w-5 text-primary hover:text-white transition-all"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items &&
              items.length &&
              items.map((item: ActionType) => (
                <Menu.Item key={Math.random()}>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`
                    ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                    flex items-center px-4 py-2 text-sm w-full text-left`}
                      onClick={() => item.handleClick()}
                    >
                      {item.icon && <item.icon className="h-5 w-5 mr-3" />}
                      {item.title}
                    </button>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDown
