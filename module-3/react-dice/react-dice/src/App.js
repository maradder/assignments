import React from 'react'
import DiceBox from './DiceBox';

const AppStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'  
}

const App = () => <DiceBox />

export { 
          App,
          AppStyle
}

