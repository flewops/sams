import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/content";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-orange font-bold text-sm uppercase tracking-wider">Community Voices</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Voices from our community
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hear from the parents, students, and teachers who make Sree Ambaals a warm and vibrant place to learn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 md:p-10 rounded-[2rem] bg-white border-2 border-gray-900 shadow-[6px_6px_0px_0px_rgba(245,124,0,1)] hover:-translate-y-1 transition-transform"
            >
              <Quote className="w-10 h-10 text-school-orange/20 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-school-blue text-white flex items-center justify-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
