import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { SITE } from "../lib/content";

export function Privacy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description={`${SITE.name} privacy policy and data practices.`} path="/privacy" />
      <main>
        <PageHeader title="Privacy Policy" subtitle="We value your trust and are committed to protecting your personal information." />
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-p:text-gray-700">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide when contacting us, subscribing to updates, or submitting admission enquiries. This may include name, email, phone, student details, and message content.</p>
            <h2>2. How We Use Information</h2>
            <p>We use your information to respond to enquiries, process admissions, send school updates, and improve our services.</p>
            <h2>3. Sharing & Security</h2>
            <p>We do not sell your personal data. We use reasonable security measures to protect information provided to us.</p>
            <h2>4. Cookies</h2>
            <p>Our website uses minimal cookies for analytics and functionality.</p>
            <h2>5. Contact</h2>
            <p>For privacy questions, please contact us through our Contact page.</p>
          </div>
        </section>
      </main>
    </>
  );
}
