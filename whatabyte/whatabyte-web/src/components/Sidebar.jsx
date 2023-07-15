import React from 'react';
import { sidebarItems } from '../data/sidebarItems';
import '../assets/scss/components/sidebar.scss';

const Sidebar = () => {
    return (
        <ul>
            {sidebarItems.map((val, key) => {
                return ( 
                    <li key={key} 
                        className='row'
                        onClick={() => {
                            window.location.pathname = val.path
                        }}
                    >
                        <span className='icon'>{val.icon}</span>
                        <span className='title'>{val.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default Sidebar;