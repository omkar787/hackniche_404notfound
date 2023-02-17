import React from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/Auth/SignUpForm";
import GenreModal from "../components/Auth/GenreModal";

const Signup = () => {
	return (
		<div>
			<Navbar />
			<SignUpForm />
			<GenreModal open={true} />
		</div>
	);
};

export default Signup;
