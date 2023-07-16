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
      <Text as="h1" size="md" color="secondary">
        Are you sure you want to delete this item?
      </Text>
      <Text as="h1" size="sm" color="error">
        This action can't be undone.
      </Text>
      <img src={props.image} alt={props.name}></img>
      <Text as="h1" size="lg" color="secondary">
        {props.name}
      </Text>
      <Text as="h1" size="lg" color="secondary">
        {props.description}
      </Text>
      <div className="btn-group-vertical">
        <Button onClick={deleteItem}>Delete</Button>
        <Button onClick={ss}>Cancel</Button>
      </div>
    </div>
  );
};

export default Delete;
