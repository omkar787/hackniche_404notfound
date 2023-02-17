import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/Auth/SignUpForm";

const Signup = () => {
	return (
		<div>
			<Navbar />
			<SignUpForm />
		</div>
	);
};

export default Signup;
