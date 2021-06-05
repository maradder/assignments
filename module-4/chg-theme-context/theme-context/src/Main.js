import React from 'react'
import { ThemeContextConsumer } from './themeContext'
import { Light, Dark } from './colorThemes'

const Main = () => {
    return (
        <ThemeContextConsumer>
            {context => {
                let currentTheme = context.theme === "light" ? Light : Dark
                return (
                    <main style={{  
                                    minHeight: "100vh",
                                    minWidth: "100vw",
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundImage: currentTheme.bgImage,
                                    backgroundSize: "cover",
                                    
                                    // backgroundRepeat: "no-repeat",
                                    backgroundColor: currentTheme.background,
                                    color: currentTheme.primaryText,
                                }}>
                    </main>
                )
            }}
        </ThemeContextConsumer>
    )
}

export default Main