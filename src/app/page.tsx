import { NAVBAR_HEIGHT } from '@/components/Navbar'
import PlaceCard from '@/components/PlaceCard/PlaceCard'

export default function Home() {
  return (
    <div style={{ paddingTop: NAVBAR_HEIGHT }} className="flex justify-center">
      <div className="grid grid-cols-airbnb-5 grid-rows-airbnb-5 gap-6 px-10 pt-1 xs:px-5 airbnb-4-col:grid-cols-airbnb-4 airbnb-3-col:grid-cols-airbnb-3 airbnb-2-col:grid-cols-airbnb-2 airbnb-1-col:grid-cols-airbnb-1">
        {Array(50)
          .fill(null)
          .map((xd, i) => (
            <PlaceCard key={i} />
          ))}
      </div>
    </div>
  )
}
