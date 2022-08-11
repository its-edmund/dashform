import { Fragment, useState } from 'react'

import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox, RadioGroup, Transition } from '@headlessui/react'
import { Motion, spring } from 'react-motion'

import { AppContext } from 'src/context/AppContext'

export interface InputFieldData {
  name: string
  content: string
  componentType: any
  _id: string
}

interface InputFieldProps {
  item: InputFieldData
  itemSelected: number
  dragHandleProps: object
}

interface InputFieldState {
  content: string
  componentType: any
  passwordCheck: string
  passwordRequirements: {
    requireSymbol: boolean
    requireNumber: boolean
    requireCapital: boolean
  }
}

const fieldType = [
  { name: 'Text' },
  { name: 'Email' },
  { name: 'Password' },
  { name: 'Date' },
]

class InputField extends React.Component<InputFieldProps, InputFieldState> {
  static contextType = AppContext

  constructor(props) {
    super(props)

    this.state = {
      content: props.item.content,
      componentType: props.item.componentType,
      passwordCheck: 'Simple',
      passwordRequirements: {
        requireSymbol: false,
        requireNumber: false,
        requireCapital: false,
      },
    }
  }

  render() {
    const { item, itemSelected, dragHandleProps } = this.props
    const { content } = this.state
    const { signUp, setSignUp } = this.context
    let selected = false

    return (
      <div
        className={`flex flex-row items-center rounded-lg bg-white p-3 shadow-md ${
          !selected || 'z-50'
        }`}
        onClick={() => (selected = true)}
      >
        <div className="m-2 flex flex-row text-gray-400" {...dragHandleProps}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
          <FontAwesomeIcon icon={faEllipsisVertical} className="ml-0.5" />
        </div>
        <div className="flex w-full flex-col">
          <input
            value={content}
            placeholder={'Label text'}
            onChange={(e) => {
              this.setState({ content: e.target.value })
              signUp[
                signUp.findIndex((field) => field._id === item._id)
              ].content = e.target.value
              setSignUp(signUp)
            }}
            className="w-full rounded-lg border border-gray-200 bg-gray-100 py-2 px-2"
          />
          <div className="mt-2">
            <Listbox
              value={this.state.componentType}
              onChange={(e) => {
                this.setState({ componentType: e })
                signUp[
                  signUp.findIndex((field) => field._id === item._id)
                ].componentType = e
                setSignUp(signUp)
              }}
            >
              <div>
                <Listbox.Button className="relative w-full cursor-default rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span>{this.state.componentType.name}</span>
                </Listbox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {fieldType.map((component, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={component}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {component.name}
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
            </Listbox>
          </div>
          {this.state.componentType.name === 'Text' && (
            <div>
              <input placeholder="Placeholder Text" />
            </div>
          )}
          {this.state.componentType.name === 'Password' && (
            <div className="mt-2">
              <RadioGroup
                value={this.state.passwordCheck}
                onChange={(e) => {
                  this.setState({ passwordCheck: e })
                }}
              >
                <RadioGroup.Option value="Simple">
                  {({ checked }) => (
                    <div className="flex flex-row items-center">
                      <div className="mr-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-300">
                        {checked && (
                          <div className="h-2 w-2 rounded-full bg-purple-300"></div>
                        )}
                      </div>
                      Simple
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="Advanced">
                  {({ checked }) => (
                    <div className="flex flex-row items-center">
                      <div className="mr-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-300">
                        {checked && (
                          <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                        )}
                      </div>
                      Advanced
                    </div>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
              {this.state.passwordCheck === 'Advanced' && (
                <div>
                  <h1>Require:</h1>
                  <div className="flex flex-row items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={this.state.passwordRequirements.requireSymbol}
                        onChange={(e) => {
                          console.log(e.target.checked)
                          this.setState({
                            passwordRequirements: {
                              ...this.state.passwordRequirements,
                              requireSymbol: e.target.checked,
                            },
                          })
                        }}
                        className="mr-1 h-4 w-4 appearance-none rounded border-2 border-gray-300 checked:border-purple-400 checked:bg-purple-400"
                      />
                      {this.state.passwordRequirements.requireSymbol && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="pointer-events-none absolute left-0.5 top-1 h-3 w-3 text-white"
                        />
                      )}
                    </div>
                    <p>Require symbol</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={this.state.passwordRequirements.requireSymbol}
                        onChange={(e) => {
                          console.log(e.target.checked)
                          this.setState({
                            passwordRequirements: {
                              ...this.state.passwordRequirements,
                              requireSymbol: e.target.checked,
                            },
                          })
                        }}
                        className="mr-1 h-4 w-4 appearance-none rounded border-2 border-gray-300 checked:border-purple-400 checked:bg-purple-400"
                      />
                      {this.state.passwordRequirements.requireSymbol && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="pointer-events-none absolute left-0.5 top-1 h-3 w-3 text-white"
                        />
                      )}
                    </div>
                    <p>Require number</p>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={this.state.passwordRequirements.requireSymbol}
                        onChange={(e) => {
                          console.log(e.target.checked)
                          this.setState({
                            passwordRequirements: {
                              ...this.state.passwordRequirements,
                              requireSymbol: e.target.checked,
                            },
                          })
                        }}
                        className="mr-1 h-4 w-4 appearance-none rounded border-2 border-gray-300 checked:border-purple-400 checked:bg-purple-400"
                      />
                      {this.state.passwordRequirements.requireSymbol && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="pointer-events-none absolute left-0.5 top-1 h-3 w-3 text-white"
                        />
                      )}
                    </div>
                    <p>Require capital letter</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default InputField
