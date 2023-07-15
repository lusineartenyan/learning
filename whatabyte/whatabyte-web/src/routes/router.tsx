import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { routerType } from "../routes/pagesData";
import pagesData from "./pagesData";

const Routes = () => {
  return (
    <Route path={pagesData.path} element={pagesData.element}>
      {pagesData.children?.map(
        ({ path, element, children, index }: routerType, key: number) => {
          return (
            <Route key={key} path={path != "/" ? path : ""} element={element}>
              {children?.map(
                (
                  { path, element, children, index }: routerType,
                  key: number
                ) => {
                  return (
                    <Route
                      key={key}
                      path={path != "/" ? path : ""}
                      element={element}
                    >
                      {children?.map(
                        (
                          { path, element, children, index }: routerType,
                          key: number
                        ) => {
                          return (
                            <Route
                              key={key}
                              path={path != "/" ? path : ""}
                              element={element}
                            ></Route>
                          );
                        }
                      )}
                    </Route>
                  );
                }
              )}
            </Route>
          );
        }
      )}
    </Route>
  );
};

export const Router = createBrowserRouter(createRoutesFromElements(Routes()));

export default Router;
