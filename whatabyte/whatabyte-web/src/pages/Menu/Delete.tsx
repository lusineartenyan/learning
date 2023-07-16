import React from "react";
import { MenuService } from "../../apis/MenuService"
import { useParams } from 'react-router-dom';
const menuService = MenuService.getInstance();

type Props = {
    itemName: string;
    description: string;
    image: string
}

const Delete: React.FC<Props> = (props: Props) => {
  const {id} = useParams()
    return (
      <div>
        <h1>Hello, {props.itemName}!</h1>
      </div>
    );
  };

export default Delete;