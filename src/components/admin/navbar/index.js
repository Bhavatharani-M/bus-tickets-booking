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
          <NavLink to="/open" activeStyle>
            Open
          </NavLink>
          <NavLink to="/closed" activeStyle>
            Closed
          </NavLink>
          <NavLink to="/update" activeStyle>
            update
          </NavLink>
          <NavLink to="/reset" activeStyle>
            Reset
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to="/"
            onClick={() => {
              sessionStorage.clear();
            }}
          >
            Logout
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
