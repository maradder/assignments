import React from 'react'


const Square = (props) => {
    console.log(props)
    return (
        <div style={{backgroundColor: props.color}} className={'box' + props.index} >
            {props.color}
        </div>
    )
}

export default Square