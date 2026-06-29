import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw, CheckCircle2 } from "lucide-react";
import { EVENTS } from "../lib/content";

const questions = [
  {
    id: 1,
    question: "What is your child's current grade group?",
    options: ["Primary (1-5)", "Middle (6-8)", "High School (9-12)", "All ages"],
  },
  {
    id: 2,
    question: "What area interests your child most?",
    options: ["Wellness & Yoga", "Community & Environment", "Awards & Achievements", "Arts & Culture"],
  },
  {
    id: 3,
    question: "What are you looking for?",
    options: ["Annual event participation", "Skill-building activity", "Recognition platform", "Community service"],
  },
];

export function AIRecommender() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<typeof EVENTS[number] | null>(null);

  const handleAnswer = (answer: string) => {
    const next = [...answers, answer];
    setAnswers(next);
    if (next.length >= questions.length) {
      const focus = next[1];
      const match =
        EVENTS.find((e) =>
          focus?.includes("Wellness") && e.category === "Wellness"
            ? true
            : focus?.includes("Community") && e.category === "Community"
            ? true
            : focus?.includes("Awards") && e.category === "Recognition"
            ? true
            : focus?.includes("Arts") && e.category === "Co-Curricular"
            ? true
            : false
        ) || EVENTS[0];
      setTimeout(() => setResult(match), 400);
    }
  };

  const reset = () => {
    setStarted(false);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="py-20 md:py-28 bg-school-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-bold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Smart Event Finder
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Not sure which activity fits your child?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Answer 3 quick questions and we'll suggest the best school event or program for your child's interests.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-6 md:p-10 border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(245,124,0,1)]">
          <AnimatePresence mode="wait">
            {!started && !result && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-school-orange/10 text-school-orange flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Find the right activity in 30 seconds</h3>
                <button
                  onClick={() => setStarted(true)}
                  className="px-8 py-3.5 rounded-full bg-school-orange text-white font-bold shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] border-2 border-gray-900 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(31,41,55,1)] transition-all"
                >
                  Start Now
                </button>
              </motion.div>
            )}

            {started && !result && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-gray-500">
                    Question {answers.length + 1} of {questions.length}
                  </span>
                  <div className="flex gap-1.5">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full transition-all ${
                          i < answers.length ? "w-8 bg-school-orange" : "w-2 bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  {questions[answers.length].question}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {questions[answers.length].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="text-left px-5 py-4 rounded-2xl border-2 border-gray-200 hover:border-school-orange hover:bg-school-orange/5 font-semibold text-gray-800 transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  Recommended for your child
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{result.title}</h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">{result.shortDesc}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={`/events/${result.id}`}
                    className="px-6 py-3 rounded-full bg-gray-900 text-white font-bold shadow-[3px_3px_0px_0px_rgba(245,124,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(245,124,0,1)] transition-all"
                  >
                    View Event Details
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-bold border-2 border-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
