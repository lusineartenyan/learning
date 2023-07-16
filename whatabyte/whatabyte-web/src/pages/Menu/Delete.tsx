import React, { useState } from "react";
import { MenuService } from "../../apis/MenuService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Text from "../../components/ui/Text";
import Button from "../../components/form/Button";
const menuService = MenuService.getInstance();

interface Props {
  id: number;
  name?: string;
  price: number;
  description?: string;
  image?: string;
  isDelete?: boolean;
}

const Delete = (props: Props) => {
  const navigate = useNavigate();
  const { name, description, image, isDelete } = props;

  const deleteItem = () => {
    menuService.deleteMenuItem(props.id).then(() => {
      navigate("/menu");
    });
  };

  const ss = () => {
    alert("as");
  };

  return (
    <div className="flex-box wrapper">
      <Text size="sm" color="primary" align="center">
        Are you sure you want to delete this item?
      </Text>
      <Text size="sm" color="error" align="center">
        This action can't be undone.
      </Text>
      <div className="center-wrapper">
        <img src={props.image} alt={props.name}></img>
        <Text size="sm" color="primary" align="left">
          {props.name}
        </Text>
        <Text size="sm" color="primary" align="left">
          {props.description}
        </Text>
      </div>

      <div className="btn-group-vertical">
        <Button onClick={deleteItem}>Delete</Button>
        <Button onClick={ss}>Cancel</Button>
      </div>
    </div>
  );
};

export default Delete;
