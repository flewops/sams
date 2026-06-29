import { motion } from "framer-motion";
import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { CAMPUS_LIFE, SITE } from "../lib/content";

export function CampusLife() {
  return (
    <>
      <SEOHead
        title="Campus Life"
        description={`Explore world-class facilities at ${SITE.name}, Padalur \u2014 smart classrooms, labs, library, sports ground, hostel, and wellness programs.`}
        path="/campus-life"
      />
      <main>
        <PageHeader
          title="A campus built for learning and growth"
          subtitle="From smart classrooms to sports grounds, every space at Sree Ambaals is designed to inspire students."
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CAMPUS_LIFE.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-[2rem] bg-cream border-2 border-gray-900 overflow-hidden shadow-[6px_6px_0px_0px_rgba(31,41,55,0.08)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(245,124,0,0.2)] transition-all"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h2 className="text-xl font-bold text-white mb-1">{item.title}</h2>
                      <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity delay-75 line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 md:hidden">
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
