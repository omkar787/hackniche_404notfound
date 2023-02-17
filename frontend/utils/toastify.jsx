import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToastMessage = (message, type, time = 1000) => {
  toast[type](message, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
