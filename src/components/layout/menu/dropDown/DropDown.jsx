import React, { useState } from "react";
import {
  MenuButton,
  UseFullLinks,
  UseFullLinkIcon,
  SepLine,
  Container,
  MenuItems,
  SubMenuItems,
} from "./dropDown.style";
import { menuItems, usefulLinks } from "../../../../constants/index";

import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import SubMenu from "./subMenu/SubMenu";
import SearchBar from "../../header/SearchBar";
export default function DropDown() {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <MenuButton>
        <FiMenu onClick={() => setToggle((prv) => !prv)} />
      </MenuButton>
      <MenuItems $toggle={toggle}>
        <SubMenuItems>
          <SearchBar />
          <br />
          <SepLine />
          {usefulLinks.map((link) => (
            <UseFullLinks key={link.id}>
              <UseFullLinkIcon>{link.icon}</UseFullLinkIcon>
              <Link>{link.title}</Link>
            </UseFullLinks>
          ))}
          <SepLine />
          {menuItems.category.map((menuItem) => (
            <SubMenu
              id={menuItem.id}
              key={menuItem.id}
              title={menuItem.title}
              icon={menuItem.icon}
              sub={menuItem.sub}
            />
          ))}
        </SubMenuItems>
      </MenuItems>
    </Container>
  );
}
