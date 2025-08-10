import React from 'react';
import ErrorImg from '../assets/error1.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <img
                src={ErrorImg}
                alt="404 - Not Found"
                className="max-w-md w-full mb-8 mx-auto"
            />
            <h1 className="text-4xl font-extrabold text-red-500 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-6 text-lg">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link to="/">
                <button className="bg-green-900 cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
