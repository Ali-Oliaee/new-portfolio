import './styles.sass'
import Image from 'next/image'
import { getDictionary } from 'get-dictionary'

async function HeaderSection({lang}: LanguageProp) {
  const dictionary = await getDictionary(lang)

  return (
    <div
      className="container" 
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      <div className="info-container">
        <h2 className="title">{dictionary.headerSectionTitle}</h2>
        <p className="description">{dictionary.headerSectionDescription}</p>
        <div className="footer">
          <button className="contact-button">
            {dictionary.contactMe}
          </button>
        </div>
      </div>
      <div className="image-container">
        <Image
          src="/me.jpeg"
          alt="Ali Oliaee"
          width={300}
          height={300}
          className='image'
        />
        <div className="status-box">
          <div className="status-icon"/>
          <p className="status">{dictionary.workStatus}</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
