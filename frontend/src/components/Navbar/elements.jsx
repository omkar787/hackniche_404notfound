import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  background: #222;
  padding: 14px 32px;
  display: flex;
  flex-direction: row;
`;

export const NavTitle = styled.h1`
  color: #ddd;
  font-size: 2rem;
  font-weight: 600;
`;

export const LogoStuff = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const AuthButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 18px;
`;

export const LoginButton = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #ddd;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    background: #444;
    color: white;
    text-decoration: underline;
  }
  &:active {
    border: 1px solid white;
  }
`;
export const RegisterButton = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: white;
  background: #222;
  font-weight: 500;
  padding: 4px 14px;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    background: #444;
    color: white;
    text-decoration: underline;
  }
  &:active {
    border: 1px solid #5c5c5c;
  }
`;
