import React, { useState, createContext } from "react"
import { lightTheme, darkTheme } from "../components/Themes"

const Context = createContext()
const ContextProvider = (props) => {
	const [themeState, setThemeState] = useState(true)

	return (
		<Context.Provider value={{ themeState, setThemeState }}>
			{props.children}
		</Context.Provider>
	)
}
export { Context, ContextProvider }
