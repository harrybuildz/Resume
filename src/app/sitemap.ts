import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";
import { projects } from "@/lib/projects";

const base = "https://harrybuildz.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    {
      url: `${base}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...projectRoutes];
}
