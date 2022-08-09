import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PaymentPage = () => {
  const [cardholderName, setCardholderName] = useState('')

  return (
    <div className="flex h-screen w-screen bg-gray-200">
      <div className="m-auto rounded-lg bg-white p-4">
        <div className="relative mx-auto -mt-20 h-56 w-96 rounded-xl border border-gray-200 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
          <div className="absolute top-4 left-4 font-serif text-2xl font-medium text-white">
            Logify
          </div>
          <div className="absolute top-4 right-4 flex">
            <div className="h-8 w-8 rounded-full border-2 border-white"></div>
            <div className="-ml-3 h-8 w-8 rounded-full border-2 border-white"></div>
          </div>
          <div className="absolute bottom-3 w-full px-5">
            <p className="font-semibold text-white">Card Number</p>
            <pre className="text-2xl text-white">1234 5678 9012 3456</pre>
            <div className="flex flex-row justify-between">
              <div>
                <p className="font-semibold text-white">Name</p>
                <pre className="text-white">
                  {cardholderName.length === 0
                    ? 'Cardholder Name'
                    : cardholderName}
                </pre>
              </div>
              <div>
                <p className="font-semibold text-white">Exp. Date</p>
                <pre className="text-white">03/19</pre>
              </div>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4 pt-3">
          <input
            placeholder="Cardholder name"
            className="rounded-lg border-2 border-gray-200 px-2 py-1"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
          <input
            placeholder="Card number"
            className="rounded-lg border-2 border-gray-200 px-2 py-1"
          />
          <div className="flex flex-row gap-4">
            <input
              placeholder="MM/YY"
              className="rounded-lg border-2 border-gray-200 px-2 py-1"
            />
            <input
              placeholder="CVV"
              className="rounded-lg border-2 border-gray-200 px-2 py-1"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentPage
