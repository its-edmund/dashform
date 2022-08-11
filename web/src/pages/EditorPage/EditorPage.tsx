import { Fragment, useContext, useState } from 'react'

import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, Tab, Transition } from '@headlessui/react'
import DraggableList from 'react-draggable-list'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import InputField, {
  InputFieldData,
} from 'src/components/InputField/InputField'
import PasswordField from 'src/components/PasswordField/PasswordField'
import SignupPreview from 'src/components/SignupPreview/SignupPreview'
import { AppContext } from 'src/context/AppContext'

const previewStatus = [{ name: 'build' }, { name: 'preview' }]

const EditorPage = () => {
  const [categories] = useState([
    { title: 'Sign up' },
    { title: 'Login' },
    { title: 'Checkout' },
    { title: 'Subscriptions' },
  ])
  const [selected, setSelected] = useState(previewStatus[0])
  const [useContainer] = useState(false)
  const { signUp, setSignUp } = useContext(AppContext)
  const [signUpState, setSignUpState] = useState(signUp)

  const _onListChange = (newList: ReadonlyArray<InputFieldData>) => {
    setSignUp(newList)
    setSignUpState(newList)
  }

  return (
    <div className="flex h-full w-full flex-col">
      <Tab.Group>
        <Tab.List className="m-2 flex rounded-xl bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50 p-1">
          {categories.map((category) => {
            return (
              <Tab
                key={category.title}
                className={({ selected }) =>
                  `w-full rounded-lg py-2 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                    selected
                      ? 'bg-white text-pink-400 shadow'
                      : 'text-white hover:bg-white/20 hover:text-pink-100'
                  }`
                }
              >
                {category.title}
              </Tab>
            )
          })}
        </Tab.List>
        {/* <div className="ml-2 w-64">
          <Listbox value={selected} onChange={setSelected}>
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="fixed mt-1 max-h-60 w-64 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {previewStatus.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
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
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="h-5 w-5"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
        </div> */}
        <Tab.Panels className="h-full">
          <Tab.Panel className="flex h-full flex-col">
            <Tab.Group>
              <Tab.List className="mx-2">
                {['Block', 'Preview'].map((tab) => {
                  return (
                    <Tab
                      key={tab}
                      className={({ selected }) =>
                        `px-6 py-2 text-gray-400 ${
                          selected
                            ? 'border-b-2 border-pink-400 text-pink-500'
                            : ''
                        }`
                      }
                    >
                      {tab}
                    </Tab>
                  )
                })}
              </Tab.List>
              <Tab.Panels className="h-full w-full">
                <Tab.Panel>
                  <div className="p-5">
                    <h1 className="text-xl font-semibold">Fields</h1>
                    <div className="my-4">
                      <DraggableList
                        itemKey={'_id'}
                        list={signUpState}
                        template={InputField}
                        onMoveEnd={(newList) => _onListChange(newList)}
                        container={() => document.body}
                      />
                    </div>
                    <button
                      className="rounded-lg bg-gradient-to-r from-fuchsia-400 to-indigo-400 py-2 px-4 font-semibold text-white hover:bg-opacity-60"
                      onClick={() => {
                        const newSignUp = signUp.concat({
                          name: 'title',
                          _id: Date.now().toString(),
                          content: '',
                        })
                        setSignUp(newSignUp)
                        setSignUpState(newSignUp)
                      }}
                    >
                      Add Field
                    </button>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="flex h-full items-center justify-center">
                  <SignupPreview />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>
          <Tab.Panel>
            <div className="m-auto w-96 rounded-xl bg-white p-5 shadow">
              <form className="flex flex-col gap-4">
                <h3>Login</h3>
                <input
                  placeholder="Username"
                  className="rounded-lg border-2 border-gray-200 px-2 py-1"
                />
                <input
                  placeholder="Password"
                  className="rounded-lg border-2 border-gray-200 px-2 py-1"
                />
                <button
                  className="rounded-lg bg-blue-500 py-1 text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default EditorPage
