import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  Terminal, Shield, Monitor as MonitorPlay, HardDrive, 
  BrainCircuit, LayoutDashboard, Folders, Settings, Menu, X, Code2, GraduationCap, Search, Timer, LockKeyhole
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { useAppStore } from "../lib/store";

import { useTime } from "../lib/useTime";

// Placeholders for nested routes
import Overview from "./os/Overview";
import AcademicHub from "./os/AcademicHub";
import DeveloperHub from "./os/DeveloperHub";
import AIHub from "./os/AIHub";
import CyberLab from "./os/CyberLab";
import MultiDrive from "./os/MultiDrive";
import SecondBrain from "./os/SecondBrain";
import Productivity from "./os/Productivity";
import PrivateVault from "./os/PrivateVault";
import CMS from "./os/CMS";

const getIcon = (name: string) => {
  switch(name) {
    case 'GraduationCap': return GraduationCap;
    case 'Code2': return Code2;
    case 'BrainCircuit': return BrainCircuit;
    case 'Shield': return Shield;
    case 'Timer': return Timer;
    case 'HardDrive': return HardDrive;
    case 'Folders': return Folders;
    case 'LockKeyhole': return LockKeyhole;
    default: return LayoutDashboard;
  }
};

export default function OSDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { profile } = useAppStore();
  const time = useTime('HH:mm:ss');
  const date = useTime('d MMM, yyyy');

  return (
    <div className="flex bg-[#030712] text-slate-100 min-h-screen font-sans overflow-hidden selection:bg-cyan-500/30">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {!sidebarOpen && (
          <div className="md:hidden">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="fixed top-4 left-4 z-50 p-2 bg-white/5 border border-white/10 rounded-md backdrop-blur-md"
            >
              <Menu className="w-5 h-5 text-slate-300" />
            </button>
          </div>
        )}
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? "256px" : "0px" }}
        className={cn(
          "fixed md:relative z-50 h-screen bg-[#030712]/80 backdrop-blur-xl border-r border-white/5 flex flex-col overflow-hidden shrink-0",
          sidebarOpen ? "w-64" : "w-0"
        )}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/5 shrink-0">
          <div className="flex items-center space-x-2 text-white font-bold tracking-tight">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(6,182,212,0.5)] text-xs">
              JA
            </div>
            <span className="text-sm text-white uppercase tracking-widest">J A <span className="text-cyan-400">OS</span></span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white/40 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 mt-4 px-2">System Modules</div>
            <Link
              to="/os"
              className={cn(
                "flex items-center space-x-3 px-3 py-3 rounded-xl text-sm transition-all relative overflow-hidden group mb-1",
                location.pathname === "/os" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <LayoutDashboard className={cn("w-4 h-4 relative z-10", location.pathname === "/os" ? "text-cyan-400" : "text-white/40 group-hover:text-white transition-colors")} />
              <span className="relative z-10 font-bold tracking-wide">Core Console</span>
            </Link>
            {profile.systemModules.filter(m => m.enabled).map((item) => {
              const active = location.pathname === item.path;
              const Icon = getIcon(item.icon);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-xl text-sm transition-all relative overflow-hidden group mb-1",
                    active ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                  )}
                >
                  <Icon className={cn("w-4 h-4 relative z-10", active ? "text-cyan-400" : "text-white/40 group-hover:text-white transition-colors")} />
                  <span className="relative z-10 font-bold tracking-wide">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t border-white/5 shrink-0 bg-white/[0.01]">
           <Link to="/os/cms" className={cn(
             "flex items-center space-x-3 px-3 py-3 w-full rounded-xl transition-all group border",
             location.pathname === "/os/cms" ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" : "text-white/40 hover:text-white hover:bg-white/5 border-transparent"
           )}>
              <Settings className={cn("w-4 h-4 transition-transform", location.pathname !== "/os/cms" && "group-hover:rotate-90")} />
              <span className="font-bold tracking-wide text-sm">Settings</span>
           </Link>
        </div>
      </motion.aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen relative bg-gradient-to-br from-[#030712] to-[#0a0f25]/50">
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
        
        {/* Topbar */}
        <header className="h-14 border-b border-white/5 bg-white/[0.02] backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-30">
           <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hidden md:block p-1.5 text-white/40 hover:text-white border border-transparent hover:bg-white/5 rounded-md transition-colors mr-4"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex flex-col">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 leading-none font-mono">C:\JA_OS\{location.pathname.replace('/os', '').replace('/', '') || 'Core'}</span>
              </div>
           </div>
           <div className="flex-1 max-w-md px-8 hidden md:block">
             <div className="relative flex items-center">
               <div className="absolute left-3 text-white/40">
                 <Search className="w-4 h-4" />
               </div>
               <input type="text" placeholder="Command + K for System Search..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-cyan-500/50 transition-colors font-mono" />
             </div>
           </div>
           <div className="hidden lg:flex items-center gap-4 text-xs font-mono mr-4 tracking-widest text-white/60">
             <span className="text-cyan-400 font-bold">{time}</span>
             <span>|</span>
             <span>{date}</span>
           </div>
           <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                 <span className="w-2 h-2 rounded-full bg-blue-500/30"></span>
                 <span className="w-2 h-2 rounded-full bg-yellow-500/30 shadow-[0_0_8px_rgba(234,179,8,0.3)]"></span>
              </div>
              <Link to="/" className="w-8 h-8 flex items-center justify-center text-xs font-bold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors cursor-pointer" title="Disconnect">
                JA
              </Link>
           </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-auto p-6 md:p-8 relative z-10 custom-scrollbar">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/academic" element={<AcademicHub />} />
            <Route path="/developer" element={<DeveloperHub />} />
            <Route path="/ai" element={<AIHub />} />
            <Route path="/cybersecurity" element={<CyberLab />} />
            <Route path="/drive" element={<MultiDrive />} />
            <Route path="/notes" element={<SecondBrain />} />
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/vault" element={<PrivateVault />} />
            <Route path="/cms" element={<CMS />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
