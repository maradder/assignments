import React from 'react'
import friendObject from './friendObject.js'
import Friend from './Friend.js'
import { GridContainer } from './styles.js'



function FriendList() {
    console.log(friendObject.map(friend => {
        return friend.profileUrl
    }))
    return (
        <div style={ GridContainer }>
            {friendObject.map(friend => 
            <Friend name={ friend.name }
                    age={ friend.age }
                    profile={ friend.profileUrl }
                    pets={ friend.pets }>
            </Friend>
            )}
        </div>
    )
}

export default FriendList