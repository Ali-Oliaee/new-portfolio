import './styles.sass'
import { SocialMedias } from '..'
import { getDictionary } from 'get-dictionary'

export default async function Footer({lang}:LanguageProp){
  const dictionary = await getDictionary(lang)

  return (
    <footer dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <div className="footer-content">
        <div className="about">
          <div className="general">
            <h3>{dictionary.fullName}</h3>
            <span className='email'>alioliaee31@gmail.com</span>
          </div>
          {dictionary.role}
        </div>
        <div className="social">
          <h4>{dictionary.socialTitle}</h4>
          <SocialMedias/>
        </div>
      </div>
      <p className="copyright">© Copyright 2023. Made by Ali</p>
    </footer>
  )
}
