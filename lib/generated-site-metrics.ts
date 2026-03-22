export const siteMetrics = {
  "bundleSummary": "These numbers are pulled from the production build and shown as gzip-compressed asset sizes.",
  "auditSummary": "Last Lighthouse run: 2026-03-22. Measured on a local production build in headless Chrome.",
  "bundleStats": [
    {
      "label": "First-load JS",
      "value": "92.2 kB"
    },
    {
      "label": "Home route JS",
      "value": "6.8 kB"
    },
    {
      "label": "Shared JS",
      "value": "85.4 kB"
    },
    {
      "label": "Route CSS",
      "value": "2.2 kB"
    },
    {
      "label": "Resume asset",
      "value": "87.8 kB"
    },
    {
      "label": "Rendering",
      "value": "Static"
    }
  ],
  "lighthouseCategories": [
    {
      "label": "Performance",
      "value": "100"
    },
    {
      "label": "Accessibility",
      "value": "100"
    },
    {
      "label": "Best Practices",
      "value": "96"
    },
    {
      "label": "SEO",
      "value": "100"
    }
  ],
  "lighthouseVitals": [
    {
      "label": "First Contentful Paint",
      "value": "0.8 s"
    },
    {
      "label": "Largest Contentful Paint",
      "value": "1.7 s"
    },
    {
      "label": "Speed Index",
      "value": "0.8 s"
    },
    {
      "label": "Total Blocking Time",
      "value": "0 ms"
    },
    {
      "label": "Cumulative Layout Shift",
      "value": "0"
    }
  ]
} as const;
