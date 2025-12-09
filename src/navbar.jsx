import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
        <nav className='Nav1'>
            <h2 logo=""><p></p></h2>

            <ul className='Navlinks'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;