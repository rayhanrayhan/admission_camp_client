import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import College from "../Pages/College/College";
import Admission from "../Pages/Admission/Admission";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/college',
                element: <College></College>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
        ]
    },
]);
