import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, Terminal, Shield, Brain, Code, Cpu, Network, Briefcase, 
  ChevronRight, Download, Send, User, ChevronDown, Mail, 
  MessageSquare, FileText, LayoutDashboard, Lock, LinkedinIcon, GithubIcon, TwitterIcon
} from "lucide-react";
import { useAppStore } from "../lib/store";
import { useTime } from "../lib/useTime";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const { profile } = useAppStore();
  const time = useTime('HH:mm:ss');

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[#030712] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#030712] to-[#030712] pointer-events-none" />
      <div className="fixed top-0 right-0 p-96 bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 p-96 bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              JA
            </div>
            <span className="text-xl font-bold tracking-widest text-white uppercase">
              J A
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden lg:block text-xs font-mono text-cyan-400 font-bold tracking-widest">{time}</div>
            <Link 
              to="/client-login"
              className="hidden md:flex px-4 py-2 rounded-lg text-slate-300 font-bold text-xs uppercase tracking-widest transition-all hover:bg-white/5"
            >
              Client Login
            </Link>
            <Link 
              to="/admin-login"
              className="px-5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-bold text-xs uppercase tracking-widest transition-all border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center gap-2"
            >
              <Lock className="w-3 h-3" /> Admin
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" /> System Online
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white leading-tight">
                {profile.hero.title.split('\n')[0]} <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
                  {profile.hero.title.split('\n')[1] || ''}
                </span>
              </h1>
              <div className="h-8 md:h-10 text-xl md:text-2xl font-mono text-slate-400">
                <TypewriterText text={profile.hero.subtitle} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                <Briefcase className="w-4 h-4" /> Hire Me
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                <a href={profile.hero.resumeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Download className="w-4 h-4" /> Resume
                </a>
              </button>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="About Identity" number="01" />
            <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Bridging Code, Intelligence, and Security.</h3>
                <p className="text-slate-400 leading-relaxed mb-6 font-mono text-sm">
                  {profile.about.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-black text-cyan-400 mb-1">{profile.about.experience}+</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Years Experience</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-black text-purple-400 mb-1">{profile.about.projectsCount}+</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Projects Deployed</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl" />
                <div className="relative aspect-square rounded-3xl border border-white/10 bg-[#030712]/50 backdrop-blur-xl p-8 overflow-hidden flex flex-col justify-center gap-6 font-mono">
                  <div className="p-4 bg-black/50 border border-white/5 rounded-xl text-xs text-emerald-400 shadow-2xl">
                    <span className="text-slate-500">const</span> developer = {"{"}<br/>
                    &nbsp;&nbsp;name: <span className="text-amber-300">"{profile.about.name}"</span>,<br/>
                    &nbsp;&nbsp;roles: [<br/>
                    {profile.about.roles.map((role, idx) => (
                      <span key={idx}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"{role}"</span>{idx < profile.about.roles.length - 1 ? ',' : ''}<br/>
                      </span>
                    ))}
                    &nbsp;&nbsp;],<br/>
                    &nbsp;&nbsp;status: <span className="text-amber-300">"{profile.about.status}"</span><br/>
                    {"}"};
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="Technical Capabilities" number="02" />
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {profile.skills.map((group, idx) => {
                const getIcon = (name: string) => {
                  switch (name) {
                    case "Code": return <Code />;
                    case "Brain": return <Brain />;
                    case "Shield": return <Shield />;
                    case "Network": return <Network />;
                    default: return <Code />;
                  }
                };
                return (
                <div key={idx} className="p-8 bg-[#0a0f1c] border border-white/5 rounded-3xl hover:border-white/10 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 text-white/5 group-hover:text-white/10 transition-colors group-hover:scale-110 duration-500">
                    {React.cloneElement(getIcon(group.iconName) as React.ReactElement<any>, { className: "w-32 h-32" })}
                  </div>
                  <div className="relative z-10">
                    <div className="text-cyan-400 mb-6">{getIcon(group.iconName)}</div>
                    <h4 className="text-lg font-bold text-white mb-6 font-mono">{group.title}</h4>
                    <ul className="space-y-4">
                      {group.items.map((skill, sIdx) => (
                        <li key={sIdx} className="space-y-2">
                          <div className="flex justify-between text-xs font-bold text-slate-400">
                            <span>{skill.name}</span>
                            <span className="text-slate-600 font-mono">{skill.level}%</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 * sIdx }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <SectionHeader title="Deployed Systems" number="03" />
              <button className="hidden md:flex px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                View GitHub <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.projects.map((proj, idx) => (
                <div key={idx} className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all flex flex-col">
                  <div className={"h-48 bg-gradient-to-br to-[#0a0f1c] " + proj.color + "/20 relative"}>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                       <a href={proj.link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-xl text-xs">Access Source</a>
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-2 font-mono">{proj.category}</div>
                      <h4 className="text-xl font-bold text-white mb-3">{proj.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">{proj.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map(t => (
                        <span key={t} className="px-3 py-1 bg-black/50 border border-white/10 rounded-md text-[10px] font-bold text-slate-300 font-mono tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#030712]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="p-8 md:p-16 rounded-[40px] bg-gradient-to-br from-indigo-900/20 to-cyan-900/10 border border-white/10 relative overflow-hidden backdrop-blur-2xl">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full -mr-96 -mt-96 pointer-events-none" />
              
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <SectionHeader title="Establish Link" number="04" />
                  <p className="mt-8 text-slate-400 leading-relaxed text-sm max-w-sm mb-8">
                    Open for freelance opportunities, AI research collaborations, and security consultations. Establish a secure channel below.
                  </p>
                  <div className="space-y-4">
                    <ContactLink icon={<Mail />} label="Email Protocol" value={profile.contact.email} />
                    <ContactLink icon={<LinkedinIcon />} label="LinkedIn Grid" value={profile.contact.linkedin} />
                    <ContactLink icon={<GithubIcon />} label="Git Repository" value={profile.contact.github} />
                  </div>
                </div>

                <div className="bg-[#030712]/80 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
                  <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Transmit Message</h4>
                  <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="IDENTITY / NAME" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 font-mono" />
                    <input type="email" placeholder="RETURN ADDRESS / EMAIL" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 font-mono" />
                    <textarea placeholder="PAYLOAD / MESSAGE" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 font-mono"></textarea>
                    <button className="w-full py-4 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-bold uppercase tracking-widest rounded-xl text-xs transition-colors border border-cyan-500/30 flex items-center justify-center gap-2">
                       <Send className="w-4 h-4" /> Transmit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 bg-[#010308] relative z-10 text-center text-xs text-slate-600 font-mono uppercase tracking-widest">
         <p>J A Operating System &copy; {new Date().getFullYear()}. All Systems Nominal.</p>
         <div className="flex justify-center gap-6 mt-4">
            <Link to="/client-login" className="hover:text-cyan-400 transition-colors">Client Portal</Link>
            <Link to="/admin-login" className="hover:text-cyan-400 transition-colors">Admin OS Override</Link>
         </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, number }: { title: string, number: string }) {
  return (
    <div className="flex items-end gap-6 mb-8 group">
      <div className="text-6xl md:text-8xl font-black text-white/5 font-mono group-hover:text-white/10 transition-colors">{number}</div>
      <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest">{title}</h2>
    </div>
  )
}

function ContactLink({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group">
      <div className="p-3 bg-black/50 rounded-xl text-cyan-400 border border-white/5 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
      </div>
      <div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold font-mono mb-1">{label}</div>
        <div className="text-sm font-bold text-slate-300">{value}</div>
      </div>
    </div>
  )
}

