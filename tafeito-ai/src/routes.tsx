import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import App from './App';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App>
                <Login />
            </App>
        ),
    },
    {
        path: "tarefas",
        element: (
            <App>
                <Tasks />
            </App>
        ),
    },
])

export { router };