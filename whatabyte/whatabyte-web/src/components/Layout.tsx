import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from "../assets/images/logo.svg";
import "../../src/assets/scss/components/layout.scss";

const Layout = () => {
    return (
        <div className="content">
            <div className="sidebar">
                <header>
                    <NavLink to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </NavLink>
                </header>
                <nav>
                    <Sidebar />
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;