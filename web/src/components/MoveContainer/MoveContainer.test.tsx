import { render } from '@redwoodjs/testing/web'

import MoveContainer from './MoveContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MoveContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MoveContainer />)
    }).not.toThrow()
  })
})
