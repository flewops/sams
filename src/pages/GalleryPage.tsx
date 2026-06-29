import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { EventGallery } from "../components/EventGallery";
import { SITE } from "../lib/content";

export function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Photo Gallery"
        description={`See photos from ${SITE.name}, Padalur — yoga day, environment drives, awards, campus life, and celebrations.`}
        path="/gallery"
      />
      <main>
        <PageHeader
          title="A glimpse into life at Sree Ambaals"
          subtitle="Real moments from our campus — celebrations, achievements, community service, and everyday learning."
        />
        <EventGallery />
      </main>
    </>
  );
}
