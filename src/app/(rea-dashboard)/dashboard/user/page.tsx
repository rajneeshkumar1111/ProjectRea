"use client";
import React, { useState } from "react";
import Link from "next/link";

// Define a type for Character instead of using any
type Character = {
  id: number;
  name: string;
  img: string;
  bio: string;
};

const Data: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [bioModal, setBioModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const characters: Character[] = [
    {
      id: 1,
      name: "Paul",
      img: "/Paul.svg",
      bio: "Hello, I am Paul, originally known as Saul of Tarsus. I was a devout Pharisee and a zealous persecutor of early Christians. However, on my journey to Damascus, I experienced a profound vision of Jesus Christ, leading to my conversion. Following this, I dedicated my life to spreading the teachings of Jesus. I authored several epistles, including Romans, Corinthians and Philippians, which form a significant portion of the New Testament."
    },
    { id: 2, name: "Elijah", img: "/Paul (1).svg", bio: "Elijah was a prophet and a miracle worker." },
    { id: 3, name: "King David", img: "/Paul (2).svg", bio: "David was the second king of Israel and a great warrior." },
    { id: 4, name: "Moses", img: "/Paul (3).svg", bio: "Moses led the Israelites out of Egypt." },
    { id: 5, name: "Peter", img: "/Paul (4).svg", bio: "Peter was one of the twelve apostles of Jesus." },
    { id: 6, name: "King Solomon", img: "/Paul (5).svg", bio: "Solomon was known for his wisdom and built the First Temple." },
    { id: 7, name: "Esther", img: "/Paul (6).svg", bio: "Esther was a Jewish queen who saved her people." },
    { id: 8, name: "Mary", img: "/Paul (7).svg", bio: "Mary was the mother of Jesus Christ." },
    { id: 9, name: "Deborah", img: "/Paul (8).svg", bio: "Deborah was a prophetess and judge of Israel." },
    {
      id: 1,
      name: "Paul",
      img: "/Paul.svg",
      bio: "Hello, I am Paul, originally known as Saul of Tarsus. I was a devout Pharisee and a zealous persecutor of early Christians. However, on my journey to Damascus, I experienced a profound vision of Jesus Christ, leading to my conversion. Following this, I dedicated my life to spreading the teachings of Jesus. I authored several epistles, including Romans, Corinthians and Philippians, which form a significant portion of the New Testament."
    },
    { id: 2, name: "Elijah", img: "/Paul (1).svg", bio: "Elijah was a prophet and a miracle worker." },
    { id: 3, name: "King David", img: "/Paul (2).svg", bio: "David was the second king of Israel and a great warrior." },
    { id: 4, name: "Moses", img: "/Paul (3).svg", bio: "Moses led the Israelites out of Egypt." },
    { id: 5, name: "Peter", img: "/Paul (4).svg", bio: "Peter was one of the twelve apostles of Jesus." },
    { id: 6, name: "King Solomon", img: "/Paul (5).svg", bio: "Solomon was known for his wisdom and built the First Temple." },
    { id: 7, name: "Esther", img: "/Paul (6).svg", bio: "Esther was a Jewish queen who saved her people." },
    { id: 8, name: "Mary", img: "/Paul (7).svg", bio: "Mary was the mother of Jesus Christ." },
    { id: 9, name: "Deborah", img: "/Paul (8).svg", bio: "Deborah was a prophetess and judge of Israel." }
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white p-4 sm:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Sidebar */}
        <div className="w-full lg:w-[314px] flex flex-col justify-between pt-12 px-4">
          <div className="space-y-4">
            <div className="w-[64px] h-[64px]">
              <img src="/Frame 482111.svg" alt="Bible Icon" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl sm:text-[32px] font-medium text-[#0A0D14] leading-[40px] font-inter">
              Biblical Characters
            </h2>
            <p className="text-[16px] text-[#868C98] leading-[24px] font-inter">
              View and explore the profiles of all the biblical characters, to better understand how they can help you.
            </p>
          </div>
          <button
            className="mt-6 border w-[160px] h-[40px] text-[#525866] border-gray-300 rounded-[10px] px-4 py-2  font-inter  text-[14px] leading-[20px] tracking-[-0.006em] text-center font-medium hover:bg-gray-100 transition"
            onClick={() => setShowModal(true)}
          >
            Suggest Characters
          </button>
        </div>

        {/* Grid */}
        <div className="flex-1 h-full overflow-y-auto px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center pb-8 pt-2">
            {characters.map((item) => (
              <div key={item.id} className="w-full max-w-[160px] space-y-2 group relative">
                <div className="aspect-square rounded-xl border border-[#E2E8F0] overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full bg-cover px-4 pt-3  bg-[#F8FAFC] border border-[#E2E8F0]" />

                  {/* Overlay with Chat & Bio */}
                  <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <div className="gap-2">
                            <button
                        className="px-2 py-1 hover:bg-black shadow-[0px_1px_2px_0px_#5258660F]  bg-[#20232D] text-sm text-[#FFFFFF] mb-2  w-[86px] h-[32px] font-inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] text-center opacity-100 gap-[2px] p-[6px] rounded-[8px] mt-2"
                        onClick={() => {
                          setSelectedCharacter(item);
                          setBioModal(true);
                        }}
                      >
                   View Bio
                      </button> <br />
                      <Link href={`/dashboard/chatBox`}>
                        <button className="px-2 py-1 w-[86px] h-[32px] rotate-0 opacity-100 gap-[2px] p-[6px] rounded-[8px] text-[#525866] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#5258660F] border border-[#E2E4E9] font-Inter font-medium text-[14px] leading-[20px] tracking-[-0.006em] text-center text-sm hover:white hover:text-black mb-2">
                          Chat
                        </button>
                      </Link>
                     
                
                    </div>
                  </div>
                </div>
                <p className="text-sm  text-[14px] leading-[20px] tracking-[-0.006em] text-[#020617] font-medium  font-inter">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggest Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 font-['Inter_Display']">Suggest characters</h2>
            <form className="space-y-4">
              <p className="font-normal text-sm text-[#0A0D14] font-['Inter']">
                Please let us know the names of any biblical characters you would like to see 😁
              </p>
              <textarea
                rows={5}
                className="w-full border border-[#E2E4E9] p-3 rounded-[10px] resize-none font-['Inter'] text-sm text-gray-800"
                placeholder="Type here..."
              ></textarea>
              <button
                type="submit"
                className="w-full text-white px-4 py-2 rounded bg-[#20232D] hover:bg-[#0f1117]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Bio Modal */}
      {bioModal && selectedCharacter && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setBioModal(false)}
            >
              &times;
            </button>
            <h6 className="text-xl font-semibold mb-2 font-['Inter_Display']">{selectedCharacter.name}</h6>
            <img
              src={selectedCharacter.img}
              alt={selectedCharacter.name}
              className="w-full h-48 object-contain mb-4 bg-[#603a27]"
            />
            <div className="w-full h-[12px] text-[#868C98] bg-[#F6F8FA] font-['Inter'] font-medium text-[11px] leading-[12px] tracking-[2%] uppercase mb-2">
              A LITTLE BIT ABOUT ME
            </div>
            <p className="text-sm text-[#0A0D14] font-['Inter'] tracking-[-0.6%] leading-[20px] text-[14px] font-medium">
              {selectedCharacter.bio}
            </p>

            <div className="w-full h-[60px] gap-[8px]">
              <div className="w-full h-[12px]">
                <p className="font-['Inter'] font-medium text-[11px] leading-[12px] tracking-[2%] uppercase text-[#868C98]">
                  ASK ME ABOUT...
                </p>
              </div>
              <div className="w-full h-[40px] gap-[8px] flex">
                <div className="w-[284px] h-[40px] text-[#0A0D14]">
                  Transformation, Mission, Endurance, Purpose, Change
                </div>
                <div className="w-[148px] h-[40px] rounded-[10px] border flex">
                  <div className="w-full h-[20px] pr-[4px] pl-[4px]">
                    <button className="flex items-center justify-between h-[40px] text-[14px] leading-[20px] tracking-[-0.6%] font-normal font-['Inter'] text-[#0A0D14]">
                      Chat with {selectedCharacter.name}
                    </button>
                  </div>
                  <div className="w-[20px] h-[20px] pt-[11px]">
                    <img src="/arrow-right-s-line.svg" alt="" />
                  </div>
                </div>

                
              </div>
              {/* <div className="w-full h-[60px] justify-between opacity-100 pt-[14px] pr-[20px] pb-[14px] pl-[20px]  bg-red-500 ">
<div className="w-[32px] h-[32px] opacity-100 gap-[2px] rounded-[8px] p-[6px] bg-green-700"></div>
                
              </div> */}
            </div>

            <div className="w-full h-[60px] flex justify-between pt-[14px] pr-[20px] pb-[14px] pl-[20px] border-t border-t-[#E2E4E9]">
              <img src="/Buttons [1.0] (1).svg" alt="" />
              <img src="/Buttons [1.0] (2).svg" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Data;
