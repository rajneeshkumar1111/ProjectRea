import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
    
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fef7ec] to-[#fef3eb] px-4">
      <div className="w-full max-w-[376px] bg-white border border-gray-300 rounded-3xl shadow-lg px-6 pt-20 pb-10 space-y-8 relative">
        
        {/* Logo */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden bg-white">
            <img src="/log.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-medium font-inter leading-snug text-[#0A0D14]">
            Log in to your<br /> account
          </h1>
          <p className="text-md text-gray-600 tracking-[-0.006em]">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Email */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#0A0D14] tracking-[-0.006em] font-inter">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full h-10 rounded-[10px] border border-[#E2E4E9] px-3 py-2 text-sm outline-none bg-white shadow-sm"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#0A0D14] tracking-[-0.006em] font-inter">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-10 rounded-[10px] border border-[#E2E4E9] px-3 py-2 text-sm outline-none bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <Link href="/dashboard">
            <input
              type="submit"
              value="Log in"
              className="w-full h-10 rounded-[10px] text-white font-medium bg-[#20232D] hover:bg-[#181A22] transition mb-2 cursor-pointer"
            />
          </Link>

          <div className="flex items-center justify-center w-full h-10 rounded-[10px] hover:bg-[#E2E4E9] transition">
            <Link href="/forget">
              <span className="text-[14px] font-medium text-[#525866] tracking-[-0.006em]">
                Forgot Password?
              </span>
            </Link>
          </div>
        </div>
      </div>

    </div>
    

      </>
  );
};

export default Login;
