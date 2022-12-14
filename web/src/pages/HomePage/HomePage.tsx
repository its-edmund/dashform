import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen bg-white">
      <div className="m-auto flex flex-col items-center gap-2 md:w-9/12">
        <h1 className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-7xl">
          Monetize your platform at lightning speeds and without hassle.
        </h1>
        <h3 className="w-11/12 text-center text-2xl text-gray-400 md:w-3/4">
          DashForm is a platform that provides a simple way to manage
          authentication, payments, and subscriptions, all in one place.
        </h3>
        <div className="md: relative mt-4 flex flex-col gap-2 md:flex-row lg:w-1/3">
          <input
            className="w-full rounded-lg bg-gray-100 px-4 py-2 text-xl focus:outline-purple-400"
            placeholder="example@mail.com"
          />
          <button className="whitespace-nowrap rounded-lg border-purple-500 bg-purple-500 py-2 px-4 font-semibold text-white">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
