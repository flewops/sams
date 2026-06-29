import { SEOHead } from "../components/SEOHead";
import { Hero } from "../components/Hero";
import { BentoGrid } from "../components/BentoGrid";
import { Features } from "../components/Features";
import { AIRecommender } from "../components/AIRecommender";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Newsletter } from "../components/Newsletter";
import { SITE } from "../lib/content";

export function Home() {
  return (
    <>
      <SEOHead
        title="Matric HR. Sec. School Padalur | Admissions Open"
        description={SITE.description}
        path="/"
      />
      <main>
        <Hero />
        <BentoGrid />
        <Features />
        <AIRecommender />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
    </>
  );
}
