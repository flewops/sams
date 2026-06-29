import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { EVENTS, SITE } from "../lib/content";

const categories = ["All", ...Array.from(new Set(EVENTS.map((e) => e.category)))];

export function Events() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? EVENTS : EVENTS.filter((e) => e.category === active);

  return (
    <>
      <SEOHead
        title="School Events & Activities"
        description={`Explore events at ${SITE.name}, Padalur — yoga day, environment drives, awards, cultural fests, and more.`}
        path="/events"
      />
      <main>
        <PageHeader
          title="Events that shape character and celebrate learning"
          subtitle="From wellness programs to community service, discover the activities that make Sree Ambaals a vibrant place to learn and grow."
        />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm border-2 transition-all ${
                    active === cat
                      ? "bg-school-orange text-white border-school-orange shadow-[3px_3px_0px_0px_rgba(31,41,55,1)]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-school-orange hover:text-school-orange"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((event, i) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-3xl bg-cream border-2 border-gray-900 overflow-hidden shadow-[6px_6px_0px_0px_rgba(31,41,55,0.08)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(245,124,0,0.2)] transition-all"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-gray-900 text-xs font-bold border border-gray-900">
                      {event.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.shortDesc}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-5">
                      <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-200">
                        <Users className="w-3 h-3" /> {event.audience}
                      </span>
                      <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-200">
                        <Clock className="w-3 h-3" /> {event.duration}
                      </span>
                    </div>
                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center gap-2 text-school-orange font-bold text-sm group-hover:gap-3 transition-all"
                    >
                      View details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
