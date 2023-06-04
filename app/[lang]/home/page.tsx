import {Header} from '../components'

const HomePage: React.FC = ({params:{lang}}:LanguageProp) => {
  return <Header lang={lang}/>
}

export default HomePage
