import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="flex h-screen bg-zinc-800">
      <h1 className="m-auto w-3/4 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-center text-6xl font-bold text-transparent">
        Monetize at lightning speeds. Payments, authentication, and
        subscriptions, all-in-one.
      </h1>
    </div>
  )
}

export default HomePage
