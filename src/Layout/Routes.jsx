import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import College from "../Pages/College/College";
import Admission from "../Pages/Admission/Admission";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TopClgViewDEtails from "../Pages/TopClgViewDetails/TopClgViewDEtails";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";


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
                path: 'college',
                element: <College></College>
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'Login',
                element: <Login></Login>
            },
            {
                path: 'mycollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'viewDetails/:id',
                element: <TopClgViewDEtails></TopClgViewDEtails>,
                loader: ({ params }) => fetch(`http://localhost:5000/collegeData/${params.id}`)
            },
            {
                path: 'admission/:id',
                element: <AdmissionForm></AdmissionForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/collegeData/${params.id}`)
            },

        ]
    },
]);
