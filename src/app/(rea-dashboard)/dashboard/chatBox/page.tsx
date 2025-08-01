"use client";
import { useState, useEffect, useRef } from "react";

// ✅ Types
type Character = {
  name: string;
  img: string;
};

type Message = {
  text: string;
  type: "incoming" | "outgoing";
  character?: Character;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [hideGreeting, setHideGreeting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Properly typed useRef
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const selectedCharacter: Character = {
    name: "Rea",
    img: "/rea.png",
  };

  useEffect(() => {
    if (messages.length > 0) {
      setHideGreeting(true);
    }
  }, [messages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, type: "outgoing" }]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: `This is a simulated response from ${selectedCharacter.name}.`,
          type: "incoming",
          character: selectedCharacter,
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col w-full h-full px-4 py-6 bg-white">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-[#0A0D14] text-lg font-medium">
          Chat with {selectedCharacter.name}
        </h2>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col w-full max-w-3xl mx-auto flex-1">
        {!hideGreeting && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#0A0D14]">Hello! 👋</h3>
            <p className="text-gray-600">What can I help you with today?</p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto mt-2 mb-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[75%] w-fit flex gap-2 items-start ${
                msg.type === "incoming" ? "" : "self-end ml-auto"
              }`}
            >
              {msg.type === "incoming" && (
                <img
                  src={msg.character?.img || "/rea.png"}
                  alt="avatar"
                  className="w-6 h-6 mt-1 rounded-full object-cover"
                />
              )}
              <div
                className={`px-4 py-2 rounded-2xl text-sm ${
                  msg.type === "incoming"
                    ? "bg-gray-100 text-[#0A0D14]"
                    : "bg-blue-500 text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="max-w-[75%] flex gap-2 self-start">
              <img
                src={selectedCharacter.img}
                alt="Bot"
                className="w-6 h-6 mt-1 rounded-full object-cover"
              />
              <div className="px-4 py-2 rounded-2xl text-sm italic bg-orange-100 text-[#0A0D14]">
                {selectedCharacter.name} is thinking...
              </div>
            </div>
          )}

          {/* Scroll target */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="w-full flex items-end gap-2 border border-gray-300 rounded-2xl px-4 py-3 bg-white">
          <textarea
            placeholder="Type your message..."
            className="w-full h-[70px] pl-2 pt-1 outline-none text-sm resize-none placeholder:text-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())
            }
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
