import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle2, ArrowLeft } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { EVENTS, SITE } from "../lib/content";

export function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS.find((e) => e.id === id);

  if (!event) return <Navigate to="/events" replace />;

  return (
    <>
      <SEOHead
        title={event.title}
        description={event.shortDesc}
        path={`/events/${event.id}`}
        image={`${SITE.url}${event.image}`}
      />
      <main>
        <section className="pt-28 md:pt-36 pb-12 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/events" className="inline-flex items-center gap-2 text-gray-600 hover:text-school-orange font-medium mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to events
            </Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <span className="inline-block px-3 py-1 rounded-full bg-school-orange/10 text-school-orange text-xs font-bold mb-4">
                  {event.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                  {event.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{event.fullDesc}</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,86,179,1)]">
                    <Users className="w-4 h-4 text-school-orange" />
                    <span className="font-semibold text-sm">{event.audience}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(245,124,0,1)]">
                    <Clock className="w-4 h-4 text-school-orange" />
                    <span className="font-semibold text-sm">{event.duration}</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-school-orange text-white font-bold shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] border-2 border-gray-900 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(31,41,55,1)] transition-all"
                >
                  Enquire About Admissions
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-[2rem] border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(245,124,0,1)] w-full h-[400px] md:h-[520px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Event Highlights</h2>
                <ul className="space-y-4">
                  {event.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-school-blue shrink-0 mt-0.5" />
                      <span className="text-gray-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Benefits for Students</h2>
                <ul className="space-y-4">
                  {event.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-school-orange shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
