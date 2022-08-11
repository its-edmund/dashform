import { useContext, useEffect } from 'react'

import { AppContext } from 'src/context/AppContext'

import { InputFieldData } from '../InputField/InputField'

const SignupPreview = () => {
  const { signUp } = useContext(AppContext)

  useEffect(() => {
    console.log(signUp)
  })

  const renderField = (field: InputFieldData) => {
    console.log(field.componentType)
    switch (field.componentType.name) {
      case 'Text':
        return (
          <>
            <label>{field.content}</label>
            <input className="w-full rounded-lg border border-gray-200 p-1" />
          </>
        )
      case 'Email':
        return (
          <>
            <label>{field.content}</label>
            <input className="w-full rounded-lg border border-gray-200 p-1" />
          </>
        )
      case 'Password':
        return (
          <>
            <label>{field.content}</label>
            <input
              className="w-full rounded-lg border border-gray-200 p-1"
              type="password"
            />
          </>
        )
      case 'Date':
        return (
          <>
            <label>{field.content}</label>
            <input
              className="w-full rounded-lg border border-gray-200 p-1"
              type="date"
            />
          </>
        )
    }
  }

  return (
    <div className="flex w-96 flex-col gap-2 rounded-xl bg-white p-5 shadow-lg">
      <h1 className="text-2xl font-semibold">Create Your Account</h1>
      {signUp.map((field) => {
        return <div key={field._id}>{renderField(field)}</div>
      })}

      <button className="rounded-lg bg-purple-500 py-2 font-semibold text-white">
        Sign up
      </button>
    </div>
  )
}

export default SignupPreview
