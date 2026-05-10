import MobileNav from "./components/MobileNav";

const experience = [
  {
    company: "Adobe",
    role: "Director & Head of Strategy",
    period: "2024 – Present",
    location: "San Francisco / New York",
    highlights: [
      "Spearheaded new AI-driven business selling commercially safe content for training 3rd-party LLMs — scaled 0→1 from MVP to 10+ enterprise users, driving $XXM net new revenue (5× growth)",
      "Drove Creative Cloud's alternative monetization strategy via usage-based pricing, an ad-supported free tier, and value redefinition across SMBs/enterprise — unlocking +$1B in revenue growth",
    ],
  },
  {
    company: "Google · YouTube",
    role: "Strategy & BizOps",
    period: "2019 – 2024",
    location: "San Francisco",
    highlights: [
      "Led global team of 15 to redefine Creator Ecosystem health metrics — adopted in OKRs across all functions and reviewed weekly by 50+ executives",
      "Launched YouTube Partner Program expansion across Music, Shorts & Shopping — ~2% margin improvement and expanded monetization for 10M+ Creators",
      "Directed YouTube Biz Org's largest operational transformation, impacting ~50M creators and 700+ employees across 12 workstreams",
      "Highest Performance Rating (top 10%) · Annual Planning across 12 VPs and 1,800+ employees",
    ],
  },
  {
    company: "Bain & Co",
    role: "Consultant / Case Team Lead",
    period: "2017 – 2019",
    location: "Boston",
    highlights: [
      "Led 6-person team using geospatial, satellite, and credit card data to diagnose performance gaps for a $65B retailer — insights fueled a $5B+ activist hedge fund investment",
      "Built operating model for a $30B+ tech company; identified $500M in cost savings through benchmarking",
    ],
  },
  {
    company: "Amazon",
    role: "Senior Product Manager, MBA Intern",
    period: "Summer 2016",
    location: "Seattle",
    highlights: [
      "Built business case for a global pricing platform reducing costs by 88% — drove XFN alignment and secured executive buy-in",
    ],
  },
  {
    company: "S&P Global",
    role: "Manager, Strategy & Corporate Development",
    period: "2012 – 2015",
    location: "New York",
    highlights: [
      "Led 6-person global team crafting the company's first emerging markets strategy — two new offices, $1B non-US revenue commitment",
      "Built Poland GTM plan growing revenues 60%; $50M budget approved by executive committee",
    ],
  },
  {
    company: "KPMG",
    role: "Associate, Transactions Advisory",
    period: "2009 – 2012",
    location: "Toronto",
    highlights: [
      "Advised clients and internal deal teams on M&A execution, financing alternatives, and valuation",
    ],
  },
];

const stats = [
  { number: "$1B+",   label: "Revenue Growth Driven" },
  { number: "50M+",   label: "Creators Impacted" },
  { number: "15+",    label: "Years of Experience" },
  { number: "Top 1%", label: "Academic Achievement" },
];

const skills = [
  "Growth Strategy", "AI Go-to-Market", "P&L Ownership", "0→1 Product Builds",
  "Operational Transformation", "Team Building", "Executive Alignment",
  "OKR Design", "New Business Development", "Change Management",
];

const personal = [
  { icon: "🩰", title: "Ballet Enthusiast",   description: "NYC Ballet Business & Professionals Committee — orchestrated events for 400+" },
  { icon: "🎨", title: "Art Lover & Painter",  description: "Visual artist with a deep passion for fine art and painting" },
  { icon: "🌍", title: "World Traveler",        description: "Fluent Mandarin, intermediate French — a true global citizen" },
  { icon: "🍳", title: "Gourmet Cook",          description: "Brings the same precision and creativity to the kitchen as to strategy" },
  { icon: "❤️", title: "Community Leader",      description: "New York Cares Team Leader — led volunteer teams of 20+" },
  { icon: "💬", title: "Multilingual",          description: "English · Mandarin (Fluent) · French (Intermediate)" },
];

export default function Home() {
  return (
    <main>

      {/* ── Navigation ──────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#F0EDE8]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
          <a href="#" className="font-display text-[#1C1C1C] text-lg font-medium tracking-wide">
            Christie Shen
          </a>
          <div className="hidden md:flex items-center gap-10">
            {["About", "Experience", "Education", "Personal"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-sm text-[#5A5550] hover:text-[#1C1C1C] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="mailto:shen12christie@gmail.com"
              className="font-sans text-xs text-[#1C1C1C] border border-[#1C1C1C] tracking-widest uppercase px-5 py-2 hover:bg-[#1C1C1C] hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="md:min-h-screen grid md:grid-cols-[55%_45%]">

        {/* Left: Name */}
        <div className="flex flex-col justify-end md:justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-12 md:pt-0 md:pb-0">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8A7560] mb-8 anim-fade-in delay-1">
            New York · Strategy · AI
          </p>
          <h1
            className="font-display font-bold text-[#1C1C1C] leading-[0.9] anim-fade-in-up delay-2"
            style={{ fontSize: "clamp(4rem, 8.5vw, 10rem)" }}
          >
            Christie
            <br />
            Shen
          </h1>
          <div className="mt-8 w-full h-px bg-[#E8E3DC] anim-fade-in delay-3" />
          <div className="mt-6 flex flex-wrap gap-2 anim-fade-in delay-4">
            {["Adobe", "Google", "Bain & Co", "Harvard"].map((c) => (
              <span
                key={c}
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8A7560] border border-[#D8D0C4] px-3 py-1"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div
          className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 md:py-0"
          style={{ background: "#F7F4F0" }}
        >
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#8A7560] mb-5 anim-fade-in delay-2">
            Director &amp; Head of Strategy
          </p>
          <h2
            className="font-display font-light italic text-[#1C1C1C] leading-[1.25] mb-8 anim-fade-in-up delay-3"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
          >
            Building what&apos;s next at the intersection of strategy &amp; AI
          </h2>
          <p className="font-sans text-[#5A5550] text-sm leading-[1.9] mb-10 anim-fade-in delay-4">
            15+ years turning ambitious ideas into measurable results —
            building new AI product lines, driving $1B+ in revenue, and
            scaling teams from 0→1 at the world&apos;s leading companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 anim-fade-in delay-5">
            <a
              href="https://linkedin.com/in/christieshen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans bg-[#1C1C1C] text-white text-xs text-center tracking-widest uppercase px-8 py-3.5 hover:bg-[#3C3C3C] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shen12christie@gmail.com"
              className="font-sans border border-[#1C1C1C] text-[#1C1C1C] text-xs text-center tracking-widest uppercase px-8 py-3.5 hover:bg-[#1C1C1C] hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="border-y border-[#E8E3DC]">
        <div className="max-w-7xl mx-auto divide-y divide-[#E8E3DC] md:divide-y-0 md:grid md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-12 px-8 text-center ${i > 0 ? "md:border-l border-[#E8E3DC]" : ""}`}
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-[#1C1C1C] mb-2">
                {s.number}
              </div>
              <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#8A7560]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8A7560] mb-6">
                About
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1C] font-medium leading-[1.1]">
                Strategy meets execution meets results
              </h2>
              <div className="mt-6 w-12 h-px bg-[#8A7560]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-sans text-[#5A5550] text-base leading-[1.9] mb-6">
                Strategic business leader with 15+ years of growth strategy,
                AI go-to-market, and operational transformation experience.
                Proven track record delivering measurable revenue impact —
                driving 0→1 new product lines from MVP to scaled revenue.
              </p>
              <p className="font-sans text-[#5A5550] text-base leading-[1.9] mb-10">
                Seasoned in end-to-end execution: driving multi-year
                initiatives from initial strategy through delivery by aligning
                complex stakeholder maps and executive buy-in. Passionate
                about building high-performing teams and developing the next
                generation of leaders.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-[11px] text-[#5A5550] border border-[#E8E3DC] px-3 py-1.5 hover:border-[#8A7560] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────── */}
      <section id="experience" className="py-24 md:py-32" style={{ background: "#F7F4F0" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8A7560] mb-6">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1C] font-medium leading-[1.1] mb-16 md:mb-20">
            A career defined by impact
          </h2>

          <div className="divide-y divide-[#E8E3DC]">
            {experience.map((role) => (
              <div key={role.company} className="py-8 md:py-10 group">
                <div className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-12">
                  {/* Period + location */}
                  <div className="md:pt-0.5">
                    <div className="font-sans text-xs text-[#8A7560] tracking-wide">
                      {role.period}
                    </div>
                    <div className="font-sans text-xs text-[#A89880] mt-0.5">
                      {role.location}
                    </div>
                  </div>
                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3 mb-4">
                      <span className="font-display text-2xl font-semibold text-[#1C1C1C] group-hover:text-[#8A7560] transition-colors">
                        {role.company}
                      </span>
                      <span className="font-sans text-sm text-[#5A5550]">
                        {role.role}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {role.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-[#8A7560] text-sm mt-0.5 shrink-0 leading-none">
                            —
                          </span>
                          <span className="font-sans text-sm text-[#5A5550] leading-[1.8]">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────── */}
      <section id="education" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8A7560] mb-6">
            Education
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1C] font-medium leading-[1.1] mb-16 md:mb-20">
            Built on excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                school: "Harvard Business School",
                degree: "MBA",
                location: "Boston, 2015–2017",
                honors: ["Academic Honors — Top 15%", "John H. McArthur Fellowship"],
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
                className="p-8 md:p-10 border border-[#E8E3DC] hover:border-[#8A7560] transition-colors group"
              >
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#8A7560] mb-4">
                  {edu.degree} · {edu.location}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-[#1C1C1C] font-medium group-hover:text-[#8A7560] transition-colors mb-7">
                  {edu.school}
                </h3>
                <div className="space-y-3">
                  {edu.honors.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-4 h-px bg-[#8A7560] shrink-0" />
                      <span className="font-sans text-sm text-[#5A5550]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personal ─────────────────────────────────────────── */}
      <section id="personal" className="py-24 md:py-32" style={{ background: "#F7F4F0" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8A7560] mb-6">
            Personal
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1C1C1C] font-medium leading-[1.1] mb-4">
            Beyond the boardroom
          </h2>
          <p className="font-sans text-[#5A5550] text-base mb-14 md:mb-20 max-w-md">
            A life fully lived — from the New York City Ballet to world travel.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {personal.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 border border-transparent hover:border-[#E8E3DC] hover:shadow-sm transition-all group"
              >
                <div className="text-2xl mb-5">{item.icon}</div>
                <h3 className="font-display text-xl font-medium text-[#1C1C1C] mb-2 group-hover:text-[#8A7560] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#5A5550] leading-[1.75]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E3DC] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl text-[#1C1C1C] font-medium mb-1">
                Christie Shen
              </h3>
              <p className="font-sans text-sm text-[#8A7560]">New York, NY</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <a
                href="mailto:shen12christie@gmail.com"
                className="font-sans text-sm text-[#5A5550] hover:text-[#1C1C1C] transition-colors"
              >
                shen12christie@gmail.com
              </a>
              <a
                href="tel:6179028771"
                className="font-sans text-sm text-[#5A5550] hover:text-[#1C1C1C] transition-colors"
              >
                (617) 902-8771
              </a>
              <a
                href="https://linkedin.com/in/christieshen"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans bg-[#1C1C1C] text-white text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-[#3C3C3C] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-[#F0EDE8]">
            <p className="font-sans text-xs text-[#A89880]">
              © 2026 Christie Shen · All rights reserved
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
