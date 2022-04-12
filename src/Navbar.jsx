import React, { useState } from "react";
import { Nav, ToolBar, Menu, Logo, Tab, Tabs } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <ToolBar>
        <Logo href="/">larulog</Logo>
        <Menu onClick={() => setIsOpen(!isOpen)} />
        <Tabs isOpen={isOpen}>
          <Tab href="/">HOME</Tab>
          <Tab href="/">PRODUCTS</Tab>
          <Tab href="/">PRICING</Tab>
          <Tab href="/">ABOUT</Tab>
        </Tabs>
      </ToolBar>
    </Nav>
  );
};

export default Navbar;
