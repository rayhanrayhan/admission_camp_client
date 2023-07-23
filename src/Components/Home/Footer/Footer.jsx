import React from 'react';
import logo from './../../../assets/react.png'

const Footer = () => {
    return (


        <footer className=" bg-[#0f0f5a] text-white ">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">
                    <div className="text-teal-600">
                        <img className='w-28' src={logo} alt="" />

                    </div>

                    <div
                        className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
                    >
                        <div className="col-span-2">
                            <div>
                                <h2 className="text-2xl font-bold  ">
                                    Unlock Your Future
                                </h2>

                                <p className="mt-4  ">
                                    Discover your dream college with our user-friendly web application offering comprehensive college booking facilities.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                            <form className="w-full">

                                <div
                                    className="border border-gray-100 p-2  sm:flex sm:items-center sm:gap-4"
                                >
                                    <input
                                        type="email"
                                        placeholder="Write Your Email"
                                        className="w-full py-3 px-3 "
                                    />

                                    <button
                                        className="mt-1 w-full bg-teal-500 px-6 py-3 text-xl   tracking-wide rounded-lg text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>



                        <div className="col-span-2 sm:col-span-1">
                            <p className="  font-bold ">Menu</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400 "
                                    >
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Academic Info
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Admissions
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-bold ">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Important Notice
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Contact Us
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-bold">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">


                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Payment Policy
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Document Update
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Image correction
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-bold ">Downloads</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Android Softwere
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-200 transition hover:text-yellow-400"
                                    >
                                        Ios Softwere
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="col-span-2 flex  justify-start gap-6 lg:col-span-5 lg:justify-end">
                                <li className='text-3xl cursor-pointer '>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </li>
                                <li className='text-3xl cursor-pointer'>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </li>
                                <li className='text-3xl cursor-pointer'>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </li>
                                <li className='text-3xl cursor-pointer'>
                                    <ion-icon name="logo-github"></ion-icon>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>

                <div className="mt-8 border-t  border-gray-100 pt-8 dark:border-gray-800">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs ">
                            &copy; 2023. Admission Camp. All rights reserved.
                        </p>

                        <ul
                            className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-200 transition hover:text-yellow-400"
                                >
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-200 transition hover:text-yellow-400"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-200 transition hover:text-yellow-400"
                                >
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;