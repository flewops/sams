import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-gray-900 p-8 md:p-14 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-school-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-school-blue/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Get school updates in your inbox
              </h2>
              <p className="text-gray-300">
                Event calendars, admission alerts, exam results, and parenting tips delivered monthly.
              </p>
            </div>

            <div>
              {submitted ? (
                <div className="flex items-center gap-3 p-6 rounded-2xl bg-white/10 text-white">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-bold">You're subscribed!</p>
                    <p className="text-sm text-gray-300">Watch your inbox for school updates.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-school-orange"
                  />
                  <button
                    type="submit"
                    className="px-7 py-4 rounded-full bg-school-orange text-white font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] border-2 border-white/20 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.15)] transition-all inline-flex items-center justify-center gap-2"
                  >
                    Subscribe <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="mt-4 text-xs text-gray-400">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
