import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <>
      {/* Background image — only visible on larger screens */}
      <div className="absolute hidden sm:block  left-1/2 transform -translate-x-1/2 w-[300px] sm:w[400px] md:w-[550px] h-auto z-0">
        <img
          src="/frame.png"
          alt="Decorative Frame"
          className="w-full h-auto ml-19 "
        />
      </div>

      {/* Form Container */}
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
        <div className="w-full max-w-[376px] bg-white/90 border border-[#E2E4E9] rounded-[24px] backdrop-blur-[24px] shadow-lg p-6 sm:p-8 z-10">
          {/* Top Section */}
          <div className="space-y-4">
            <p className="text-[28px] sm:text-[32px] leading-[40px] text-center font-inter font-medium text-[#0A0D14]">
              Create account
            </p>
            <p className="text-[14px] leading-[20px] text-[#525866] text-center font-inter tracking-[-0.006em]">
              Thank you for signing up. To start enjoying the benefits,  let&apos;s
              set up your account.
            </p>
          </div>

          {/* Input Section */}
          <div className="mt-8 space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#0A0D14] block font-inter">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-[40px] px-4 rounded-[10px] border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none text-[14px] font-inter tracking-[-0.006em]"
              />
            </div>

            {/* Buttons Section */}
            <div className="space-y-4">
              {/* Proceed Button */}
              <Link href="/email">
                <button
                  className="w-full h-[40px]  text-[14px] font-medium rounded-[10px] flex items-center justify-center gap-2 font-inter
                                   
    bg-[#20232D] text-[#FFFFFF] tracking-[-0.006em]  font-inter mb-2
                                "
                >
                  Proceed
                </button>
              </Link>

              {/* Google Sign Up */}
              <Link href="https://www.google.com/search?q=google+url&rlz=1C1GEWG_enIN1134IN1134&oq=google+url&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIKCAEQABixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU0MDBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
                <div className="w-full h-[40px] border border-[#E2E4E9] rounded-[10px] flex items-center justify-center gap-2 px-4">
                  <img src="/google.png" alt="Google" className="w-5 h-5" />

                  <p className="text-[14px] leading-[20px] tracking-[-0.006em] font-medium font-inter">
                    Sign up with Google
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
