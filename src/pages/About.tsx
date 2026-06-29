import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Users } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { Testimonials } from "../components/Testimonials";
import { HERO, SITE } from "../lib/content";

export function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description={`Learn about ${SITE.name}, Padalur — our mission, values, and 25+ year legacy of nurturing confident learners.`}
        path="/about"
      />
      <main>
        <PageHeader
          title="A legacy of learning, values, and community"
          subtitle="For over two decades, Sree Ambaals has been a second home for students — where academic ambition meets character, culture, and care."
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

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/uploads/photo_15.jpg"
                  alt="Sree Ambaals school campus aerial view"
                  className="rounded-[2rem] border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(245,124,0,1)] w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Building futures since 2001
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sree Ambaals Matric HR. Sec. School, Padalur, was founded with a simple belief: every child
                  deserves an education that strengthens the mind, shapes character, and prepares them for life.
                  Over the years, we have grown into one of the most trusted schools in the Lalgudi Taluk region,
                  serving thousands of families across Trichy district.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our students excel in board examinations while also growing through yoga, sports, arts,
                  environmental action, and community service. Backed by experienced teachers and caring
                  management, Sree Ambaals is where ambition meets values.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-extrabold text-school-orange">25+</div>
                    <div className="text-sm text-gray-500 font-medium">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-school-blue">3000+</div>
                    <div className="text-sm text-gray-500 font-medium">Students on Campus</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What we stand for</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Purpose", text: "Every lesson and activity is designed to help students discover their potential and contribute to society." },
                { icon: Heart, title: "Care", text: "We create a safe, inclusive environment where every child feels seen, supported, and encouraged." },
                { icon: Lightbulb, title: "Innovation", text: "From smart classrooms to hands-on events, we embrace modern methods while honoring timeless values." },
                { icon: Users, title: "Community", text: "Parents, teachers, and students work together as one community committed to excellence." },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-white border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,86,179,1)]"
                >
                  <value.icon className="w-10 h-10 text-school-orange mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Leadership</h2>
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
