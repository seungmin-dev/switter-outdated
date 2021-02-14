import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li>
            <Link exact="true" to="/">Home</Link>
        </li>
        <li>
            <Link exact="true" to="/profile">My Profile</Link>
        </li>
    </ul>
</nav>
export default Navigation;