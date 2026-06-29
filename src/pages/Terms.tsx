import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { SITE } from "../lib/content";

export function Terms() {
  return (
    <>
      <SEOHead title="Terms of Service" description={`${SITE.name} terms of service for parents, students, and visitors.`} path="/terms" />
      <main>
        <PageHeader title="Terms of Service" subtitle="Please read these terms before using our website or submitting an enquiry." />
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-p:text-gray-700">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing our website or services, you agree to these terms.</p>
            <h2>2. Services</h2>
            <p>{SITE.name} provides educational services, admissions information, and school updates. All admission decisions are subject to school policies and availability.</p>
            <h2>3. Information Accuracy</h2>
            <p>Information provided through enquiry forms should be accurate. The school reserves the right to verify details during the admission process.</p>
            <h2>4. Liability</h2>
            <p>We take care in providing accurate information but are not liable for unforeseen circumstances beyond our control.</p>
            <h2>5. Changes</h2>
            <p>We may update these terms from time to time. Continued use constitutes acceptance.</p>
          </div>
        </section>
      </main>
    </>
  );
}
