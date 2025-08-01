import React from "react";
import Link from "next/link";

const FinishSetup = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Background Frame Image */}
      <div className="absolute hidden sm:block top-10 sm:top-20 left-1/2 transform -translate-x-1/2 w-[220px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto z-0">
        <img
          src="/frame.png"
          alt="Decorative Frame"
          className="w-full h-auto border-0"
        />
      </div>

      {/* Setup Card */}
      <div className="relative z-10 w-full max-w-[376px] border border-[#E2E4E9] bg-[#FFFFFFE0] rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-[24px]">
        {/* Main Form Content */}
        <div className="w-full max-w-[296px] mx-auto flex flex-col gap-8 sm:gap-10">
          {/* Heading + Description */}
          <div className="flex flex-col gap-2 text-center">
            <p className="font-medium text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[36px] md:leading-[40px] tracking-[0em] text-[#0A0D14] font-inter">
              Finish setup
            </p>
            <p className="font-normal text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-[-0.006em] text-[#525866] font-inter px-2 sm:px-6">
              Complete your account setup to start enjoying your benefits.
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                className="w-full pl-3 rounded-[10px] bg-white h-[40px] border border-[#E2E4E9] shadow-sm outline-none"
                placeholder="isaac@email.com"
              />
            </div>

            {/* First + Last Name Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* First Name */}
              <div className="flex flex-col gap-px w-full">
                <label className="text-[13px] sm:text-[14px] font-medium text-[#0A0D14] tracking-[-0.006em] font-inter">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full h-[40px] rounded-[10px] border border-[#E2E4E9] shadow-sm outline-none px-3"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-px w-full">
                <label className="text-[13px] sm:text-[14px] font-medium text-[#0A0D14] tracking-[-0.006em] font-inter">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full h-[40px] rounded-[10px] border border-[#E2E4E9] shadow-sm outline-none px-3"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-px w-full">
              <label className="text-[13px] sm:text-[14px] font-medium text-[#0A0D14] tracking-[-0.006em] font-inter">
                Password
              </label>
              <input
                type="password"
                className="w-full h-[40px] border border-[#E2E4E9] shadow-sm outline-none rounded-[10px] px-3"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button className="px-6 text-sm hover:bg-gray-800 transition w-full h-[40px] text-[14px] font-medium rounded-[10px] flex items-center justify-center gap-2 bg-[#20232D] text-white tracking-[-0.006em] font-inter">
              Start getting answers
            </button>
            <Link href="https://www.google.com">
              <button className="bg-transparent text-gray-700 hover:bg-gray-100 border border-transparent w-full h-[40px] gap-1 rounded-[10px] px-5">
                Back to sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishSetup;
