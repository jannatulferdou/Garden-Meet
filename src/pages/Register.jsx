import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Password validation flags (dynamic with password input)
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isLongEnough = password.length >= 6;

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;

    // Name validation
    if (name.length < 5) {
      setNameError('Name should be more than 5 characters');
      return;
    } else {
      setNameError('');
    }

    // Password validation
    if (!hasUppercase || !hasLowercase || !hasNumber || !isLongEnough) {
      setPasswordError("Please meet all the password requirements.");
      return;
    } else {
      setPasswordError('');
    }

    // Create user
    createUser(email, password)
  .then(result => {
    const user = result.user;

    updateUser({
      displayName: name,
      photoURL: photoURL
    }).then(() => {
      setUser({ ...user, displayName: name, photoURL: photoURL });
    }).catch(() => {
      setUser(user); // fallback in case updateUser fails
    });

    
    Swal.fire({
      title: 'Registration Successful!',
      text: 'You have registered successfully 🎉',
      icon: 'success',
      confirmButtonText: 'Go to Home'
    }).then(() => {
      navigate('/');
    });

  })
  .catch(error => {
    
    Swal.fire({
      title: 'Registration Failed!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  });
  };

const handleGoogleLogin = () => {
  googleSignIn()
    .then(result => {
      Swal.fire({
        title: 'Google Login Successful!',
        text: `Welcome, ${result.user.displayName || 'User'}!`,
        icon: 'success',
        confirmButtonText: 'Continue'
      }).then(() => {
        navigate('/');
      });
    })
    .catch(error => {
      Swal.fire({
        title: 'Google Login Failed!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    });
};

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body p-10">
            <h1 className='font-bold text-4xl'>Register your account</h1>
            <form className="fieldset" onSubmit={handleRegister}>
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" name='name' required />
              {nameError && <p className='text-red-500 text-xs'>{nameError}</p>}

              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" name='photoURL' required />

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" name='email' required />

              <div className='relative mt-4'>
                <label className="label">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input mt-2"
                  placeholder="Password"
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className='btn btn-xs absolute right-14 bottom-2'
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Password validation bullets */}
              {password && !(hasUppercase && hasLowercase && hasNumber && isLongEnough) && (
  <ul className="text-xs mt-2 space-y-1 ml-2">
    <li className={hasUppercase ? 'text-green-600' : 'text-red-500'}>
      • At least one uppercase letter
    </li>
    <li className={hasLowercase ? 'text-green-600' : 'text-red-500'}>
      • At least one lowercase letter
    </li>
    <li className={hasNumber ? 'text-green-600' : 'text-red-500'}>
      • At least one number
    </li>
    <li className={isLongEnough ? 'text-green-600' : 'text-red-500'}>
      • Minimum 6 characters
    </li>
  </ul>
)}


              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}

              <p className="mt-4">
                Already have an account? <Link className='text-blue-500' to='/auth/login'>Login</Link>
              </p>

              <button className="btn btn-neutral mt-4" type='submit'>Register</button>
            </form>

            <p className='text-center text-gray-500 text-sm border-b border-b-gray-200 p-4 mb-5'>OR</p>

            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
