import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/form';
import { MenuService } from "../../apis/MenuService"

interface Props {
    
}

const Edit: React.FC<Props> = () => {
    const menuService = new MenuService();
    const {id} = useParams()
    const navigate = useNavigate();
    const actionClick = () => { navigate('/menu') }
    const handleSubmit = (details:any) => {
        menuService.saveMenuItem(details)
    }
    const [details, setDetails] = useState({})
    let idInt = 0;
    if(id) {
        idInt = parseInt(id);
    }
    useEffect(() => {
        menuService.getMenuItemDetails(idInt).then((itemDetails) => {
            setDetails(itemDetails)
        })
    }, [details])

    return (
        <div className='flex-box edit'>
            <div className="breadcrumb">
                <span className="page-heading">Edit Menu Items</span>
                <span className="action-item" onClick={() => actionClick()}>Cancel</span>
            </div>
            <Form contClass='btn-group-vertical' onSubmit={handleSubmit} {...{details}}/>
        </div>
    )
}

export default Edit;