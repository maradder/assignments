import styled, { createGlobalStyle } from "styled-components";
import dpad from './dpad.png'

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ramabhadra', sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: auto 20%;
    min-width: 60%;
`

const ButtonLarge = styled.button`
height: fit-content;
width: fit-content;
align-self: center;
    margin: 25px auto;
    border-radius: 8px;
    font-size: 2em;
    text-shadow: 1px 1px 3px #727272;
`

const ColorPalette = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 20px;
    min-height: fit-content;
    min-width: fit-content;
    background-color: none;
    padding: 15px;
    margin: auto;
`

const ColorDot = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${props => props.dotcolor};
    border: ${props => props.dotcolor === props.activecolor ? '4px solid #000000' : '1px solid #ffffff'};
    // box-shadow: ${props => props.dotcolor === props.activecolor ? '2px 2px 4px #ffffff80' : 'none'};
    
    :hover {
        box-shadow: 3x 3px 3px #ffffff;
        cursor: pointer;
    }

    :active {
        box-shadow: 3x 3px 3px #ffffff;
        cursor: pointer;
    }
`
const FuzzBall = styled.div`
    position: fixed;
    top: 100px;
    left: 240px; 
    z-index: -10;
    min-height: 100px; 
    max-height: 100px;
    min-width: 100px; 
    max-width: 100px;
    border-radius: 50%;
    background-color: #e819BF90;
    box-shadow: 2px 2px 250px 350px #e819BF90;
`

const FuzzBall2 = styled.div`
    position: fixed;
    top: 600px;
    left: 1050px; 
    z-index: -20;
    min-height: 150px; 
    max-height: 150px;
    min-width: 150px; 
    max-width: 150px;
    border-radius: 50%;
    background-color: #00e3ae80;
    box-shadow: 2px 2px 250px 350px #00e3ae80;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const DPadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Ramabhadra', sans-serif;
    margin-top: -90px;
    margin-right: 50px;

`
const DPad = styled.div`
    display: grid;
    grid-template-columns: .3fr 3fr 3fr 3fr .3fr;
    grid-template-rows: 0fr 1fr 1fr 1fr 0fr;
    min-width: 125px;
    min-height: 125px;
    max-width: 125px;
    max-height: 125px;
    background-image: url(${dpad});
    background-size: contain;
    background-repeat: no-repeat;
    background-positionY: center;
    background-positionX: center;
    
    :hover {
        filter: drop-shadow(2px 2px 4px #727272); 
    }
    `
    
const DPadUp = styled.div`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    background-color: #161a1d80;
    border-radius: 8px 8px 0 0;
    
    :active {
        background-color: none; 
    }
    `
    
const DPadRight = styled.div`
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    background-color: #161a1d80;
    border-radius: 0 8px 8px 0;
    `
    
const DPadDown = styled.div`
    grid-column: 3 / 4;
    grid-row: 4 / 5;
    background-color: #161a1d80;
    border-radius: 0 0 8px 8px;
    `
    
const DPadLeft = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    background-color: #161a1d80;
    border-radius: 8px 0 0 8px;
    `
    
const EditorHeadline = styled.h1`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`

const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    width: fit-content;
    margin: auto;
    border-right: 4px solid #121212cf;

    @media screen and (max-width: 1350px) {

    border-right: none;
    }
`

const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background-image: url(${props => props.memeimage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 45vh;
    max-height:45vh;
    min-width: 40vw;
    max-width: 40vw;
    word-wrap: break-word;
    `
    // min-height: `${this.state.memeInUse.height}px`;
    // max-height: `${this.state.memeInUse.height}px`;
    // min-width: `${this.state.memeInUse.width}px`;
    // maxWidth: `${this.state.memeInUse.width}px`

    const Input = styled.input`
    margin: 0 0 8px 24px;
    width: 300px;
    justify-self: flex-end;
`

const Label = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px; 
    min-width: 100%;
    font-family: 'Montserrat', sans-serif;
`


const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-width: 150px;
    text-align: center;
    padding: 50px auto 450px auto;
`

const MemeCard = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 30vh;
    width: fit-content;
    margin: auto;
    border: 8px solid #121212cf;
    border-radius: 6px;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: azure;

    @media screen and (max-width: 1350px) {
    flex-direction: column;
    }
`

const SavedMemeCard = styled.div`
    display: flex;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    margin: auto;
    border: 8px solid #121212cf;
    border-radius: 6px;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: azure;

    @media screen and (max-width: 1350px) {
    flex-direction: column;
    }
`

const MemeCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 40vh;
    min-width: fit-content;
    max-width: 70vw;
    margin: 50px auto;
    padding: 50px;
    border: 4px solid #121212cf;
    border-radius: 6px;
    background-color: #ffffff;
    // background-image: linear-gradient(to right, #FFFFFF20 0%, #2575fc20 100%);

    @media screen and (max-width: 1350px) {
        margin: 50px 0;
    }
`


const MemeNumber = styled.h1`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`

const MiddleColumn = styled.div`
    
`

const RightColumn = styled.div`
    
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    font-weight: 600;
    text-transform: uppercase;

    @media screen and (max-width: 1350px) {

    border-top: 4px solid #121212;
    }
`

const TopText = styled.h3`
    position: relative;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    color: ${props => props.color};
    text-shadow: 0px 0px 1px #ffffff;
    font-family: 'Ramabhadra', sans-serif;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 70%;
`

const BottomText = styled.h3`
    position: relative;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    color: ${props => props.color};
    text-shadow: 0px 0px 1px #ffffff;
    font-family: 'Ramabhadra', sans-serif;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 70%;
`

    export {
        BottomText,
        ButtonContainer,
        ButtonLarge,
        ColorDot,
        ColorPalette,
        ContentContainer,
        DPad,
        DPadUp,
        DPadRight,
        DPadDown,
        DPadLeft,
        DPadWrapper,
        EditorHeadline,
        FuzzBall,
        FuzzBall2,
        GlobalStyle,
        ImgContainer,
        ImgWrapper,
        Input,
        Label,
        LeftColumn,
        MemeCard,
        MemeNumber,
        MemeCardWrapper,
        MiddleColumn,
        RightColumn,
        SavedMemeCard,
        TextContainer,
        TopText
    }
