import React from "react"
import FriendList from './FriendListComp.js'
import {GridContainer} from './styles.js'


const App = () => {
  return (
      <div style={ GridContainer }>
          <FriendList />
      </div>
  )
}

export default App