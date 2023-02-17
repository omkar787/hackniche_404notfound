import React from "react";
import { LoginForm } from "../components/Auth/LoginForm";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <LoginForm onSubmit={() => {}} />;
    </div>
  );
};

export default Login;
