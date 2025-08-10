import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayouts from "../Layouts/HomeLayouts";
import ErrorPage from "../Errorpage/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import ServiceDetails from "../Components/ServiceDetails";
import MYBookings from "../pages/MYBookings";
import ExploreGardeners from "../pages/ExploreGerders";
import GardenerProfile from "../pages/GardenerProfile";
import ShareTips from "../pages/ShareTips";
import BrowseTips from "../pages/BrowseTips";
import TipsDetails from "../pages/TipsDetails";
import TermsOfUse from "../pages/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import UpdateTips from "../pages/UpdateTips";
import UserTips from "../pages/UserTips";
import CookiePolicy from "../pages/CookiePolicy";
import PrivateRoute from "../Provider/PrivateRoute";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Loading from "../pages/Loading";




 const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            

                {
                 index:true,
            path:'/',
            Component:HomeLayouts,
            loader:()=>fetch('/service.json'),
            hydrateFallbackElement:<Loading></Loading>
        

            },
            {
                path:'/serviceDetails/:id',
                loader:()=>fetch('/service.json'),
            element:<PrivateRoute>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>,
            hydrateFallbackElement:<Loading></Loading>

            
                
            }, 
            {
                path:'/my-bookings',
                loader:()=>fetch('/service.json'),
                element:<PrivateRoute>
                    <MYBookings></MYBookings>
                </PrivateRoute>,
                hydrateFallbackElement:<Loading></Loading>
            
                
            },
            {
                path:'/gardeners',
                Component:ExploreGardeners
            },
            {
                path:'/gardeners/:id',
                element:<PrivateRoute>
                    <GardenerProfile></GardenerProfile>
                </PrivateRoute>
            },
            {
                path:'/share-tips',
                element:<PrivateRoute>
                    <ShareTips></ShareTips>
                </PrivateRoute>
            },
            {
                path:'/browseTips',
                Component:BrowseTips,
                
                
            },
            {
                path:'/tips-details/:id',
                element:<PrivateRoute>
                    <TipsDetails></TipsDetails>
                </PrivateRoute>,
                 hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:'/terms-of-use',
                Component:TermsOfUse
            },
            {
                path:'/privacy-policy',
                Component:PrivacyPolicy
            },
            {
                path:'/update-tips/:id',
                loader:({params})=>fetch(`https://gardening-server-azure.vercel.app/tips/${params.id}`),
                element:<PrivateRoute>
                    <UpdateTips></UpdateTips>
                </PrivateRoute>,
                hydrateFallbackElement:<Loading></Loading>

            },
            {
                path:'/user-tips',
                element:<PrivateRoute>
                    <UserTips></UserTips>
                </PrivateRoute>,
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:'/cookie-policy',
                Component:CookiePolicy
            },
            {
                path:'/about-us',
                Component:AboutUs
            },
            {
                path:'/contact',
                Component:Contact
            }
           
           
            
        ]
    },
     {
        path:'/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            },
            
        ]


    },
 ])

 export default router;