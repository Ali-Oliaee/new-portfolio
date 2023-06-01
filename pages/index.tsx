import {
  BluePill,
  BottomRightGradient, 
  Container,
  Content,
  Description,
  Glass,
  Header,
  HeaderMenu,
  ImageContainer,
  InfoContainer,
  LogoName,
  MobileText,
  OrangeCube,
  PurpleOrbit,
  StartButton,
  StartButtonText,
  ThemeButton,
  Title,
  TopLeftGradient,
  WebText,
  YellowOrbit
} from '@styles/index'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import LanguageSelector from '@components/language-selector'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  }
}

const HomePage: React.FC = ({themeToggler}: any) => {
  const { t } = useTranslation()
  const router = useRouter()
  
  return (
    <Container>
      <TopLeftGradient/>
      <Glass>
        <Header>
          <LogoName>Ali</LogoName>
          <HeaderMenu>
            <LanguageSelector/>
            <ThemeButton onClick={themeToggler}>
              <Image
                src="/moon.svg"
                alt="moon"
                width={30}
                height={30}
                />
            </ThemeButton>
          </HeaderMenu>
        </Header>
        <Content>
          <InfoContainer>
            <Title>
              {t('title1')}
            </Title>
            <Title>
              {router.locale === 'fa' && t('developer')}{' '}
              <MobileText>
                {t('mobile')}{' '}
              </MobileText>
               {t('and')} {' '}
              <WebText>
               {t('web')}{' '}
              </WebText>
              {router.locale === 'en' && t('developer')}
            </Title>
            <Description>
            {t('description')}
            </Description>
            <StartButton>
              <StartButtonText>
                {t('to-home')}
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
