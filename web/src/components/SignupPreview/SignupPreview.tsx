import { useContext, useEffect } from 'react'

import { AppContext } from 'src/context/AppContext'

const SignupPreview = () => {
  const { signUp } = useContext(AppContext)

  useEffect(() => {
    console.log(signUp)
  })
  return (
    <div className="w-96 rounded-xl bg-white p-5 shadow-lg">
      <h1>Sign up</h1>
      {signUp.map((field) => {
        return (
          <div className="flex flex-col" key={field._id}>
            <label>{field.content}</label>
            <input className="rounded-lg border border-gray-200 p-1" />
          </div>
        )
      })}
    </div>
  )
}

export default SignupPreview
