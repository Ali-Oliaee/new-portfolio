import {Vazirmatn} from 'next/font/google'
import '@styles/global.sass'

export const metadata = {
  title: 'Ali Oliaee | علی علیایی',
  description: 'personal website',
  creator: 'Ali Oliaee',
  publisher: 'Ali Oliaee',
  icons: {
    icon: '/favicon.png',
  },
}

const vazirmatn = Vazirmatn({
  weight : ['400','700'],
  subsets: ['arabic', 'latin-ext'] 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  )
}
