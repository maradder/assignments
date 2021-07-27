import React, { useState, createContext } from 'react'
import { lightTheme, darkTheme, melonTheme, tropicalTheme } from "../components/Themes"

const DisplayContext = createContext()

const DisplayContextProvider = props => {
    const [themeState, setThemeState] = useState( darkTheme )
    return (
        <DisplayContext.Provider value={{ themeState, setThemeState }}>
            {props.children}
        </DisplayContext.Provider>
    )
}

export { DisplayContext, DisplayContextProvider }