import React, { useContext } from 'react';
import logo from '../assets/logo1.JPG'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { use } from 'react';
import userImg from '../assets/user.png'

const Navbar = () => {
   
  
   const {user, logout}=useContext(AuthContext);

    const handleLogout=()=>{

      logout().then(() => {
  toast.success('You have logged out successfully');
}).catch((error) => {
  console.log(error);
});
    }


  
  const links = (
    <>
     <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `relative font-semibold px-3 py-1 rounded-lg transition-all duration-300 group ${
        isActive ? "text-green-800" : "text-gray-700 hover:text-emerald-700"
      }`
    }
  >
    Home
    {/* Underline effect on hover */}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </NavLink>
</li>

      <li>
        <NavLink   to="/gardeners"
    className={({ isActive }) =>
      `relative font-semibold px-3 py-1 rounded-lg transition-all duration-300 group ${
        isActive ? "text-green-800" : "text-gray-700 hover:text-emerald-700"
      }`
    }>
          Explore Gardeners
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      </li>
 <li>
        <NavLink to='/browseTips' className={({ isActive }) =>
      `relative font-semibold px-3 py-1 rounded-lg transition-all duration-300 group ${
        isActive ? "text-green-800" : "text-gray-700 hover:text-emerald-700"
      }`}>
          Browse Tips
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      </li>

      {
        user && <>
        <li>
        <NavLink to='/share-tips' className={({ isActive }) =>
      `relative font-semibold px-3 py-1 rounded-lg transition-all duration-300 group ${
        isActive ? "text-green-800" : "text-gray-700 hover:text-emerald-700"
      }`}>
         Share Tips
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      </li>
        
        </>
      }
     
     {
      user && <>
       <li>
        <NavLink to='/user-tips' className={({ isActive }) =>
      `relative font-semibold px-3 py-1 rounded-lg transition-all duration-300 group ${
        isActive ? "text-green-800" : "text-gray-700 hover:text-emerald-700"
      }`}>
          My Tips
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      </li>
      </>
     }
    {
      user && <>
      
        <li>
        <NavLink to='/my-bookings' className={({ isActive }) =>
      `relative font-semibold px-4 py-1 rounded-lg transition-all duration-300 group ${
        isActive ? "text-green-800" : "text-gray-700 hover:text-emerald-700"
      }`}>
         My Bookings
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NavLink>
      </li>
      
      </>
    }
    </>
  );

  return (
    <div className="w-full font-inter"> 
      <div className="navbar bg-emerald-50 shadow-xl px-6 sm:px-8 lg:px-12 py-4 rounded-b-xl border-b border-emerald-100">
        
        <div className="navbar-start">
         
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 rounded-lg">
         
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
           
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-56 p-3 shadow-2xl border border-gray-100 space-y-1">
              {links} 
            </ul>
          </div>
     
        
        <Link to='/'>
          <div className='flex'>
            <img src={logo} alt="" className='lg:w-13 lg:h-13 w-11 h-11 rounded-full' />
            <a className="font-extrabold lg:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-lime-600 tracking-tight ml-1 relative top-2.5">
            GardenMeet
          </a>
          </div>
        </Link>
        </div>

        <div className="navbar-center hidden lg:flex ml-5">
          <ul className="menu menu-horizontal px-1 "> 
            {links} .
          </ul>
        </div>

        {/* Navbar end section */}
       <div className="navbar-end flex gap-3">
   {user ? (
  <>
    <Link >
      <img
        src={user?.photoURL || userImg}
        alt="User Profile"
        className='w-10 h-10 rounded-full bg-base-200'
        title={user?.displayName || 'User'} // Tooltip here
      />
    </Link>
    <button>
      <Link className='btn bg-green-900 text-white px-6' to='/' onClick={handleLogout}>
        LogOut
      </Link>
    </button>
  </>
) : (
  <button>
    <Link className='btn bg-green-900 text-white px-10' to='/auth/login'>
      Login
    </Link>
  </button>
)}


                
  </div>
      </div>
    </div>
  );
};

export default Navbar;
