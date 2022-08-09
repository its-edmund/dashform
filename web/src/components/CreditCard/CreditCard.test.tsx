import { render } from '@redwoodjs/testing/web'

import CreditCard from './CreditCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreditCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreditCard />)
    }).not.toThrow()
  })
})
