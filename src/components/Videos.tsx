import { motion } from "framer-motion";
import { VIDEOS } from "../lib/content";

export function Videos() {
  return (
    <section id="videos" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-school-blue font-bold text-sm uppercase tracking-wider">Videos</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Watch our school in action
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,86,179,1)] bg-white"
            >
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
                poster="/uploads/photo_15.jpg"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
