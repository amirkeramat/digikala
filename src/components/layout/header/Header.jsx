import React from "react";
import {
  Container,
  NavbarLeft,
  NavbarRight,
  LoginButton,
  LineSep,
  SearchBox,
} from "./header.style";
import SearchBar from "./SearchBar";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Container>
      <NavbarLeft>
        <Link>
          <img
            src='https://www.digikala.com/statics/img/svg/logo.svg'
            alt='digiKala-Logo'
          />
        </Link>
        <SearchBox>
          <SearchBar />
        </SearchBox>
      </NavbarLeft>
      <NavbarRight>
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
      </NavbarRight>
    </Container>
  );
}
