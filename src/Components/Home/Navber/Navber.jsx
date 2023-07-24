import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/react.png';
import SearchBar from './SearchBar';
import { AuthContext } from '../../../Providors/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const [navbarOpacity, setNavbarOpacity] = useState(1);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const navbarHeight = 60;
        const newOpacity = scrollY > navbarHeight ? 0.3 : 1;


        setNavbarOpacity(newOpacity);
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const tabLink = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "block font-medium text-yellow-400 outline-white text-lg"
                            : "block font-medium text-lg"
                    }
                >
                    Home{" "}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="college"
                    className={({ isActive }) =>
                        isActive
                            ? "block font-medium text-yellow-400 outline-white text-lg"
                            : "block font-medium text-lg"
                    }
                >
                    College{" "}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="admission"
                    className={({ isActive }) =>
                        isActive
                            ? "block font-medium text-yellow-400 outline-white text-lg"
                            : "block font-medium text-lg"
                    }
                >
                    Admission{" "}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="mycollege"
                    className={({ isActive }) =>
                        isActive
                            ? "block font-medium text-yellow-400 outline-white text-lg"
                            : "block font-medium text-lg"
                    }
                >
                    My College{" "}
                </NavLink>
            </li>





        </>
    )




    return (
        <nav className="fixed w-full text-white z-50" style={{ backgroundColor: `rgba(15, 15, 90, ${navbarOpacity})` }}>
            <div className="flex items-center justify-between md:w-9/12 md:mx-auto mx-4">

                {/* mobile */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-10 ${open ? 'text-gray-200' : 'text-gray-200'} text-3xl md:hidden m-5`}
                >

                    <ion-icon name="menu"></ion-icon>
                </div>
                <div
                    className={`text-gray-900 md:hidden absolute w-2/3 mt-[78px] h-screen px-6 py-2 font-medium  bg-[#0f0f5a] top-0 duration-300 ${open ? 'left-0' : 'right-[100%]'
                        }`}
                >
                    <div className='flex mt-16 justify-center items-center gap-1'>
                        <img className="w-20 " src={logo} alt="" />
                        <h5 className=" text-white  font-bold">Admission Camp</h5></div>
                    <ul className="flex flex-col text-white justify-center text-start gap-5 py-2 text-lg ">
                        {tabLink}
                    </ul>
                </div>

                {/* name */}
                <div className="flex items-center  -ml-2">
                    <img className="w-20 md:block hidden" src={logo} alt="" />
                    <h5 className=" text-white md:block hidden font-bold">Admission Camp</h5>
                </div>

                {/* menu */}
                <div className="md:bg-white/0 bg-white md:block hidden">
                    <ul className="flex items-center gap-6 py-2 text-lg">
                        {tabLink}
                    </ul>
                </div>

                {/* third part */}
                <SearchBar />

                <div className="flex justify-center items-center gap-3 md:gap-5">

                    {/* users */}
                    <div className="navbar-end flex items-center">

                        {/* user picture */}
                        <div className="relative group">
                            <button className="btn btn-ghost btn-circle">
                                <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                            </button>
                            <h1 className="absolute -bottom-24 bg-slate-700 px-6 py-2 rounded-lg opacity-0 invisible shadow-md right-0 group-hover:opacity-100 group-hover:visible duration-300">
                                {user?.displayName}
                            </h1>
                        </div>

                        {/* login button */}
                        <ul className="text-white">
                            {user ? (
                                <li>
                                    <button onClick={() => logOut()}>Log Out</button>
                                </li>
                            ) : (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navber;
