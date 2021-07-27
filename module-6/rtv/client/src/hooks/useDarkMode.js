import { useEffect, useState, useContext } from "react";
import { DisplayContext } from "../context/DisplayProvider";
const useDarkMode = () => {
    // const [theme, setTheme] = useState( "light" );
    const { theme, setTheme } = useContext( DisplayContext )


    const setMode = ( mode ) => {
        window.localStorage.setItem( "theme", mode );
        setTheme( mode );
    };

    const themeToggler = () => {
        console.log( theme )
        theme === "light" ? setMode( "dark" ) : setMode( "light" );
    };

    useEffect( () => {
        const localTheme = window.localStorage.getItem( "theme" );
        localTheme && setTheme( localTheme );
    }, [] );
    return [theme, themeToggler];
};

export { useDarkMode };
