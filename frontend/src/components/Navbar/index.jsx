import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";

import {
  AuthButtonGroup,
  LoginButton,
  LogoStuff,
  NavContainer,
  NavTitle,
  RegisterButton,
} from "./elements";

const Navbar = () => {
  const { user, loadingUser } = useAuth();

  return (
    <NavContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoStuff>
          <img src="/assets/logo.png" style={{ width: "42px" }} alt="logo" />
          <NavTitle>News !</NavTitle>
        </LogoStuff>
      </Link>
      <AuthButtonGroup>
        {loadingUser ? (
          <span style={{ color: "white" }}>loading...</span>
        ) : user ? (
          <span style={{ color: "white" }}>{user.name}</span>
        ) : (
          <>
            <LoginButton to={"/login"}>Login</LoginButton>
            <RegisterButton to={"/signup"}>Register</RegisterButton>
          </>
        )}
      </AuthButtonGroup>
    </NavContainer>
  );
};

export default Navbar;
