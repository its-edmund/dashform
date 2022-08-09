import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Motion, spring } from 'react-motion'

import { AppContext } from 'src/context/AppContext'

export interface InputFieldData {
  name: string
  content: string
  _id: string
}

interface InputFieldProps {
  item: InputFieldData
  itemSelected: number
  dragHandleProps: object
}

interface InputFieldState {
  content: string
}

class InputField extends React.Component<InputFieldProps, InputFieldState> {
  static contextType = AppContext

  constructor(props) {
    super(props)

    this.state = {
      content: props.item.content,
    }
  }

  render() {
    const { item, itemSelected, dragHandleProps } = this.props
    const { content } = this.state
    const { signUp, setSignUp } = this.context

    return (
      <div className="flex flex-row">
        <div className="m-2 flex flex-row text-gray-400" {...dragHandleProps}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
          <FontAwesomeIcon icon={faEllipsisVertical} className="ml-0.5" />
        </div>
        <input
          value={content}
          onChange={(e) => {
            this.setState({ content: e.target.value })
            signUp[
              signUp.findIndex((field) => field._id === item._id)
            ].content = e.target.value
            setSignUp(signUp)
          }}
          className="w-full rounded-md border border-gray-300 bg-gray-100 p-1"
        />
      </div>
    )
  }
}

export default InputField
