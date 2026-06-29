import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EVENTS } from "../lib/content";
import { ScribbleStar } from "./Scribble";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function BentoGrid() {
  const featured = EVENTS.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-school-orange font-bold text-sm uppercase tracking-wider mb-3">
              <ScribbleStar className="w-4 h-4" />
              School Events
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Life at
              <span className="text-school-blue"> Sree Ambaals</span>
            </h2>
          </div>
          <Link
            to="/events"
            className="text-gray-900 font-bold underline decoration-school-orange decoration-4 underline-offset-4 hover:text-school-orange transition-colors"
          >
            View all events →
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(220px,auto)]"
        >
          {featured.map((event, index) => (
            <motion.div
              key={event.id}
              variants={item}
              className={`group relative rounded-3xl overflow-hidden border-2 border-gray-900 shadow-[6px_6px_0px_0px_rgba(31,41,55,0.08)] hover:shadow-[10px_10px_0px_0px_rgba(245,124,0,0.25)] transition-all hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 3 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="inline-block self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold mb-3">
                  {event.category}
                </span>
                <h3 className={`font-extrabold text-white mb-2 ${index === 0 ? "text-3xl" : "text-xl"}`}>
                  {event.title}
                </h3>
                <p className={`text-white/90 leading-relaxed ${index === 0 ? "text-base max-w-md" : "text-sm line-clamp-2"}`}>
                  {event.shortDesc}
                </p>
                <Link
                  to={`/events/${event.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  Learn more <span className="text-school-orange">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
