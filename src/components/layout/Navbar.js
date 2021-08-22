import React from 'react'
import PropTypes from 'prop-types'
// import Search from '../users/Search'
import {Link} from 'react-router-dom'
const Navbar = ({icon,title}) => {
    
    
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className={icon}></i>
                {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
{/* <Search /> */}
            </nav>
        )
    
}

Navbar.defaultProps={
    title:'BSB',
    icon:'fab fa-github'
}
Navbar.propTypes={
     title:PropTypes.array.isRequired,
     icon:PropTypes.string.isRequired
 }
export default Navbar
