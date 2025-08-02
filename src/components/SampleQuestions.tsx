import QuestionCard from "./QuestionCard";

export default function SampleQuestions() {
  const questions = Array(8).fill(
    "What advice would you give to believers today about resolving conflicts in the church?"
  );

  return (
    <div className="animate-fade-in mt-8 w-full">
      {/* Divider with Title */}
      <div className="flex items-center justify-center self-stretch my-5 gap-4">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200"></div>
        <p className="text-[#0A0D14] dark:text-white font-inter text-lg font-medium leading-6 tracking-tight whitespace-nowrap">
          Sample questions for Paul
        </p>
        <div className="flex-grow h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200"></div>
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {questions.map((q, i) => (
          <QuestionCard key={i} text={q} />
        ))}
      </div>
    </div>
  );
}
