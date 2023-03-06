'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Regions } from 'airbnb-v2'

// hooks
import { useOutsideClick } from '@/hooks'

// components
import { Select } from '../Select'
import { Input } from '../Input'

// assets
import facebookLogo from '@/assets/icons/facebook-logo.svg'
import googleLogo from '@/assets/icons/google-logo.svg'
import appleLogo from '@/assets/icons/apple-logo.svg'
import { Snackbar, SnackbarMessage } from '../Snackbar'

const ICONS_SIZE = 20

export default function LoginBox() {
  // context
  const router = useRouter()

  // state
  const [regions, setRegions] = useState<Regions[]>([])
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage>({
    message: '',
    title: '',
  })

  // ref
  const loginDiv = useRef<HTMLDivElement>(null)

  /**
   * Handle when user clicks outside login box
   */
  useOutsideClick(() => router.back(), loginDiv)

  const getRegionsHandle = useCallback(async () => {
    const res = await fetch('https://restcountries.com/v2/all')
    const data: Regions[] = await res.json()
    setRegions(data)
  }, [])

  useEffect(() => {
    getRegionsHandle()
  }, [getRegionsHandle])

  const handleLoginMessage = () => {
    setSnackbarMessage({
      message:
        "Obviously we can't login to Airbnb, this only shows that the button works",
      title: 'New',
    })
    setShowSnackbar(true)
  }

  return (
    <div className="fixed z-50 flex h-full w-full animate-backdrop-blur-md items-center justify-center xs:px-2">
      <div
        ref={loginDiv}
        className="w-full max-w-[570px] animate-enter-login-page rounded-xl bg-bg-light shadow-xl"
      >
        {/* Topbar */}
        <div className="flex w-full justify-center border-b border-divider p-5">
          <span className="text-center font-cereal-bold text-lg">
            Log in or sign up
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col p-5">
          <h2 className="mb-3 font-cereal-bold text-xl text-main">
            Welcome to Airbnb 2.0
          </h2>
          <Select label="Country/Region" className="rounded-b-none">
            {regions.map((region, i) => (
              <option key={i} value={region.name}>
                {region.name} (+{region.callingCodes[0]})
              </option>
            ))}
          </Select>
          <Input label="Phone Number" className="-mt-[1px] rounded-t-none" />
          <span className="text-xs text-text-secondary">
            We'll call or text you to confirm your number. Standard message and
            data rates apply.{' '}
            <Link
              className="font-cereal-medium text-text-main underline"
              href="https://www.airbnb.com/help/article/2855"
            >
              Privacy Policy
            </Link>
          </span>

          {/* Login button */}
          <button
            onClick={handleLoginMessage}
            className="mt-5 mb-6 rounded-lg bg-main p-3 font-cereal-medium text-white duration-150 hover:brightness-90"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="mb-3 flex items-center justify-between gap-5">
            <div className="h-[1px] flex-1 bg-divider"></div>
            <span className="font-cereal-medium text-xs text-text-secondary">
              or
            </span>
            <div className="h-[1px] flex-1 bg-divider"></div>
          </div>

          {/* Provider buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleLoginMessage}
              className="flex items-center justify-center gap-2 rounded-lg border bg-[#0062E0] p-3 font-cereal-medium text-sm text-white"
            >
              <Image
                src={facebookLogo}
                width={ICONS_SIZE}
                height={ICONS_SIZE}
                alt="Facebook logo"
              />
              <span>Continue with Facebook</span>
            </button>
            <button
              onClick={handleLoginMessage}
              className="flex items-center justify-center gap-2 rounded-lg border border-text-main p-3 font-cereal-medium text-sm"
            >
              <Image
                src={googleLogo}
                width={ICONS_SIZE}
                height={ICONS_SIZE}
                alt="Google logo"
              />
              <span>Continue with Google</span>
            </button>
            <button
              onClick={handleLoginMessage}
              className="flex items-center justify-center gap-2 rounded-lg border bg-black p-3 font-cereal-medium text-sm text-white"
            >
              <Image
                src={appleLogo}
                width={ICONS_SIZE}
                height={ICONS_SIZE}
                alt="Apple logo"
              />
              <span>Continue with Apple</span>
            </button>
            <button
              onClick={handleLoginMessage}
              className="flex items-center justify-center gap-2 rounded-lg border border-text-main p-3 font-cereal-medium text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{
                  width: ICONS_SIZE,
                  height: ICONS_SIZE,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>Continue with Email</span>
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        title={snackbarMessage.title}
        message={snackbarMessage.message}
        show={showSnackbar}
        setShow={setShowSnackbar}
      />
    </div>
  )
}
