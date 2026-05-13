import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Lock, ArrowLeft, Send } from "lucide-react";

export default function ClientLogin() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login logic
    navigate("/client");
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 text-slate-200">
      <Link to="/" className="absolute top-8 left-8 text-slate-500 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors">
        <ArrowLeft className="w-4 h-4" /> Return Home
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#0a0f1c] border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-[100px] rounded-full point-events-none -mr-16 -mt-16" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Client Portal</h1>
            <p className="text-sm text-slate-400 mb-8 font-mono">Authenticate to access project files and messages.</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">Access ID (Email)</label>
                <input required type="email" placeholder="client@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 font-mono">Passphrase</label>
                <input required type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors" />
              </div>
              
              <button className="w-full py-4 mt-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl text-xs transition-colors hover:bg-slate-200 flex items-center justify-center gap-2">
                 Authenticate <Send className="w-4 h-4" />
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
               <p className="text-xs text-slate-500 font-mono">Need access? <a href="/#contact" className="text-cyan-400 hover:underline">Request credentials.</a></p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
