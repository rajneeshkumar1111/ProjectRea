// components/ProfileCard.tsx
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header Image */}
      <div className="bg-[#f4f4f4]">
        <Image
          src="/paul.png" // <-- apni image ka path yaha do
          alt="Paul"
          width={400}
          height={250}
          className="mx-auto rounded-t-xl"
        />
      </div>

      {/* Name */}
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900">Paul</h1>

        {/* About Section */}
        <div className="mt-4">
          <h2 className="text-xs font-medium text-gray-500 tracking-wide">
            A LITTLE BIT ABOUT ME
          </h2>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Hello, I am Paul, originally known as Saul of Tarsus. I was a devout
            Pharisee and a zealous persecutor of early Christians. However, on
            my journey to Damascus, I experienced a profound vision of Jesus
            Christ, leading to my conversion.
            <br />
            Following this, I dedicated my life to spreading the teachings of
            Jesus. I authored several epistles, including <b>Romans</b>,{" "}
            <b>Corinthians</b> and <b>Philippians</b>, which form a significant
            portion of the New Testament.
          </p>
        </div>

        {/* Ask Me About */}
        <div className="mt-4">
          <h2 className="text-xs font-medium text-gray-500 tracking-wide">
            ASK ME ABOUT...
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "Transformation",
              "Mission",
              "Endurance",
              "Purpose",
              "Change",
            ].map((topic) => (
              <span
                key={topic}
                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Chat Button */}
        <div className="mt-4">
          <button className="w-full bg-gray-100 text-gray-900 text-sm font-medium py-2 rounded-lg hover:bg-gray-200 transition">
            Chat with Paul →
          </button>
        </div>
      </div>
    </div>
  );
}
