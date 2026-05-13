import React, { useState } from 'react';
import { Code2, GitMerge, TerminalSquare, Github, Activity, LinkedinIcon, Briefcase, FileText, Users, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { useAppStore } from '../../lib/store';

export default function DeveloperHub() {
  const [activeTab, setActiveTab] = useState("coding");
  const { profile } = useAppStore();
  const projects = profile.moduleData.developer.projects;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
             <Code2 className="text-emerald-400" /> Dev Matrix
          </h1>
          <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">Developer & Career Pipeline</p>
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
           {['coding', 'career', 'resume'].map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={clsx(
                 "px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                 activeTab === tab ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "text-white/40 hover:text-white hover:bg-white/5"
               )}
             >
                {tab}
             </button>
           ))}
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {activeTab === "coding" && (
          <motion.div key="coding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="md:col-span-2 space-y-6">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                     <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-3">
                          <Github className="w-5 h-5 text-emerald-400" /> GitHub Graph
                        </h2>
                        <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg text-emerald-400 font-mono tracking-wider font-bold">Total Commits: 842</span>
                     </div>
                     <div className="flex flex-wrap gap-1.5">
                        {Array.from({ length: 220 }).map((_, i) => (
                           <div 
                              key={i} 
                              className={clsx(
                                "w-3.5 h-3.5 rounded-[3px] transition-colors hover:scale-125 hover:z-10 relative",
                                Math.random() > 0.8 ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' :
                                Math.random() > 0.6 ? 'bg-emerald-600' :
                                Math.random() > 0.4 ? 'bg-emerald-800' : 'bg-white/5'
                              )}
                           />
                        ))}
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                     <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                           <Code2 className="w-32 h-32 text-emerald-500" />
                        </div>
                        <h3 className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2 relative z-10">LeetCode Protocol</h3>
                        <div className="text-4xl font-mono font-bold mb-6 text-white relative z-10 mt-4">128 <span className="text-[10px] font-sans text-white/40 uppercase tracking-widest">Solved</span></div>
                        <div className="space-y-4 text-xs font-mono relative z-10 w-3/4">
                           <div className="flex justify-between items-center"><span className="text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">Easy</span> <span className="text-white font-bold">84</span></div>
                           <div className="flex justify-between items-center"><span className="text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md">Medium</span> <span className="text-white font-bold">40</span></div>
                           <div className="flex justify-between items-center"><span className="text-rose-400 bg-rose-500/10 px-2 py-1 rounded-md">Hard</span> <span className="text-white font-bold">4</span></div>
                        </div>
                     </div>
                     <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">Deep Work (Week)</h3>
                          <div className="text-4xl font-mono font-bold text-white mt-4">24.5 <span className="text-[10px] font-sans text-white/40 uppercase tracking-widest">Hrs</span></div>
                        </div>
                        <div className="mt-8 flex items-end h-24 gap-2">
                           {[2, 4, 3, 6, 8, 5, 7].map((h, i) => (
                             <div key={i} className="bg-cyan-500/20 hover:bg-cyan-400 w-full rounded-t-sm transition-colors cursor-pointer" style={{ height: `${h * 10}%` }} title={`${h}h`} />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                  <h2 className="text-lg font-bold mb-8 text-white flex items-center gap-3">
                    <span className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400">
                      <TerminalSquare className="w-5 h-5" />
                    </span>
                    Active Projects
                  </h2>
                  <div className="space-y-4">
                     {projects.map((p, i) => (
                        <div key={i} className="p-5 bg-[#030712]/50 rounded-2xl border border-white/5 group hover:border-emerald-500/30 hover:bg-white/5 transition-colors cursor-pointer relative overflow-hidden">
                           <div className={clsx("absolute left-0 top-0 bottom-0 w-1 opacity-50", p.border.replace('border-', 'bg-'))} />
                           <div className="font-bold text-sm mb-3 text-white/90 group-hover:text-emerald-400 transition-colors pl-2">{p.name}</div>
                           <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest pl-2">
                              <span className={clsx("font-mono", p.color)}>{p.lang}</span>
                              <span className={clsx("px-2 py-1 rounded-md", p.status === 'Active' ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 bg-white/10')}>{p.status}</span>
                           </div>
                        </div>
                     ))}
                  </div>
                  <button className="w-full mt-6 py-4 border border-white/10 border-dashed rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-white hover:border-white/30 transition-all">
                     + Connect Repo
                  </button>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === "career" && (
          <motion.div key="career" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 gap-6">
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-3">
                  <span className="p-2 bg-blue-500/20 rounded-xl text-blue-400">
                    <Briefcase className="w-5 h-5" />
                  </span>
                  Job / Internship Applications
                </h2>
                <div className="space-y-4">
                  {[
                    { company: "Google", role: "Software Engineer Intern", status: "Interview", date: "2 days ago" },
                    { company: "CyberArk", role: "Security Researcher", status: "Applied", date: "1 week ago" },
                    { company: "OpenAI", role: "AI Engineer", status: "Rejected", date: "2 weeks ago" }
                  ].map((job, i) => (
                    <div key={i} className="p-5 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-between">
                       <div>
                         <h4 className="font-bold text-white mb-1">{job.company}</h4>
                         <p className="text-xs font-mono text-slate-400">{job.role}</p>
                       </div>
                       <div className="text-right">
                         <div className={clsx(
                           "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-1 inline-block",
                           job.status === 'Interview' ? 'bg-cyan-500/10 text-cyan-400' :
                           job.status === 'Applied' ? 'bg-amber-500/10 text-amber-400' : 'bg-red-500/10 text-red-400'
                         )}>
                           {job.status}
                         </div>
                         <div className="text-[10px] text-slate-500 font-mono block">{job.date}</div>
                       </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-4 border border-white/10 border-dashed rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-white hover:border-white/30 transition-all flex items-center justify-center gap-2">
                   Add Application <ChevronRight className="w-4 h-4" />
                </button>
             </div>

             <div className="bg-[#0077b5]/10 border border-[#0077b5]/20 rounded-3xl p-8">
                <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-3">
                  <span className="p-2 bg-[#0077b5]/20 rounded-xl text-[#0077b5]">
                    <LinkedinIcon className="w-5 h-5" />
                  </span>
                  Networking Tracker
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Connections</div>
                      <div className="text-2xl font-mono font-bold text-[#0077b5]">1,204</div>
                   </div>
                   <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Messages Sent</div>
                      <div className="text-2xl font-mono font-bold text-white">45</div>
                   </div>
                </div>
                <div className="space-y-4">
                   <h3 className="text-xs font-bold uppercase tracking-widest text-[#0077b5]">Recent Outreach</h3>
                   {[
                     { name: "Sarah Jenkins", role: "Recruiter @ TechCorp", status: "Awaiting Reply" },
                     { name: "David Chen", role: "Senior AI Eng @ DeepMind", status: "Replied" }
                   ].map((person, i) => (
                     <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">{person.name.charAt(0)}</div>
                          <div>
                            <div className="text-sm font-bold text-white">{person.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{person.role}</div>
                          </div>
                        </div>
                        <span className={clsx("text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded", person.status === 'Replied' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400')}>{person.status}</span>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === "resume" && (
          <motion.div key="resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto">
             <div className="flex justify-between items-center mb-8 pb-8 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">J_A_Resume_2026.pdf</h2>
                    <p className="text-sm font-mono text-slate-400">Last updated: 2 days ago</p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors">
                  Download
                </button>
             </div>
             
             <div className="space-y-6">
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Resume Versions</h3>
                   {["AI Engineer Role", "Full-Stack Role", "Cybersecurity Role"].map((role, i) => (
                     <div key={i} className="flex justify-between items-center p-4 bg-black/40 rounded-xl border border-white/5 mb-3 hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{role} Tailored CV</div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400" />
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
