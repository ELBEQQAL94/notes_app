import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { logout, isLogin } from "../helpers";

import CustomLink from "./CustomLink";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto brand">
          <span>🍺</span> NewB
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <CustomLink activeOnlyWhenExact={true} to="/" label="Home" />
            </NavItem>
            {!isLogin() ? (
              <>
                <NavItem>
                  <CustomLink to="/signup" label="SIGN UP" />
                </NavItem>
                <NavItem>
                  <CustomLink to="/login" label="Log In" />
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <CustomLink activeOnlyWhenExact={true} to="/dashboard" label="Dashboard" />
                </NavItem>
                <NavItem>
                  <CustomLink to="/dashboard/notes" label="Notes" />
                </NavItem>
                <NavItem>
                  <Link to="/login" onClick={logout}>
                    Log Out
                  </Link>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
