
import React from 'react';
const Account = () => {
  return (

    <div className="w-full max-w-[600px] mx-auto  py-6 space-y-6 border-b  bg-white ">
      <div className="text-[20px] leading-[28px] font-medium font-inter ml-3 pl-1">
        Account
      </div>

      <div className="flex items-center gap-3 p-2 0 rounded-md ml-2">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src="/Avatar [1.0] (1).png" alt="avatar" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[16px] leading-[24px] tracking-[-1.1%] font-medium text-[#0A0D14] font-inter">
            Michael Angelo
          </p>
          <p className="text-[14px] leading-[20px] tracking-[-0.6%] font-normal text-[#525866] font-inter">
            isaac@email.com
          </p>
        </div>

        <div className="ml-auto">
          <button className="px-4 py-2 border border-[#E2E4E9] rounded-[10px] text-[14px] leading-[20px] tracking-[-0.6%] font-medium text-[#525866] font-inter shadow-sm">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="space-y-4  p-4 rounded-md">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between  p-3 rounded-md"
          >
            <p className="text-[16px] leading-[24px] tracking-[-1.1%] font-medium text-[#0A0D14] font-inter">
              Free plan
            </p>
            <button className="h-8 px-3 text-sm text-gray-700  border border-gray-300 rounded-md shadow-[0px_1px_2px_0px_#5258660F]">
              Upgrade
            </button>
          </div>
        ))}

        <div className=" pl-1 rounded-md">
          <p className="text-[14px] leading-[20px] tracking-[-0.6%] font-normal text-[#0A0D14] font-inter mb-2">
            Hello, I am Paul, originally known as Saul of Tarsus. I was a devout Pharisee and a zealous persecutor of early Christians.
            However, on my journey to Damascus, I experienced a profound vision of Jesus Christ, leading to my conversion. Following this,
            I dedicated my life to spreading the teachings of Jesus. I authored several epistles, including
          </p>
          <p className="text-[14px] leading-[20px] tracking-[-0.6%] font-medium text-[#0A0D14] font-inter">
            Romans, Corinthians and Philippians, which form a significant portion of the New Testament.
          </p>
        </div>
      </div>

      <div className="ml-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-1 rounded-md">
        {/* Token Info Box */}
        <div className="w-full sm:max-w-[242px] h-9 flex items-center gap-1 bg-[#FFDAC2] rounded-full px-3 py-2">
          <p className="font-inter text-sm font-normal leading-5 tracking-tight text-[#6E330C] whitespace-nowrap truncate">
            You have 1,999 free tokens left
          </p>
        </div>

        {/* Upgrade Button */}
        <div className="w-full sm:w-auto">
          <button className="w-full sm:w-[86px] h-10 px-3 py-2 text-sm font-medium text-[#F17B2C] bg-transparent border border-transparent rounded-[10px] text-center">
            Upgrade
          </button>
        </div>
      </div>

    </div>



  );
};

export default Account;
