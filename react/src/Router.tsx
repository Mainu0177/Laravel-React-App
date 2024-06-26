import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import NotFound from "./views/NotFound";


const router = createBrowserRouter([
    {
        path: "login",
        element: <Login />
    },
    {
        path: "signup",
        element: <SignUp />
    },
    {
        path: "users",
        element: <Users />
    },
    {
        path: "*",
        element: <NotFound />
    },
])

export default router;
