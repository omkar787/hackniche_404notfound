import { TextField } from "@mui/material";
import { useState } from "react";
import {
  Branding,
  BrandingInfo,
  BrandingSubtitle,
  BrandingTitle,
  ForgotLink,
  GradientBackground,
  ImageLogo,
  LoginCard,
  LoginForm as LF,
  LoginTitle,
  SubmitButton,
} from "./LoginItems";

import { PropagateLoader } from "react-spinners";
import { useCookies } from "react-cookie";
import axios from "axios";
import instance from "../../../utils/axiosInstance";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [cookies, setCookie] = useCookies(["jwt"]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) return;

    setSubmitting(true);
    const response = await instance.post("/users/login", {
      email,
      password,
    });
    const data = response.data;

    setCookie("jwt", data.token, { path: "/" });

    setSubmitting(false);
  };

  return (
    <GradientBackground
      style={{
        background: "url(/assets/space.jfif)",
        backdropFilter: "brightness(50%)",
      }}
    >
      <LoginCard>
        <Branding>
          <ImageLogo
            src="/assets/logo.png"
            style={{ borderRadius: "50%", border: "4px solid white" }}
          />
          <BrandingTitle>News App !</BrandingTitle>
          <BrandingSubtitle style={{ fontSize: "1.4rem" }}>
            Login into your account
          </BrandingSubtitle>
          <BrandingInfo>
            Empower, Educate <br /> Enlighten
          </BrandingInfo>
        </Branding>
        <LF onSubmit={handleFormSubmit}>
          <LoginTitle style={{ marginBottom: "12px" }}>Log In</LoginTitle>
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            color="secondary"
            type="email"
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            sx={{ fontFamily: "Outfit" }}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label="Password"
            color="secondary"
            type="password"
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
            sx={{ fontFamily: "Outfit" }}
            required
          />
          {submitting ? (
            <ButtonLoading />
          ) : (
            <SubmitButton type="submit" disabled={submitting}>
              Continue
            </SubmitButton>
          )}
          <div
            style={{
              marginTop: "2rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ForgotLink to={"/signup"}>Sign up</ForgotLink>
          </div>
        </LF>
      </LoginCard>
    </GradientBackground>
  );
}
export const ButtonLoading = ({ color = "black", marginTop = "1.6rem" }) => {
  return (
    <div
      style={{
        marginTop: marginTop,
        width: "100%",
        height: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PropagateLoader color={color} />
    </div>
  );
};
