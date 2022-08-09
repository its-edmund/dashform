import { Fragment, useState } from 'react'

import {
  faCheck,
  faChevronDown,
  faClipboardList,
  faFileContract,
  faKey,
  faTableColumns,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Transition } from '@headlessui/react'

type EditorLayoutProps = {
  children?: React.ReactNode
}

const websites = [{ name: 'Main' }]

const EditorLayout = ({ children }: EditorLayoutProps) => {
  const [website, setWebsite] = useState(websites[0])
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex w-full flex-initial flex-row items-center justify-between bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 py-2 px-4">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-bold text-white">DashForm</h1>
          <div className="ml-4 w-72">
            <Listbox value={website} onChange={setWebsite}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white bg-opacity-50 py-1 pl-3 pr-10 text-left shadow-md shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <h3 className="text-xs text-white">Current Website</h3>
                  <div className="text-gray-600">
                    <span className="block truncate">{website.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </div>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {websites.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <button className="rounded-lg bg-white bg-opacity-50 px-4 py-1 font-semibold text-white shadow-lg">
          Publish
        </button>
      </div>
      <div className="flex flex-1 flex-row">
        <div className="flex w-24 flex-initial flex-col justify-center gap-2 border-r border-gray-200 px-2">
          <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
            <FontAwesomeIcon icon={faTableColumns} />
          </button>
          <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
            <FontAwesomeIcon icon={faUsers} />
          </button>
          <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
            <FontAwesomeIcon icon={faFileContract} />
          </button>
          <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
            <FontAwesomeIcon icon={faClipboardList} />
          </button>
          <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
            <FontAwesomeIcon icon={faKey} />
          </button>
        </div>
        <div className="grid h-full w-96 grid-cols-2 items-start gap-2 p-2 shadow-[5px_0_10px_-10px_rgb(0,0,0,0.3)]">
          <button className="w-full">
            <p className="mb-1 text-left text-xs text-gray-400">EMAIL</p>
            <div className="flex h-24 items-center justify-center rounded-lg bg-slate-200">
              <div className="">
                <svg
                  width="100"
                  height="41"
                  viewBox="0 0 223 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="223" height="41" rx="14" fill="white" />
                  <rect
                    x="75"
                    y="13"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="#ABABAB"
                  />
                  <rect
                    x="115"
                    y="13"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="#ABABAB"
                  />
                  <rect
                    x="95"
                    y="13"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="#ABABAB"
                  />
                  <rect
                    x="15"
                    y="13"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="#ABABAB"
                  />
                  <rect
                    x="55"
                    y="13"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="#ABABAB"
                  />
                  <rect
                    x="35"
                    y="13"
                    width="15"
                    height="15"
                    rx="7.5"
                    fill="#ABABAB"
                  />
                </svg>
              </div>
            </div>
          </button>
          <button className="w-full">
            <p className="mb-1 text-left text-xs text-gray-400">PASSWORD</p>
            <div className="h-24 rounded-lg bg-slate-200"></div>
          </button>
        </div>
        {children}
        <div className="h-full w-96 shadow-lg"></div>
      </div>
    </div>
  )
}

export default EditorLayout
