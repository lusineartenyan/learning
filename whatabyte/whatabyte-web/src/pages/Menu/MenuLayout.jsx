import React from "react";
import { Outlet } from 'react-router-dom';
import "../../assets/scss/pages/menu.scss";

const MenuLayout = (props) => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MenuLayout;