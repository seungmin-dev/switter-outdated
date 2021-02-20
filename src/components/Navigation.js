import React from "react";
import {Link} from "react-router-dom";

const Navigation = ({userObj}) => <nav>
    <ul>
        <li>
            <Link exact="true" to="/">Home</Link>
        </li>
        <li>
            <Link exact="true" to="/profile">{userObj.displayName}'s Profile</Link>
        </li>
    </ul>
</nav>
export default Navigation;