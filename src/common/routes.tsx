import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BooksPage from "../modules/books/BooksPage";
import AppLayout from "./AppLayout";
import BooksSearchPage from "../modules/bookSearch/BooksSearchPage";
import UsersPage from "../modules/users/UsersPage";
import UsersSearchPage from "../modules/userSearch/UsersSearchPage";

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
                element: <UsersPage />
            },
            {
                path: "/user-search",
                element: <UsersSearchPage />
            },
        ]
    },
]);

export default router;
