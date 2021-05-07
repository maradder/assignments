// import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
    font-style: 10px;
    }

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    }

html {
    font-size: 100%;
    font-family: 'Poppins', sans-serif; /*16px*/
    } 

body {
    background: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
    }`

const H1 = styled.h1`
    font-size: 3.052rem;
    margin-top: 0;
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    `

const H2 = styled.h2`
    font-size: 2.441rem;
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    `

const H3 = styled.h3`
    font-size: 1.953rem;
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    `
    
const H4 = styled.h4`
    font-size: 1.563rem;
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    `

const H5 = styled.h5`
    font-size: 1.25rem;
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    `

const P = styled.p`
    font-size: 1.6rem;
    `
const GridContainer12 = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr)
    grid-template-rows: auto;
    width: 90vw;
    height: 90vh;
    `
// const ProfileCard = styled.div`
//     display: grid
//     `

export {
    GlobalStyle,
    H1,
    H2,
    H3,
    H4,
    H5,
    P,
    GridContainer12
}