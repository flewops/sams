import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../lib/content";

export function EventGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const next = () => setLightbox((prev) => (prev === null || prev === GALLERY.length - 1 ? 0 : prev + 1));
  const prev = () => setLightbox((prev) => (prev === null || prev === 0 ? GALLERY.length - 1 : prev - 1));

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-school-orange font-bold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Moments from our school
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {GALLERY.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(31,41,55,0.1)] cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(245,124,0,0.25)] transition-all"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
                <p className="text-white/80 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Click to view
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-gray-900/95 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-school-orange"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              <button
                className="absolute left-4 md:left-8 text-white hover:text-school-orange"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                className="absolute right-4 md:right-8 text-white hover:text-school-orange"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
              <motion.img
                key={lightbox}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].alt}
                className="max-h-[85vh] max-w-[90vw] rounded-2xl border-4 border-white"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                {GALLERY[lightbox].alt}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
