import {BottomRightGradient, 
  Container,
  Content,
  Description,
  Glass,
  Header,
  InfoContainer,
  LogoName,
  StartButton,
  Title,
  TopLeftGradient
} from '@styles/index'
import Image from 'next/image'

const HomePage: React.FC = ()  =>{
  return (
    <Container>
      <TopLeftGradient/>
      <Glass>
        <Header>
          <LogoName>Ali</LogoName>
          <div className="menu">
          EN
            <Image
              src="/Moon.svg"
              alt="moon"
              width={30}
              height={30}
            />
          </div>
        </Header>
        <Content>
          <InfoContainer>
            <Title>
              Hi! I’m Ali
            </Title>
            <Title>
              Mobile and Web Developer
            </Title>
            <Description>
            Welcome to my portfolio!
            I&apos;m a mobile and frontend developer with expertise
            in iOS, Android, and React.
            My goal is to create beautiful and functional applications
            that exceed my client&apos;s expectations. Let&apos;s work together 
            to bring your ideas to life!
            </Description>
            <StartButton>Start a project</StartButton>
          </InfoContainer>
          <Image
            src="/FloatPerson.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Content>
      </Glass>
      <BottomRightGradient/>
    </Container>
  )
}

export default  HomePage
