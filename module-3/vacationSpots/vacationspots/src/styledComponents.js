import styled from 'styled-components'

const CardHeading = styled.h1`
font-size: 1.8rem;
margin-right: 1rem;
// text-align: right;
`
const CardSubheading = styled.h2`
font-size: 1.5rem;
text-align: center;
text-shadow: 2px 2px 4px #c7c7c7;
align-self: flex-start;
`
const CardBodyCopy = styled.p`
width: 130%;
font-size: 1.5rem;
text-align: center;
text-shadow: 2px 2px 4px #c7c7c7;
align-self: flex-end;
font-weight: 700;
margin: -15px 0px;
border-radius: 10px;
background: linear-gradient(67deg, #ddddddff, 71%, #72727233);

`
const Button = styled.button`
height: 40px;
width: 120px;
margin: auto;
box-shadow: 14px 14px 10px #121212a9;
border: none;
border-radius: 10px`

const Header = styled.header`
background-color: #30cfd0;
min-height: 100px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 5rem;
box-shadow: 5px 0 15px #121212;
font-size: calc(10px + 2vmin);
color: black;`

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: space-between;
min-height: 400px;
max-height: 400px;
width: 250px;
padding: 20px;
background: linear-gradient(325deg, #acacacff, 1%, #72727233);
border-radius: 10px;
box-shadow: 14px 14px 10px #121212a9;
user-select: none;
border-left: 1px solid #bbbbbb;
border-top: 1px solid #bbbbbb;
border-right: .5px solid #868686;
border-bottom: .5px solid #868686;
backdrop-filter: 45%`

const ContentContainerRow = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 50px;
    gap: 6px;`

const ContentContainerColumn = styled.main`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center; 
    gap: 24px;
    `

const ContentContainerChild = styled.div`
    display: flex;
    min-height: 23%;
    width: 100%;
`

const ImgFlags = styled.img`
position: relative;
top: 40vh;
left: 0;
z-index: -3;
width: 80%;
transform: rotate(30deg);
user-select: none;
box-shadow: 1px 1px 38px #121212a9;`

const DollarSign = styled.img`
    height: auto;
    width: 64px;
    filter: drop-shadow: 2px 2px 8px #1d380d;
    background: radial-gradient(#5f934130, 85%, #c5c5c590);
    border-radius: 50%;
`

export {
    Button,
    Card,
    CardBodyCopy,
    CardHeading,
    CardSubheading,
    ContentContainerChild,
    ContentContainerColumn,
    ContentContainerRow,
    DollarSign,
    Header,
    ImgFlags
    }