import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providors/AuthProvider';
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const { signIn, googleSignIn, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            setLoading(true);
            const result = await signIn(email, password);

            if (result === 'google') {
                toast.success('Logged in with Google successfully!');
                navigate(from, { replace: true });
            } else {
                toast.success('Logged in successfully!');
                navigate('/');
            }

            form.reset();
        } catch (error) {
            setError('Invalid email or password');
            form.reset();
            setLoading(false);
        }
    };
    const handlePasswordReset = (e) => {
        e.preventDefault();

        setShowNotification(true);
    };

    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full pt-14 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center rounded-tr-[50px] rounded-bl-[50px] my-20 justify-center border-indigo-500 border-dotted bg-[#0f0f5a] bg-opacity-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full">
                        <div>
                            <h2 className="text-center py-3 text-3xl font-extrabold text-gray-100">
                                Sign in to your account
                            </h2>
                        </div>
                        <button
                            aria-label="Continue with Google"
                            role="button"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
                            onClick={googleSignIn}
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                                alt="google"
                            />
                            <p className="text-base font-medium ml-4 text-gray-200">
                                Continue with Google
                            </p>
                        </button>

                        <p className="text-base font-medium leading-4 p-3 text-center text-gray-200">OR</p>
                        <hr className="w-full bg-gray-900" />

                        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
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
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            {showNotification && (
                                <div className="mt-2 bg-white px-4 py-1 rounded-lg text-red-600 text-sm">
                                    {error || 'Incorrect email or password. Please try again.'}
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-gray-200 hover:text-yellow-500"
                                        onClick={handlePasswordReset}
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        <div className="mt-5 pb-4">
                            <Link to="/register">
                                <button
                                    role="button"
                                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                                >
                                    Create New account
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
