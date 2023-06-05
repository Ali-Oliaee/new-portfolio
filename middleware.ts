import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'
import { i18n } from './next-i18next.config'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/super-toroid-yellow-glossy.svg',
      '/float-person.svg',
      '/moon.svg',
      '/right-arrow.svg',
      '/favicon.png',                    
      '/round-cube-orange-glossy.svg',
      '/float-person.svg',
      '/sun.svg',
      '/pill-blue-glossy.svg',
      '/super-toroid-yellow-glossy.svg',
      '/union.svg',
      '/union1.svg',
      '/union2.svg',
      '/social-media/github.svg',
      '/social-media/google.svg',
      '/social-media/instagram.svg',
      '/social-media/linkedin.svg',
      '/social-media/whatsapp.svg',
      '/me.jpeg',
      '/atSign.svg',
      '/location.svg',
      '/phone.svg',
      '/users.svg',
    ].includes(pathname)
  )
    return

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
