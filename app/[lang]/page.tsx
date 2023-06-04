import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../next-i18next.config'
import Image from 'next/image'
import LanguageSelector from './components/language-selector'
import '@styles/landing.sass'
import ThemeSwitcher from '@components/theme-switcher'

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="container">
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
              {/* {router.locale === 'fa' && t('developer')}{' '} */}
              <h1 className="mobileText">
                {`${dictionary.mobile} `}
              </h1>
              {`${dictionary.and} `}
              <h1 className="webText">
              {`${dictionary.web} `}
              </h1>
              {/* {router.locale === 'en' && t('developer')} */}
            </div>
              <p className="description">
            {`${dictionary.description}`}
              </p>
              <button className="startButton">
                {dictionary['to-home']}
              <Image
                src="/right-arrow.svg"
                alt="arrow-right"
                width={30}
                height={30}
                />
                </button>
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

