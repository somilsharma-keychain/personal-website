import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const reportDir = path.join(projectRoot, "reports");
const fullReportPath = path.join(reportDir, "lighthouse-report.json");
const summaryPath = path.join(reportDir, "lighthouse-summary.json");
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = process.env.PORT || "3005";
const url = `http://localhost:${port}`;

fs.mkdirSync(reportDir, { recursive: true });

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const spawnCommand = (command, args, options = {}) =>
  spawn(command, args, {
    cwd: projectRoot,
    stdio: "inherit",
    ...options,
  });

const runLighthouse = () =>
  new Promise((resolve, reject) => {
    const child = spawnCommand("pnpm", [
      "exec",
      "lighthouse",
      url,
      "--quiet",
      `--chrome-path=${chromePath}`,
      "--chrome-flags=--headless=new --no-sandbox",
      "--only-categories=performance,accessibility,best-practices,seo",
      "--output=json",
      `--output-path=${fullReportPath}`,
    ]);

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Lighthouse exited with code ${code}`));
    });
  });

const createSummary = () => {
  const report = JSON.parse(fs.readFileSync(fullReportPath, "utf8"));
  const summary = {
    generatedAt: new Date().toISOString().slice(0, 10),
    environment: "Local production build audited in headless Chrome",
    categories: [
      { label: "Performance", value: String(Math.round(report.categories.performance.score * 100)) },
      { label: "Accessibility", value: String(Math.round(report.categories.accessibility.score * 100)) },
      {
        label: "Best Practices",
        value: String(Math.round(report.categories["best-practices"].score * 100)),
      },
      { label: "SEO", value: String(Math.round(report.categories.seo.score * 100)) },
    ],
    vitals: [
      { label: "First Contentful Paint", value: report.audits["first-contentful-paint"].displayValue },
      { label: "Largest Contentful Paint", value: report.audits["largest-contentful-paint"].displayValue },
      { label: "Speed Index", value: report.audits["speed-index"].displayValue },
      { label: "Total Blocking Time", value: report.audits["total-blocking-time"].displayValue },
      { label: "Cumulative Layout Shift", value: report.audits["cumulative-layout-shift"].displayValue },
    ],
  };

  fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);
};

const main = async () => {
  const server = spawn("pnpm", ["exec", "next", "start", "-p", port], {
    cwd: projectRoot,
    stdio: "pipe",
  });

  try {
    await wait(1500);
    await runLighthouse();
    createSummary();
    console.log(`Saved ${path.relative(projectRoot, summaryPath)}`);
  } finally {
    server.kill("SIGINT");
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
