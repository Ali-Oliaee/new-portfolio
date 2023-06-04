import {Footer, Header} from '../components'
import Loading from '../loading'

const HomePage: React.FC = ({params:{lang}}:LanguageParam) => {
  return (
    <>
      <Header lang={lang}/>
      <Footer lang={lang}/> 
    </>
  )
}

export default HomePage
