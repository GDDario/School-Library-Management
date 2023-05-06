import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ErrorPage from "./routes/ErrorPage";
import NewAccount from "./routes/NewAccount";
import Search from "./routes/Search";
import BookPage from "./routes/BookPage";
import Profile from "./routes/Profile";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/search/:category/",
                element: <Home/>
            },
            {
                path: "/search/:category/:text",
                element: <Search/>
            },
            {
                path: "/books/:id",
                element: <BookPage />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/newAccount",
        element: <NewAccount/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
