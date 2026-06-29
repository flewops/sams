import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/content";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-blue font-bold text-sm uppercase tracking-wider">Voices from Our Community</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            What parents, students & teachers say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(245,124,0,1)] hover:-translate-y-1 transition-transform"
            >
              <Quote className="w-8 h-8 text-school-orange mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500 font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
