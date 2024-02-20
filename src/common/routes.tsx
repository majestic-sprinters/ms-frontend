import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BooksPage from "../modules/books/BooksPage";
import AppLayout from "./AppLayout";
import BooksSearchPage from "../modules/bookSearch/BooksSearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/books",
                element: <BooksPage />,
            },
            {
                path: "/book-search",
                element: <BooksSearchPage />,
            },
            {
                path: "/users",
                element: <h1>YET TO IMPLEMENT</h1>, // TODO: implement
            },
        ]
    },
]);

export default router;
