import React, { useState } from 'react';
import { BookOpen, GraduationCap, Calendar as CalendarIcon, FileText, ScanLine, BrainCircuit, Clock, FileArchive, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';
import clsx from 'clsx';
import { useAppStore } from '../../lib/store';

export default function AcademicHub() {
  const [activeTab, setActiveTab] = useState("overview");
  const { profile } = useAppStore();
  const subjects = profile.moduleData.academic.subjects;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
             <GraduationCap className="text-fuchsia-400" /> Academic Engine
          </h1>
          <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">Semester 8 Management System</p>
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
           {['overview', 'materials', 'ai_tools'].map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={clsx(
                 "px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                 activeTab === tab ? "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30" : "text-white/40 hover:text-white hover:bg-white/5"
               )}
             >
                {tab.replace('_', ' ')}
             </button>
           ))}
        </div>
      </div>

      {activeTab === "overview" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
             <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl relative overflow-hidden group hover:border-fuchsia-500/30 transition-colors">
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">Current CGPA</div>
                <div className="text-4xl font-bold font-mono text-fuchsia-400 relative z-10">3.84</div>
                <div className="absolute right-0 bottom-0 p-4 opacity-5 group-hover:scale-110 transition-transform text-white group-hover:text-fuchsia-400">
                  <GraduationCap className="w-20 h-20" />
                </div>
             </div>
             <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl">
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">Credits Earned</div>
                <div className="text-3xl font-bold font-mono text-white">112 <span className="text-lg text-white/40">/ 140</span></div>
             </div>
             <div className="p-6 bg-amber-500/5 border border-amber-500/20 backdrop-blur-xl rounded-3xl">
                <div className="text-amber-500/60 text-[10px] uppercase font-bold tracking-widest mb-2">Pending Assignments</div>
                <div className="text-3xl font-bold font-mono text-amber-400">4</div>
             </div>
             <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl">
                <div className="text-cyan-500/60 text-[10px] uppercase font-bold tracking-widest mb-2">Next Exam</div>
                <div className="text-3xl font-bold font-mono text-cyan-400">12 Days</div>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-3">
                  <span className="p-2 bg-fuchsia-500/20 rounded-xl text-fuchsia-400">
                    <BookOpen className="w-5 h-5" />
                  </span>
                  Current Semester Subjects
                </h2>
                <div className="space-y-4">
                   {subjects.map((subject) => (
                      <div key={subject.id} className="flex flex-col gap-2 p-5 bg-black/40 hover:bg-white/10 rounded-2xl border border-white/5 transition-colors cursor-pointer group">
                         <div className="flex flex-wrap justify-between items-start gap-4">
                           <span className="font-bold text-white/90 group-hover:text-white transition-colors text-sm">{subject.name}</span>
                           <span className="text-fuchsia-400 text-sm font-mono font-bold bg-fuchsia-500/10 px-3 py-1 rounded-lg border border-fuchsia-500/20">{subject.grade}</span>
                         </div>
                         <div className="flex gap-4 mt-2">
                           <span className="text-xs text-slate-500 font-mono">Attendance: <span className="text-slate-300">{subject.attendance}</span></span>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             <div className="bg-gradient-to-tr from-fuchsia-500/10 to-[#030712] border border-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">
                <CalendarIcon className="absolute -bottom-6 -right-6 w-64 h-64 text-fuchsia-500/5 rotate-12" />
                <h2 className="text-lg font-bold mb-6 text-fuchsia-300 flex items-center gap-3 uppercase tracking-widest">
                  Study Planner
                </h2>
                <div className="space-y-4 relative z-10">
                   <div className="bg-[#030712]/50 p-5 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase font-mono tracking-widest mb-2">
                         <Clock className="w-3 h-3 text-cyan-400" /> Today, 18:00 - 20:00
                      </div>
                      <div className="text-sm font-bold text-white/90">Implement RAG Lab for CS401</div>
                   </div>
                   <div className="bg-[#030712]/50 p-5 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2 text-[10px] text-fuchsia-400 uppercase font-mono tracking-widest mb-2">
                         <Clock className="w-3 h-3 text-fuchsia-400" /> Tomorrow, 10:00 - 12:00
                      </div>
                      <div className="text-sm font-bold text-white/90">Cloud Computing Midterm Prep</div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      )}

      {activeTab === "materials" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
           <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <FileText />, title: "PDF Notes", count: 42, color: "text-red-400", bg: "bg-red-500/10" },
                { icon: <FileArchive />, title: "Lab Zips", count: 18, color: "text-amber-400", bg: "bg-amber-500/10" },
                { icon: <CheckSquare />, title: "HW Docs", count: 24, color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: <ScanLine />, title: "Scanned Images", count: 156, color: "text-emerald-400", bg: "bg-emerald-500/10" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
                   <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", item.bg, item.color)}>
                     {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                   </div>
                   <h3 className="font-bold text-white mb-1">{item.title}</h3>
                   <p className="text-xs font-mono text-slate-500">{item.count} items stored</p>
                </div>
              ))}
           </div>
        </motion.div>
      )}

      {activeTab === "ai_tools" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
           <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-3xl p-6 relative overflow-hidden group">
                <BrainCircuit className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg text-white mb-2">AI Flashcards</h3>
                <p className="text-sm text-slate-400 mb-6">Auto-generate Anki-style flashcards from uploaded PDFs and Notes.</p>
                <button className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-purple-500/30 transition-colors">Generate</button>
             </div>
             
             <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-3xl p-6 relative overflow-hidden group">
                <ScanLine className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg text-white mb-2">Smart OCR</h3>
                <p className="text-sm text-slate-400 mb-6">Extract text from handwritten notes and convert formulas to LaTeX.</p>
                <button className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-cyan-500/30 transition-colors">Upload Image</button>
             </div>

             <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-6 relative overflow-hidden group">
                <CheckSquare className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg text-white mb-2">AI Quiz Generator</h3>
                <p className="text-sm text-slate-400 mb-6">Test your knowledge before the exam using dynamically generated MCQs.</p>
                <button className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/30 transition-colors">Start Quiz</button>
             </div>
           </div>
        </motion.div>
      )}
    </div>
  );
}
