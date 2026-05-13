import React from 'react';
import { Shield, ShieldAlert, Terminal, Lock, Network } from 'lucide-react';
import { motion } from 'motion/react';

export default function CyberLab() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
         <Shield className="text-red-500" /> Cyber Lab
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-0 overflow-hidden flex flex-col shadow-2xl col-span-1 md:col-span-2 backdrop-blur-xl">
            <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[10px] font-mono text-white/60 tracking-tight">root@aethercore: ~/cyber_lab/pentest_logs</div>
              <div className="w-10"></div>
            </div>
            <div className="flex-1 p-6 font-mono text-xs leading-relaxed text-white/80 h-96 overflow-y-auto">
               <div className="text-red-500 mb-2">root@aethercore:~# nmap -sV target_machine</div>
               <div className="text-white/60">Starting Nmap 7.93 ( https://nmap.org )</div>
               <div className="text-white/60">Nmap scan report for target_machine (10.10.11.20)</div>
               <div className="text-white/60">Host is up (0.042s latency).</div>
               <div className="mt-4 text-green-400">PORT     STATE SERVICE VERSION</div>
               <div>22/tcp   <span className="text-green-500 font-bold">open</span>  ssh     OpenSSH 8.2p1</div>
               <div>80/tcp   <span className="text-green-500 font-bold">open</span>  http    Apache httpd 2.4.41</div>
               <div className="text-amber-400">443/tcp  <span className="text-green-500 font-bold">open</span>  ssl/http Apache httpd 2.4.41</div>
               <div className="mt-6 text-red-500">root@aethercore:~# searchsploit Apache 2.4.41</div>
               <div className="animate-pulse mt-2 flex">
                 <span className="text-white/60 mr-2">&gt;</span>
                 <div className="w-2 h-4 bg-white/80"></div>
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
               <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                 <span className="p-1 bg-red-500/20 rounded text-red-400"><ShieldAlert className="w-4 h-4" /></span>
                 Active CTFs
               </h3>
               <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/10 cursor-pointer transition-colors">
                     <div className="font-bold text-sm text-white/90">HackTheBox: Analytics</div>
                     <div className="flex justify-between text-xs mt-2 font-mono">
                        <span className="text-white/40">Linux / Hard</span>
                        <span className="text-amber-500 font-bold">In Progress</span>
                     </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-white/10 cursor-pointer transition-colors">
                     <div className="font-bold text-sm text-white/90">TryHackMe: Web Fundamentals</div>
                     <div className="flex justify-between text-xs mt-2 font-mono">
                        <span className="text-white/40">Web / Easy</span>
                        <span className="text-emerald-500 font-bold">Completed</span>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
               <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                 <span className="p-1 bg-white/10 rounded text-white/60"><Lock className="w-4 h-4" /></span>
                 Security Snippets
               </h3>
               <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 hover:text-white transition-colors text-white/60">Reverse Shell</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 hover:text-white transition-colors text-white/60">XSS Payload</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 hover:text-white transition-colors text-white/60">PrivEsc Script</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
