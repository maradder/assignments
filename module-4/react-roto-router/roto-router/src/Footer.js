import React from 'react'

const Footer = (props) => {
    const footerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        width: '100vw',
        backgroundColor: 'red',
        fontWeight: '300',
        fontSize: '24px',
        color: 'white',
        position: 'absolute',
        bottom: 0,
    }

    return (
        <footer style={footerStyle}>
            This is my footer
        </footer>
    )
}

export default Footer