import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { useDarkMode } from "./hooks/useDarkMode"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, melonTheme, tropicalTheme } from "./components/Themes"
import Login from "./components/Login.js"
import Signup from "./components/Signup"
import Header from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"
import UserFeed from "./components/UserFeed"
import { UserContext } from "./context/UserProvider"
import { GlobalStyle } from "./components/StyledComponents"
import { DisplayContext } from "./context/DisplayProvider"

function App() {
  const { token } = useContext( UserContext )
  // const [theme, themeToggler] = useDarkMode()
  const { themeState } = useContext( DisplayContext )

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : themeState === "dark" ? darkTheme : themeState === "melon" ? melonTheme : tropicalTheme}>
      <GlobalStyle />
      <Router>
        <Header themetoggler={"themeToggler"}></Header>
        <Switch>
          <Route
            path="/login"
            render={() =>
              token ? <Redirect to="/userfeed" /> : <Login />
            }
          />
          <Route path="/signup" component={Signup} />
          <Route
            exact
            path="/"
            render={() =>
              token ? <Redirect to="/userfeed" /> : <Login />
            }
          />
          <Route
            path="/login"
            render={() =>
              token ? <Redirect to="/userfeed" /> : <Login />
            }
          />
          <ProtectedRoute
            path="/"
            component={UserFeed}
            token={token}
            redirectTo="/login"
          />
          <ProtectedRoute
            path="/userfeed"
            component={UserFeed}
            token={token}
            redirectTo="/login"
          />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
