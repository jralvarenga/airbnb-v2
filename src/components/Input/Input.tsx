import { ReactNode, useRef, useState } from 'react'

interface Props {
  label: string
  className?: string
}

export default function Input({ label, className }: Props) {
  // state
  const [isFocused, setIsFocused] = useState(false)

  // ref
  const input = useRef<HTMLInputElement>(null)

  return (
    <div
      onClick={() => {
        input.current!.focus()
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
        <input
          ref={input}
          name=""
          id="input"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  )
}
