import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import router from "./common/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <RouterProvider router={router} />
        <ToastContainer />
    </>
);
