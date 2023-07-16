import React from "react";

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
      <p className="item-name">{name}</p>
      <p className="itme-desc">{description}</p>
    </div>
  );
};

export default MenuItemThumbnail;
