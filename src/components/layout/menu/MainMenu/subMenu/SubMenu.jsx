import React from "react";
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
  return (
    <ListItem>
      {icon}
      <ListTitle> {title}</ListTitle>
      <SubDropdown>
        <SubDropdownItems>
          {sub.map((item) => (
            <SubDropdownItem key={item.id}>
              <SepLine />
              <SubDropdownLink>
                <Link to={`category/${item.code}/1`}>{item.title}</Link>
              </SubDropdownLink>
            </SubDropdownItem>
          ))}
        </SubDropdownItems>
      </SubDropdown>
    </ListItem>
  );
}
