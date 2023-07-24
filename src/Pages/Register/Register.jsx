import React, { useContext, useState, } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providors/AuthProvider';



const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    const [showNotification, setShowNotification] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setShowNotification(false); // Reset the error notification

        createUser(email, password)
            .then((result) => {
                const user = result.user;

                updateUserProfile(name, photo)
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
                setShowNotification(true);
            });
    };

    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full pt-14 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center rounded-tr-[50px] rounded-bl-[50px] my-20 justify-center border-indigo-500 border-dotted  bg-[#0f0f5a] bg-opacity-10  px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full">
                        <div>
                            <h2 className="text-center py-3 text-3xl font-extrabold text-gray-100">Create an account</h2>
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="photo" className="sr-only">
                                        Profile picture URL
                                    </label>
                                    <input
                                        id="photo" // Fixed typo here (removed input attribute)
                                        name="photo"
                                        type="text"
                                        autoComplete="new-password"
                                        required
                                        value={photo} // Fixed wrong state variable here (changed password to photo)
                                        onChange={(e) => setPhoto(e.target.value)} // Fixed wrong state variable here (changed password to photo)
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Your profile photo url"
                                    />
                                </div>
                            </div>

                            {showNotification && (
                                <div className="mt-2 bg-white px-4 py-1 rounded-lg text-red-600 text-sm">An error occurred during registration. Please try again.</div>
                            )}

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="mt-5 pb-4">
                            <Link to="/login">
                                <button role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                    Back to Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
