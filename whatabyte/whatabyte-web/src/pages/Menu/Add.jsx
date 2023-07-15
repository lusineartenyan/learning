import React from "react";
import { useNavigate } from 'react-router-dom';
import Form from "../../components/form/form";
import { MenuService } from "../../apis/MenuService"

const Add = () => {
    const menuService = new MenuService();
    const navigate = useNavigate();
    const actionClick = () => { navigate('/menu') }
    const handleSubmit = (details) => {
        menuService.addMenuItem(details)
    }
    
    return (
        <div className='flex-box add'>
            <div className="breadcrumb">
                <span className="page-heading">Add Menu Items</span>
                <span className="action-item" onClick={() => actionClick()}>Cancel</span>
            </div>
            <Form contClass='btn-group-vertical' onSubmit={handleSubmit} {...{}}/>
        </div>
    )
}

export default Add;