import '@styles/global.sass'
import {Vazirmatn} from 'next/font/google'
import {LocalThemeProvider} from './components'

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
    <html >
      <body className={vazirmatn.className}>
        <LocalThemeProvider>
          {children}
        </LocalThemeProvider>
      </body>
    </html>
  )
}
