import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { CAMPUS_LIFE, SITE } from "../lib/content";

export function CampusLifeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = CAMPUS_LIFE.find((c) => c.slug === slug);

  if (!item) return <Navigate to="/campus-life" replace />;

  return (
    <>
      <SEOHead
        title={item.title}
        description={item.shortDesc}
        path={`/campus-life/${item.slug}`}
        image={`${SITE.url}${item.image}`}
      />
      <main>
        <PageHeader
          title={item.title}
          subtitle={item.shortDesc}
        />

        <section className="pt-28 md:pt-36 pb-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/campus-life"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-school-orange font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Campus Life
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-[2rem] border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(245,124,0,1)] w-full h-[350px] md:h-[480px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                  {item.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>

                <h2 className="text-xl font-bold text-gray-900 mb-4">Highlights</h2>
                <ul className="space-y-3 mb-10">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-school-orange shrink-0 mt-0.5" />
                      <span className="text-gray-700">{h}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-school-orange text-white font-bold shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] border-2 border-gray-900 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(31,41,55,1)] transition-all"
                >
                  Enquire About Admissions
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center">
              Glimpses of {item.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {item.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,86,179,1)]"
                >
                  <img
                    src={img}
                    alt={`${item.title} gallery image ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
