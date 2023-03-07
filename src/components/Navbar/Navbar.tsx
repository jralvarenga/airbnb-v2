'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

// assets
import airbnbIcon from '@/assets/icons/airbnb.svg'
import airbnbFullIcon from '@/assets/icons/airbnb-full.svg'

// components
import { SearchBar } from '../SearchBar'
import { UserButton } from '../UserButton'
import { CategoriesRow } from '../CategoriesRow'
import { LoginBox } from '../LoginBox'

// constants
import { NAVBAR_HEIGHT } from './Navbar.constants'

interface Props {
  hiddeCategories?: boolean
}

export default function Navbar({ hiddeCategories = false }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (pathname === '/login') {
    return <></>
  }

  return (
    <>
      <div
        style={{ height: NAVBAR_HEIGHT }}
        className="fixed z-40 flex w-full flex-col gap-12 bg-bg-light/75 p-5 px-10 pb-0 backdrop-blur-2xl md:px-5 sm:gap-5"
      >
        {/* Navbar */}
        <div className="flex w-full flex-row items-center justify-between sm:flex-col">
          <Link className="flex-1" href={'/'}>
            <Image
              src={airbnbIcon}
              width={32}
              height={32}
              alt={'airbnb-logo'}
              className="min-md:hidden"
            />
            <Image
              src={airbnbFullIcon}
              width={100}
              height={32}
              alt={''}
              className="md:hidden"
            />
          </Link>
          <div className="flex flex-1 items-center justify-center">
            <SearchBar />
          </div>
          <div className="flex flex-1 items-center justify-end gap-4 text-sm sm:hidden">
            <Link
              href={'https://www.airbnb.com/host/homes'}
              target="_blank"
              className="rounded-full p-3 font-cereal-medium duration-150 hover:bg-divider lg:hidden"
              rel="noopener noreferrer"
            >
              Airbnb your home
            </Link>
            <UserButton />
          </div>
        </div>

        {/* Categories */}
        {!hiddeCategories && <CategoriesRow />}
      </div>

      {/* Login */}
      {searchParams.get('login') && <LoginBox />}
    </>
  )
}
