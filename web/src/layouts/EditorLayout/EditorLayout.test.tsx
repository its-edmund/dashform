import { render } from '@redwoodjs/testing/web'

import EditorLayout from './EditorLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditorLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditorLayout />)
    }).not.toThrow()
  })
})
