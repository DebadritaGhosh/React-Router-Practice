import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>React Router Practice</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/profile" >Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
