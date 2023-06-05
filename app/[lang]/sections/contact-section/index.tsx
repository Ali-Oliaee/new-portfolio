import Image from 'next/image'
import './styles.sass'
import { getDictionary } from 'get-dictionary'
import SocialMedias from '@components/social-medias'

async function ContactSection({lang}: LanguageProp) {
  const dictionary = await getDictionary(lang)

  return (
    <div
      className="contact-section-container" 
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      <div className="info-container">
        <div className="row">
          <Image
            src="/atSign.svg"
            alt="email"
            width={20}
            height={20}
          />
          <p className="info">alioliaee31@gmail.com</p>
        </div>
        <div className="row">
          <Image
            src="/phone.svg"
            alt="phone"
            width={20}
            height={20}
          />
          <p className="info">{dictionary.phone}</p>
        </div>
        <div className="row">
          <Image
            src="/location.svg"
            alt="location"
            width={20}
            height={20}
          />
          <p className="info">{dictionary.location}</p>
        </div>
        <div className="row">
          <Image
            src="/users.svg"
            alt="medias"
            width={20}
            height={20}
          />
          <SocialMedias/>
        </div>
      </div>
      <form>
        <input type="text" placeholder={dictionary.name}/>
        <input type="email" placeholder={dictionary.email}/>
        <textarea placeholder={dictionary.message}/>
        <button type="submit">{dictionary.send}</button>
      </form>
    </div>
  )
}

export default ContactSection
