import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "../css/App.css";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthContextProvider from "../context/authContext";
import { showToastMessage } from "../../utils/toastify";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import PushNotification from "../../utils/PushNotification";

async function request_push_permission() {
  if (
    "Notification" in window &&
    (Notification.permission === "denied" ||
      Notification.permission === "default")
  ) {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      showToastMessage(
        "Please grant push notification permission for personalized news notification",
        "error"
      );
    }
  }
}

function App() {
  const [show_notification, setShow_notification] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow_notification(false);
    }, 5000);
    request_push_permission();
  }, []);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CookiesProvider>
          <ToastContainer />
          <PushNotification show_notification={show_notification} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </CookiesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
