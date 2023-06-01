import {BluePill, BottomRightGradient, 
  Container,
  Content,
  Description,
  Glass,
  Header,
  HeaderMenu,
  ImageContainer,
  InfoContainer,
  LanguageOption,
  LanguageSelect,
  LogoName,
  MobileText,
  OrangeCube,
  PurpleOrbit,
  StartButton,
  StartButtonText,
  Title,
  TopLeftGradient,
  WebText,
  YellowOrbit
} from '@styles/index'
import Image from 'next/image'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  }
}

const HomePage: React.FC = (props) => {
  const { t } = useTranslation()
  const router = useRouter()
  
  return (
    <Container>
      <TopLeftGradient/>
      <Glass>
        <Header>
          <LogoName>Ali</LogoName>
          <HeaderMenu>
            <LanguageSelect
              value={router.locale}
              onChange={(e) => router.push(router.pathname, router.pathname, { locale: e.target.value })}
            >
              <LanguageOption value='en'>En</LanguageOption>
              <LanguageOption value='fr'>Fa</LanguageOption>
            </LanguageSelect>
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
            <h1>{t('Hi')}</h1>
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
          <ImageContainer style={{width: '50%'}}>
            <Image
              src="/float-person.svg"
              alt="Picture of the author"
              layout='responsive'
              width={500}
              height={500}
            />
          </ImageContainer>
        </Content>
        <PurpleOrbit>
          <Image
            src='/super-toroid-purple-glossy.svg'
            alt='super toroid purple'
            width={100}
            height={74}
          />
        </PurpleOrbit>
        <OrangeCube>
          <Image
            src='/round-cube-orange-glossy.svg'
            alt='orange cube'
            width={94}
            height={93}
          />
        </OrangeCube>
      </Glass>
      <BluePill>
        <Image
          src='/pill-blue-glossy.svg'
          alt='pill blue'
          width={151}
          height={230}
        />
      </BluePill>
      <YellowOrbit>
        <Image
          src='/super-toroid-yellow-glossy.svg'
          alt='super toroid yellow'
          width={200}
          height={280}
        />
      </YellowOrbit>
      <BottomRightGradient/>
    </Container>
  )
}

export default  HomePage
