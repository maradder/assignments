import React from 'react';
import './app.css'
import {  AppWrapper,
          DivOne,
          DivTwo,
          DivThree,
          DivFour,
          DivFive,
          DivSix,
          Footer,
          H1,
          Home,
          Main
              } from './StyledComponents'
import { Header } from './Header.js'
import {
            BrowserRouter as Router,
            Switch,
            Route,
          } from "react-router-dom";
import { ThemeContextConsumer } from './themeContext';


const App = (props) => {
  return(
      <AppWrapper className="App">
      <Router>
      <Header 
      id="Header"
      path1="<Link to='/'>Home</Link>"
      path2="<Link to='/contact'>Contact</Link>"
      path3="<Link to='/about'>About</Link>"
      path4="<Link to='/portfolio'>Portfolio</Link>"
      value={props.value}
      />
      <Main>
              <Switch>
              <Route path='/portfolio'>
              <div><H1>Portfolio</H1></div>
              </Route>
              <Route path='/about'>
              <div><H1>About</H1></div>
              </Route>
              <Route path='/contact'>
              <div><H1>Contact</H1></div>
              </Route>
              <Route path='/'>
              <ThemeContextConsumer>
              {context => (
                <Home>
              <H1>Home</H1>
              <DivOne backgroundcolor={context.theme}></DivOne>
              <DivTwo backgroundcolor={context.theme}></DivTwo>
              <DivThree backgroundcolor={context.theme}></DivThree>
              <DivFour backgroundcolor={context.theme}></DivFour>
              <DivFive backgroundcolor={context.theme}></DivFive>
              <DivSix backgroundcolor={context.theme}></DivSix>
              </Home>
                )}
              </ThemeContextConsumer>
              </Route>
                </Switch>
              </Main>
            </Router>
          <Footer/>
          </AppWrapper>
  )
}

export default App;
