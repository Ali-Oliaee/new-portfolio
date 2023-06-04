import {Header} from '../components'

const HomePage: React.FC = ({params:{lang}}:LanguageParam) => {
  return <Header lang={lang}/>
}

export default HomePage
