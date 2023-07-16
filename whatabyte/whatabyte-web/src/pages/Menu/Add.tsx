import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/form";
import { MenuService } from "../../apis/MenuService";

interface FormFields {
  [key: string]: string;
}

const Add: React.FC = () => {
  const menuService = new MenuService();
  const navigate = useNavigate();
  const actionClick = () => {
    navigate("/menu");
  };

  const handleFormSubmit = (formData: FormFields) => {
    menuService.addMenuItem(formData);
    navigate("/menu");
  };

  return (
    <div className="flex-box add">
      <div className="breadcrumb">
        <span className="page-heading">Add Menu Items</span>
        <span className="action-item" onClick={() => actionClick()}>
          Cancel
        </span>
      </div>
      <Form onSubmit={handleFormSubmit} wrapperClass="btn-group-horizontal" />
    </div>
  );
};

export default Add;
