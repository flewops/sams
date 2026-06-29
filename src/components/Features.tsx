import { motion } from "framer-motion";
import { Users, School, ShieldCheck, Heart } from "lucide-react";
import { FEATURES } from "../lib/content";

const icons: Record<string, React.ElementType> = {
  Users,
  School,
  ShieldCheck,
  Heart,
};

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-orange font-bold text-sm uppercase tracking-wider">Why Sree Ambaals</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Built for academic success and personal growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,86,179,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,86,179,1)] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-school-orange/10 text-school-orange flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
