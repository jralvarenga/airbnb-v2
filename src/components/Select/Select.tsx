import { ReactNode, useRef, useState } from 'react'

interface Props {
  label: string
  children: ReactNode[]
  className?: string
}

export default function Select({ label, children, className }: Props) {
  // state
  const [isFocused, setIsFocused] = useState(false)

  // ref
  const select = useRef<HTMLSelectElement>(null)

  return (
    <div
      onClick={() => {
        select.current!.focus()
        select.current!.selectedOptions
      }}
      className={`flex items-center justify-between rounded-lg border border-divider p-2 ${
        isFocused && 'outline'
      } ${className}`}
    >
      <div className="flex flex-1 flex-col">
        <label
          htmlFor="select"
          className="align-top text-sm text-text-secondary"
        >
          {label}
        </label>
        <select
          ref={select}
          name=""
          id="select"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="focus:no-underline"
        >
          {children}
        </select>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  )
}
