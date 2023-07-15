import React from "react";
import { MenuService } from "../../apis/MenuService"
import { useParams } from 'react-router-dom';

const Delete = () => {
    const menuService = new MenuService();
    const {id} = useParams()
    const handleSubmit = (id) => {
        menuService.deleteMenuItem(id)
    }

    return (
        <div onClick={() => handleSubmit(id)}>
            Delete
        </div>  
    )
}

export default Delete;