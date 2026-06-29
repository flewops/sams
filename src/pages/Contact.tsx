import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { SITE } from "../lib/content";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact & Admissions"
        description={`Contact ${SITE.name}, Padalur for admissions, fee enquiries, campus visits, and general information.`}
        path="/contact"
      />
      <main>
        <PageHeader
          title="Get in touch with us"
          subtitle="Have questions about admissions, academics, or campus life? We're here to help."
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <div className="p-6 rounded-2xl bg-cream border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(245,124,0,1)]">
                  <Phone className="w-6 h-6 text-school-orange mb-3" />
                  <h3 className="font-bold text-gray-900">Call us</h3>
                  <p className="text-gray-600 text-sm mt-1">{SITE.phone}</p>
                </div>
                <div className="p-6 rounded-2xl bg-cream border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,86,179,1)]">
                  <Mail className="w-6 h-6 text-school-blue mb-3" />
                  <h3 className="font-bold text-gray-900">Email us</h3>
                  <p className="text-gray-600 text-sm mt-1">{SITE.email}</p>
                </div>
                <div className="p-6 rounded-2xl bg-cream border-2 border-gray-900 shadow-[5px_5px_0px_0px_rgba(245,124,0,1)]">
                  <MapPin className="w-6 h-6 text-school-orange mb-3" />
                  <h3 className="font-bold text-gray-900">Visit us</h3>
                  <p className="text-gray-600 text-sm mt-1">{SITE.address}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="p-8 md:p-10 rounded-[2rem] bg-white border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(245,124,0,1)]">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Message sent!</h2>
                      <p className="text-gray-600">Our admissions team will contact you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">Parent Name</label>
                          <input required type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-school-orange focus:outline-none" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">Student Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-school-orange focus:outline-none" placeholder="Child's name" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                          <input required type="email" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-school-orange focus:outline-none" placeholder="you@example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">Phone</label>
                          <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-school-orange focus:outline-none" placeholder="+91 ..." />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Admission For</label>
                        <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-school-orange focus:outline-none bg-white">
                          <option>Pre-KG / LKG / UKG</option>
                          <option>Grade 1 - 5</option>
                          <option>Grade 6 - 8</option>
                          <option>Grade 9 - 10</option>
                          <option>Grade 11 - 12</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                        <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-school-orange focus:outline-none" placeholder="Tell us about your enquiry..." />
                      </div>
                      <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 rounded-full bg-school-orange text-white font-bold shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] border-2 border-gray-900 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(31,41,55,1)] transition-all inline-flex items-center justify-center gap-2"
                      >
                        Send Enquiry <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
