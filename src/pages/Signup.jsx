import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[#f5f5f5] py-10">
      <div className="w-full max-w-sm h-full flex flex-col justify-between px-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Create your PopX account
          </h2>
          <form className="space-y-4">
            {['Full Name', 'Phone number', 'Email address', 'Password', 'Company name'].map((label) => (
              <div key={label}>
                <label className="block text-sm font-medium text-[#6C25FF]">
                  {label}{label !== 'Company name' && ' *'}
                </label>
                <input
                  type={label === 'Password' ? 'password' : 'text'}
                  placeholder="Marry Doe"
                  className="w-full mt-1 p-2 border rounded focus:outline-[#6C25FF]"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-[#6C25FF] mb-1">
                Are you an Agency? *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" className="accent-[#6C25FF]" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" className="accent-[#6C25FF]" /> No
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <Link to="/profile">
            <button className="w-full bg-[#6C25FF] text-white py-3 rounded font-semibold">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;