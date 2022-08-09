import {
  faClipboardList,
  faFileContract,
  faKey,
  faTableColumns,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SidebarLayoutProps = {
  children?: React.ReactNode
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="flex w-14 flex-initial flex-col justify-center gap-2 border-gray-300 px-2 shadow-lg">
        <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
          <FontAwesomeIcon icon={faTableColumns} />
        </button>
        <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
          <FontAwesomeIcon icon={faUsers} />
        </button>
        <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
          <FontAwesomeIcon icon={faFileContract} />
        </button>
        <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
          <FontAwesomeIcon icon={faClipboardList} />
        </button>
        <button className="flex aspect-square items-center justify-center rounded-lg text-left text-slate-500 hover:bg-blue-100 hover:text-sky-800">
          <FontAwesomeIcon icon={faKey} />
        </button>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default SidebarLayout
