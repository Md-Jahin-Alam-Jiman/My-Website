import React from 'react';
import { BookOpen, GraduationCap, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function AcademicHub() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
         <GraduationCap className="text-fuchsia-400" /> Academic Matrix
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
         <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
            <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">Current CGPA</div>
            <div className="text-3xl font-bold font-mono text-fuchsia-400">3.84</div>
         </div>
         <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
            <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">Credits Earned</div>
            <div className="text-3xl font-bold font-mono text-white">96 <span className="text-lg text-white/40">/ 120</span></div>
         </div>
         <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
            <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">Pending Assignments</div>
            <div className="text-3xl font-bold font-mono text-amber-400">4</div>
         </div>
         <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
            <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">Next Exam</div>
            <div className="text-3xl font-bold font-mono text-cyan-400">12D</div>
         </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="p-1.5 bg-fuchsia-500/20 rounded-md text-fuchsia-400">
                <BookOpen className="w-5 h-5" />
              </span>
              Current Semester
            </h2>
            <div className="space-y-4">
               {['CS401: Artificial Intelligence', 'CS405: Cloud Computing', 'CS412: Cybersecurity Principles'].map((subject, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/40 hover:bg-white/10 rounded-xl border border-white/5 transition-colors cursor-pointer group">
                     <span className="font-semibold text-white/90 group-hover:text-white transition-colors">{subject}</span>
                     <span className="text-fuchsia-400 text-sm font-mono font-bold pl-2 bg-fuchsia-500/10 px-3 py-1 rounded-lg">A-</span>
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden">
            <Calendar className="absolute -bottom-6 -right-6 w-40 h-40 text-fuchsia-500/10" />
            <h2 className="text-lg font-bold mb-6 text-fuchsia-300 flex items-center gap-2 uppercase tracking-widest">
              Study Planner
            </h2>
            <div className="space-y-4 relative z-10">
               <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:border-fuchsia-500/30 transition-colors cursor-pointer">
                  <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest mb-1.5">Today, 18:00 - 20:00</div>
                  <div className="text-sm font-semibold text-white/90">Implement RAG Lab for CS401</div>
               </div>
               <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:border-fuchsia-500/30 transition-colors cursor-pointer">
                  <div className="text-[10px] text-fuchsia-400 uppercase font-mono tracking-widest mb-1.5">Tomorrow, 10:00 - 12:00</div>
                  <div className="text-sm font-semibold text-white/90">Cloud Computing Midterm Prep</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
