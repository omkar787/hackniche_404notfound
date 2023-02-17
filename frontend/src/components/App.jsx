import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "../css/App.css";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthContextProvider from "../context/authContext";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<CookiesProvider>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/signup"
							element={<Signup />}
						/>
					</Routes>
				</CookiesProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
