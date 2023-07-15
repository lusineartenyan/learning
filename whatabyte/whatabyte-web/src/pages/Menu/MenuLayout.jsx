import React from "react";
import { Outlet } from 'react-router-dom';

const MenuLayout = (props) => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MenuLayout;