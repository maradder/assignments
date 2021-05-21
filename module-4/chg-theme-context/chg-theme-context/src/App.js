import React from 'react';
import './app.css'
import {  AppWrapper,
          DayNightToggle,
          Footer,
          Header,
          Main,
          NavList,
          NavLink,
          NavText } from './StyledComponents'

const App = () => {
  return(
    <AppWrapper  className="App">
      <Header>
        <NavList>
          <NavLink>
            <NavText>Portfolio</NavText>
          </NavLink>
          <NavLink>
            <NavText>About</NavText>
          </NavLink>
          <NavLink>
            <NavText>Contact</NavText>
          </NavLink>
          <NavLink>
            <NavText>Home</NavText>
          </NavLink>
        </NavList>
        <DayNightToggle className={ 'fas fa-sun' }/>
      </Header>
      <Main>
        kdhskfjh
      </Main>
      <Footer/>
    </AppWrapper>
  )
}

export default App;
