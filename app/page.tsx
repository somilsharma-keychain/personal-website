import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { siteMetrics } from "@/lib/generated-site-metrics";
import {
  achievements,
  education,
  experiences,
  navigation,
  packages,
  profile,
  publications,
  skillGroups,
  stackGroups,
} from "@/lib/site-data";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      name: `${profile.name} | ${profile.role}`,
      description: profile.summary,
      mainEntity: {
        "@id": "#person",
      },
    },
    {
      "@type": "Person",
      "@id": "#person",
      name: profile.name,
      jobTitle: profile.role,
      description: profile.summary,
      email: profile.email,
      telephone: profile.phone,
      sameAs: [profile.linkedin],
      alumniOf: education.map((entry) => ({
        "@type": "CollegeOrUniversity",
        name: entry.school,
      })),
      homeLocation: {
        "@type": "Place",
        name: profile.location,
      },
      worksFor: {
        "@type": "Organization",
        name: experiences[0].company,
      },
      knowsAbout: [
        ...skillGroups.flatMap((group) => [...group.items]),
        "Frontend Architecture",
        "Web Performance",
        "Accessibility",
      ],
      award: [...achievements],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="page-shell">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />

        <header className="site-header">
          <Link href="/" className="brand-mark" aria-label="Homepage">
            <span className="brand-mark__dot" />
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
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-text">{profile.summary}</p>
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            description="React, Next.js, and TypeScript day to day, plus enough backend and tooling to ship a feature end to end without waiting on anyone."
          />

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article key={group.label} className="skill-card">
                <span>{group.label}</span>
                <ul className="skill-chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeading
            eyebrow="Experience"
            title="Work I have done so far"
            description="I started with internships, picked up product ownership early, and ended up building 0→1 products and flows with real business impact."
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

        <section id="education" className="content-section">
          <SectionHeading
            eyebrow="Education"
            title="Where I studied"
            description="A physics background at BITS Pilani, a computer science master's, and certifications picked up along the way."
          />

          <div className="systems-stack">
            {education.map((entry) => (
              <article key={entry.school} className="system-card">
                <div>
                  <p className="system-card__eyebrow">{entry.eyebrow}</p>
                  <h3>{entry.school}</h3>
                </div>

                <ul>
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="system-card">
              <div>
                <p className="system-card__eyebrow">Certifications & Test Scores</p>
                <h3>Credentials</h3>
              </div>

              <ul>
                {achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="writing" className="content-section writing-section">
          <SectionHeading
            eyebrow="Writing"
            title="Publications & Packages"
            description="Things I have written and shipped publicly — articles on frontend craft and open-source tooling built from real production problems."
          />

          <div className="writing-grid">
            <div className="writing-col">
              <p className="eyebrow">Publications</p>
              <div className="systems-stack">
                {publications.map((pub) => (
                  <article key={pub.title} className="writing-card">
                    <div>
                      <p className="system-card__eyebrow">{pub.eyebrow}</p>
                      <h3>
                        <a href={pub.doiHref} target="_blank" rel="noreferrer">
                          {pub.title}
                        </a>
                        <span className="company-link"> — {pub.venue}</span>
                      </h3>
                      <p>{pub.description}</p>
                    </div>
                    <div className="pub-links">
                      <a href={pub.doiHref} target="_blank" rel="noreferrer" className="pub-link">
                        DOI
                      </a>
                      <a href={pub.replicationHref} target="_blank" rel="noreferrer" className="pub-link">
                        Replication Package
                      </a>
                      {/* arXiv link pending endorsement — uncomment once live
                      <a href="https://arxiv.org/abs/PLACEHOLDER" target="_blank" rel="noreferrer" className="pub-link">
                        arXiv
                      </a> */}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="writing-col">
              <p className="eyebrow">Packages</p>
              <div className="systems-stack">
                {packages.map((pkg) => (
                  <article key={pkg.title} className="writing-card">
                    <div>
                      <p className="system-card__eyebrow">{pkg.eyebrow}</p>
                      <h3>
                        <a href={pkg.npmHref} target="_blank" rel="noreferrer">
                          {pkg.title}
                        </a>
                      </h3>
                      <p>{pkg.description}</p>
                      <div className="pub-links">
                        <a href={pkg.npmHref} target="_blank" rel="noreferrer" className="pub-link">
                          npm
                        </a>
                        <a href={pkg.githubHref} target="_blank" rel="noreferrer" className="pub-link">
                          GitHub
                        </a>
                      </div>
                    </div>
                    <div className="score-grid">
                      {pkg.stats.map((stat) => (
                        <div key={stat.label} className="score-chip">
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="build" className="content-section split-section">
          <div className="stack-panel">
            <SectionHeading
              eyebrow="Build"
              title="How I built this site"
              description=""
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
          </div>

          <div className="timeline-panel">
            <article className="timeline-item">
              <span>Footprint</span>
              <h3>What the build looks like</h3>
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
              <h3>Latest Lighthouse results</h3>
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
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="eyebrow">Contact</p>
          <h2>Open to good frontend work.</h2>
          <p>
            Based in {profile.location}, working with US-based teams. Reach out if
            you are hiring for frontend roles or just want to talk product and
            engineering.
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
    </>
  );
}
