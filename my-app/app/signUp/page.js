"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { FiEye, FiEyeOff } from 'react-icons/fi';
export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, phone } = formData;
    console.log(formData);
    // Client-side form field validation
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if(phone.length!=10){
        setMessage('Invalid Phone number');
        return;
    }

    try {
      const response = await axios.post('http://localhost:5500/elearning/auth/signup', {
        email,
        password,
        phone
      });

      if (response.status === 200) {
        setMessage('User created successfully. Verification email sent.');
      } else {
        setMessage('An error occurred while signing up');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('User already exists');
      } else {
        setMessage('Internal Server Error');
      }
    }
  };

  return (
    <div className="bg-cover min-h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://ik.imagekit.io/b2cgob1et/mern%20batch%204/book.jpg?updatedAt=1710675229139')" }}>
      <div className="signup-box bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <h4 className="text-lg">Create Your Account</h4>
        <form className="mt-4" onSubmit={handleSubmit}>
        <label htmlFor="email" className="block mt-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Mail id" required />
           {/* Password field */}
           <label htmlFor="password" className="block mt-2">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-3"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
            </div>
            <label htmlFor="confirmPassword" className="block mt-2">Confirm Password</label>
          <div className="relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-3"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
            </div>
          

          <label htmlFor="phone" className="block mt-2">Phone Number</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter your Phone number" required />
          <input type="submit" value="Sign up" className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer" />
        </form>
        <p className="mt-4 text-sm">{message}</p>
        <div className="mt-4 flex justify-center">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 cursor-pointer" onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
        <p className="mt-4 text-sm">By clicking the sign up button, you agree to our
          <a href="/TermsandConditions" className="text-blue-500"> Terms and condition</a> and <a href="/TermsandConditions" className="text-blue-500">Policy Privacy</a>
        </p>
        <p className="mt-4 text-sm">Already have an account? <a href="/Login" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
}
