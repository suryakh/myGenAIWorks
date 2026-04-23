import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import TiltCard from "./TiltCard";
import MagneticBtn from "./MagneticBtn";
import ProfileImage from "./ProfileImage";

const contacts = [
  {
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "91-9676442522",
    href: "tel:+919676442522",
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "khandavillisurya@gmail.com",
    href: "mailto:khandavillisurya@gmail.com",
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "linkedin.com/in/surya-khandavilli",
    href: "https://www.linkedin.com/in/surya-khandavilli-b5b019102/",
    external: true,
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "L.Gannavaram, Andhra Pradesh",
    href: null,
  },
];

const education = [
  { degree: "Bachelor of Engineering", institution: "JNT University", period: "2011 – 2015" },
  { degree: "Intermediate", institution: "IPD Junior College", period: "2009 – 2011" },
  { degree: "SSC", institution: "ZP High School", period: "2009" },
];

export default function MainContent() {
  return (
    <main className="max-w-[860px] mx-auto px-6 sm:px-10 py-16">

      {/* ── SECTION 1: HERO ── */}
      <section className="mb-14 text-center">
        {/* Profile photo + rings */}
        <div className="neo-fade-1 flex items-center justify-center mb-10">
          <div className="relative flex items-center justify-center">
            {/* Pulse rings */}
            <div
              className="neo-ring-pulse-1 absolute rounded-full border"
              style={{ width: 192, height: 192, borderColor: "rgba(0,245,255,0.1)" }}
            />
            <div
              className="neo-ring-pulse-2 absolute rounded-full border"
              style={{ width: 166, height: 166, borderColor: "rgba(0,245,255,0.18)" }}
            />

            {/* Cyan orbiting ring */}
            <div
              className="neo-ring-orbit absolute rounded-full"
              style={{
                width: 152,
                height: 152,
                border: "1px dashed rgba(0,245,255,0.3)",
              }}
            >
              <span
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{
                  background: "#00f5ff",
                  boxShadow: "0 0 0 3px rgba(0,245,255,0.2), 0 0 12px 4px rgba(0,245,255,0.7)",
                }}
              />
            </div>

            {/* Purple counter-orbit ring */}
            <div
              className="neo-ring-orbit-r absolute rounded-full"
              style={{
                width: 170,
                height: 170,
                border: "1px dashed rgba(189,0,255,0.22)",
              }}
            >
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full"
                style={{
                  background: "#bd00ff",
                  boxShadow: "0 0 0 2px rgba(189,0,255,0.2), 0 0 10px 3px rgba(189,0,255,0.65)",
                }}
              />
            </div>

            {/* Inner glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 130,
                height: 130,
                background: "radial-gradient(circle, rgba(0,245,255,0.14) 0%, transparent 70%)",
                filter: "blur(12px)",
              }}
            />

            {/* Profile photo */}
            <div
              className="neo-photo-float relative rounded-full overflow-hidden"
              style={{
                width: 124,
                height: 124,
                border: "2px solid rgba(0,245,255,0.55)",
                boxShadow:
                  "0 0 0 4px rgba(0,245,255,0.08), 0 0 30px rgba(0,245,255,0.35), 0 0 60px rgba(0,245,255,0.12)",
              }}
            >
              <ProfileImage />
            </div>
          </div>
        </div>

        {/* Available badge */}
        <div className="neo-fade-2 mb-6 flex justify-center">
          <span className="neo-available" style={{ fontFamily: "var(--font-raleway)" }}>
            <span className="neo-available-dot" />
            Available for Work
          </span>
        </div>

        {/* Name */}
        <h1
          className="neo-fade-3 neo-name-gradient text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold leading-[1.02] tracking-tight"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Surya Khandavilli
        </h1>

        {/* Role bar */}
        <div className="neo-fade-4 flex items-center justify-center gap-3 mt-5">
          <span className="neo-role-line" />
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-raleway)", color: "rgba(0,245,255,0.7)" }}
          >
            Full Stack Developer
          </p>
          <span className="neo-role-line" />
        </div>

        {/* Tagline */}
        <p
          className="neo-fade-5 mt-4 leading-relaxed text-[0.92rem] max-w-md mx-auto"
          style={{ color: "rgba(148,163,184,0.75)" }}
        >
          Crafting high-performance, user-focused applications — from backend APIs
          to polished UIs that scale.
        </p>

        {/* CTA buttons */}
        <div className="neo-fade-6 flex flex-wrap items-center justify-center gap-3 mt-8">
          <MagneticBtn
            href="/surya Khandavilli_latest.pdf"
            download
            className="neo-btn-primary"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </MagneticBtn>

          <MagneticBtn
            href="https://www.linkedin.com/in/surya-khandavilli-b5b019102/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-secondary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </MagneticBtn>

          <MagneticBtn
            href="mailto:khandavillisurya@gmail.com"
            className="neo-btn-ghost"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </MagneticBtn>
        </div>
      </section>

      {/* ── SECTION 2: CONTACT ROW ── */}
      <section className="mb-10">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {contacts.map((c) =>
            c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <span className="text-cyan-500/70">{c.icon}</span>
                <span className="break-all">{c.label}</span>
              </a>
            ) : (
              <span
                key={c.label}
                className="flex items-center gap-2 text-sm text-slate-500"
              >
                <span className="text-cyan-500/50">{c.icon}</span>
                <span>{c.label}</span>
              </span>
            )
          )}
        </div>
      </section>

      <div className="neo-divider mb-10" />

      {/* ── SECTION 3: ABOUT ME ── */}
      <section className="mb-10">
        <h2
          className="text-base font-bold mb-3 flex items-center gap-2"
          style={{ fontFamily: "var(--font-raleway)", color: "rgba(0,245,255,0.9)" }}
        >
          <span
            className="w-1 h-5 rounded-full inline-block"
            style={{
              background: "linear-gradient(to bottom, #00f5ff, #bd00ff)",
              boxShadow: "0 0 8px rgba(0,245,255,0.6)",
            }}
          />
          About Me
        </h2>
        <p
          className="leading-relaxed italic text-[0.92rem]"
          style={{ color: "rgba(148,163,184,0.7)" }}
        >
          Cultivating a passion for innovation, I am eager to immerse myself in a dynamic and
          collaborative environment where I can actively contribute to the team&apos;s success. I am
          driven by the opportunity to continually learn and grow in the field of software
          development, making meaningful contributions along the way.
        </p>
      </section>

      <div className="neo-divider mb-10" />

      {/* ── SECTION 4: SKILLS ── */}
      <section className="mb-10">
        <h2
          className="text-base font-bold mb-4 flex items-center gap-2"
          style={{ fontFamily: "var(--font-raleway)", color: "rgba(0,245,255,0.9)" }}
        >
          <span
            className="w-1 h-5 rounded-full inline-block"
            style={{
              background: "linear-gradient(to bottom, #00f5ff, #bd00ff)",
              boxShadow: "0 0 8px rgba(0,245,255,0.6)",
            }}
          />
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="neo-skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <div className="neo-divider mb-10" />

      {/* ── SECTION 5: EDUCATION ── */}
      <section className="mb-10">
        <h2
          className="text-base font-bold mb-6 flex items-center gap-2"
          style={{ fontFamily: "var(--font-raleway)", color: "rgba(0,245,255,0.9)" }}
        >
          <span
            className="w-1 h-5 rounded-full inline-block"
            style={{
              background: "linear-gradient(to bottom, #00f5ff, #bd00ff)",
              boxShadow: "0 0 8px rgba(0,245,255,0.6)",
            }}
          />
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {education.map((e) => (
            <div key={e.degree} className="neo-card p-4 rounded-xl relative pl-5">
              <span
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl"
                style={{ background: "linear-gradient(to bottom, rgba(0,245,255,0.6), rgba(189,0,255,0.3))" }}
              />
              <p
                className="text-white text-sm font-semibold leading-tight"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                {e.degree}
              </p>
              <p className="text-slate-400 text-xs mt-1">{e.institution}</p>
              <p className="text-slate-600 text-xs mt-0.5">{e.period}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="neo-divider mb-10" />

      {/* ── SECTION 6: EXPERIENCE ── */}
      <section>
        <h2
          className="text-base font-bold mb-6 flex items-center gap-2"
          style={{ fontFamily: "var(--font-raleway)", color: "rgba(0,245,255,0.9)" }}
        >
          <span
            className="w-1 h-5 rounded-full inline-block"
            style={{
              background: "linear-gradient(to bottom, #00f5ff, #bd00ff)",
              boxShadow: "0 0 8px rgba(0,245,255,0.6)",
            }}
          />
          Experience
        </h2>

        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <TiltCard
              key={project.title}
              className="neo-card exp-card pl-5 pr-5 py-5 rounded-r-xl"
            >
              {/* Header */}
              <div className="mb-3">
                <h3
                  className="text-base font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm font-semibold mt-0.5"
                  style={{ color: "rgba(0,245,255,0.75)" }}
                >
                  {project.role}
                </p>
                <p className="text-xs mt-0.5 text-slate-500">
                  {project.company}&nbsp;·&nbsp;{project.period}
                </p>
              </div>

              {/* Description bullets */}
              <ul className="space-y-1.5 mb-4">
                {project.description.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-start gap-2.5"
                    style={{ color: "rgba(148,163,184,0.75)" }}
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                      style={{ background: "rgba(0,245,255,0.6)", boxShadow: "0 0 4px rgba(0,245,255,0.6)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="neo-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </main>
  );
}
