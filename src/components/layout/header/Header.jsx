import React from "react";
import {
  Container,
  NavbarLeft,
  NavbarRight,
  LoginButton,
  LineSep,
  SearchBox,
} from "./header.style";
import SearchForm from "./SearchForm";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Container>
      <NavbarRight>
        <Link to={"/"}>
          <img
            src="./logo/light-logo.png"
            alt="bluebee-Logo"
            className="mix-blend-color-burn contrast-[1] h-[70px] ms-4 md:ms-0"
          />
        </Link>
        <SearchBox>
          <SearchForm />
        </SearchBox>
      </NavbarRight>
      <NavbarLeft>
        <LoginButton>
          <FiLogIn />
          <NavLink>
            <span>ورود|ثبت نام</span>
          </NavLink>
        </LoginButton>
        <LineSep />
        <NavLink>
          <FiShoppingCart />
        </NavLink>
      </NavbarLeft>
    </Container>
  );
}
