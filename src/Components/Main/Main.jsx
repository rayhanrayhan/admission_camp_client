import React from 'react';
import Navber from '../Home/Navber/Navber';
import Footer from '../Home/Footer/Footer';
import { ToastContainer } from "react-toastify";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;