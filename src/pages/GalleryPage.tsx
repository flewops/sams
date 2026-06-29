import { SEOHead } from "../components/SEOHead";
import { PageHeader } from "../components/PageHeader";
import { EventGallery } from "../components/EventGallery";
import { Videos } from "../components/Videos";
import { SITE } from "../lib/content";

export function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Photo & Video Gallery"
        description={`See photos and videos from ${SITE.name}, Padalur — yoga day, environment drives, awards, campus life, and celebrations.`}
        path="/gallery"
      />
      <main>
        <PageHeader
          title="A glimpse into life at Sree Ambaals"
          subtitle="Real moments from our campus — celebrations, achievements, community service, and everyday learning."
        />
        <EventGallery />
        <Videos />
      </main>
    </>
  );
}
