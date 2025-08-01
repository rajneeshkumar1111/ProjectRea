import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex shadow-lg items-center justify-center bg-gray-100 px-4 py-10 relative">


      <div className="w-full max-w-md bg-white border border-gray-300 rounded-3xl shadow-lg px-6 pt-20 pb-10 space-y-8 relative">


        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden bg-white">
            <img src="/log.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>


        <div className="space-y-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-medium font-inter leading-snug text-[#0A0D14]">
            Log in to your<br /> account
          </h1>
          <p className="text-md text-gray-600  tracking-[-0.006em]">
            Enter your credentials to continue
          </p>
        </div>


        <div className="space-y-6">


          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#0A0D14] tracking-[-0.006em] font-inter">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full h-10 rounded-[10px] border border-[#E2E4E9] px-3 py-2 text-sm outline-none bg-white"
              style={{ boxShadow: '0px 1px 2px 0px #E4E5E73D' }}
            />
          </div>


          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#0A0D14] tracking-[-0.006em] font-inter">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-10 rounded-[10px] border border-[#E2E4E9] px-3 py-2 text-sm outline-none bg-white"
              style={{ boxShadow: '0px 1px 2px 0px #E4E5E73D' }}
            />
          </div>
        </div>


        <div className="space-y-4">
          <Link href="/dashboard">
            <input
              type="submit"
              value="Log in"
              className="w-full h-10 rounded-[10px] text-white font-medium bg-[#20232D] hover:bg-[#181A22] transition"
            />
          </Link>

          <div className="text-center">
            <Link href="/forget">
              <span className="text-md text-gray-500 hover:underline">
                Forgot Password?
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
