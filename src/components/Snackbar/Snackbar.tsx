import { Dispatch, SetStateAction } from 'react'

export interface SnackbarMessage {
  message: string
  title: 'Warning' | 'New' | 'Success' | 'Error' | ''
}

interface Props extends SnackbarMessage {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export default function Snackbar({ show, setShow, message, title }: Props) {
  if (!show) {
    return <></>
  }

  return (
    <div
      className="fixed top-4 right-2 z-50 flex max-w-md items-center gap-3 rounded-full bg-bg-light p-2 font-cereal-medium text-sm leading-none shadow-xl lg:inline-flex lg:rounded-full"
      role="alert"
    >
      <div className="flex rounded-full bg-main px-2 py-1 text-xs font-bold uppercase text-white">
        {title}
      </div>
      <div className="flex-1 text-left font-cereal-medium">{message}</div>
      <button onClick={() => setShow(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}
