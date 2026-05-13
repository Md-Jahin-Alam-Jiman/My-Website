import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Folder, MessageSquare, Calendar } from "lucide-react";

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <header className="flex justify-between items-center mb-12">
           <h1 className="text-2xl font-bold uppercase tracking-widest text-white">Client Portal</h1>
           <Link to="/" className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
              <LogOut className="w-4 h-4" /> Disconnect
           </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
              <Folder className="w-8 h-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">Project Files</h2>
              <p className="text-sm font-mono text-slate-400">Access invoices, deliverables, and shared assets.</p>
           </div>
           
           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
              <MessageSquare className="w-8 h-8 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">Secure Comms</h2>
              <p className="text-sm font-mono text-slate-400">Direct channel to J A. 2 unread messages.</p>
           </div>

           <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
              <Calendar className="w-8 h-8 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">Meetings</h2>
              <p className="text-sm font-mono text-slate-400">Schedule review calls or track upcoming milestones.</p>
           </div>
        </div>

        <div className="mt-12 p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl">
           <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Active Contract: AetherCore Integration</h3>
           <div className="h-2 bg-black rounded-full overflow-hidden mb-2 border border-white/5">
              <div className="h-full bg-cyan-400 w-[65%]" />
           </div>
           <div className="flex justify-between text-xs font-mono text-slate-500">
              <span>Phase 2: Backend Dev</span>
              <span>65% Complete</span>
           </div>
        </div>
      </div>
    </div>
  )
}