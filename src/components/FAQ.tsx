import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ as FAQ_DATA } from "../lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-school-orange font-bold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Common questions from parents
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border-2 border-gray-900 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,86,179,0.2)]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-school-orange/10 text-school-orange flex items-center justify-center">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
