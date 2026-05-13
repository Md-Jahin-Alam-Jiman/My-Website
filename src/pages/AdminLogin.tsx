import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Lock, ArrowLeft, Terminal, ShieldAlert } from "lucide-react";
import { useAppStore } from "../lib/store";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { adminCredentials, updateAdminCredentials } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "forgot" | "change">("login");
  const [errorMsg, setErrorMsg] = useState("");

  // Change password states
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (email === adminCredentials.email && password === adminCredentials.password) {
      navigate("/os");
    } else {
      setErrorMsg("Invalid Credentials. Access Denied.");
    }
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (email === adminCredentials.email) {
      alert(`Password Hint / Recovery sent to: ${email}\n(Mock feature: Your password is ${adminCredentials.password})`);
      setMode("login");
    } else {
      setErrorMsg("Email not found in system.");
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (email === adminCredentials.email && oldPassword === adminCredentials.password) {
      updateAdminCredentials({ password: newPassword });
      alert("Password updated successfully.");
      setMode("login");
    } else {
       setErrorMsg("Invalid original credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 text-slate-200">
      <Link to="/" className="absolute top-8 left-8 text-slate-500 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors">
        <ArrowLeft className="w-4 h-4" /> Terminate Session
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm"
      >
        <div className="bg-[#050914] border border-red-500/20 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-32 bg-red-500/10 blur-[100px] rounded-full point-events-none -mr-16 -mt-16" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-400 mb-6 group cursor-pointer hover:bg-red-500/20 transition-all">
              <Lock className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
            <h1 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">
              {mode === 'login' ? "Root Override" : mode === 'forgot' ? "Recover Access" : "Change Passphrase"}
            </h1>
            <p className="text-[10px] text-red-400/60 mb-6 font-mono tracking-widest uppercase">Unauthorized Access Strictly Prohibited</p>
            
            {errorMsg && (
              <div className="w-full mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-xs font-bold font-mono">
                 {errorMsg}
              </div>
            )}

            <AnimatePresence mode="wait">
              {mode === "login" && (
                <motion.form key="login" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onSubmit={handleLogin} className="w-full space-y-4">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Admin Email" 
                    className="w-full bg-black/50 border border-red-500/30 rounded-xl px-4 py-3 text-sm font-mono text-red-400 focus:outline-none focus:border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)] transition-colors placeholder:text-red-900" 
                  />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passphrase" 
                    className="w-full bg-black/50 border border-red-500/30 rounded-xl px-4 py-3 text-sm font-mono text-red-400 focus:outline-none focus:border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)] transition-colors placeholder:text-red-900" 
                  />
                  
                  <button className="w-full py-4 mt-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 font-bold uppercase tracking-widest rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                     Initialize OS <Terminal className="w-4 h-4" />
                  </button>

                  <div className="flex justify-between items-center mt-6 text-[10px] font-mono uppercase tracking-widest text-red-400/60 pt-4 border-t border-red-500/10 w-full">
                     <button type="button" onClick={() => { setMode("forgot"); setErrorMsg(""); }} className="hover:text-red-400 transition-colors">Forgot Passphrase?</button>
                     <button type="button" onClick={() => { setMode("change"); setErrorMsg(""); }} className="hover:text-red-400 transition-colors">Change Passphrase</button>
                  </div>
                </motion.form>
              )}

              {mode === "forgot" && (
                <motion.form key="forgot" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onSubmit={handleForgot} className="w-full space-y-4">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Admin Email" 
                    className="w-full bg-black/50 border border-red-500/30 rounded-xl px-4 py-3 text-sm font-mono text-red-400 focus:outline-none focus:border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)] transition-colors placeholder:text-red-900" 
                  />
                  
                  <button className="w-full py-4 mt-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 font-bold uppercase tracking-widest rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                     Recover <ShieldAlert className="w-4 h-4" />
                  </button>

                  <div className="text-center mt-6 text-[10px] font-mono uppercase tracking-widest text-red-400/60 pt-4 border-t border-red-500/10 w-full">
                     <button type="button" onClick={() => setMode("login")} className="hover:text-red-400 transition-colors">Back to Login</button>
                  </div>
                </motion.form>
              )}

              {mode === "change" && (
                <motion.form key="change" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onSubmit={handleChangePassword} className="w-full space-y-4">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Admin Email" 
                    className="w-full bg-black/50 border border-red-500/30 rounded-xl px-4 py-3 text-sm font-mono text-red-400 focus:outline-none focus:border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)] transition-colors placeholder:text-red-900" 
                  />
                  <input 
                    type="password" 
                    required
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Current Passphrase" 
                    className="w-full bg-black/50 border border-red-500/30 rounded-xl px-4 py-3 text-sm font-mono text-red-400 focus:outline-none focus:border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)] transition-colors placeholder:text-red-900" 
                  />
                  <input 
                    type="password" 
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Passphrase" 
                    className="w-full bg-black/50 border border-red-500/30 rounded-xl px-4 py-3 text-sm font-mono text-red-400 focus:outline-none focus:border-red-500 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)] transition-colors placeholder:text-red-900" 
                  />
                  
                  <button className="w-full py-4 mt-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 font-bold uppercase tracking-widest rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                     Update Key <ShieldAlert className="w-4 h-4" />
                  </button>

                  <div className="text-center mt-6 text-[10px] font-mono uppercase tracking-widest text-red-400/60 pt-4 border-t border-red-500/10 w-full">
                     <button type="button" onClick={() => setMode("login")} className="hover:text-red-400 transition-colors">Back to Login</button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
