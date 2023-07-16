import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Text from "../../components/ui/Text";
import Line from "../../components/ui/Line";
import Button from "../../components/form/Button";
import Delete from "./Delete";
import { MenuService } from "../../apis/MenuService";
const menuService = MenuService.getInstance();

export interface DetailsData {
  name: string;
  description: string;
  price: boolean;
  image: string;
}

const Detail = () => {
  const navigate = useNavigate();

  const [isDelete, setisDelete] = useState<boolean>(false);
  const [details, setDetails] = useState<DetailsData | any>([]);

  const actionClick = (isDelete: boolean) => {
    if (!isDelete) {
      navigate("/menu");
      return;
    }
    setisDelete(!isDelete);
  };
  const deleteClick = () => {
    setisDelete(!isDelete);
  };
  const { id } = useParams();
  let itemId: number;
  if (id) {
    itemId = parseInt(id);
  }

  const itemClick = () => {
    if (itemId) {
      navigate(`/menu/edit/${itemId}`);
    }
  };

  useEffect(() => {
    menuService.getMenuItemDetails(itemId).then((itemDetails) => {
      setDetails(itemDetails);
    });
  }, []);

  return (
    <div>
      <div className="breadcrumb">
        <span className="page-heading">{details.name}</span>
        <span className="action-item" onClick={() => actionClick(isDelete)}>
          Back
        </span>
      </div>
      {!isDelete && (
        <>
          <img src={details.image} alt={details.name}></img>
          <Text as="h1" size="lg" color="secondary">
            {details.price}
          </Text>
          <Line color="gray"></Line>
          <Text as="span" size="sm" color="primary">
            {details.description}
          </Text>
          <Line color="gray"></Line>
          <div className="btn-group-vertical">
            <Button onClick={itemClick}>Edit</Button>
            <Button onClick={deleteClick}>Delete</Button>
          </div>
        </>
      )}
      {isDelete && <Delete isDelete={isDelete} {...details} />}
    </div>
  );
};

export default Detail;
