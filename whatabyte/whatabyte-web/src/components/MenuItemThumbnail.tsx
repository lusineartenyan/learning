import React from "react";
import Text from "../components/ui/Text";

interface ThumbnailProsp {
  id: Number;
  name: string;
  description: string;
  image: string;
  handleClick: () => void;
}

const MenuItemThumbnail = (props: ThumbnailProsp) => {
  const { id, image, name, description, handleClick } = props;

  return (
    <div
      className="thumb"
      onClick={() => {
        handleClick();
      }}
    >
      <img src={image} alt={name}></img>
      <Text size="sm" color="primary" align="center">
        {name}
      </Text>
      <Text size="sm" color="secondary" align="center">
        {description}
      </Text>
    </div>
  );
};

export default MenuItemThumbnail;
