import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AuthButtonGroup,
  LoginButton,
  LogoStuff,
  NavContainer,
  NavTitle,
  RegisterButton,
} from "./elements";
import { Menu, MenuItem } from "@mui/material";
import instance from "../../../utils/axiosInstance";

const Navbar = () => {
  const { user, loadingUser } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const location = useLocation();

  console.log("user from navbar", user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const res = await instance.get("/users/logout");
    console.log(res);
    window.location.reload(true);
  };

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
          <>
            <span
              style={{
                color: "white",
                padding: "4px 12px",
                background: "#444",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              {user.name}
            </span>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            {location.pathname !== "/login" && (
              <LoginButton to={"/login"}>Login</LoginButton>
            )}
            {location.pathname !== "/signup" && (
              <RegisterButton to={"/signup"}>Register</RegisterButton>
            )}
          </>
        )}
      </AuthButtonGroup>
    </NavContainer>
  );
};

export default Navbar;
