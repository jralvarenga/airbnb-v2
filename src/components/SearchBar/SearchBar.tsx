'use client'

import React from 'react'

export default function SearchBar() {
  return (
    <div className="flex flex-shrink-0 flex-grow-0 items-center justify-between gap-5 rounded-full border border-divider p-[6px] font-cereal-medium text-sm shadow-md duration-150 hover:-mt-1 hover:mb-1 hover:shadow-lg">
      <button className="pl-6">Anywhere</button>
      {/* Divider */}
      <div className="h-5 w-[1px] bg-divider" />

      <button className="">Any week</button>
      {/* Divider */}
      <div className="h-5 w-[1px] bg-divider" />

      <button className="font-cereal text-text-secondary">Add guest</button>

      {/* Divider */}
      <button className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-main text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  )
}
