import React from "react";
import "./assets/styles/main.css";
import Sidebar from "./sidebar";
import Backend from "./main";

export default function Main() {
    return (
        <div id="app">
           <Sidebar />
           <Backend />
        </div>
    );
}
