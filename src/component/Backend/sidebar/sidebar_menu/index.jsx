import React from "react";

export default function Sidebar_menu() {


    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const STORAGE_KEY = "UI_ADMIN";
    const app = {
        currentIndex: 0,
        darkModeStatus: false,
        config: JSON.parse(localStorage.getItem(STORAGE_KEY)) || {},
        sidebarMenus: [
            {
                url: "#dashboard",
                icon: '<i className="fas fa-chart-pie"></i>',
                title: "Dashboard",
            },
            {
                url: "#users",
                icon: '<i className="fas fa-user-friends"></i>',
                title: "User",
            },
            {
                url: "#products",
                icon: '<i className="fas fa-shopping-bag"></i>',
                title: "Product",
            },
            {
                url: "#blogs",
                icon: '<i className="fas fa-file-alt"></i>',
                title: "Blog",
            },
            {
                url: "login.html",
                icon: '<i className="fas fa-sign-in-alt"></i>',
                title: "Login",
            },
            {
                url: "register.html",
                icon: '<i className="fas fa-user-plus"></i>',
                title: "Register",
            },
            {
                url: "404.html",
                icon: '<i className="fas fa-exclamation-triangle"></i>',
                title: "Not Found",
            },
        ],
    }


    return (
        <>
            <div className="sidebar__menu">
                <ul>
                    {app.sidebarMenus.map((data, key) => {
                        return (
                            <li className="sidebar-item" key={key}>
                                <a href={data.url}>
                                    <div className="sidebar-menu__icon"><i className="fas fa-exclamation-triangle"></i> </div>
                                    <span>{data.title}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div >
        </>
    );
}










// export default Sidebar_menu()