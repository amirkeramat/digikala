import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListTitle,
  SubDropdown,
  SubDropdownItems,
  SubDropdownItem,
  SepLine,
  SubDropdownLink,
} from "./subMenu.style";
export default function SubMenu({ id, title, icon, sub }) {
  const [showSub, setShowSub] = useState(false);
  return (
    <ListItem>
      <ListTitle onClick={() => setShowSub((prv) => !prv)}>
        {icon}
        {title}
      </ListTitle>
      <SubDropdownItems $toggle={showSub}>
        {sub.map((item) => (
          <SubDropdownItem key={item.id}>
            <SepLine />
            <SubDropdownLink>
              <Link to={`category/${item.code}`}>{item.title}</Link>
            </SubDropdownLink>
          </SubDropdownItem>
        ))}
      </SubDropdownItems>
    </ListItem>
  );
}
