import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./NavMenu";
import "./layout.css";

const Layout = ({ children }) => {
  return (
      <BrowserRouter>
        <div  className="layout">
          <NavMenu />
          <div className="layout__children">{children}</div>
        </div>
      </BrowserRouter>
  );
};

export default Layout;
