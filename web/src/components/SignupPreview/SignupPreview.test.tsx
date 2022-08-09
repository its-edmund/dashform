import { render } from '@redwoodjs/testing/web'

import SignupPreview from './SignupPreview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SignupPreview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignupPreview />)
    }).not.toThrow()
  })
})
