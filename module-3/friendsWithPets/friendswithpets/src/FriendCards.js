import React from "react"

const FriendCard = (props) => {
    console.log(props)
    return (
        <div className="">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Pets: {props.pets}</p>
        </div>
    )
}

export default FriendCard