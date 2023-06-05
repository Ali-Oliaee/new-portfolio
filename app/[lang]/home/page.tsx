import {Footer, Header} from '../components'
import ContactSection from '../sections/contact-section'
import HeaderSection from '../sections/header-section'

const HomePage: React.FC = ({params:{lang}}:LanguageParam) => {
  return (
    <>
      <Header lang={lang}/>
      <HeaderSection lang={lang}/>
      <ContactSection lang={lang}/>
      <Footer lang={lang}/> 
    </>
  )
}

export default HomePage
