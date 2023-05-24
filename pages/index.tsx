import {BottomRightGradient, 
  Container,
  Content,
  Description,
  Glass,
  Header,
  HeaderMenu,
  InfoContainer,
  LogoName,
  MobileText,
  StartButton,
  StartButtonText,
  Title,
  TopLeftGradient,
  WebText
} from '@styles/index'
import Image from 'next/image'

const HomePage: React.FC = ()  =>{
  return (
    <Container>
      <TopLeftGradient/>
      <Glass>
        <Header>
          <LogoName>Ali</LogoName>
          <HeaderMenu>
          EN
            <Image
              src="/moon.svg"
              alt="moon"
              width={30}
              height={30}
            />
          </HeaderMenu>
        </Header>
        <Content>
          <InfoContainer>
            <Title>
              Hi! I’m Ali
            </Title>
            <Title>
              <MobileText>
                Mobile{' '}
              </MobileText>
               and {' '}
              <WebText>
               Web{' '}
              </WebText>
              Developer
            </Title>
            <Description>
            Welcome to my portfolio!
            I&apos;m a mobile and frontend developer with expertise
            in iOS, Android, and React.
            My goal is to create beautiful and functional applications
            that exceed my client&apos;s expectations. Let&apos;s work together 
            to bring your ideas to life!
            </Description>
            <StartButton>
              <StartButtonText>
                Get Started
              </StartButtonText>
              <Image
                src="/right-arrow.svg"
                alt="arrow-right"
                width={30}
                height={30}
              />
            </StartButton>
          </InfoContainer>
          <Image
            src="/float-person.svg"
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
