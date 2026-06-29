import { SITE } from "./content";

export interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
  publishedAt?: string;
  modifiedAt?: string;
}

export function generateMeta(props: SeoProps) {
  const fullTitle = `${props.title} | ${SITE.name}`;
  const description = props.description || SITE.description;
  const image = props.image || `${SITE.url}/og-image.jpg`;
  const url = `${SITE.url}${props.path || "/"}`;

  return {
    title: fullTitle,
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: SITE.keywords.join(", ") },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: props.type || "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      props.publishedAt && { property: "article:published_time", content: props.publishedAt },
      props.modifiedAt && { property: "article:modified_time", content: props.modifiedAt },
    ].filter(Boolean),
    structured: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
          logo: `${SITE.url}${SITE.logo}`,
          sameAs: [SITE.social.instagram, SITE.social.youtube, SITE.social.facebook],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: SITE.phone,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Tamil", "Hindi"],
          },
        },
        {
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.url,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        },
        props.type === "article"
          ? {
              "@type": "Article",
              headline: props.title,
              description,
              image,
              author: { "@type": "Organization", name: SITE.name },
              publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` } },
              datePublished: props.publishedAt,
              dateModified: props.modifiedAt || props.publishedAt,
              mainEntityOfPage: { "@type": "WebPage", "@id": url },
            }
          : {
              "@type": "WebPage",
              name: props.title,
              description,
              url,
            },
      ],
    },
  };
}
