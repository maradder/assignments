const themes = [{
            //light theme
            background: "#dcdddc",
            foreground: "#443f44",
            contentBg: "#6b6c76",
            primaryText: "#010111",
            buttonText: "#FFFFFF",
            dayNightButtonText: "#6b6c76",
            altText: "#1c1a24",
            accent: "#202336",
            bgImage: "url(https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        },
        {       
            //dark theme
            background: "#010111",
            foreground: "#6b6c76",
            contentBg: "#202336",
            primaryText: "#ffffff",
            buttonText: "#FFFFFF",
            dayNightButtonText: "#F5DF4E",
            altText: "#1c1a24",
            accent: "#443f44",
            bgImage: "url(https://images.pexels.com/photos/3910141/pexels-photo-3910141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    }]

const [Light, Dark] = themes

export {
    Light,
    Dark
}