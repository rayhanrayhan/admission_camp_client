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
import PrivetRoute from "./PrivetRoute";
import Error from "../Pages/Error/Error";
import SearchPage from "../Pages/SearchPage/SearchPage";




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
                element: <PrivetRoute><Admission></Admission></PrivetRoute>
            },
            {
                path: 'Login',
                element: <Login></Login>
            },
            {
                path: 'mycollege',
                element: <PrivetRoute><MyCollege></MyCollege></PrivetRoute>,
                loader: ({ params }) => fetch(`https://admission-camp-client.vercel.app/mycollege/${params.email}`)

            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'searchdata/:searchtext',
                element: <SearchPage></SearchPage>,
                loader: () => fetch('https://admission-camp-client.vercel.app/collegeData')

            },
            {
                path: 'viewDetails/:id',
                element: <PrivetRoute><TopClgViewDEtails></TopClgViewDEtails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://admission-camp-client.vercel.app/collegeData/${params.id}`)
            },
            {
                path: 'admission/:id',
                element: <AdmissionForm></AdmissionForm>,
                loader: ({ params }) => fetch(`https://admission-camp-client.vercel.app/collegeData/${params.id}`)

            },
        ]

    },
    {
        path: "*",
        element: <Error></Error>
    }



]);
