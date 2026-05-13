import React from 'react';
import { Code2, GitMerge, TerminalSquare, Github, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function DeveloperHub() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
         <Code2 className="text-emerald-400" /> Dev Matrix
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="md:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2"><Github className="w-5 h-5" /> GitHub Pulse</h2>
                  <span className="text-[10px] text-emerald-400 font-mono tracking-wider">Total Commits: 842</span>
               </div>
               <div className="flex flex-wrap gap-1">
                  {Array.from({ length: 154 }).map((_, i) => (
                     <div 
                        key={i} 
                        className={`w-3 h-3 rounded-[2.5px] ${
                           Math.random() > 0.8 ? 'bg-emerald-400' :
                           Math.random() > 0.6 ? 'bg-emerald-600' :
                           Math.random() > 0.4 ? 'bg-emerald-800' : 'bg-white/5'
                        }`} 
                     />
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                     <Code2 className="w-20 h-20 text-emerald-500" />
                  </div>
                  <h3 className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2 relative z-10">LeetCode Progress</h3>
                  <div className="text-3xl font-mono font-bold mb-6 text-white relative z-10">128 <span className="text-[10px] font-sans text-white/40 uppercase tracking-widest">Solved</span></div>
                  <div className="space-y-3 text-xs font-mono relative z-10">
                     <div className="flex justify-between items-center"><span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">Easy</span> <span className="text-white/80">84</span></div>
                     <div className="flex justify-between items-center"><span className="text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">Medium</span> <span className="text-white/80">40</span></div>
                     <div className="flex justify-between items-center"><span className="text-red-500 bg-red-500/10 px-2 py-0.5 rounded">Hard</span> <span className="text-white/80">4</span></div>
                  </div>
               </div>
               <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Deep Work (Week)</h3>
                    <div className="text-3xl font-mono font-bold text-white">24.5 <span className="text-[10px] font-sans text-white/40 uppercase tracking-widest">Hours</span></div>
                  </div>
                  <div className="mt-4">
                    <Activity className="w-full h-12 text-emerald-500/50" />
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="p-1.5 bg-emerald-500/20 rounded-md text-emerald-400">
                <TerminalSquare className="w-5 h-5" />
              </span>
              Active Projects
            </h2>
            <div className="space-y-4">
               {[
                  { name: 'AetherCore OS', status: 'Active', lang: 'TypeScript', color: 'text-blue-400' },
                  { name: 'NeuralNet.rs', status: 'Paused', lang: 'Rust', color: 'text-orange-400' },
                  { name: 'VulnScanner', status: 'Active', lang: 'Python', color: 'text-yellow-400' },
               ].map((p, i) => (
                  <div key={i} className="p-4 bg-black/20 rounded-xl border border-white/5 group hover:border-emerald-500/30 hover:bg-white/5 transition-colors cursor-pointer">
                     <div className="font-bold text-sm mb-2 text-white/90 group-hover:text-emerald-400 transition-colors">{p.name}</div>
                     <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className={p.color}>{p.lang}</span>
                        <span className={p.status === 'Active' ? 'text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded' : 'text-white/40 bg-white/10 px-2 py-0.5 rounded'}>{p.status}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
