import styled from 'styled-components'

const P = styled.p`
    font-family: 'Lora', serif;
    font-style: italic;
    line-height: 2.5;
    margin: 10px auto 24px auto;
`

const H2 = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 36px;
    font-weight: 800;
`

const H3 = styled.h3`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 28px;
    font-weight: 300;
    margin: -25px auto -10px auto;
`

const HeaderStyled = styled.nav`
    position: fixed,
    background-color: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 60px;
    box-shadow: 5px 0 15px #121212;
    font-size: calc(10px + 2vmin);
    color: black;
    z-index: 3;
`
const HeaderBrandText = styled.a`
    font-size: 24px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 0 9vw;
    text-decoration-line: none;
    color: #ffffff;
    letter-spacing: 1.5px;
`

const HeaderUl = styled.ul`
    margin: auto 9vw auto 0;

    @media screen and (max-width: 925px) {
        display: none;
    }
`

const HeaderLinks = styled.a`
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    margin: auto 20px;
    color: #ffffff;
    letter-spacing: 1.5px;

    :hover {
        cursor: pointer;
    }
`


const Hero = styled.div`
    display: grid;
    grid-column: 1 / 13;
    margin: -60px auto auto auto;
    min-width: 100vw;
    align-self: center;
    height: 540px;
    // background-image: linear-gradient(#77A73095, #77A730AA), url(https://images.pexels.com/photos/1423597/pexels-photo-1423597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-image: linear-gradient(#317BD995, #317BD9AA), url(https://images.pexels.com/photos/1423597/pexels-photo-1423597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
`

const HeroH1 = styled.h1`
    position: absolute;
    top: 210px;
    width: 100vw;
    text-align: center;
    font-size: 6rem;
    font-weight: 900px;
    margin: auto;
    color: #ffffff;
`
const HeroH3 = styled.h3`
    position: absolute;
    top: 325px;
    width: 100vw;
    text-align: center;
    font-size: 28px;
    font-weight: 300;
    line-height: 1.3;
    margin: auto;
    color: #ffffff;
`

const Body = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BlogDiv = styled.div`
    min-width: 600px;
    width: 40vw;
    margin: 25px auto;
    border-bottom: 1px solid #e8e8e8;
`

const Author = styled.a`
    text-decoration-line: none;
    text-decoration-color: none;
    color: #000000;
`

const OlderPostsBtn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: right;
    margin-left: 75%;
    height: 50px;
    width: 175px;
    background-color: #0085A1;
    text-decoration-line: none;
    font-weight: 800;
    color: #ffffff;
`

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 200px;
    width: 100vw;
    border-top: 1px solid #e8e8e8;
`

const FooterRow = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    height: fit-content;
` 

const FooterIcons = styled.img`
    width: 53px;
    height: 53px;
    margin: 0 16px;
    border: none;
    outline: none;
`

const FooterText = styled.p`
    font-family: 'Lora', serif;
    font-size: 600;
    color: #787878;
`


export {
    P,
    H2,
    H3,
    Author,
    Body,
    BlogDiv,
    Footer,
    FooterRow,
    FooterIcons,
    FooterText,
    HeaderBrandText,
    HeaderStyled,
    HeaderUl,
    HeaderLinks,
    Hero,
    HeroH1,
    HeroH3,
    OlderPostsBtn
}