import { motion } from "framer-motion";
import { ScribbleUnderline } from "./Scribble";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-school-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-school-blue/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 max-w-4xl"
        >
          {title}
          <ScribbleUnderline className="text-school-orange w-40 mt-2" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
