import { render } from '@redwoodjs/testing/web'

import PaymentPage from './PaymentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PaymentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PaymentPage />)
    }).not.toThrow()
  })
})
