import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout(props) {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {props.routes.map((route, idx) => {
            return (
              <Route key={idx} element={route.element} path={route.path} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
