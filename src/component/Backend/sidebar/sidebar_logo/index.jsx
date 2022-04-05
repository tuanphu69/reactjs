import React from "react";
// import {logo} from '../logo.svg';
import Logo from '../logo.svg';

// import logo from '../logo.svg';

export default function Sidebar_logo() {

    // const logo = require('./')
    return (
        <div className="sidebar__logo">
            <a href="index.html">
                {/* <img src={logo} /> */}
                <Logo />
            </a>
        </div>
    );
}
