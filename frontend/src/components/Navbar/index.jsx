import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AuthButtonGroup,
  LoginButton,
  LogoStuff,
  NavContainer,
  NavTitle,
  RegisterButton,
} from "./elements";

const Navbar = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoStuff>
          <img src="/assets/logo.png" style={{ width: "42px" }} alt="logo" />
          <NavTitle>News !</NavTitle>
        </LogoStuff>
      </Link>
      <AuthButtonGroup>
        {location.pathname !== "/login" && (
          <LoginButton to={"/login"}>Login</LoginButton>
        )}
        {location.pathname !== "/signup" && (
          <RegisterButton to={"/signup"}>Sign Up</RegisterButton>
        )}
      </AuthButtonGroup>
    </NavContainer>
  );
};

export default Navbar;
