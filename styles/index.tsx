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
    background-clip: padding-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 80%;
    border-image: 
        linear-gradient(to right,
             rgba( 255, 255, 255, 0.5 ),
              rgba( 255, 255, 255, 0.10 )) 4;
    border-radius: 30px;
    border-width: 2px;
    backdrop-filter: blur(10px) brightness(120%) saturate(120%);
    border-style: solid;
    opacity: 0.8;
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
export const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 10%;
    z-index: 2;
`
export const LogoName = styled.h1`
    font-size: 1.5rem;
    color: #fff;
    font-weight: 700;
`
export const Content = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
export const Title = styled.h1`
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
`
export const Description = styled.p`
    font-size: 1.5rem;
    color: #fff;
    font-weight: 400;
`
export const StartButton = styled.button`
    background-color: red;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 10px;
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background-color: green;
    }
`
