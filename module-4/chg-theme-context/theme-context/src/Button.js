import React from 'react';
import { ThemeContextConsumer } from './themeContext';
import { Light, Dark } from './colorThemes';

const Button = (props) => {


    return (
        <ThemeContextConsumer>
    {context => {
            let currentTheme = (context.theme === "dark" ? Dark : Light)
                return (
                    <button onClick={context.toggleTheme} style={{
                        padding: '10px',
                        margin: 'auto',
                        border: "none",
                        borderRadius: "50%",
                        backgroundColor: currentTheme.background,
                        color: currentTheme.buttonText,
                        transition: "all .3s linear",
                        }}><i   className={props.daynight} 
                                style={{
                                    color: currentTheme.dayNightButtonText,
                                    textShadow: "1px 1px 3px #00000090",
                                    transform: 'scale(2)',
                                    }}></i>
                    </button>
                )
                }
            }
            
            </ThemeContextConsumer>
    )
        }
            export default Button
            
            
            
