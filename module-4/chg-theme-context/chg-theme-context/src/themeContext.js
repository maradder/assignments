import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

const themes = [{
    light: {
            background: "#dcdddc",
            foreground: "#443f44",
            contentBg: "#6b6c76",
            primaryText: "#010111",
            altText: "#1c1a24",
            accent: "#202336",
    },},
    {
    dark: {
            background: "#010111",
            foreground: "#6b6c76",
            contentBg: "#202336",
            primaryText: "#dcdddc",
            altText: "#1c1a24",
            accent: "#443f44",
    },}
];

const [light, dark] = themes

class ThemeContextProvider extends Component {
    state = {
        theme: light,
        }
    
    
    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === light ? dark : light 
            }
        })}
        
    render() {
            return( 
                <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}} themechoices={light}>
                    {this.props.children}
                </Provider>
            )
    }
}

export {ThemeContextProvider,
        Consumer as ThemeContextConsumer}