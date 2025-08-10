import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Loading from '../pages/Loading';

const Root = () => {
     const {state}=useNavigation()
    return (
        <div  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar></Navbar>
            {state=='loading' ? <Loading></Loading> : <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Root;