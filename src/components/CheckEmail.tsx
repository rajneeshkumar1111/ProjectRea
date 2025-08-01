"use client"
import React, { useRef } from 'react';
import Link from 'next/link';

const CheckEmail = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Allow only 0-9 digits
    if (!/^\d?$/.test(value)) return;

    e.target.value = value;

    // Move to next input if value is entered
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // If value is deleted, stay or go back
    if (!value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <>
      {/* Decorative Frame Image */}
      <div className="absolute hidden sm:block blur-lg left-1/2 transform -translate-x-1/2 w-[300px] sm:w[400px] md:w-[550px] h-auto z-0">
        <img src="/frame.png" alt="Decorative Frame" className="w-full h-auto ml-19" />
      </div>

      {/* Main Container */}
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
        <div className="w-full max-w-[376px] bg-[#f4f5f5] border border-[#E2E4E9] rounded-[24px] backdrop-blur-[24px] shadow-lg p-6 sm:p-8">

          {/* Top Section */}
          <div className="space-y-4 text-center">
            <p className="text-[32px] leading-[40px] font-medium tracking-[0] font-inter">
              Check your email
            </p>
            <p className="text-[14px] leading-[20px] font-normal tracking-[-0.006em] font-['Inter'] px-4">
              Check your inbox for a 6-digit passcode to verify your email.
            </p>
          </div>

          {/* Input Fields */}
          <div className="mt-8 space-y-6">
            <div className="flex justify-center gap-2 flex-wrap">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  className="w-[41px] h-[40px] text-center border border-[#E2E4E9] rounded-[8px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ref={(el) => { if (el) inputsRef.current[index] = el }}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link href="#">
                <button className="w-full h-[40px] bg-black text-white text-[14px] font-medium rounded-[10px] hover:bg-gray-800 transition">
                  Proceed
                </button>
              </Link>

              <button className="w-full h-[40px] text-sm font-medium text-gray-700 bg-transparent hover:bg-gray-100 border border-transparent rounded-[10px]">
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckEmail;
