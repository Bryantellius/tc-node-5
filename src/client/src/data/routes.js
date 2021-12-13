import { Route } from "react-router-dom";
import App from "../App";
import DocContent from "../components/docs/DocContent";
import Docs from "../components/docs/Docs";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "docs",
    element: <Docs />,
    children: <Route path=":slug" element={<DocContent />} />,
  },
];
