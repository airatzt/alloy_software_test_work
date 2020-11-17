import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <NavMenu />
          {children}
        </Container>
      </BrowserRouter>
    </>
  );
};

export default Layout;
