import React from 'react';
import Lottie from 'lottie-react';
import leafAnimation from './LeafAnimation.json';
import { Link, NavLink } from 'react-router';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative  overflow-hidden bg-green-50">
      
       <div className="absolute inset-0 z-0">
        
        <div className="hidden md:block absolute left-0 top-0 h-full w-1/3">
          <Lottie
            animationData={leafAnimation}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            style={{
              height: '150%',
              width: '150%',
              position: 'absolute',
              top: '-25%',
              left: '-25%',
              opacity: 0.3,
              filter: 'brightness(1.1) saturate(1.2)',
              zIndex: 0
            }}
          />
        </div>

        
        <div className="absolute left-0 md:left-1/3 top-0 h-full w-full md:w-1/3">
          <Lottie
            animationData={leafAnimation}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            style={{
              height: '120%',
              width: '120%',
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              opacity: 0.4,
              filter: 'brightness(1.2) saturate(1.3)',
              zIndex: 0
            }}
          />
        </div>

        
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/3">
          <Lottie
            animationData={leafAnimation}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            style={{
              height: '130%',
              width: '130%',
              position: 'absolute',
              top: '-15%',
              left: '-15%',
              opacity: 0.35,
              filter: 'brightness(1.15) saturate(1.25)',
              zIndex: 0
            }}
          />
        </div>
      </div>
     
      <div className="relative z-10 p-10">
        
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          <div className="">
            <h6 className="text-lg font-bold text-green-800 mb-3">GardenMeet</h6>
            <ul className="space-y-2">
              <li><Link to='/about-us' className="text-green-700 hover:underline block">About Us</Link></li>
              <li><Link to='/contact' className="text-green-700 hover:underline block">Contact</Link></li>
              <li><NavLink to='/gardeners' className="text-green-700 hover:underline block"> Explore Gardeners</NavLink></li>
            </ul>
          </div>

        
          <div className="">
            <h6 className="text-lg font-bold text-green-800 mb-3">Legal</h6>
            <ul className="space-y-2">
              <li><Link to='/terms-of-use' className="text-green-700 hover:underline block">Terms Of Use</Link></li>
              <li><Link to='/privacy-policy' className="text-green-700 hover:underline block">Privacy Policy</Link></li>
              <li><Link to='/cookie-policy' className="text-green-700 hover:underline block">Cookies Policy</Link></li>
            </ul>
          </div>

          
          <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80 mb-10">
      <label className='text-green-800'>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <Link to='/auth/login'><button className="btn bg-green-900 text-white join-item">Subscribe</button></Link>
      </div>
    </fieldset>
    <div className="flex space-x-4">
                  <a href="https://www.facebook.com/" className="text-green-800"><FaFacebook size={25} /></a>
                  <a href="https://x.com/" className="text-green-800 "><FaTwitter size={25} /></a>
                  <a href="https://www.instagram.com/" className="text-green-800 "><FaInstagram size={25} /></a>
                </div>
  </form>
  
        </footer>

       
      </div>
    </div>
  );
};

export default Footer;