import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { HERO, SITE } from "../lib/content";
import { ScribbleBlob, ScribbleArrow } from "./Scribble";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-cream">
      <ScribbleBlob className="absolute -top-20 -right-20 w-[500px] h-[500px] text-school-orange/10 -z-0" />
      <ScribbleBlob className="absolute top-40 -left-32 w-[400px] h-[400px] text-school-blue/10 -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-school-blue/10 border-2 border-school-blue shadow-[3px_3px_0px_0px_rgba(0,86,179,1)] mb-4">
              <span className="w-2 h-2 rounded-full bg-school-orange animate-pulse" />
              <span className="text-sm font-bold text-school-blue tamil">{SITE.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              {HERO.headline.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="relative inline-block text-school-orange">
                {HERO.headline.split(" ").slice(3, 5).join(" ")}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-school-orange"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8C40 2 80 10 120 6C160 2 180 8 198 4"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
              </span>{" "}
              {HERO.headline.split(" ").slice(5).join(" ")}
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-bold text-school-orange tamil">
              {HERO.motto}
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              {HERO.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-school-orange text-white font-bold shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] border-2 border-gray-900 hover:shadow-[1px_1px_0px_0px_rgba(31,41,55,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                {HERO.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-900 font-bold border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,86,179,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,86,179,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                {HERO.ctaSecondary}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {HERO.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-gray-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(245,124,0,1)] bg-white">
              <img
                src="/uploads/photo_15.jpg"
                alt={`${SITE.shortName} school campus with students at assembly`}
                className="w-full h-[400px] md:h-[520px] object-cover"
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                <a
                  href="#videos"
                  className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/95 text-gray-900 font-semibold border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,86,179,1)] hover:scale-105 transition-transform"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Watch Highlights
                </a>
              </div>
            </div>
            <ScribbleArrow className="absolute -bottom-6 -left-12 w-32 h-12 text-school-blue hidden lg:block" />
            <div className="absolute -top-6 -right-4 md:-right-8 bg-school-blue text-white px-4 py-3 rounded-2xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] rotate-6">
              <p className="text-xs font-bold uppercase tracking-wider">Established</p>
              <p className="text-lg font-extrabold">Since 2001</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
