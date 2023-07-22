import React from 'react';
import Navber from '../Home/Navber/Navber';
import Footer from '../Home/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;