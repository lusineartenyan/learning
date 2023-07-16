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
    <div className="flex-box wrapper">
      <div className="breadcrumb">
        <span className="text-lg-primary">{details.name}</span>
        <span className="action-item" onClick={() => actionClick(isDelete)}>
          Back
        </span>
      </div>
      {!isDelete && (
        <div className="center-wrapper">
          <img src={details.image} alt={details.name}></img>
          <Text size="lg" color="primary" align="left">
            {`$${details.price}`}
          </Text>
          <Line color="gray"></Line>
          <Text size="sm" color="primary" align="left">
            {details.description}
          </Text>
          <Line color="gray"></Line>
          <div className="btn-group-horizontal">
            <Button onClick={itemClick}>Edit</Button>
            <Button onClick={deleteClick}>Delete</Button>
          </div>
        </div>
      )}
      {isDelete && <Delete isDelete={isDelete} {...details} />}
    </div>
  );
};

export default Detail;
