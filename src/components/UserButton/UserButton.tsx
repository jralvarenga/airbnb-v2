import Link from 'next/link'
import { useRef, useState } from 'react'

// constant
import { USER_BUTTON_OPTIONS } from './UserButton.constants'

// hooks
import { useKeyPress, useOutsideClick } from '@/hooks'

export default function UserButton() {
  // state
  const [showMenu, setShowMenu] = useState(false)

  // ref
  const userMenu = useRef<HTMLDivElement>(null)

  /**
   * Handle outside div press to close menu
   */
  useOutsideClick(() => setShowMenu(false), userMenu)

  /**
   * Handle escape key press to close menu
   */
  useKeyPress(() => setShowMenu(false), 27)

  return (
    <>
      <button
        onClick={() => setShowMenu(true)}
        className="relative flex items-center gap-3 rounded-full border border-divider p-1 px-2 duration-150 hover:-mt-1 hover:mb-1 hover:shadow-lg"
      >
        <span className="pl-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
        <svg
          viewBox="0 0 32 32"
          className="text-text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: 'block',
            height: 30,
            width: 30,
            fill: 'currentcolor',
          }}
        >
          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
        </svg>
      </button>

      {showMenu && (
        <div
          ref={userMenu}
          className="absolute top-[70px] flex w-52 flex-col gap-1 rounded-lg bg-bg-light py-2 shadow-xl"
        >
          {USER_BUTTON_OPTIONS.map((option, i) => (
            <Link
              href={option.href}
              key={i}
              className={`p-3 px-4 duration-200 hover:bg-divider ${
                option.bold && 'font-cereal-medium'
              } ${option.topBorder && 'border-t border-divider'}`}
            >
              <span>{option.title}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
