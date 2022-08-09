type CreditCardProps = {
  cardholderName: string
  cardNumber: string
  expMonth: string
  expYear: string
}

const CreditCard = ({
  cardholderName,
  cardNumber,
  expMonth,
  expYear,
}: CreditCardProps) => {
  const handlingCardNumber = (num) => {
    return num
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
  }

  return (
    <div className="relative flex h-56 w-96 rounded-xl bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 shadow backdrop-blur">
      <div className="absolute top-0 left-0 h-full w-full rounded-xl backdrop-blur-xl">
        <div className="absolute top-4 left-4 font-serif text-2xl font-medium text-white">
          Logify
        </div>
        <div className="absolute top-4 right-4 flex">
          <div className="h-8 w-8 rounded-full border-2 border-white"></div>
          <div className="-ml-3 h-8 w-8 rounded-full border-2 border-white"></div>
        </div>
        <div className="absolute bottom-4 w-full px-4 text-white">
          <p className="text-xs font-semibold text-white">Card Number</p>
          <pre className="text-2xl">
            {!cardNumber || cardNumber.length === 0
              ? '0000 0000 0000 0000'
              : handlingCardNumber(cardNumber)}
          </pre>
          <div className="mt-4 flex flex-row justify-between">
            <div>
              <p className="text-xs font-semibold text-white">Name</p>
              <pre className="text-white">
                {!cardholderName || cardholderName.length === 0
                  ? 'Cardholder Name'
                  : cardholderName}
              </pre>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Exp. Date</p>
              <pre className="text-white">
                {`${!expMonth || expMonth.length === 0 ? 'MM' : expMonth}/${
                  !expYear || expYear.length === 0 ? 'YY' : expYear
                }`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
