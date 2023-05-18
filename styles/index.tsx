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
    justify-content: center;
    background-color: rgba( 255, 255, 255, 0.10 );
    width: 90%;
    height: 80%;
    backdrop-filter: blur(1px);
    border-image: linear-gradient(to right, rgba( 255, 255, 255, 0.5 ), rgba( 255, 255, 255, 0.10 )) 4;
    border-radius: 20px;
    border-width: 4px;
    border-style: solid;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px) brightness(120%) saturate(120%);
    opacity: 0.8;
`

export const TopLeftGradient = styled.div`
    position: absolute;
    top: -40px;
    left: -40px;
    width: 20%;
    filter: blur(120px);
    height: 30%;
    background: linear-gradient( #00C2FF 0%, #FF29C3 100%);
    border-radius: 50%;
    z-index: 1;
`
        
export const BottomRightGradient = styled.div`
    position: absolute;
    bottom: -40px;
    tight: -40px;
    width: 20%;
    filter: blur(120px);
    height: 30%;
    background: linear-gradient( #00C2FF 0%, #FF29C3 100%);
    border-radius: 50%;
    z-index: 1;
`