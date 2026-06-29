import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { BLOG_POSTS, SITE } from "../lib/content";

export function Blog() {
  return (
    <>
      <SEOHead
        title="Blog & Parent Resources"
        description={`Parenting tips, learning guides, and school updates from ${SITE.name}, Padalur.`}
        path="/blog"
      />
      <main>
        <PageHeader
          title="Resources for parents and students"
          subtitle="Tips on learning, wellness, exam preparation, and supporting your child's growth at home."
        />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-3xl bg-cream border-2 border-gray-900 overflow-hidden shadow-[6px_6px_0px_0px_rgba(31,41,55,0.08)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,86,179,0.2)] transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-school-orange transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-school-orange font-bold text-sm group-hover:gap-3 transition-all"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
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
