import React from 'react';
import {Link} from 'react-router-dom'


const Header = (props) => {
    const liStyle = {
        color: 'white',
        margin: 'auto, 55px',
        fontWeight: '300',
        fontSize: '24px',
        textDecorationLine: 'none'
      }
    return (
        <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'right', backgroundColor: 'blue'}}>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '20vw'}}>
              <Link to={props.path1} style={liStyle} >Home</Link>
              <Link to={props.path2} style={liStyle} >About</Link>
              <Link to={props.path3} style={liStyle} >Contact</Link>
            </ul>
        </header>
    )
}

export default Header