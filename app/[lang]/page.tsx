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
  StartButton,
  StartButtonText,
  ThemeButton,
  Title,
  TopLeftGradient,
  WebText,
  YellowOrbit
} from '@styles/index'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../next-i18next.config'
import Image from 'next/image'
import LanguageSelector from './components/language-selector'

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <Container>
      <TopLeftGradient/>
      <Glass>
        <Header>
          <LogoName>Ali</LogoName>
          <HeaderMenu>
            <LanguageSelector/>
            {/* <ThemeButton onClick={themeToggler}> */}
              {/* {theme === 'light' ? (
                <Image
                src="/sun.svg"
                alt="moon"
                width={60}
                height={60}
                />
              ) : (
              <Image
                src="/moon.svg"
                alt="moon"
                width={60}
                height={60}
                />)
              } */}
            {/* </ThemeButton> */}
          </HeaderMenu>
        </Header>
        <Content>
          <InfoContainer>
            <Title>
              {dictionary.title1}
            </Title>
            <Title>
              {/* {router.locale === 'fa' && t('developer')}{' '} */}
              <MobileText>
                {`${dictionary.mobile} `}
              </MobileText>
              {`${dictionary.and} `}
              <WebText>
              {`${dictionary.web} `}
              </WebText>
              {/* {router.locale === 'en' && t('developer')} */}
            </Title>
            <Description>
            {`${dictionary.description}`}
            </Description>
            <StartButton>
              <StartButtonText>
                {dictionary['to-home']}
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

