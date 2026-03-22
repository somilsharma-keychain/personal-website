import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { siteMetrics } from "@/lib/generated-site-metrics";
import {
  achievements,
  buildHighlights,
  education,
  experiences,
  heroStats,
  navigation,
  principles,
  profile,
  stackGroups,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-header">
        <Link href="/" className="brand-mark" aria-label="Homepage">
          <span className="brand-mark__dot" />
          <span>{profile.name} / Frontend Engineering</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1>
            {profile.name}
            <br />
            builds frontend
            <br />
            with product impact.
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-text">{profile.summary}</p>

          <div className="hero-meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="hero-actions">
            <a href="#experience" className="button button-primary">
              View experience
            </a>
            <a href={profile.resumeHref} className="button button-secondary" download>
              Download resume
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Engineering overview">
          <div className="panel-grid">
            <div className="panel-card panel-card-large">
              <span>Current role</span>
              <strong>Frontend Engineer at Keychain</strong>
              <p>
                Shipping product features, leading SEO-related execution, and
                building frontend experiences that directly affect user behavior
                on the platform.
              </p>
            </div>

            <div className="panel-card">
              <span>Recent impact</span>
              <strong>40% of image uploads flow through my cropping work</strong>
            </div>

            <div className="panel-card">
              <span>Revenue signal</span>
              <strong>Built payments UX behind 65% of revenue at smallcase</strong>
            </div>

            <div className="panel-card panel-card-tall">
              <span>Education</span>
              <strong>{education.school}</strong>
              <p>
                {education.degree}. The career story here already shows a fast
                progression from internships into revenue-critical frontend
                ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-strip">
        {heroStats.map((stat) => (
          <article key={stat.label} className="impact-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section id="principles" className="content-section">
        <SectionHeading
          eyebrow="Approach"
          title="Frontend engineering with a business lens"
          description="Your resume already reads like a frontend engineer who gets trusted with meaningful surfaces early. This section turns that into a sharper product-engineering point of view."
        />

        <div className="principles-grid">
          {principles.map((principle) => (
            <article key={principle.index} className="principle-card">
              <span>{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section">
        <SectionHeading
          eyebrow="Experience"
          title="Fast progression across product-focused frontend roles"
          description="The story here is strong: internships with visible outcomes, then ownership of revenue-critical and user-critical surfaces at scale."
        />

        <div className="systems-stack">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.title}`} className="system-card">
              <div>
                <p className="system-card__eyebrow">{experience.eyebrow}</p>
                <h3>
                  {experience.title}
                  <span className="company-link">
                    {" "}
                    at{" "}
                    <a href={experience.href} target="_blank" rel="noreferrer">
                      {experience.company}
                    </a>
                  </span>
                </h3>
              </div>

              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="build" className="content-section split-section">
        <div className="stack-panel">
          <SectionHeading
            eyebrow="Build"
            title="How this website is engineered"
            description="The site itself is meant to reflect frontend engineering taste, so the stack and performance signals are visible instead of hidden."
          />

          <div className="stack-groups">
            {stackGroups.map((group) => (
              <article key={group.label} className="stack-group">
                <span>{group.label}</span>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="build-highlights">
            {buildHighlights.map((highlight) => (
              <div key={highlight} className="build-highlight">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-panel">
          <article className="timeline-item">
            <span>Footprint</span>
            <h3>Build-level efficiency signals</h3>
            <p>{siteMetrics.bundleSummary}</p>
            <div className="score-grid">
              {siteMetrics.bundleStats.map((metric) => (
                <div key={metric.label} className="score-chip">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="timeline-item">
            <span>Lighthouse</span>
            <h3>Local performance indicators</h3>
            <p>{siteMetrics.auditSummary}</p>
            <div className="score-grid">
              {siteMetrics.lighthouseCategories.map((category) => (
                <div key={category.label} className="score-chip">
                  <strong>{category.value}</strong>
                  <span>{category.label}</span>
                </div>
              ))}
            </div>
            <ul className="achievement-list">
              {siteMetrics.lighthouseVitals.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.label}:</strong> {metric.value}
                </li>
              ))}
            </ul>
          </article>

          <article className="timeline-item">
            <span>Background</span>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <ul className="achievement-list">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <p className="eyebrow">Contact</p>
        <h2>Available for ambitious frontend work.</h2>
        <p>
          Based in {profile.location}. Reach out for frontend engineering roles,
          product-focused collaborations, or high-performance interface work.
        </p>
        <div className="hero-meta hero-meta-centered">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <a href={profile.resumeHref} download>
            Resume
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
