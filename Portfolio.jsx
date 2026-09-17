import React from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Layers,
  Code2,
  Blocks,
  Wrench,
  Briefcase,
  FolderGit2,
  Building2,
  ShieldCheck,
  Camera,
  Globe2,
  ChevronRight,
  GraduationCap,
  Languages as LanguagesIcon,
} from "lucide-react";

/**
 * Dhanyashree R — Portfolio
 *
 * Single-file React component, Tailwind utility classes, icons via lucide-react
 * ( npm install lucide-react if not already in the project ).
 *
 * No real photo was provided, so the hero uses an initials avatar with a
 * gradient background instead of an <img>. Swap the <Avatar /> component
 * below for a real <img src="..." /> whenever a photo is available.
 *
 * Drop into any React + Tailwind project and render <Portfolio />.
 */

const skillGroups = [
  { label: "Expertise", icon: Code2, items: ["PHP", "Python", "Bash Scripting", "MySQL"] },
  { label: "Good knowledge", icon: Layers, items: ["Node.js", "JavaScript", "Java", "C++", "HTML", "CSS"] },
  { label: "Frameworks & CMS", icon: Blocks, items: ["Flask", "WordPress"] },
  { label: "Tools & platforms", icon: Wrench, items: ["GitHub", "Postman", "Figma", "Hostinger", "cPanel", "FileZilla"] },
];

const projects = [
  {
    name: "Hostel Management System",
    stack: "PHP · MySQL · AJAX · JavaScript · WhatsApp API · Payment API",
    icon: Building2,
    points: [
      "Full-stack hostel platform with Aadhaar-based auto-fill and WhatsApp OTP verification",
      "Google Pay & PhonePe integration for secure online registration fee collection",
      "Admin dashboard for room allocation, occupancy, and user status tracking",
    ],
  },
  {
    name: "Mind Mechanism Admin Panel",
    stack: "PHP · MySQL · AJAX · HTML · CSS · JavaScript",
    icon: ShieldCheck,
    points: [
      "Admin panel with role-based controls for managing users and workshops",
      "Payment tracking with date-based filters, report generation, and gallery management",
      "Complete CRUD operations for user account management",
    ],
  },
  {
    name: "E-Fix Automation System",
    stack: "PHP · MySQL · Python · HTML · CSS",
    icon: Camera,
    points: [
      "Integrated Dahua and Hikvision IP cameras for automated vehicle and people counting",
      "Voice tracking and attendance management using Python automation",
    ],
  },
  {
    name: "DIGI-GRAM Web Application",
    stack: "Web Technologies · MySQL",
    icon: Globe2,
    points: [
      "Online service platform giving village communities digital access to services",
      "Real-time service request tracking for end users",
    ],
  },
];

const additionalProjects = [
  { name: "Tally Integration System", desc: "PHP. CSV import/export and UI-based database management." },
  { name: "Bank Mini Project", desc: "Python Flask. Core banking operations system." },
  { name: "Face Detection & Emotion Recognition", desc: "Python. Computer vision-based detection." },
  { name: "Bike Central", desc: "PHP. Purchase and sales records management." },
  { name: "PatentDrawOnline", desc: "PHP. Online patent drawing and submission platform." },
  { name: "Badminton Club Management", desc: "PHP. Member and activity management system." },
];

const education = [
  { name: "Bachelor of Computer Applications (BCA)", school: "Govt First Grade College For Women, Mangalore · 2020–2023", score: "8.01 CGPA" },
  { name: "Pre-University Course (PUC)", school: "Govt Pre University College, Kanyana · 2018–2020", score: "88%" },
  { name: "SSLC (10th)", school: "Govt High School, Kanyana · 2018", score: "76%" },
];

function Avatar({ initials = "DR" }) {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex-shrink-0 shadow-lg flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-[#f4f2ec] bg-gradient-to-br from-[#2c6e68] to-[#b5791f]">
      {initials}
    </div>
  );
}

function IconLink({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 font-mono text-[0.8rem] bg-white border border-[#ddd7c7] rounded-lg px-3 py-1.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:text-[#1d4d49] transition"
    >
      <Icon size={15} strokeWidth={1.8} />
      {children}
    </a>
  );
}

function SectionIntro({ icon: Icon, eyebrow, title }) {
  return (
    <div className="flex items-center gap-3 pt-11 pb-5">
      <div className="w-8 h-8 rounded-lg bg-[#e4efed] text-[#1d4d49] flex items-center justify-center flex-shrink-0">
        <Icon size={16} strokeWidth={1.8} />
      </div>
      <div>
        <p className="font-mono text-[0.76rem] text-[#1d4d49] m-0">{eyebrow}</p>
        <h2 className="text-[1.4rem] font-extrabold m-0 tracking-tight">{title}</h2>
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="font-mono text-[0.78rem] bg-[#ece7d8] text-[#1b211f] px-2.5 py-1 rounded-md border border-[#ddd7c7]">
      {children}
    </span>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={`bg-white border border-[#ddd7c7] rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f4f2ec] text-[#1b211f] font-sans leading-relaxed selection:bg-[#2c6e68] selection:text-[#f4f2ec]">
      <div className="max-w-[920px] mx-auto px-7">
        {/* Hero */}
        <header className="pt-16 pb-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-7 items-center text-center sm:text-left justify-items-center sm:justify-items-start">
          <Avatar />
          <div>
            <p className="font-mono text-[0.85rem] text-[#2c6e68] mb-2.5">
              $ whoami
              <span className="inline-block w-2 h-4 bg-[#2c6e68] ml-1 animate-pulse align-text-bottom" />
            </p>
            <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight tracking-tight mb-2">
              Dhanyashree R
            </h1>
            <p className="font-mono text-base text-[#5a635e] mb-5">
              PHP &amp; Python Developer
              <span className="text-[#ddd7c7] mx-2">/</span>
              2.5 yrs backend &amp; systems
              <span className="text-[#ddd7c7] mx-2">/</span>
              Mangalore, Karnataka
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
              <IconLink href="mailto:shreedhanya284@gmail.com" icon={Mail}>Email</IconLink>
              <IconLink href="tel:+918590695242" icon={Phone}>Call</IconLink>
              <IconLink href="https://github.com/DhanyaKulal" icon={Github}>GitHub</IconLink>
              <IconLink href="https://linkedin.com/in/dhanyashree-r-9a1106277" icon={Linkedin}>LinkedIn</IconLink>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section>
          <SectionIntro icon={Layers} eyebrow="summary" title="What I do" />
          <Card className="p-6">
            <p className="max-w-[62ch] text-[1.02rem] m-0">
              I build the backend that a web product actually runs on — PHP and Python
              services wired to MySQL, third-party APIs, and the occasional IP camera. Most
              of my work has been fixing, integrating and shipping systems that other
              people depend on daily: fee collection, admin dashboards, attendance
              tracking. I'm comfortable owning a feature from database schema to working
              UI, and I debug things until they stop breaking.
            </p>
          </Card>
        </section>

        {/* Skills */}
        <section>
          <SectionIntro icon={Code2} eyebrow="skills" title="What I work with" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <Card key={group.label} className="p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#f3e6cf] text-[#b5791f] flex items-center justify-center flex-shrink-0">
                    <group.icon size={15} strokeWidth={1.8} />
                  </div>
                  <p className="font-mono text-[0.8rem] font-semibold m-0">{group.label}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <SectionIntro icon={Briefcase} eyebrow="experience" title="Where I've worked" />
          <Card className="p-6">
            <p className="font-bold text-lg mb-0.5">PHP &amp; Python Developer — Ez Technologies</p>
            <p className="font-mono text-[0.8rem] text-[#5a635e] mb-4">2.5 years</p>
            <ul className="list-disc pl-5 marker:text-[#2c6e68] space-y-1.5">
              <li>Built and maintained web applications in PHP and Python</li>
              <li>Developed backend features and connected MySQL databases</li>
              <li>Integrated third-party APIs, including WhatsApp and payment gateways</li>
              <li>Fixed bugs and improved application performance</li>
              <li>Worked with a team to deliver project tasks on schedule</li>
            </ul>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <SectionIntro icon={FolderGit2} eyebrow="projects" title="Things I've built" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <Card key={p.name} className="p-5 hover:-translate-y-1 hover:shadow-lg transition">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#e4efed] text-[#1d4d49] flex items-center justify-center flex-shrink-0">
                    <p.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-bold text-[1.04rem] m-0">{p.name}</p>
                    <p className="font-mono text-[0.72rem] text-[#5a635e] m-0">{p.stack}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 marker:text-[#2c6e68] space-y-1.5 mt-3 text-[0.94rem]">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-4">
            <p className="font-mono text-[0.8rem] font-semibold m-0 mb-1">Additional projects</p>
            <ul className="columns-1 sm:columns-2 gap-7 list-none p-0 m-0">
              {additionalProjects.map((mp) => (
                <li
                  key={mp.name}
                  className="flex gap-2 text-[0.92rem] py-2.5 border-t border-[#ddd7c7] break-inside-avoid"
                >
                  <ChevronRight size={14} className="text-[#b5791f] mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">{mp.name}</span> — {mp.desc}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Education */}
        <section>
          <SectionIntro icon={GraduationCap} eyebrow="education" title="Where I studied" />
          <Card className="px-6">
            {education.map((e, i) => (
              <div
                key={e.name}
                className={`flex items-center gap-4 py-4 flex-wrap ${i > 0 ? "border-t border-[#ddd7c7]" : ""}`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#f3e6cf] text-[#b5791f] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={16} strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[0.98rem]">{e.name}</div>
                  <div className="text-[0.88rem] text-[#5a635e]">{e.school}</div>
                </div>
                <div className="font-mono text-[0.8rem] text-[#1d4d49] bg-[#e4efed] px-2.5 py-1 rounded-md whitespace-nowrap">
                  {e.score}
                </div>
              </div>
            ))}
          </Card>
        </section>

        {/* Languages */}
        <section>
          <SectionIntro icon={LanguagesIcon} eyebrow="languages" title="Languages" />
          <div className="flex flex-wrap gap-2">
            {["English", "Kannada", "Hindi", "Tulu"].map((lang) => (
              <Tag key={lang}>{lang}</Tag>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pb-16">
          <div className="rounded-2xl p-8 flex flex-wrap items-center justify-between gap-5 text-[#f4f2ec] bg-gradient-to-br from-[#1d4d49] to-[#2c6e68]">
            <div>
              <p className="text-xl font-extrabold m-0 mb-1">Open to backend and full-stack roles.</p>
              <p className="font-mono text-[0.82rem] m-0 opacity-85">$ status: available</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a href="mailto:shreedhanya284@gmail.com" className="inline-flex items-center gap-1.5 font-mono text-[0.8rem] bg-white/15 border border-white/30 rounded-lg px-3 py-2 hover:bg-white/25 transition">
                <Mail size={15} /> Email
              </a>
              <a href="tel:+918590695242" className="inline-flex items-center gap-1.5 font-mono text-[0.8rem] bg-white/15 border border-white/30 rounded-lg px-3 py-2 hover:bg-white/25 transition">
                <Phone size={15} /> Call
              </a>
              <a href="https://github.com/DhanyaKulal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[0.8rem] bg-white/15 border border-white/30 rounded-lg px-3 py-2 hover:bg-white/25 transition">
                <Github size={15} /> GitHub
              </a>
              <a href="https://linkedin.com/in/dhanyashree-r-9a1106277" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[0.8rem] bg-white/15 border border-white/30 rounded-lg px-3 py-2 hover:bg-white/25 transition">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
