import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { BLOG_POSTS, SITE } from "../lib/content";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={`${SITE.url}${post.image}`}
        type="article"
        publishedAt={post.date}
      />
      <main>
        <article className="pt-28 md:pt-36 pb-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-school-orange font-medium mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[450px] object-cover rounded-[2rem] border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(245,124,0,1)] mb-10"
            />
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">{post.title}</h1>
            <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-school-orange max-w-none">
              <p>{post.excerpt}</p>
              <p>
                At Sree Ambaals, we believe education extends far beyond textbooks. The activities,
                habits, and values children build at school shape how they learn, relate, and grow
                throughout life. This article shares practical insights for parents and students to make
                the most of their school journey.
              </p>
              <h2>Why it matters for students</h2>
              <p>
                Consistent routines, active participation in events, and strong communication between
                home and school help children feel secure and motivated. When students are encouraged
                to ask questions, try new things, and reflect on their progress, they develop confidence
                that lasts well beyond the classroom.
              </p>
              <h2>What parents can do</h2>
              <p>
                Simple actions — asking about the school day, celebrating effort over marks, ensuring
                good sleep, and supporting co-curricular interests — make a significant difference.
                Staying connected with teachers and school updates also helps families reinforce learning
                at home.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
