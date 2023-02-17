import React from "react";
import {
  AuthButtonGroup,
  LoginButton,
  LogoStuff,
  NavContainer,
  NavTitle,
  RegisterButton,
} from "./elements";

const Navbar = () => {
  return (
    <NavContainer>
      <LogoStuff>
        <img src="/assets/logo.png" style={{ width: "42px" }} alt="logo" />
        <NavTitle>News !</NavTitle>
      </LogoStuff>
      <AuthButtonGroup>
        <LoginButton to={"/login"}>Login</LoginButton>
        <RegisterButton to={"/signup"}>Register</RegisterButton>
      </AuthButtonGroup>
    </NavContainer>
  );
};

export default Navbar;
