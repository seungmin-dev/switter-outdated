import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li>
            <Link exact to="/">Home</Link>
        </li>
        <li>
            <Link exact to="/profile">My Profile</Link>
        </li>
    </ul>
</nav>
export default Navigation;