"use client";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import SampleQuestions from "@/components/SampleQuestions";
import dynamic from "next/dynamic";
import VoicePitchGraph from "@/components/Voice";
const ReactMediaRecorder = dynamic(
  () => import("react-media-recorder").then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
);

import { Mic, Plus, ArrowUp, User, X, ArrowRight } from "lucide-react";

export default function Page14() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hideGreeting, setHideGreeting] = useState(false);
  const [showVoiceIcon, setShowVoiceIcon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [hideParent, setHideParent] = useState(false);
  const [isSamplesVisible, setIsSamplesVisible] = useState(false);

  const showSamples = () => setIsSamplesVisible(true);
  const hideSamples = () => setIsSamplesVisible(false);
  const [shouldHideSamples, setShouldHideSamples] = useState(false);
  const [isBetterDivVisible, setIsBetterDivVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: "Rea",
    img: "/rea.png",
  });

  type Character = {
    name: string;
    img: string;
  };

  type Message = {
    text: string;
    type: "incoming" | "outgoing";
    character?: {
      name: string;
      img: string;
    };
  };
  const transcript = "Hello from voice input";
  const voiceMessage: Message = {
    text: transcript,
    type: "outgoing", // ✅ exact literal
  };

 const onStop = (recordedData: Blob) => { // 👈 Proper type instead of any
  const transcript = "Hello from voice input"; // Replace with real STT logic

  const voiceMessage: Message = {
    text: transcript,
    type: "outgoing" as const, // 👈 Fix for prefer-as-const
  };

  setMessages((prev) => [...prev, voiceMessage]); // ✅ works
  setIsLoading(true);
};


  useEffect(() => {
    if (messages.length > 0) {
      setHideGreeting(true);
    }
  }, [messages]);

  useEffect(() => {
    if (isRecording) {
      const timeout = setTimeout(() => {
        setIsRecording(false);
      }, 5000); // auto-stop after 5 seconds
      return () => clearTimeout(timeout);
    }
  }, [isRecording]);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (isRecording) {
      setRecordTime(0);
      timer = setInterval(() => {
        setRecordTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRecording]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const sendMessage = () => {
    if (!input.trim()) return;
    // Capture the character at the moment the message is sent
    const currentCharacter = selectedCharacter;

    // Add the user's outgoing message
    setMessages((prev) => [...prev, { text: input, type: "outgoing" }]);
    setInput("");
    setShowVoiceIcon(true);
    setIsLoading(true);

    // Simulate a bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: `This is a simulated response from ${currentCharacter.name}.`,
          type: "incoming",
          // Associate the character with the incoming message
          character: currentCharacter,
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };
  return (
    <div
      className={
        isSamplesVisible || isBetterDivVisible || isRecording
          ? "relative flex flex-col w-full px-4 py-6 bg-white min-h-screen font-['Inter']"
          : "relative flex flex-col w-full px-4 py-6 bg-white h-full font-['Inter'] max-h-full"
      }
    >
      {/* Header */}
      <div className="relative mb-4 w-full px-4">
        {/* Header container */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Left side: Question */}
       

          {/* Right side: New Chat + Share */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* New Chat Button */}
    

            {/* Share Button */}
         
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div
        className={`flex flex-col w-full max-w-3xl mx-auto transition-all duration-300 ${(isInputFocused || hideGreeting) && !isSamplesVisible
            ? " flex-1 justify-between h-full"
            : "justify-center flex-1 "
          }`}
      >
        {!hideGreeting && (
          <div
            className={`transition-all duration-300 ${isInputFocused ? "mb-3" : ""
              }`}
          >
            <div className="flex justify-between items-center  px-5 mb-1">
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0A0D14] text-[28px] md:text-[32px] font-semibold leading-[40px] font-inter">
                  Hello! 👋
                  <br />
                  Michael Angelo
                </h3>
                <p className="text-[#868C98] font-inter font-normal text-[16px] leading-[24px] tracking-[-0.011em] text-center   font-inter">
                  What can I help you with today?
                </p>
              </div>
              <div className="w-[80px] h-[80px] rounded-full bg-[#E2E4E9] overflow-hidden border border-white">
                <img
                  src="/rea.png"
                  alt="Rea avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
        <div
          className={`flex-1 overflow-y-auto mt-6 mb-4 px-2 space-y-4 ${isInputFocused || hideGreeting ? "block" : "hidden"
            }`}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[75%] w-fit flex gap-2 items-start ${msg.type === "incoming" ? "" : "self-end ml-auto"
                }`}
            >
              {msg.type === "incoming" && (
                <div className="w-6 h-6 mt-1 rounded-full overflow-hidden flex-shrink-0">
                  {/* UPDATED: Use the image from the message object itself */}
                  <img
                    src={
                      msg.character?.img ||
                      "https://placehold.co/24x24/E2E4E9/0A0D14?text=?"
                    }
                    alt={msg.character?.name || "Bot avatar"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl text-sm ${msg.type === "incoming"
                    ? "bg-[#FEF3EB] text-black"
                    : "bg-[#F6F8FA] text-[#0A0D14]"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="max-w-[75%] flex gap-2 self-start">
              <div className="w-6 h-6 mt-1 rounded-full overflow-hidden">
                <img
                  src={selectedCharacter?.img || "/rea.png"}
                  alt="Bot thinking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3 rounded-2xl text-sm italic bg-orange-100 text-[#0A0D14]">
                {selectedCharacter?.name || "Rea"} is thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className={
            hideParent
              ? "flex flex-col items-start gap-[6px] h-[216px] p-[4px] self-stretch rounded-[28px]"
              : "flex flex-col items-start gap-[6px] h-[216px] p-[4px] self-stretch rounded-[28px] bg-[#FEF3EB]"
          }
        >
          <div className="relative w-full mb-2 border border-gray-300 rounded-2xl bg-white px-3 py-3">
            <div className="flex flex-wrap sm:flex-nowrap items-end gap-2 sm:gap-3 w-full">
              {/* Left Input Area */}
              <div className="relative flex-1 min-w-0">
                {/* Plus / Close Button */}
                {showTooltip ? (
                  <X
                    className="absolute left-1 bottom-3 text-gray-500 cursor-pointer"
                    size={20}
                    onClick={() => {
                      setShowTooltip(false);
                      setShowModal(false);
                      setIsBetterDivVisible(false);
                    }}
                  />
                ) : (
                  <Plus
                    className="absolute left-1 bottom-3 text-gray-500 cursor-pointer"
                    size={20}
                    onClick={() => {
                      setShowTooltip(true);
                      setHideGreeting(true);
                    }}
                  />
                )}

                {/* Tooltip Dropdown */}
                {showTooltip && (
                  <div className="absolute bottom-16 left-0 z-10 bg-white border border-gray-200 rounded-xl p-2 shadow-md flex flex-col items-start gap-2 w-[225px]">
                    <div
                      className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => setShowModal(true)}
                    >
                      <User size={16} />
                      <span className="text-sm">Ask a Biblical character</span>
                      <ArrowRight size={16} />
                    </div>
                    <div className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                      <Plus size={16} />
                      <span className="text-sm">Upload file</span>
                    </div>
                  </div>
                )}

                {/* Voice Recording Visuals */}
                {isRecording && (
                  <div className="flex items-center gap-3 mb-2 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-2 text-sm text-orange-600 min-w-[60px]">
                      <Mic className="w-4 h-4" />
                      <span>{recordTime}s</span>
                    </div>
                    <VoicePitchGraph />
                  <div className="flex-1">
  <ReactMediaRecorder
    audio
    render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
      <div className="w-full rounded-md max-w-[600px] mx-auto">
    

        {mediaBlobUrl && (
          <audio
            src={mediaBlobUrl}
            controls
            className="mb-1 w-full"
          />
        )}
      </div>
    )}
  />
</div>

                  </div>
                )}

                {/* Text Input */}
                <textarea
                  placeholder="Type your message..."
                  className="w-full h-[105px] pl-2 pt-1 outline-none text-sm rounded-2xl resize-none placeholder:text-gray-400"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => {
                    setIsInputFocused(true);
                    setShowVoiceIcon(false);
                    setShowModal(false);
                    setHideParent(true);
                    setIsSamplesVisible(false);
                    setShouldHideSamples(true);
                  }}
                  onBlur={() => setIsInputFocused(false)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && sendMessage()
                  }
                />
              </div>

              {/* Right Buttons */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 px-1 sm:px-0">
                {isRecording ? (
                  <>
                    {/* Cancel */}
                    <button
                      onClick={() => setIsRecording(false)}
                      className="bg-orange-100 hover:bg-orange-200 text-orange-600 
              p-2 sm:p-3 rounded-full flex items-center justify-center 
              w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    {/* Send */}
                    <button
                      onClick={() => {
                        setIsRecording(false);
                        const voiceMessage: Message = {
                          text:` ▶  ━━━━━━   ${recordTime}s`,
                    type: "outgoing",
                        };
                        setMessages((prev) => [...prev, voiceMessage]);
                    setIsLoading(true);
                        setTimeout(() => {
                      setMessages((prev) => [
                        ...prev,
                        {
                          text:` ▶ ━━━━━   ${recordTime}s`,
                    type: "incoming",
                    character: selectedCharacter,
                            },
                    ]);
                    setIsLoading(false);
                        }, 1500);
                      }}
                    className="bg-orange-500 hover:bg-orange-600 text-white
                    p-2 sm:p-3 rounded-full flex items-center justify-center
                    w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                    >
                    <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
              </>
              ) : (
              <button
                onClick={() => {
                  if (showVoiceIcon) {
                    setIsRecording(true);
                    setHideGreeting(true);
                    setShowTooltip(false);
                  } else {
                    sendMessage();
                  }
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white 
            p-2 sm:p-3 rounded-full flex items-center justify-center 
            w-10 h-10 sm:w-12 sm:h-12 shrink-0"
              >
                {showVoiceIcon ? (
                  <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
                )}
            </div>
          </div>
        </div>

        <div
          className={
            hideParent
              ? "hidden"
              : "flex justify-between items-center self-stretch px-1"
          }
        >
          <div className="flex p-[10px] justify-center items-center  rounded-[24px] bg-[#FFDAC2] ">
            <div className="flex w-[16px] h-[16px] px-[3.167px] py-[1.5px] justify-center items-center aspect-[1/1]">
              <img src="/elements.svg" alt="..." />
            </div>

            <p className="text-[13px] leading-[12px] font-normal tracking-[-0.084px] text-[color:var(--orange-darker,#6E330C)] font-['Inter']">
              You have 1,999 free tokens left
            </p>
          </div>
          <div className="flex p-[10px] justify-center items-center gap-1 rounded-[10px]">
            <p className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-center text-[color:var(--orange-base,#F17B2C)] font-['Inter'] [font-feature-settings:'ss11'_on,'cv09'_on,'liga'_off,'calt'_off]">
              Upgrade
            </p>
          </div>
        </div>
      </div>
    </div>
      {/* Modal */ }
  {
    showModal && (
      <div className="fixed top-0 right-0 h-full w-[440px] bg-white z-50 shadow-lg overflow-auto py-3">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          {/* Left side Close Button */}

          <span className="text-xl font-semibold text-[#0A0D14]">
            Choose a Biblical Character
          </span>

          {/* Right side Close Button (Optional – mirrors left button) */}
          <X
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Paul", img: "/Paul (1).png" },
              { name: "Paul", img: "/Paul (2).png" },
              { name: "Paul", img: "/Paul (3).png" },
              { name: "Paul", img: "/Paul (4).png" },
              { name: "Paul", img: "/Paul (5).png" },
              { name: "Paul", img: "/Paul (6).png" },
              { name: "Paul", img: "/Paul (7).png" },
              { name: "Paul", img: "/Paul (8).png" },
              { name: "Paul", img: "/Paul (10).png" },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCharacter(item);
                  setShowModal(false);
                }}
                className="rounded-lg p-4 shadow hover:shadow-md cursor-pointer flex flex-col items-center gap-2"
              >
                <div className="w-full aspect-square">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  <div className="  w-full flex items-center justify-center font-inter">
    <style>
      {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s ease-in-out;
          }
        `}
    </style>
    {!shouldHideSamples && (
      <div className="w-[63%] max-w-4xl px-6 rounded-2xl">
        <div className="mt-8">
          {!isSamplesVisible ? (
            // Initial View: "Swipe up to see sample questions"
            <div
              className="flex flex-row justify-center items-center gap-2 cursor-pointer"
              onClick={showSamples}
              aria-label="Show sample questions"
              role="button"
            >
              <div className="w-[20px] h-[20px] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.91072 4.49384C10.2362 4.1684 10.7638 4.1684 11.0892 4.49383L16.0893 9.49379C16.4147 9.81922 16.4147 10.3469 16.0893 10.6723C15.7638 10.9977 15.2362 10.9977 14.9108 10.6723L10.5 6.2616L6.08928 10.6723C5.76384 10.9978 5.23621 10.9978 4.91077 10.6723C4.58533 10.3469 4.58533 9.81927 4.91076 9.49384L9.91072 4.49384Z"
                    fill="#868C98"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.91072 10.3273C10.2362 10.0019 10.7638 10.0019 11.0892 10.3273L16.0893 15.3273C16.4147 15.6527 16.4147 16.1804 16.0893 16.5058C15.7638 16.8312 15.2362 16.8312 14.9108 16.5058L10.5 12.0951L6.08928 16.5058C5.76384 16.8313 5.23621 16.8313 4.91077 16.5058C4.58533 16.1804 4.58533 15.6528 4.91076 15.3273L9.91072 10.3273Z"
                    fill="#868C98"
                  />
                </svg>
              </div>
              <p className="text-center text-[#868C98] font-inter text-sm leading-5 tracking-tight font-normal font-['Inter']">
                Swipe up to see sample questions
              </p>
            </div>
          ) : (
            // Toggled View: Names and Sample Questions
            <React.Fragment>
              <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 w-full animate-fade-in">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
                  {[
                    "Paul",
                    "Elijah",
                    "King David",
                    "Moses",
                    "Deborah",
                    "Peter",
                    "Esther",
                  ].map((name, index) => (
                    <div
                      key={name}
                      className={`flex items-center p-2 px-4 rounded-full transition-colors duration-300 ${index === 0
                          ? "bg-[#FEF3EB]"
                          : "bg-[#F6F8FA] hover:bg-gray-200"
                        }`}
                    >
                      <p
                        className={`text-sm leading-5 tracking-tight font-inter ${index === 0
                            ? "text-[#C2540A] font-medium"
                            : "text-[#525866] font-normal"
                          }`}
                      >
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="flex justify-center md:justify-start w-full md:w-auto mt-4 md:mt-0 cursor-pointer"
                  onClick={hideSamples}
                  aria-label="Hide sample questions"
                  role="button"
                >
                  <div className="flex px-3 py-1 rounded-full bg-[#F6F8FA] hover:bg-gray-200 transition-colors duration-300">
                    <div className="flex w-5 h-8 py-1 flex-col justify-center items-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="transform rotate-180"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.41078 16.0062C9.73622 16.3316 10.2639 16.3316 10.5893 16.0062L15.5893 11.0062C15.9148 10.6808 15.9148 10.1531 15.5893 9.8277C15.2639 9.50226 14.7363 9.50226 14.4108 9.82769L10 14.2384L5.58934 9.82766C5.2639 9.50222 4.73627 9.50222 4.41083 9.82765C4.08539 10.1531 4.08539 10.6807 4.41082 11.0062L9.41078 16.0062Z"
                          fill="#868C98"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.41078 10.1727C9.73622 10.4981 10.2639 10.4981 10.5893 10.1727L15.5893 5.17271C15.9148 4.84728 15.9148 4.31964 15.5893 3.9942C15.2639 3.66876 14.7363 3.66876 14.4108 3.99419L10 8.40491L5.58934 3.99416C5.2639 3.66872 4.73627 3.66872 4.41083 3.99416C4.08539 4.31959 4.08539 4.84723 4.41082 5.17267L9.41078 10.1727Z"
                          fill="#868C98"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <SampleQuestions />
            </React.Fragment>
          )}
        </div>
      </div>
    )}
  </div>
    </div >
  );
}