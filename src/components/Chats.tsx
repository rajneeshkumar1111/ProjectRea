"use client";
import React from 'react';

const Chat = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-white  sm:p-6 lg:p-10 gap-6">

        {/* Sidebar */}
        <div className="w-full lg:max-w-[228px] flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3 w-full max-w-[200px]">

            {/* Icon */}
            <div className="w-12 h-12 sm:w-16 sm:h-16">
              <img src="/Frame 482111 (1).png" alt="bell" className="w-full h-full object-contain" />
            </div>

            {/* Heading */}
            <div className="w-full">
              <p className="font-interDisplay font-medium text-2xl sm:text-3xl leading-8 sm:leading-10 tracking-normal">
                Chats History
              </p>
            </div>

            {/* Subtext */}
            <div className="w-full">
              <p className="font-inter text-sm sm:text-base font-normal leading-5 sm:leading-6 text-[#555]">
                See all platform updates and crucial changes notification here
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-3/4   max-w-[781px] min-h-110 bg-[#F6F8FA] p-4 sm:p-6 md:p-10 lg:p-14 xl:p-20 rounded-[20px] flex flex-col items-center gap-6 text-center">

            {/* Large Bell Icon */}
            <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] mix-blend-luminosity">
              <img src="/Frame 482111 (1).png" alt="bell" className="w-full h-full object-contain" />
            </div>

            {/* Chat Text */}
            <div className="w-1/2 ">
              <p className="font-inter text-sm sm:text-base font-normal leading-5 sm:leading-6 text-[#555]">
                Your chats history will show here as soon as you have them
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Chat;
