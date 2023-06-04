import Link from 'next/link'
import '@styles/landing.sass'
import Image from 'next/image'
import { getDictionary } from 'get-dictionary'
import ThemeSwitcher from '@components/theme-switcher'
import LanguageSelector from '@components/language-selector'

export default async function HomePage({
  params: { lang },
}: LanguageProp) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="container" dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <div className="topLeftGradient"></div>
      <div className="glass">
        <div className="header">
          <h1 className="logoName">
            Ali
          </h1>
          <div className="headerMenu">
            <LanguageSelector/>
            <ThemeSwitcher/>
          </div>
        </div>
        <div className="content">
          <div className="infoContainer">
            <h1 className="title">
              {dictionary.title1}
            </h1>
            <div className="title">
              {lang === 'fa' && `${dictionary.developer} `}
              <span className="mobileText">
                {`${dictionary.mobile} `}
              </span>
              {`${dictionary.and} `}
              <span className="webText">
                {`${dictionary.web} `}
              </span>
              {lang === 'en' &&  ` ${dictionary.developer}`}
            </div>
            <p className="description">
              {`${dictionary.description}`}
            </p>
            <Link href={`/${lang}/home`}>
              <button className="startButton">
                {dictionary['to-home']}
                <Image
                  src="/right-arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={30}
                />
              </button>
            </Link>
          </div>
          <div className="imageContainer">
            <Image
              src="/float-person.svg"
              alt="Picture of the author"
              layout='responsive'
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="orangeCube">
          <Image
            src='/round-cube-orange-glossy.svg'
            alt='orange cube'
            width={94}
            height={93}
          />
        </div>
      </div>
      <div className="bluePill">
        <Image
          src='/pill-blue-glossy.svg'
          alt='pill blue'
          width={151}
          height={230}
        />
      </div>
      <div className="yellowOrbit">
        <Image
          src='/super-toroid-yellow-glossy.svg'
          alt='super toroid yellow'
          width={200}
          height={280}
        />
      </div>
      <div className="bottomRightGradient"/>
    </div>
  )
}

