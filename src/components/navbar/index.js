import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h4 style={{ padding: "20px" }}>Ticket-booking</h4>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/book" activeStyle>
            Book
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/admin">Admin</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
