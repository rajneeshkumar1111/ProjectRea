import Link from "next/link";

export default function CreateAccount1() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#fef7ec] to-[#fef3eb] px-4 py-10">
      <div className="w-full max-w-md flex flex-col items-center text-center rounded-xl">
        {/* Centered circular content */}
        <div className="flex justify-center items-center w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border border-orange-300 border-r-transparent">
          <div className="flex justify-center items-center w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border border-orange-300 border-l-transparent">
            <div className="flex justify-center items-center w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full bg-white/70 border border-white backdrop-blur-[16px] overflow-hidden">
              <img
                src="/F1.png"
                alt="Welcome"
                className="w-32 h-40 sm:w-36 sm:h-44 md:w-44 md:h-52 pt-2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <h3 className="mt-6 text-2xl sm:text-3xl font-semibold leading-snug">
          Welcome to Rea
        </h3>
        <p className="mt-2 text-base sm:text-lg text-gray-700">
          Proceed to create an account
        </p>

        {/* Buttons */}
        <div className="mt-8 w-full flex flex-col gap-3 px-4">
          <Link href="/register">
            <button className="w-full h-11 bg-[#20232d] text-white rounded-xl  ">
              Create account
            </button>
          </Link>
          <Link href="/login">
            <button className="w-full h-11 bg-gradient-to-b from-[#fef7ec] to-[#fef3eb] text-black font-light ">
              Existing user? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
