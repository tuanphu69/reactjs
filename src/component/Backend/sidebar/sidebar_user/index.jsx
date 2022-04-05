import React from "react";

export default function Sidebar_user() {
    return (
        <div className="sidebar__user">
            <a href="#">
                <div className="profile">
                    <div className="avatar">
                        <img src="./assets/img/giphy.gif" alt="" />
                    </div>
                    <div className="name">
                        <h6>Ton Ton</h6>
                    </div>
                </div>
            </a>
        </div>
    );
}
