import { Navbar } from '@/components/Navbar'
import '@/styles/globals.css'

export const metadata = {
  title: 'Airbnb 2.0',
  description: 'My version of the shitty airbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-light font-cereal text-text-main">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
