import './styles.sass'
import { SocialMedias } from '..'

export default async function Footer({lang}:LanguageProp){
  return (
    <footer>
      <div className="footer-content">
        <div className="about">
          <div className="general">
            <h3>Ali Oliaee</h3>
            <span className='email'>alioliaee31@gmail.com</span>
          </div>
            mobile and web developer
        </div>
        <div className="social">
          <h4>Social Medias</h4>
          <SocialMedias/>
        </div>
      </div>
      <p className="copyright">© Copyright 2023. Made by Ali.</p>
    </footer>
  )
}
