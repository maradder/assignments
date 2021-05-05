import React from 'react';
import places from './spots.js';


const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
    fontFamily: "'Poppins', sans-serif"
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
    height: "40vh",
    width: "12vw",
    background: "linear-gradient(325deg, #a1a1a1ff, 1%, #72727200)",
    margin: "10px 3vw",
    borderRadius: "10px",
    boxShadow: "14px 14px 20px #121212a9",
    userSelect: "none",
    borderLeft: "1px solid #bbbbbb",
    borderTop: "1px solid #bbbbbb",
    borderRight: ".5px solid #868686",
    borderBottom: ".5px solid #868686"
}

const placeStyle = {
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
    textShadow: "2px 2px 4px #727272",
    borderBottom: "2px solid #c4c4c480"
}

const priceStyle  = {
    position: "relative",
    top: "52%",
    borderRadius: "0 0 10px 10px",
    margin: "0 0 10px 0",
    fontFamily: "'Enriqueta', serif",
    fontSize: "4.8rem",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#121212", // "#03af3c"
    lineHeight: "auto",
    borderTop: "2px solid #c4c4c480"

}

const timeStyle  = {
    fontSize: "2.8rem",
    textAlign: "center",
    position: "relative",
    top: "55%"
}

const priceSpan = {
    display: "block",
    fontSize: "1.6rem",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    textAlign: "center"
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
                <div style={ cardStyle }>
                    <div>
                        <p className="placeName" style={ placeStyle }>{ destination.place }</p>
                        <p className="price" style={ priceStyle }><span style={ priceSpan }>Trip costs around:</span>{ `$${destination.price}` }</p>
                        <p className="timeToGo" style={ timeStyle }>{ `It's best to go in the ${destination.timeToGo}` }</p>
                    </div>
                    <div className="blurredCard"></div>
                </div>
            </div>
            )}
        </div>
    )
}

export {
    Card,
    }