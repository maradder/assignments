import React from 'react';


const TargetCard = {
    backgroundImage: "radial-gradient( circle 343px at 46.3% 47.5%,  rgba(242,242,242,1) 0%, rgba(241,241,241,1) 72.9% )",
    width: '20vw',
    gridColumn: '2 / 3',
    display: 'flex',
    flexDirection: 'column',
    marginTop: "140px",
    marginBottom: '150px', 
    alignItems: "center",
    boxShadow: "1px 1px 8px 10px #9F1009",
    borderRadius: '8px'
}

const Target = (props) => {

    

    return (
        <div style={ TargetCard } >
            <img src={props.targetpic} alt={props.name} />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Target