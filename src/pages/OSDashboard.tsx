import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  Terminal, Shield, Monitor as MonitorPlay, HardDrive, 
  BrainCircuit, LayoutDashboard, Folders, Settings, Menu, X, Code2, GraduationCap, Search
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

// Placeholders for nested routes
import Overview from "./os/Overview";
import AcademicHub from "./os/AcademicHub";
import DeveloperHub from "./os/DeveloperHub";
import AIHub from "./os/AIHub";
import CyberLab from "./os/CyberLab";
import MultiDrive from "./os/MultiDrive";
import SecondBrain from "./os/SecondBrain";

const SIDEBAR_ITEMS = [
  { path: "/os", icon: LayoutDashboard, label: "Core Console" },
  { path: "/os/academic", icon: GraduationCap, label: "Academic Hub" },
  { path: "/os/developer", icon: Code2, label: "Dev Matrix" },
  { path: "/os/ai", icon: BrainCircuit, label: "Neural Forge" },
  { path: "/os/cybersecurity", icon: Shield, label: "Cyber Lab" },
  { path: "/os/drive", icon: HardDrive, label: "Cloud Link" },
  { path: "/os/notes", icon: Folders, label: "Second Brain" },
];

export default function OSDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="flex bg-[#050608] text-slate-100 min-h-screen font-sans overflow-hidden selection:bg-cyan-500/30">
      
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
          "fixed md:relative z-50 h-screen bg-black/40 backdrop-blur-md border-r border-white/10 flex flex-col overflow-hidden shrink-0",
          sidebarOpen ? "w-64" : "w-0"
        )}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/10 shrink-0">
          <div className="flex items-center space-x-2 text-cyan-400 font-bold tracking-tight">
            <Terminal className="w-5 h-5" />
            <span className="text-sm text-white">AetherCore <span className="text-cyan-400">OS</span></span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white/40 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 mt-4 px-2">System Modules</div>
            {SIDEBAR_ITEMS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-xl text-sm transition-all relative overflow-hidden group",
                    active ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 relative z-10", active ? "text-cyan-400" : "text-white/40 group-hover:text-white transition-colors")} />
                  <span className="relative z-10 font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t border-white/10 shrink-0">
           <button className="flex items-center space-x-3 text-white/40 hover:text-white text-sm px-3 py-2 w-full rounded-xl hover:bg-white/5 transition-colors">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
           </button>
        </div>
      </motion.aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen relative">
        {/* Topbar */}
        <header className="h-14 border-b border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-30">
           <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hidden md:block p-1.5 text-white/40 hover:text-white border border-transparent hover:bg-white/5 rounded-md transition-colors mr-4"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex flex-col">
                 <span className="text-[10px] uppercase tracking-widest text-white/40 leading-none">C:\AetherCore\{location.pathname.replace('/os', '').replace('/', '') || 'Core'}</span>
              </div>
           </div>
           <div className="flex-1 max-w-md px-8 hidden md:block">
             <div className="relative flex items-center">
               <div className="absolute left-3 text-white/40">
                 <Search className="w-4 h-4" />
               </div>
               <input type="text" placeholder="Command + K for Global Search..." className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-xs focus:outline-none focus:border-cyan-500/50 transition-colors" />
             </div>
           </div>
           <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                 <span className="w-2 h-2 rounded-full bg-blue-500/30"></span>
                 <span className="w-2 h-2 rounded-full bg-purple-500/30"></span>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 bg-gradient-to-b from-white/10 to-transparent p-0.5">
                 <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-white">AC</div>
              </div>
           </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-auto p-6 bg-transparent">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/academic" element={<AcademicHub />} />
            <Route path="/developer" element={<DeveloperHub />} />
            <Route path="/ai" element={<AIHub />} />
            <Route path="/cybersecurity" element={<CyberLab />} />
            <Route path="/drive" element={<MultiDrive />} />
            <Route path="/notes" element={<SecondBrain />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
