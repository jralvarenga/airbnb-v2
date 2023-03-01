import Link from 'next/link'

export default function PlaceCard() {
  return (
    <Link
      href={'/not-defined-yet'}
      className="relative flex h-full w-full cursor-pointer flex-col items-center rounded-xl shadow-md duration-150 hover:-mt-1 hover:mb-1 hover:shadow-lg"
    >
      <img
        className="h-full w-full rounded-xl object-cover"
        src="/assets/img/places/test.jpeg"
        alt=""
      />
      <div className="absolute flex h-full w-full flex-col justify-between rounded-xl bg-gradient-to-b from-transparent to-black/40 p-3 duration-150 hover:to-black/60">
        <div className="flex justify-end">
          <button className="cursor-pointer">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                fill: 'rgba(0, 0, 0, 0.5)',
                height: 24,
                width: 24,
                stroke: 'white',
                strokeWidth: 2,
                overflow: 'visible',
              }}
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg>
          </button>
        </div>
        <div>Arrows</div>

        {/* Place info */}
        <div className="flex items-start justify-between text-sm text-white">
          <div className="flex flex-col gap-1">
            <span className="font-cereal-medium">Place name, Country</span>
            <span className="text-xs font-light">Distance km away</span>
            <span className="font-cereal-medium">
              $345.00 USD <span className="font-cereal">night</span>
            </span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span>4.82</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
