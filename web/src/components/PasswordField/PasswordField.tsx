import { useEffect, useState } from 'react'

const PasswordField = () => {
  const [score, setScore] = useState(0)
  const [password, setPassword] = useState('')

  useEffect(() => {
    setScore(passwordScore(password))
  }, [password])

  const passwordScore = (pw: string): number => {
    let score = 0
    if (!pw) return score

    // award every unique letter until 5 repetitions
    const letters = new Object()
    for (let i = 0; i < pw.length; i++) {
      letters[pw[i]] = (letters[pw[i]] || 0) + 1
      score += 5.0 / letters[pw[i]]
    }

    // bonus points for mixing it up
    const variations = {
      digits: /\d/.test(pw),
      lower: /[a-z]/.test(pw),
      upper: /[A-Z]/.test(pw),
      nonWords: /\W/.test(pw),
    }

    let variationCount = 0
    for (const check in variations) {
      variationCount += variations[check] == true ? 1 : 0
    }
    score += (variationCount - 1) * 10

    return score
  }

  return (
    <div className="w-full">
      <input
        type="password"
        className="w-full rounded-lg border-2 border-gray-300 px-2 py-1"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <div className="mt-1 flex flex-row gap-1">
        <div
          className={`h-1 w-full rounded-l-full ${
            password.length === 0
              ? 'bg-gray-200'
              : score > 60
              ? 'bg-green-400'
              : score > 40
              ? 'bg-yellow-400'
              : 'bg-red-400'
          }`}
        ></div>
        <div
          className={`h-1 w-full ${
            score > 60
              ? 'bg-green-400'
              : score > 40
              ? 'bg-yellow-400'
              : 'bg-gray-200'
          }`}
        ></div>
        <div
          className={`h-1 w-full rounded-r-full ${
            score > 60 ? 'bg-green-400' : 'bg-gray-200'
          }`}
        ></div>
      </div>
    </div>
  )
}

export default PasswordField
