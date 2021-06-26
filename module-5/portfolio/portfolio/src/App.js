import React, { useContext, useState, useEffect } from "react"
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
	const [scrollPosition, setScrollPosition] = useState()
	const [style, setStyle] = useState({ style: { display: "none" } })
	const handleScroll = (e) => {
		let clientHeight = document.documentElement.clientHeight //Viewable area height
		let scrollTop = document.documentElement.scrollTop //Scroll bar scroll height
		let scrollHeight = document.documentElement.scrollHeight //Scroll content height
		setScrollPosition(scrollTop)
		// if (scrollTop > 15) {
		// 	setScrollPosition(scrollTop)
		// } else {
		// 	setScrollPosition(scrollTop)
		// }
		// let res = scrollHeight - scrollTop - clientHeight
		// if (res <= 500) {
		// 	setStyle({ styles: { display: "none" } })
		// 	setScrollPosition(scrollTop)
		// } else {
		// 	setStyle({ styles: { display: "block" } })
		// 	setScrollPosition(scrollTop)
		// }
	}
	const { themeState } = useContext(Context)
	const contactRef = React.useRef()

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			console.log("mounted")
		}
	}, [])
	return (
		<ThemeProvider theme={themeState ? darkTheme : lightTheme}>
			<GlobalStyle />

			<NavPanel
				scroll={scrollPosition}
				number={scrollPosition}
				thing={contactRef}
			/>
			<Hero>
				{" "}
				<HeaderNavPanel scroll={scrollPosition} thing={contactRef} />
			</Hero>
			<Profile className="sectionContainer" />
			<Experience className="sectionContainer" />
			<Skills className="sectionContainer" />
			<Portfolio className="sectionContainer" />
			<Contact ref={contactRef} className="sectionContainer" />
		</ThemeProvider>
	)
}

export default App
