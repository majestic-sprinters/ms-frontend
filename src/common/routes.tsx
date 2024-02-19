import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BooksPage from "../modules/books/BooksPage";

const router = createBrowserRouter([
    {
        path: "/books",
        element: <BooksPage />,
    },
]);

export default router;
