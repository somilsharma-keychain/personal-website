import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Somil Sharma Portfolio",
    short_name: "Somil Sharma",
    description:
      "Frontend engineer portfolio for Somil Sharma, focused on React, Next.js, TypeScript, HTML, CSS, and product-focused web experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ee",
    theme_color: "#111111",
  };
}
