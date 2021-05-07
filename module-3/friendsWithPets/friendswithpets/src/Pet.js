import React from "react"
import { ContentContainer } from './styles.js'
import { ContainerRow } from './styles.js'
import { PetPicContainer } from './styles.js'
import { H1 } from './styles.js'
import { PetName } from './styles.js'

const Pet = (props) => {
    return (
        <div style={ContentContainer} key={props.name}>
            <div style={ ContainerRow }>
                <div>
                    <h1 style={ H1 }><p style={ PetName }>{ `Pet's Name: ${props.name}` }</p></h1>
                    <h1 style={ H1 }><p style={ PetName }>{ `Pet's Breed: ${props.breed}` }</p></h1>
                </div>
                <img style={ PetPicContainer } src={`${props.petImg}`} alt='Pet' />
            </div>
        </div>
    )
}

export default Pet
