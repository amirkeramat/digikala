import React, { useState } from "react";
import {
  MenuButton,
  UseFullLinks,
  UseFullLinkIcon,
  SepLine,
  Container,
  MenuItems,
  SubMenuItems,
  CloseButton,
} from "./dropDown.style";
import { menuItems, usefulLinks } from "../../../../constants/index";

import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SubMenu from "./subMenu/SubMenu";
import SearchForm from "../../header/SearchForm";
export default function DropDown() {
  const [toggle, setToggle] = useState(false);
  if (toggle) {
    window.document.body.style.overflowY = "hidden";
  } else {
    window.document.body.style.overflowY = "scroll";
  }
  return (
    <Container>
      <MenuButton>
        <FiMenu onClick={() => setToggle((prv) => !prv)} />
      </MenuButton>
      <MenuItems $toggle={toggle}>
        <SubMenuItems>
          <CloseButton>
            <AiOutlineCloseCircle onClick={() => setToggle((prv) => !prv)} />
          </CloseButton>
          <SearchForm />
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
              setToggle={setToggle}
            />
          ))}
        </SubMenuItems>
      </MenuItems>
    </Container>
  );
}
