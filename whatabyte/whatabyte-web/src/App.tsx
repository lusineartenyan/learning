import { RouterProvider } from "react-router-dom";
import Router from "../src/routes/router";
import "./assets/scss/index.scss";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
