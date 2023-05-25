import { Colors } from 'theme/colors'
import styled from 'styled-components'
import { BreakPoints } from 'theme/breakpoints'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${Colors.background};
    position: relative;
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
    position: relative;
    z-index: 99;
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
export const LanguageSelect = styled.select`
    min-width: 40px;
    color: ${Colors.white};
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    font-size: 1.1em;
    font-weight: bold;
    outline: 0;
    margin-inline-end: 10px;
`
export const LanguageOption = styled.option``
export const LogoName = styled.h1`
    font-size: 1.5rem;
    color: ${Colors.white};
    font-weight: 700;
    margin-inline-start: 30px;
`
export const Content = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 40px;

    @media (max-width: ${BreakPoints.md}px){
        padding-inline: 20px;
    }
    @media (max-width: ${BreakPoints.sm}px){
        flex-direction: column-reverse;
    }
`
export const ImageContainer = styled.div`
    width: 50%;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 50%;

    @media (max-width: ${BreakPoints.sm}px){
        text-align: center;
        max-width: 100%;
    }
`
export const Title = styled.h1`
    font-size: 2rem;
    color: ${Colors.white};
    font-weight: 700;
    margin-block: 0;

    @media (max-width: ${BreakPoints.sm}px){
        text-align: center;
        width: 100%;
    }
`
export const MobileText = styled.span`
    font-size: 2rem;
    background: linear-gradient(to bottom, #F59E0B, #EF4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const WebText = styled.span`
    font-size: 2rem;
    background: linear-gradient(to bottom, #EC4899, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const Description = styled.p`
    font-size: 1.5em;
    color: ${Colors.white};
    max-width: 600px;

    @media (max-width: ${BreakPoints.lg}px){
        font-size: 1.1em;
    }
    @media (max-width: ${BreakPoints.sm}px){
        text-align: center;
        max-width: 100%;
    }
`
export const StartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2672E;
    color: ${Colors.white};
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

    @media (max-width: ${BreakPoints.sm}px){
        align-self: center;
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
export const OrangeCube = styled.div`
    position: absolute;
    bottom: -50px;
    right: 40%;

    @media (max-width: ${BreakPoints.sm}px){
        top: 100px;
        right: -40px;
        bottom: unset;
    }
`
export const BluePill = styled.div`
    position: absolute;
    bottom: 120px;
    left: -20px;
    z-index: 100;

    @media (max-width: ${BreakPoints.md}px){
        bottom: unset;
        top: 0px;
        z-index: 1;
    }

    @media (max-width: ${BreakPoints.sm}px){
        bottom: -40px;
    }
`
export const YellowOrbit = styled.div`
    position: absolute;
    bottom: -40px;
    right: -40px;
    z-index: 2;
` 
export const PurpleOrbit = styled.div`
    position: absolute;
    top: 80px;
    right: 30%;
    
    @media (max-width: ${BreakPoints.sm}px){
        right: unset;
        left: 40px;
    }
` 
