import React from 'react';
import { ThemeContextConsumer } from './themeContext';
import { Light, Dark } from './colorThemes';
import Button from './Button';

const Header = () => {
    return (
        <ThemeContextConsumer>
            {context => {
                let currentTheme = (context.theme === "dark" ? Dark : Light)
                let dayNight = currentTheme === Light ? "far fa-moon" : "fas fa-sun"
            console.log(currentTheme)
            return (
            <header style={{
                            // position: "fixed",
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '8.4rem',
                            width: '100vw',
                            borderBottom: `1px solid ${currentTheme.primaryText}`,
                            background: currentTheme.background,
                            }}>
                <h1 style={{
                            color: currentTheme.primaryText,
                            marginLeft: "75px",
                            fontWeight: 300,
                            }}>
                    Marcus' Assignment</h1>
                <div>
                    <ul style={{
                                backgroundImage: 'none',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: '0 75px',
                                margin: 'auto',
                                listStyle: 'none',

                    }}>
                        <li style={{
                                    padding: "0 24px",
                                    fontSize: "24px",
                                    color: currentTheme.primaryText,
                                    }}>Home</li>
                        <li style={{
                                    padding: "0 24px",
                                    fontSize: "24px",
                                    color: currentTheme.primaryText,

                                    }}>About</li>
                        <li style={{
                                    padding: "0 24px",
                                    fontSize: "24px",
                                    color: currentTheme.primaryText,

                                    }}>Contact</li>

                        <Button daynight={dayNight}/>

                    </ul>
                </div>

                    
            
            </header>
            )}}
        </ThemeContextConsumer>
    )
}

export default Header