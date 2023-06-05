import {Footer, Header} from '../components'
import SkillsSection from '../sections/skills-section'

const HomePage: React.FC = ({params:{lang}}:LanguageParam) => {
  return (
    <>
      <Header lang={lang}/>
      <SkillsSection/>
      <Footer lang={lang}/> 
    </>
  )
}

export default HomePage
