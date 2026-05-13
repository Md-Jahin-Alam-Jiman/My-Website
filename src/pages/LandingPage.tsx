import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Globe, Terminal, Shield, Brain, HardDrive, Code, Cpu } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050608] text-slate-100 font-sans selection:bg-cyan-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050608] to-[#050608] pointer-events-none" />
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
              AetherCore OS
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#github" className="hover:text-cyan-400 transition-colors">GitHub</a>
          </div>
          <Link 
            to="/os"
            className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/10"
          >
            Launch System
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Your Digital <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600">
                Operating System
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              A futuristic all-in-one workspace for AI engineers, cybersecurity researchers, and developers. Integrate your academic life, coding workflow, and global knowledge base.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              to="/os" 
              className="group relative px-8 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg text-sm font-medium transition-all"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span>Initialize Core</span>
              </span>
              <div className="absolute inset-0 h-full w-full rounded-lg blur-md bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-all opacity-0 group-hover:opacity-100" />
            </Link>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-7xl mx-auto px-6 mt-32 grid md:grid-cols-3 gap-6 relative z-10">
          {[
            { icon: <Brain />, title: "Second Brain", desc: "Obsidian-like knowledge graph with bidirectional linking and AI summaries." },
            { icon: <Terminal />, title: "Developer Workflow", desc: "GitHub stats, LeetCode tracking, and Monaco editor integration." },
            { icon: <HardDrive />, title: "Multi-Drive System", desc: "Automated storage management across multiple Google Drive accounts." },
            { icon: <Shield />, title: "Cybersecurity Lab", desc: "CTF trackers, vulnerability logs, and payload snippets." },
            { icon: <Code />, title: "AI Engineering", desc: "Model architecture tracking, dataset management, and local LLM chat." },
            { icon: <Globe />, title: "Public Portfolio", desc: "Showcase your academic achievements, blogs, and live projects." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
