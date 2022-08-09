import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputField = () => {
  return (
    <div className="my-4 flex flex-row items-center">
      <div className="m-2 flex flex-row text-gray-400">
        <FontAwesomeIcon icon={faEllipsisVertical} />
        <FontAwesomeIcon icon={faEllipsisVertical} className="ml-0.5" />
      </div>
      <input className="w-full rounded-md border border-gray-300 bg-gray-100 p-1" />
    </div>
  )
}

export default InputField
