import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-start justify-center pt-10 bg-[#F7F8F9]">
      <div className="w-full max-w-sm px-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Signin to your PopX account</h2>
        <p className="text-gray-500 mb-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <label className="block text-sm font-semibold text-[#6C25FF] mb-1">Email Address</label>
        <input type="email" placeholder="Enter email address" className="w-full mb-3 p-2 border rounded" />
        <label className="block text-sm font-semibold text-[#6C25FF] mb-1">Password</label>
        <input type="password" placeholder="Enter password" className="w-full mb-4 p-2 border rounded" />
        <Link to='/profile'>
          <button className="w-full bg-[#CBCBCB] text-white py-2 rounded cursor-pointer">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;