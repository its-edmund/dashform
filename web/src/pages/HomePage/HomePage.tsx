import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen bg-white">
      <div className="m-auto flex w-9/12 flex-col items-center gap-2">
        <h1 className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-center text-7xl font-extrabold text-transparent">
          Monetize your platform at lightning speeds and without hassle.
        </h1>
        <h3 className="w-3/4 text-center text-2xl text-gray-400">
          DashForm is a platform that provides a simple way to manage
          authentication, payments, and subscriptions, all in one place.
        </h3>
        <div className="relative mt-4 w-1/3">
          <input
            className="mx-auto w-full rounded-lg bg-gray-100 px-4 py-2 text-xl focus:outline-purple-400"
            placeholder="example@mail.com"
          />
          <button className="absolute right-0 top-0.5 right-0.5 rounded-lg border-purple-500 bg-purple-500 py-2 px-4 font-semibold text-white">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
