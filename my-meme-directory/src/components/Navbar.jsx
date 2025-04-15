import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

const AppNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">Meme Directory</NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link color="foreground" href="/table">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/list">
            List
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
