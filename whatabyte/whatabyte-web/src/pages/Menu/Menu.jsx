import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItemThumbnail from "../../components/MenuItemThumbnail";
import { MenuService } from "../../apis/MenuService";
const menuService = MenuService.getInstance();

const Menu = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const itemClick = (itemId) => {
    navigate(`detail/${itemId}`);
  };
  const actionClick = (action) => {
    navigate(action);
  };

  useEffect(() => {
    menuService.getMenuItems().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <div className="flex-box wrapper">
      <div className="breadcrumb">
        <span className="page-heading">Menu Items</span>
        <span className="action-item" onClick={() => actionClick("add")}>
          Add item
        </span>
      </div>
      <div className="menu-grid">
        {items.map((val, key) => {
          return (
            <MenuItemThumbnail
              key={key}
              {...val}
              handleClick={() => itemClick(val.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
