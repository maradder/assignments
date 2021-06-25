import React, { useContext } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import HeaderNavPanel from "./components/NavPanel/HeaderNavPanel"
import NavPanel from "./components/NavPanel/NavPanel"
import Hero from "./components/Hero/Hero"
import Profile from "./components/Profile/Profile"
import Experience from "./components/Experience/Experience"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"

import { ThemeProvider, GlobalStyle } from "./components/StyledComponents"
import { Context } from "./context/context"
import { lightTheme, darkTheme } from "./components/Themes"

function App(props) {
	const { themeState } = useContext(Context)
	const contactRef = React.useRef()
	return (
		<ThemeProvider theme={themeState ? darkTheme : lightTheme}>
			<GlobalStyle />
			<HeaderNavPanel thing={contactRef} />
			<NavPanel thing={contactRef} />
			<Hero />
			<Profile />
			<Experience />
			<Skills />
			<Portfolio />
			<Contact ref={contactRef} />
		</ThemeProvider>
	)
}

export default App
