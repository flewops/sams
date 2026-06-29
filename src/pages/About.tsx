import { motion } from "framer-motion";
import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { Testimonials } from "../components/Testimonials";
import { HERO, SITE } from "../lib/content";

const VALUES = [
  {
    title: "Nurturing Every Child",
    text: "At Sree Ambaals, education begins with care. We believe every child blossoms when surrounded by patient guidance, encouraging teachers, and a supportive peer environment. Our classrooms are spaces where students feel safe to question, explore, and grow at their own pace.",
    image: "/uploads/photo_12.jpg",
  },
  {
    title: "Excellence Rooted in Values",
    text: "Academic achievement matters, but character matters more. We strive to develop disciplined, respectful, and responsible individuals who carry Tamil culture and universal human values into everything they do.",
    image: "/uploads/photo_07.jpg",
  },
  {
    title: "Ancient Wisdom, Modern Methods",
    text: "We honour timeless practices like yoga, discipline, and community service while embracing modern teaching tools, digital classrooms, and hands-on learning. The result is an education that is grounded yet forward-looking.",
    image: "/uploads/photo_03.jpg",
  },
  {
    title: "In Harmony with Community",
    text: "A school is not separate from society. Through clean-up drives, environmental projects, and parent partnerships, our students learn that true education includes serving the people and world around them.",
    image: "/uploads/photo_05.jpg",
  },
];

export function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description={`Learn about ${SITE.name}, Padalur \u2014 our mission, values, and 25+ year legacy of nurturing confident learners.`}
        path="/about"
      />
      <main>
        <PageHeader
          title="A legacy of learning, values, and community"
          subtitle="For over two decades, Sree Ambaals has been a second home for students \u2014 where academic ambition meets character, culture, and care."
        />

        <section className="py-8 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl font-bold text-school-blue tamil mb-3">
              {SITE.tagline}
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-school-orange tamil">
              {HERO.motto}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/uploads/photo_15.jpg"
                  alt="Sree Ambaals school campus aerial view"
                  className="rounded-[2rem] border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(245,124,0,1)] w-full h-[420px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  A place where children naturally blossom
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Founded in 2001, Sree Ambaals Matric HR. Sec. School, Padalur, was built on the belief that
                  every child deserves an education that strengthens the mind, shapes character, and prepares
                  them for life. Over the years, we have grown into one of the most trusted schools in the
                  Perambalur region, serving thousands of families with a warm, disciplined, and purposeful
                  learning environment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our students excel in board examinations while also growing through yoga, sports, arts,
                  environmental action, and community service. Backed by experienced teachers and caring
                  management, Sree Ambaals is where ambition meets values.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <div className="text-4xl font-extrabold text-school-orange">25+</div>
                    <div className="text-sm text-gray-500 font-medium">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-school-blue">3000+</div>
                    <div className="text-sm text-gray-500 font-medium">Students on Campus</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-school-orange">100%</div>
                    <div className="text-sm text-gray-500 font-medium">Board Results Focus</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-school-orange font-bold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                What we stand for
              </h2>
            </div>
            <div className="space-y-20 md:space-y-28">
              {VALUES.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    i % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(245,124,0,1)]">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-[300px] md:h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                    <span className="text-school-orange font-bold text-sm uppercase tracking-wider">
                      Value {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-school-blue font-bold text-sm uppercase tracking-wider">Leadership</span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                Guided by experience and care
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: "/uploads/photo_12.jpg", role: "Correspondent", desc: "Guiding the school vision with decades of commitment to education and community welfare." },
                { img: "/uploads/photo_14.jpg", role: "Principal", desc: "Leading academic excellence, student welfare, and a culture of continuous improvement." },
                { img: "/uploads/photo_13.jpg", role: "Senior Faculty", desc: "Dedicated educators who bring passion, patience, and expertise to every classroom." },
              ].map((person, i) => (
                <motion.div
                  key={person.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-900 shadow-[5px_5px_0px_0px_rgba(245,124,0,1)] mb-4">
                    <img src={person.img} alt={person.role} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{person.role}</h3>
                  <p className="text-gray-600 text-sm mt-2 max-w-xs mx-auto">{person.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
    </>
  );
}
