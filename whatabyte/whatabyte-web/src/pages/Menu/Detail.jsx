import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Text from "../../components/ui/Text";
import Line from "../../components/ui/Line";
import { items } from '../../data/items';
import Button from "../../components/form/Button";
import { MenuService } from "../../apis/MenuService"

const Detail = () => {
    const menuService = new MenuService();
    const navigate = useNavigate();
    const actionClick = () => { navigate('/menu') }
    const {id} = useParams()
    const itemClick = (itemId) => {
        if(itemId) {
            navigate(`/menu/edit/${itemId}`);
        }
    }

    const [details, setDetails] = useState([])
    useEffect(() => {
        async function getItemDetails(itemId) {
            const itemDetails = await menuService.getMenuItemDetails(itemId)
            setDetails(itemDetails)
        }

        getItemDetails(id);
    }, [])

    return (
        <div>
            <div className="breadcrumb">
                <span className="page-heading">{details.name}</span>
                <span className="action-item" onClick={() => actionClick()}>Back</span>
            </div>
            <img src = {details.image} alt={details.name}></img>
            <Text as='h1' htmlFor='someid' size='lg' color='secondary'>{details.price}</Text>
            <Line color='gray'></Line>
            <Text as='span' htmlFor='id' size='sm' color='primary'>{details.description}</Text>
            <Line color='gray'></Line>
            <div className='btn-group-horizontal'>
                <Button onClick={() => itemClick(details.id)}>Edit</Button>
                <Button onClick={()=> alert('Delete')} >Delete</Button>
            </div>
        </div>
    )
}

export default Detail;