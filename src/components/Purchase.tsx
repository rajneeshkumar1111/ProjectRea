import React from 'react'

const Purchase = () => {
  return (
   <>
   <div className="flex justify-center items-center h-full w-full bg-[#E2E4E9] px-4">
      <div className="bg-white w-full max-w-[1000px] rounded-[20px] overflow-hidden flex flex-col md:flex-row">
        {/* Left image */}
        <div className="flex justify-center items-center p-8 md:p-10 md:w-1/2">
          <img
            src="/man.png"
            alt="Subscription"
            className="w-full max-w-[448px] h-auto object-cover"
          />
        </div>
        {/* vertical line */}
        <div className=" hidden md:block w-[2px] h-170 bg-gray-500"></div>
        {/* Right content */}
        <div className="flex flex-col justify-center items-center text-center   md:px-6 md:w-1/2 gap-5">
          <p className="text-[11px] leading-[12px] tracking-[2%] uppercase font-medium">
            one last thing
          </p>
          <h2 className="text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium mt-1 lg:ms-8 md:ms-18">
            Go unlimited with a subscription
          </h2>
          <ul className="flex flex-col gap-3 w-full max-w-[20.5rem] mt-4 text-start">
            <li className="text-[14px] leading-[20px] flex flex-row ">
              <img src="/checkmark.png" alt="" className="w-[14px] h-[14px] mt-1 me-2" />Unlimited conversations with Rea - anytime, anywhere.
            </li>
            <li className="text-[14px] leading-[20px] flex flex-row">
              <img src="/checkmark.png" alt="" className="w-[14px] h-[14px] mt-1 me-2" />Get personal insights straight from Bible characters.
            </li>
            <li className="text-[14px] leading-[20px] flex flex-row">
              <img src="/checkmark.png" alt="" className="w-[14px] h-[14px] mt-1 me-2" />Be the first to meet new Bible characters every week.
            </li>
            <li className="text-[14px] leading-[20px] flex flex-row">
              <img src="/checkmark.png" alt="" className="w-[14px] h-[14px] mt-1 me-2" />Be part of the inner circle - explore new stories before they’re public.
            </li>
          </ul>
          <div className="mt-4">
            <h2 className="text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium">
              for $25 only
            </h2>
            <p className="text-[11px] leading-[12px] tracking-[2%] uppercase font-medium mt-1">
              Billed Monthly
            </p>
          </div>
          <div className="flex flex-col w-full max-w-[20.5rem] mt-4 space-y-2">
            <button className="h-10 rounded-[10px] bg-[#20232D] text-white flex justify-center items-center rounded">
              Go Unlimited now
            </button>
            <button className="h-10 rounded-[10px] bg-white hover:bg-[#E2E4E9]">
              Continue with a free trial
            </button>
          </div>
        </div>

      </div>
    </div>
   
   </>
  )
}

export default Purchase