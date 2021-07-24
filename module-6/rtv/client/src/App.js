import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { GlobalStyle } from "./components/StyledComponents"
import Login from "./components/Login.js"
import Signup from "./components/Signup"
import Header from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"
import UserFeed from "./components/UserFeed"
import { UserContext } from "./context/UserProvider"

function App() {
  const { token } = useContext( UserContext )
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header>
        </Header>
        <Switch>
          <Route path='/login' render={() => token ? <Redirect to="/userfeed" /> : <Login />} />
          <Route path='/signup' component={Signup} />
          <Route exact path="/" render={() => token ? <Redirect to="/userfeed" /> : <Login />} />
          <Route path="/login" render={() => token ? <Redirect to="/userfeed" /> : <Login />} />
          <ProtectedRoute path="/" component={UserFeed} token={token} redirectTo="/login" />
          <ProtectedRoute path="/userfeed" component={UserFeed} token={token} redirectTo="/login" />
        </Switch>
      </Router>
    </div >
  )
}

export default App
