import React from "react";
import Link from "next/link";

const ResetPass = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fef7ec] to-[#fef3eb] px-4 py-10">
      {/* Card */}
      <div className="w-full max-w-[376px] bg-white/90 border border-[#E2E4E9] rounded-[24px] backdrop-blur-[24px] shadow-lg p-6 sm:p-8">
        {/* Top Section */}
        <div className="space-y-4">
          <p className="text-[28px] sm:text-[32px] leading-[40px] text-center font-inter font-medium text-[#0A0D14] tracking-[-0.006em]">
            Reset Password
          </p>

          <p className="text-[14px] leading-[20px] text-[#525866] text-center font-inter tracking-[-0.006em]">
            Choose a new password
          </p>
        </div>

        {/* Input Section */}
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[14px] font-medium text-[#0A0D14] block tracking-[-0.006em] font-inter">
              New Password
            </label>
            <input
              type="password"
              placeholder="• • • • • • • • • •"
              className="w-full h-[40px] px-4 rounded-[10px] border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none text-[14px] font-inter placeholder-[#0A0D14]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[14px] font-medium text-[#0A0D14] block tracking-[-0.006em] font-inter">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="• • • • • • • • • •"
              className="w-full h-[40px] px-4 rounded-[10px] border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none text-[14px] font-inter placeholder-[#0A0D14]"
            />
          </div>

          {/* Buttons Section */}
          <div className="space-y-4">
            <Link href="#">
              <button className="w-full h-[40px] bg-[#20232D] text-white tracking-[-0.006em] text-[14px] font-medium rounded-[10px] flex items-center justify-center gap-2 font-inter">
                Proceed
              </button>
            </Link>

            <div className="w-full mt-2 flex items-center justify-center">
              <p className="text-[14px] leading-[20px] font-medium text-[#525866] tracking-[-0.006em] font-inter">
                <Link href="/login">Back to log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full max-w-[376px] mt-8">
        <Link href="/register">
        <button className="w-full hover:bg-white h-[40px] rounded-[10px] font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] text-center text-[#525866] font-inter   ">
          New user? <span className="text-[#0A0D14]">Create account</span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ResetPass;
