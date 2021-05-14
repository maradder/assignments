import React from 'react'

const Die = (props) => {
    const dice = [
                    "fas fa-dice-one",
                    "fas fa-dice-two",
                    "fas fa-dice-three",
                    "fas fa-dice-four",
                    "fas fa-dice-five",
                    "fas fa-dice-six"
    ]

    const   dieStyle = {
            filter:   'drop-shadow(1px 1px .5px #c4c4c4)',
            margin:   '100px',
            color:    '#b32134',
            transform:'scale(9)'
    }

    return (
        <div className={dice[props.value]} style={dieStyle} />
    )
}

export default Die