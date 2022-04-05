import React from "react";
import Sidebar__darkmode from "./sidebar_darkmode";
import Sidebar__logo from "./sidebar_logo";
import Sidebar__menu from "./sidebar_menu";
import Sidebar_user from "./sidebar_user";



export default function Sidebar() {
    return (

        <div className="sidebar">
            <Sidebar__logo />
            <Sidebar_user />
            <Sidebar__menu />
            <div>
                <Sidebar__darkmode />
            </div>
        </div>
    );
}



