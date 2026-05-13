import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, FileKey, ShieldAlert, KeyRound, Search, FileText } from 'lucide-react';

export default function PrivateVault() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "0000") {
      setIsUnlocked(true);
    } else {
      alert("Invalid Vault PIN. Try '0000'");
      setPin("");
    }
  };

  const handleLock = () => {
    setIsUnlocked(false);
    setPin("");
  };

  return (
    <div className="max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div 
            key="locked"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col items-center justify-center">
              <div className="absolute top-0 right-0 p-32 bg-red-500/10 blur-[100px] rounded-full point-events-none -mr-16 -mt-16" />
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-400 mb-6 group">
                <Lock className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-widest text-center">Encrypted Vault</h2>
              <p className="text-[10px] text-red-400/60 mb-8 font-mono tracking-widest uppercase text-center">AES-256 Client-Side Encryption</p>
              
              <form onSubmit={handleUnlock} className="w-full">
                <input 
                  type="password" 
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••" 
                  className="w-full bg-black/50 border border-red-500/30 rounded-2xl px-4 py-4 text-center text-2xl tracking-[1em] font-mono text-red-400 focus:outline-none focus:border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)] transition-colors mb-6" 
                />
                <button className="w-full py-4 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 font-bold uppercase tracking-widest rounded-xl text-xs transition-colors flex items-center justify-center gap-2">
                   Decrypt Keys <FileKey className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="unlocked"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="flex justify-between items-center mb-8 border-b border-red-500/20 pb-4">
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                   <ShieldAlert className="text-red-500" /> Secure Storage
                </h1>
                <p className="text-red-400/60 text-sm font-mono mt-1">Warning: Session expires in 5:00 minutes.</p>
              </div>
              <button 
                onClick={handleLock}
                className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                 <Lock className="w-3 h-3" /> Re-lock Vault
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-[#0a0505] border border-red-500/20 rounded-3xl p-6">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-6">
                     <KeyRound className="w-4 h-4 text-amber-500" /> API Keys & Secrets
                  </h3>
                  <div className="space-y-3 font-mono text-xs">
                     <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/10 flex justify-between items-center">
                        <span className="text-white/60">OPENAI_API_KEY</span>
                        <span className="text-white bg-black/50 px-2 py-1 rounded">sk-proj-7x9...a1b2</span>
                     </div>
                     <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/10 flex justify-between items-center">
                        <span className="text-white/60">ANTHROPIC_API_KEY</span>
                        <span className="text-white bg-black/50 px-2 py-1 rounded">sk-ant-api0...88zy</span>
                     </div>
                     <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/10 flex justify-between items-center">
                        <span className="text-white/60">AWS_ACCESS_KEY_ID</span>
                        <span className="text-white bg-black/50 px-2 py-1 rounded">AKIAIOSFODNN7EXAMPLE</span>
                     </div>
                  </div>
               </div>

               <div className="bg-[#0a0505] border border-red-500/20 rounded-3xl p-6">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-6">
                     <FileText className="w-4 h-4 text-emerald-500" /> Classified Notes
                  </h3>
                  <div className="relative mb-4">
                     <Search className="w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                     <input type="text" placeholder="Search encrypted strings..." className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-8 pr-3 font-mono text-xs text-white focus:outline-none focus:border-red-500/50" />
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                     <div className="p-3 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 cursor-pointer transition-colors line-clamp-1 text-slate-300">
                        Payload Delivery Spec (Zero-Day concept)
                     </div>
                     <div className="p-3 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 cursor-pointer transition-colors line-clamp-1 text-slate-300">
                        Project X Financials 2026.docx.enc
                     </div>
                     <div className="p-3 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 cursor-pointer transition-colors line-clamp-1 text-slate-300">
                        Backup Recovery Phrases.txt
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
