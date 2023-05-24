import { Colors } from 'theme/colors'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${Colors.background};
`
export const Glass = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 80%;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-radius: 30px;
    backdrop-filter: blur(10px) brightness(120%) saturate(100%);
`
export const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
`
export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline-end: 30px;
`
export const LogoName = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    font-weight: 700;
    margin-inline-start: 30px;
`
export const Content = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 40px;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
export const Title = styled.h1`
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
    margin-block: 0;
`
export const MobileText = styled.span`
    font-size: 2rem;
    background: linear-gradient(to bottom, #F59E0B, #EF4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const WebText = styled.span`
    font-size: 2rem;
    color: #8B5CF6;
`
export const Description = styled.p`
    font-size: 1.5rem;
    color: #fff;
    max-width: 600px;
    
`
export const StartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2672E;
    color: #fff;
    margin-block: 20px;
    font-size: 1em;
    font-weight: 700;
    border-radius: 10px;
    padding: 10px 40px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background-color: #EF4444;
        padding-inline-start: 50px;
    }
`
export const StartButtonText = styled.span`
    margin-inline-end: 10px;
`
export const TopLeftGradient = styled.div`
    position: absolute;
    top: -40px;
    left: -40px;
    width: 25%;
    filter: blur(100px);
    height: 35%;
    background: linear-gradient( #00C2FF 0%, #FF29C3 80%);
    border-radius: 50%;
    z-index: 1;
`
export const BottomRightGradient = styled.div`
    position: absolute;
    bottom: -40px;
    right: -40px;
    width: 15%;
    filter: blur(100px);
    height: 25%;
    background: linear-gradient( #00C2FF 0%, #FF29C3 100%);
    border-radius: 50%;
    z-index: 1;
`
