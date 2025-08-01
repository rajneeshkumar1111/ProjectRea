"use client"
import React from 'react'
import { useState } from 'react';
const Setting = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* Open Button */}
      <div className="flex justify-center mt-10">
      </div>
      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex  items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Form */}
            <h2 className="text-xl font-semibold mb-4 font-medium text-[20px] leading-[28px] tracking-[0%] font-['Inter_Display']">Suggest characters</h2>
            <form className="space-y-4">
              <input type="text" />
              <input type="text" />
              <input type="text" />


              <button
                type="submit"
                className="w-full 0 text-white px-4 py-2 rounded bg-[#20232D]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Setting