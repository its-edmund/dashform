import { render } from '@redwoodjs/testing/web'

import InputField from './InputField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputField />)
    }).not.toThrow()
  })
})
