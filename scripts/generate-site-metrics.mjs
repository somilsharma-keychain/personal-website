import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const projectRoot = process.cwd();
const nextRoot = path.join(projectRoot, ".next");
const reportPath = path.join(projectRoot, "reports", "lighthouse-summary.json");
const resumePath = path.join(projectRoot, "public", "Somil_Sharma_Resume.pdf");
const outputPath = path.join(projectRoot, "lib", "generated-site-metrics.ts");

const formatKilobytes = (bytes) => `${(bytes / 1024).toFixed(1)} kB`;
const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));

const gzipSize = (filePath) => zlib.gzipSync(fs.readFileSync(filePath)).length;
const uniq = (items) => [...new Set(items)];

const appBuildManifest = readJson(path.join(nextRoot, "app-build-manifest.json"));

const sharedFiles = appBuildManifest.pages["/layout"].filter((file) => file.endsWith(".js"));
const homeFiles = appBuildManifest.pages["/page"].filter((file) => file.endsWith(".js"));
const cssFiles = appBuildManifest.pages["/layout"].filter((file) => file.endsWith(".css"));

const sharedJsBytes = uniq(sharedFiles).reduce(
  (total, file) => total + gzipSize(path.join(nextRoot, file)),
  0,
);
const homeRouteBytes = uniq(homeFiles.filter((file) => !sharedFiles.includes(file))).reduce(
  (total, file) => total + gzipSize(path.join(nextRoot, file)),
  0,
);
const cssBytes = uniq(cssFiles).reduce(
  (total, file) => total + gzipSize(path.join(nextRoot, file)),
  0,
);
const resumeBytes = fs.statSync(resumePath).size;

const lighthouse = fs.existsSync(reportPath)
  ? readJson(reportPath)
  : {
      generatedAt: null,
      environment:
        "No Lighthouse summary found yet. Run pnpm perf:audit after building the site.",
      categories: [],
      vitals: [],
    };

const siteMetrics = {
  bundleSummary:
    "These numbers are pulled from the production build and shown as gzip-compressed asset sizes.",
  auditSummary: lighthouse.generatedAt
    ? `Last Lighthouse run: ${lighthouse.generatedAt}. Measured on a local production build in headless Chrome.`
    : lighthouse.environment,
  bundleStats: [
    { label: "First-load JS", value: formatKilobytes(sharedJsBytes + homeRouteBytes) },
    { label: "Home route JS", value: formatKilobytes(homeRouteBytes) },
    { label: "Shared JS", value: formatKilobytes(sharedJsBytes) },
    { label: "Route CSS", value: formatKilobytes(cssBytes) },
    { label: "Resume asset", value: formatKilobytes(resumeBytes) },
    { label: "Rendering", value: "Static" },
  ],
  lighthouseCategories: lighthouse.categories,
  lighthouseVitals: lighthouse.vitals,
};

fs.writeFileSync(
  outputPath,
  `export const siteMetrics = ${JSON.stringify(siteMetrics, null, 2)} as const;\n`,
);

console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
