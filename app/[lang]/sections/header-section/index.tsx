import { getDictionary } from 'get-dictionary'
import './styles.sass'

async function HeaderSection({lang}: LanguageProp) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="container">
      <div className="info-container">
        <h4 className="name">{dictionary.headerSectionTitle}</h4>
        <p className="description">{dictionary.headerSectionDescription}</p>
        <button className="contact-button">
          {dictionary.contactMe}
        </button>
      </div>
      <div className="image-container">
        {/* <img src="/images/ali-oliaee.jpg" alt="ali oliaee" /> */}
        <div className="status-box">
          <p className="status">{dictionary.workStatus}</p>
          <div className="status-icon"></div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
