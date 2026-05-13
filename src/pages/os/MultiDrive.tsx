import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HardDrive, Cloud, AlertCircle, Plus, RefreshCw, Folder, File, Settings, PieChart } from 'lucide-react';
import { clsx } from "clsx";

export default function MultiDrive() {
  const [drives, setDrives] = useState([
    { id: 1, email: "jiman.dev@gmail.com", used: 12.5, total: 15, status: "warning" },
    { id: 2, email: "jiman.academic@gmail.com", used: 2.1, total: 15, status: "healthy" },
    { id: 3, email: "jiman.backup@gmail.com", used: 14.8, total: 15, status: "critical" },
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
             <Cloud className="text-cyan-400" />
             Core Storage Matrix
          </h1>
          <p className="text-white/40 text-sm">Unified Multi-Account Google Drive Management System.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm transition-colors flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Sync All
           </button>
           <button className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl text-sm transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Plus className="w-4 h-4" /> Connect Drive
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Drives Overview */}
         <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
               <span className="p-1.5 bg-blue-500/20 rounded-md text-blue-400">
                 <HardDrive className="w-5 h-5" />
               </span>
               Connected Nodes
            </h2>
            {drives.map((drive) => {
               const percentage = (drive.used / drive.total) * 100;
               return (
                  <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     key={drive.id}
                     className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors"
                  >
                     <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                           <div className={clsx(
                              "w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10",
                              drive.status === 'critical' ? 'text-red-400' : 
                              drive.status === 'warning' ? 'text-amber-400' : 'text-emerald-400'
                           )}>
                              <Cloud className="w-5 h-5" />
                           </div>
                           <div>
                              <div className="text-sm font-semibold">{drive.email}</div>
                              <div className="text-[10px] text-white/40 font-mono uppercase">ID: VOL-{drive.id}00X</div>
                           </div>
                        </div>
                        {drive.status === 'critical' && <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />}
                     </div>
                     <div className="space-y-1">
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-4">
                           <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              className={clsx(
                                 "h-full rounded-full",
                                 percentage > 90 ? "bg-red-500" :
                                 percentage > 75 ? "bg-amber-500" : "bg-cyan-400"
                              )}
                           />
                        </div>
                        <div className="flex justify-between text-[10px] pt-1 font-mono">
                           <span className="text-white/40">{drive.used.toFixed(1)} GB Used</span>
                           <span className="text-white/60">{drive.total} GB Total</span>
                        </div>
                     </div>
                  </motion.div>
               );
            })}
         </div>

         {/* Storage Analytics & Optimizer */}
         <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
               <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                  <span className="p-1.5 bg-purple-500/20 rounded-md text-purple-400">
                    <PieChart className="w-5 h-5" />
                  </span>
                  Global Cluster Usage
               </h2>
               <div className="flex items-center justify-center py-6">
                  <div className="relative w-48 h-48 flex items-center justify-center rounded-full border-8 border-white/5">
                     <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="50%" cy="50%" r="46%" className="stroke-cyan-500/50 stroke-[8%] fill-none" strokeDasharray="100 100" strokeDashoffset="25" />
                        <circle cx="50%" cy="50%" r="46%" className="stroke-indigo-500/50 stroke-[8%] fill-none" strokeDasharray="100 100" strokeDashoffset="75" />
                     </svg>
                     <div className="text-center">
                        <div className="text-3xl font-bold font-mono">29.4</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">GB Total Used</div>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4 text-center mt-2">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                     <div className="text-[10px] text-white/40 uppercase mb-1">Free Space</div>
                     <div className="text-lg font-mono text-emerald-400">15.6 GB</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                     <div className="text-[10px] text-white/40 uppercase mb-1">Utilization</div>
                     <div className="text-lg font-mono text-cyan-400">65%</div>
                  </div>
               </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl">
               <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-500/20 rounded-xl text-indigo-400 mt-1">
                     <Settings className="w-5 h-5" />
                  </div>
                  <div>
                     <h3 className="text-sm font-bold text-indigo-300">Smart Storage Optimizer</h3>
                     <p className="text-xs text-indigo-200/60 mt-1 mb-3">
                        AI-driven load balancing. Automatically redistributes files across available drives when space is critically low.
                     </p>
                     <button className="text-[10px] uppercase font-bold px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-500/20 transition-colors">
                        Run Optimization Sequence
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Unified File Explorer */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
         <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <span className="p-1 bg-emerald-500/20 rounded text-emerald-400"><Folder className="w-4 h-4" /></span>
              Unified File System
            </h3>
            <div className="flex gap-2">
               <div className="text-[10px] font-mono text-white/40 bg-black/40 px-2 py-1 rounded">/root/workspace</div>
            </div>
         </div>
         <div className="p-2">
            {[
               { name: "Academic Resources", type: "folder", drive: "jiman.academic@gmail.com", date: "2 mins ago" },
               { name: "Cybersecurity Labs", type: "folder", drive: "jiman.dev@gmail.com", date: "1 hr ago" },
               { name: "master_dataset.csv", type: "file", size: "2.4 GB", drive: "jiman.backup@gmail.com", date: "Yesterday" },
               { name: "neural_network.py", type: "file", size: "12 KB", drive: "jiman.dev@gmail.com", date: "Last week" },
            ].map((item, i) => (
               <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors group">
                  <div className="flex items-center gap-3">
                     {item.type === 'folder' ? <Folder className="w-5 h-5 text-cyan-400" /> : <File className="w-5 h-5 text-slate-400" />}
                     <span className="text-sm text-white/80 group-hover:text-white transition-colors">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-white/40 font-mono">
                     {item.size && <span className="w-16 text-right whitespace-nowrap">{item.size}</span>}
                     <span className="w-40 truncate inline-block hidden sm:block" title={item.drive}>{item.drive}</span>
                     <span className="w-24 text-right">{item.date}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
