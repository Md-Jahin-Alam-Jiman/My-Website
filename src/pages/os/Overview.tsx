import React from 'react';
import { motion } from 'motion/react';
import { HardDrive, Activity, Cpu, Network, Code, Server, BookOpen } from 'lucide-react';
import { useAppStore } from '../../lib/store';

export default function Overview() {
  const { profile } = useAppStore();
  const tasks = profile.moduleData.overview.tasks;
  const stats = [
    { label: "Memory Usage", value: "3.4 GB", icon: Cpu, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Cloud Storage", value: "45% Full", icon: HardDrive, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { label: "Network IO", value: "12 mbps", icon: Network, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Active Modules", value: "8/12", icon: Activity, color: "text-purple-400", bg: "bg-purple-500/10" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">System Overview</h1>
        <p className="text-white/40">Welcome back, Commander. All systems operating at nominal efficiency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon className={`w-16 h-16 ${stat.color}`} />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div className="font-bold flex items-center gap-2 mb-4">
                 <span className={`p-1.5 ${stat.bg} rounded-md ${stat.color}`}>
                   <stat.icon className="w-4 h-4" />
                 </span>
                 <span className="text-sm text-white/60">{stat.label}</span>
               </div>
               <span className="text-3xl font-bold font-mono">{stat.value}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6"
        >
           <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
             <span className="p-1.5 bg-blue-500/20 rounded-md text-blue-400">
               <Code className="w-5 h-5" />
             </span>
             Recent Activity Log
           </h2>
           <div className="space-y-3 font-mono text-xs">
              {[
                { time: "08:12:45", msg: "IndexedDB initialized. Local storage ready.", type: "system", color: "text-indigo-400" },
                { time: "08:10:02", msg: "Commit pushed to remote origin/main.", type: "dev", color: "text-emerald-400" },
                { time: "07:55:10", msg: "Cloud drive synced: 14 files updated.", type: "drive", color: "text-cyan-400" },
                { time: "07:42:33", msg: "NeuralForge training epoch 45/100 completed.", type: "ai", color: "text-purple-400" },
                { time: "07:15:00", msg: "System boot sequence complete.", type: "system", color: "text-indigo-400" },
              ].map((log, i) => (
                 <div key={i} className="flex space-x-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/10 px-2 rounded -mx-2 transition-colors">
                    <span className="text-white/40">{log.time}</span>
                    <span className={`${log.color}`}>[{log.type.toUpperCase()}]</span>
                    <span className="text-white/80">{log.msg}</span>
                 </div>
              ))}
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6"
        >
           <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
             <span className="p-1.5 bg-amber-500/20 rounded-md text-amber-400">
               <BookOpen className="w-5 h-5" />
             </span>
             Quick Tasks
           </h2>
           <div className="space-y-2 text-sm">
              {tasks.map((task) => (
                 <label key={task.id} className="flex items-start space-x-3 p-3 rounded-lg bg-black/20 hover:bg-white/10 border border-white/5 cursor-pointer transition-colors">
                    <input type="checkbox" defaultChecked={task.completed} className="mt-1 bg-black border-white/20 rounded text-cyan-500 focus:ring-cyan-500/20" />
                    <span className="text-white/80">{task.name}</span>
                 </label>
              ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
}
