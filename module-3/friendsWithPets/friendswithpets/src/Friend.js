import React from 'react'
import Pet from './Pet.js'
import {Card} from './styles.js'
import {ContainerRow} from './styles.js'
import {H1} from './styles.js'
import {OwnerName} from './styles.js'
import {ProfileContainer} from './styles.js'


const Friend = (props) => {
    console.log(props.PetPic)

    return (
        <div style={ Card } key={ props.name }>
            <div style={ ContainerRow }>
                <div>
                    <h1 style={ H1 }><p style={OwnerName}>{ `Name: ${props.name}` }</p></h1>
                    <h1 style={ H1 }>{ `Age: ${props.age}` }</h1>
                </div>
                <img style={ ProfileContainer } src={`${props.profile}`} alt='Profile' />
            </div>
            {props.pets.map(pet => 
                <Pet name={ pet.name }
                        breed={pet.breed}
                        petImg={ pet.petPic } />)}
        </div>
    )
}



export default Friend