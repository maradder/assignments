import React from 'react'
import { ThemeContextConsumer } from './themeContext'
import { Light, Dark } from './colorThemes'

const Footer = (props) => {
    return (
        <ThemeContextConsumer>
            {context => {
                let currentTheme = context.theme === "light" ? Light : Dark
                return (
                    <footer style={{
                                    backgroundColor: currentTheme.background,
                                    color: currentTheme.primaryText,
                                    position: 'sticky',
                                    bottom: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 60,
                                    width: '100vw',
                                    borderTop: `1px solid ${currentTheme.primaryText}`
                    }}>
                        THIS IS MY FOOTER 
                    </footer>
    )
            }}
        </ThemeContextConsumer>
    )
}

export default Footer