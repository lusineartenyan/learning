import LAYOUT from "../components/Layout";
import HOME from "../pages/Home";
import MENULAYOUT from "../pages/Menu/MenuLayout";
import MENU from "../pages/Menu/Menu";
import DETAIL from "../pages/Menu/Detail";
import ADD from "../pages/Menu/Add";
import EDIT from "../pages/Menu/Edit";
import DELETE from "../pages/Menu/Delete";
import SETTINGS from "../pages/Settings";

export interface routerType {
  path: string;
  element: JSX.Element;
  index?: boolean;
  children?: Array<routerType>;
}

const pagesData: routerType = {
  path: "",
  element: <LAYOUT />,
  children: [
    { path: "", element: <HOME />, index: true },
    {
      path: "menu",
      element: <MENULAYOUT />,
      children: [
        { path: "", element: <MENU />, index: true },
        { path: "detail/:id", element: <DETAIL /> },
        { path: "add", element: <ADD /> },
        { path: "edit/:id", element: <EDIT /> },
        { path: "delete/:id", element: <DELETE /> },
      ],
    },
    { path: "settings", element: <SETTINGS /> },
  ],
};

export default pagesData;
