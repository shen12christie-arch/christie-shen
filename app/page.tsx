import MobileNav from "./components/MobileNav";

const experience = [
  {
    company: "Adobe",
    role: "Director & Head of Strategy",
    period: "2024 – Present",
    location: "San Francisco / New York",
    color: "text-red-400",
    highlights: [
      "Spearheaded new AI-driven business selling commercially safe content for training 3rd-party LLMs — scaled 0→1 from MVP to 10+ enterprise users, driving $XXM net new revenue (5× growth)",
      "Drove Creative Cloud's alternative monetization strategy via usage-based pricing, an ad-supported free tier, and value redefinition across teams/SMBs/enterprise — unlocking +$1B in revenue growth with XFN leadership",
    ],
  },
  {
    company: "Google · YouTube",
    role: "Strategy & BizOps",
    period: "2019 – 2024",
    location: "San Francisco",
    color: "text-sky-400",
    highlights: [
      "Led global team of 15 to redefine Creator Ecosystem health metrics — adopted in OKRs across all functions and reviewed weekly by 50+ executives",
      "Launched YouTube Partner Program expansion across Music, Shorts & Shopping, achieving ~2% margin improvement and expanding monetization for 10M+ Creators",
      "Directed YouTube Biz Org's largest operational transformation — new scalable model supporting 100% of eligible creators, impacting ~50M creators and 700+ employees across 12 workstreams",
      "Highest Performance Rating (top 10%) · Led Annual Planning and OKR process across 12 VPs and 1,800+ employees",
    ],
  },
  {
    company: "Bain & Co",
    role: "Consultant / Case Team Lead",
    period: "2017 – 2019",
    location: "Boston",
    color: "text-rose-400",
    highlights: [
      "Led 6-person team using geospatial, satellite, and credit card data to diagnose performance gaps for a $65B retailer — insights fueled a $5B+ activist hedge fund investment",
      "Built operating model for a $30B+ technology company and identified $500M in cost savings through competitive benchmarking",
    ],
  },
  {
    company: "Amazon",
    role: "Senior Product Manager, MBA Intern",
    period: "Summer 2016",
    location: "Seattle",
    color: "text-orange-400",
    highlights: [
      "Built product business case for a global pricing platform that reduced costs by 88% and improved UX — drove XFN alignment and secured executive buy-in",
    ],
  },
  {
    company: "S&P Global",
    role: "Manager, Strategy & Corporate Development",
    period: "2012 – 2015",
    location: "New York",
    color: "text-blue-400",
    highlights: [
      "Led 6-person global team to craft the company's first emerging markets strategy — resulted in two new offices and a $1B non-US revenue commitment",
      "Built Poland GTM plan growing revenues 60%; secured $50M budget approval from the executive committee",
    ],
  },
  {
    company: "KPMG",
    role: "Associate, Transactions Advisory",
    period: "2009 – 2012",
    location: "Toronto",
    color: "text-emerald-400",
    highlights: [
      "Advised clients and internal deal teams on M&A execution, financing alternatives, and valuation",
    ],
  },
];

const stats = [
  { number: "$1B+", label: "Revenue Growth Driven" },
  { number: "50M+", label: "Creators Impacted" },
  { number: "15+", label: "Years of Experience" },
  { number: "Top 1%", label: "Academic Achievement" },
];

const skills = [
  "Growth Strategy",
  "AI Go-to-Market",
  "P&L Ownership",
  "0→1 Product Builds",
  "Operational Transformation",
  "Team Building & Mentorship",
  "Executive Alignment",
  "OKR Design",
  "New Business Development",
  "Change Management",
];

const personal = [
  {
    icon: "🩰",
    title: "Ballet Enthusiast",
    description:
      "NYC Ballet Business & Professionals Committee — orchestrated events for 400+",
  },
  {
    icon: "🎨",
    title: "Art Lover & Painter",
    description: "Visual artist with a deep passion for fine art and painting",
  },
  {
    icon: "🌍",
    title: "World Traveler",
    description:
      "Fluent Mandarin, intermediate French — a true global citizen",
  },
  {
    icon: "🍳",
    title: "Gourmet Cook",
    description:
      "Brings the same precision and creativity to the kitchen as to strategy",
  },
  {
    icon: "❤️",
    title: "Community Leader",
    description: "New York Cares Team Leader — led volunteer teams of 20+",
  },
  {
    icon: "💬",
    title: "Multilingual",
    description: "English · Mandarin (Fluent) · French (Intermediate)",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Navigation ─────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
        style={{ background: "rgba(2,6,23,0.85)", backdropFilter: "blur(12px)" }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <span className="font-playfair text-white text-xl font-bold tracking-widest">
            CS
          </span>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Education", "Personal"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-sm text-slate-400 hover:text-amber-400 transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
            <a
              href="mailto:shen12christie@gmail.com"
              className="font-sans bg-amber-400 text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-300 transition-all hover:scale-105"
            >
              Contact
            </a>
          </div>
          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #1a3a5c 0%, #0a1628 45%, #020617 100%)",
        }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Accent lines */}
        <div
          className="absolute top-1/3 left-0 h-px w-40 opacity-40"
          style={{ background: "linear-gradient(to right, transparent, #f59e0b)" }}
        />
        <div
          className="absolute bottom-1/3 right-0 h-px w-56 opacity-20"
          style={{ background: "linear-gradient(to left, transparent, #f59e0b)" }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Company chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 anim-fade-in delay-1">
            {["Adobe", "Google", "Bain & Co", "Harvard"].map((c) => (
              <span
                key={c}
                className="font-sans text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  color: "rgba(251,191,36,0.8)",
                  border: "1px solid rgba(251,191,36,0.2)",
                }}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1
            className="font-playfair text-white font-bold leading-none mb-6 anim-fade-in-up delay-2"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            Christie
            <br />
            <span className="text-amber-400">Shen</span>
          </h1>

          {/* Title */}
          <p className="font-sans text-slate-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.35em] uppercase mb-8 anim-fade-in delay-3">
            Director &amp; Head of Strategy
            <span className="hidden sm:inline"> &nbsp;·&nbsp; AI Go-to-Market &nbsp;·&nbsp; Growth</span>
          </p>

          {/* Tagline */}
          <p className="font-sans text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 anim-fade-in-up delay-4">
            15+ years turning ambitious ideas into measurable results — building
            new AI product lines, driving $1B+ in revenue, and scaling teams
            from 0→1 at the world&apos;s leading companies.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 anim-fade-in delay-5">
            <a
              href="https://linkedin.com/in/christieshen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans bg-amber-400 text-slate-950 w-48 sm:w-auto text-center px-8 py-3 rounded-full font-semibold text-sm hover:bg-amber-300 transition-all hover:scale-105 shadow-lg"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shen12christie@gmail.com"
              className="font-sans text-slate-300 w-48 sm:w-auto text-center px-8 py-3 rounded-full text-sm hover:text-amber-400 transition-colors border border-slate-600/50"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-sans text-slate-600 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, rgba(251,191,36,0.5), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── Impact Stats ───────────────────────────────────── */}
      <section className="bg-amber-400 py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-slate-950 mb-1">
                {s.number}
              </div>
              <div className="font-sans text-xs text-slate-700 tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────── */}
      <section id="about" className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-sans text-xs text-amber-600 tracking-widest uppercase mb-4 block">
                About
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-slate-900 leading-tight">
                Building what&apos;s next at the intersection of strategy &amp;
                AI
              </h2>
              <div
                className="mt-6 h-px w-16"
                style={{
                  background: "linear-gradient(to right, #f59e0b, transparent)",
                }}
              />
            </div>
            <div>
              <p className="font-sans text-slate-600 text-lg leading-relaxed mb-6">
                Strategic business leader with 15+ years of growth strategy, AI
                go-to-market, and operational transformation experience. Proven
                track record delivering measurable revenue impact — driving 0→1
                new product lines from MVP to scaled revenue.
              </p>
              <p className="font-sans text-slate-600 text-lg leading-relaxed mb-10">
                Seasoned in end-to-end execution: driving multi-year initiatives
                from initial strategy through delivery by aligning complex
                stakeholder maps and executive buy-in. Passionate about building
                high-performing teams and developing managers &amp; individual
                contributors.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-xs text-slate-600 bg-stone-200 rounded-full px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────── */}
      <section id="experience" className="bg-slate-950 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="font-sans text-xs text-amber-400 tracking-widest uppercase mb-4 block">
            Experience
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight mb-10 md:mb-16">
            A career defined
            <br />
            by impact
          </h2>

          <div className="relative border-l border-slate-800">
            {experience.map((role) => (
              <div
                key={role.company}
                className="group relative pl-10 pb-14 last:pb-0 hover:border-l-amber-400/40 transition-colors"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-amber-400/40 bg-slate-800 group-hover:bg-amber-400 transition-colors"
                />

                <div className="mb-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className={`font-playfair text-xl sm:text-2xl font-semibold ${role.color}`}>
                      {role.company}
                    </span>
                    <span className="font-sans text-sm text-amber-400 shrink-0">
                      {role.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1">
                    <span className="font-sans text-slate-400 text-sm">
                      {role.role}
                    </span>
                    <span className="font-sans text-xs text-slate-600">
                      {role.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-amber-400/50 mt-0.5 shrink-0 font-sans text-sm">
                        ›
                      </span>
                      <span className="font-sans text-slate-400 text-sm leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────── */}
      <section id="education" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="font-sans text-xs text-amber-600 tracking-widest uppercase mb-4 block">
            Education
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-900 leading-tight mb-10 md:mb-16">
            Built on a foundation
            <br />
            of excellence
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                school: "Harvard Business School",
                degree: "MBA",
                location: "Boston, 2015–2017",
                honors: [
                  "Academic Honors — Top 15%",
                  "John H. McArthur Fellowship",
                ],
              },
              {
                school: "McGill University",
                degree: "Bachelor of Commerce",
                location: "Montréal, 2005–2009",
                honors: ["James McGill Award — Top 1%", "Dean's Honors List"],
              },
            ].map((edu) => (
              <div
                key={edu.school}
                className="rounded-2xl p-8 bg-stone-50 border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <div className="font-playfair text-2xl text-slate-900 font-semibold mb-1">
                  {edu.school}
                </div>
                <div className="font-sans text-slate-500 text-sm mb-6">
                  {edu.degree} · {edu.location}
                </div>
                <div className="space-y-3">
                  {edu.honors.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="font-sans text-slate-600 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personal ───────────────────────────────────────── */}
      <section id="personal" className="bg-amber-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="font-sans text-xs text-amber-600 tracking-widest uppercase mb-4 block">
            Personal
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-slate-900 leading-tight mb-4">
            Beyond the boardroom
          </h2>
          <p className="font-sans text-slate-600 text-lg mb-10 md:mb-14 max-w-xl">
            A life fully lived — from orchestrating galas for 400+ at the New
            York City Ballet to leading volunteer teams across the city.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {personal.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white border border-amber-100 hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="font-playfair text-lg text-slate-900 font-semibold mb-2">
                  {item.title}
                </div>
                <div className="font-sans text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-slate-950 py-12 md:py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div>
              <div className="font-playfair text-3xl text-white font-bold mb-1">
                Christie Shen
              </div>
              <div className="font-sans text-slate-500 text-sm">
                New York, NY
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="mailto:shen12christie@gmail.com"
                className="font-sans text-slate-400 text-sm hover:text-amber-400 transition-colors"
              >
                shen12christie@gmail.com
              </a>
              <a
                href="tel:6179028771"
                className="font-sans text-slate-400 text-sm hover:text-amber-400 transition-colors"
              >
                (617) 902-8771
              </a>
              <a
                href="https://linkedin.com/in/christieshen"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans bg-amber-400 text-slate-950 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-300 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800/60">
            <p className="font-sans text-slate-700 text-xs text-center">
              © 2026 Christie Shen · All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
