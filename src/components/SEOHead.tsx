import { useEffect } from "react";
import { generateMeta, type SeoProps } from "../lib/seo";

export function SEOHead(props: SeoProps) {
  const seo = generateMeta(props);

  useEffect(() => {
    document.title = seo.title;

    // Remove old meta tags we manage
    document.querySelectorAll('meta[data-seo="true"], link[data-seo="true"]').forEach((el) => el.remove());

    // Add meta tags
    seo.meta.forEach((m) => {
      if (!m) return;
      const tag = document.createElement("meta");
      Object.entries(m).forEach(([key, value]) => {
        if (value !== undefined) tag.setAttribute(key, String(value));
      });
      tag.setAttribute("data-seo", "true");
      document.head.appendChild(tag);
    });

    // Canonical
    const graph = seo.structured["@graph"] as Array<{ url?: string }>;
    const canonicalUrl = graph[2]?.url || graph[1]?.url || "/";
    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", canonicalUrl);
    canonical.setAttribute("data-seo", "true");
    document.head.appendChild(canonical);

    // Structured data
    const existingLd = document.getElementById("seo-structured");
    if (existingLd) existingLd.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "seo-structured";
    script.text = JSON.stringify(seo.structured);
    document.head.appendChild(script);
  }, [seo, props]);

  return null;
}
