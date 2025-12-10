import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
        <nav className='Nav1'>
            <h2 logo=""><p></p></h2>

            <ul className='Navlinks'>
                <li><a href="/">Home</a></li>
                <li><a href="/Points Table">Points Table</a></li>
                <li><a href="/Community">Community</a></li>
                <li><a href="/Live Cricket">Live Cricket</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;