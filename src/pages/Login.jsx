import React, { useState, useRef, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { createSignIn, resetPassword, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState('');
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createSignIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: 'Login Successful!',
          text: `Welcome back, ${user.displayName || 'User'}!`,
          icon: 'success',
          confirmButtonText: 'Continue',
        }).then(() => {
          navigate(location.state || '/');
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Login Failed!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setError('');
    if (!email) {
      setError('Please enter your email to reset password.');
      return;
    }

    resetPassword(email)
      .then(() => {
        alert('A password reset email is sent. Please check your email.');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
          title: 'Google Login Successful!',
          text: `Welcome, ${result.user.displayName || 'User'}!`,
          icon: 'success',
          confirmButtonText: 'Continue',
        }).then(() => {
          navigate(location.state || '/');
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Google Login Failed!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-6">
          <div className="card-body">
            <h1 className="font-bold text-4xl">Login your account</h1>
            <form className="fieldset" onSubmit={handleLogin}>
              <label className="label">Email</label>
              <input type="email" className="input" ref={emailRef} placeholder="Email" name="email" required />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-3 bottom-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div onClick={handleForgetPassword}>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <p>
                Don’t Have An Account ?{' '}
                <Link className="text-blue-500 underline" to="/auth/register">
                  Register
                </Link>
              </p>
              <button className="btn btn-neutral mt-4" type="submit">
                Login
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm border-b border-b-gray-200 p-4 mb-5">OR</p>

            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
