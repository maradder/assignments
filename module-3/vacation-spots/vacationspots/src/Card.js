import React from 'react';
import styled from 'styled-components'
import places from './spots.js';


const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
    fontFamily: "'Poppins', sans-serif"
}

const CardOne = styled.h1`
display: "flex",
flex-direction: "column",
align-items: "left",
justify-cContent: "space-between",
height: "42vh",
width: "auto",
background: "linear-gradient(325deg, #a1a1a1ff, 1%, #72727200)",
margin: "10px 3vw",
borderradius: "10px",
box-shadow: "14px 14px 50px #121212a9",
user-select: "none",
border-left: "1px solid #bbbbbb",
border-top: "1px solid #bbbbbb",
border-right: ".5px solid #868686",
border-bottom: ".5px solid #868686",
backdrop-filter: "45%"
}
`;


const placeStyle = {
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
    textShadow: "2px 2px 4px #727272",
    borderBottom: "2px solid #c4c4c480"
}

const priceStyle  = {
    // position: "relative",
    // top: "0px",
    borderRadius: "0 0 10px 10px",
    margin: "0 10PX 10px 0",
    fontFamily: "'Enriqueta', serif",
    fontSize: "4.8rem",
    textAlign: "right",
    verticalAlign: "middle",
    color: "#121212", // "#03af3c"
    lineHeight: "auto",
    borderTop: "2px solid #c4c4c480"
}

const spaceStyle = {
    content: "",
    height: "10vh"
}

const timeStyle  = {
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
    position: "relative",
    top: "0"
}

const priceSpan = {
    display: "block",
    fontSize: "1.6rem",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
    margin: "-30px 10px 0 0",
    textAlign: "right"
}

const imgStyle = {
    position: "relative",
    top: "30vh",
    left: "2vw",
    zIndex: "-3",
    width: "75%",
    transform: "rotate(30deg)",
    userSelect: "none",
    boxShadow: "1px 1px 38px #121212a9"
}

const Card = () => {
    return (
        <div className="container" style={ containerStyle }>
            {places.map(destination =>
            <div>
                <img className="cards" src={ destination.imgUrl } alt={ destination.imgAlt } style={ imgStyle }></img>
                <CardOne>
                    <div>
                        <p className="placeName" style={ placeStyle }>{ destination.place }</p>
                        <span style={ priceSpan }>Trip costs around:</span>
                        <p className="price" style={ priceStyle }>{ `$${destination.price}` }</p>
                        <div style={ spaceStyle }></div> 
                        <p className="timeToGo" style={ timeStyle }>{ `It's best to go in the ${destination.timeToGo}` }</p>
                    </div>
                </CardOne>
                    <div className="blurredCard"></div>
            </div>
            )}
        </div>
    )
}

export {
    Card,
    }