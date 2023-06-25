import React from "react";

import { Container, MenuItems } from "./menu.style";
import MainMenu from "./MainMenu/MainMenu";
import DropDown from "./dropDown/DropDown";
export default function Menu() {
  return (
    <Container>
      <MenuItems>
        <MainMenu />
        <DropDown />
      </MenuItems>
    </Container>
  );
}
