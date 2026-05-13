import React from 'react';
import { BrainCircuit, Cpu, Database, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function AIHub() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
         <BrainCircuit className="text-purple-400" /> Neural Forge
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="p-1.5 bg-purple-500/20 rounded-md text-purple-400">
                      <Cpu className="w-5 h-5" />
                    </span>
                    Local Models Status
                  </h2>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">Ollama Running</span>
               </div>
               <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-xl border border-white/5">
                     <div>
                        <span className="text-white">llama3:8b-instruct</span>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Status: Unloaded • VRAM: 0GB</div>
                     </div>
                     <button className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Load</button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded-xl border border-purple-500/30">
                     <div>
                        <span className="text-white">qwen2.5-coder:7b</span>
                        <div className="text-[10px] text-emerald-400 uppercase tracking-widest mt-1">Status: Running • VRAM: 4.8GB</div>
                     </div>
                     <button className="text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Unload</button>
                  </div>
               </div>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
               <h2 className="text-lg font-bold mb-4 text-white">Active Experiments</h2>
               <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                     <thead className="text-[10px] text-white/40 uppercase tracking-widest font-mono border-b border-white/10">
                        <tr>
                           <th className="pb-3 font-normal">Experiment ID</th>
                           <th className="pb-3 font-normal">Dataset</th>
                           <th className="pb-3 font-normal">Epoch</th>
                           <th className="pb-3 font-normal">Loss</th>
                        </tr>
                     </thead>
                     <tbody className="text-white/80 font-mono">
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                           <td className="py-4 pl-2">EXP-774A</td>
                           <td className="py-4 text-cyan-400">synthetic_cyber.jsonl</td>
                           <td className="py-4">42/100</td>
                           <td className="py-4 text-emerald-400">1.042</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                           <td className="py-4 pl-2">EXP-892B</td>
                           <td className="py-4 text-purple-400">arxiv_abstracts_v2</td>
                           <td className="py-4">Completed</td>
                           <td className="py-4 text-emerald-400">0.821</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
               <h3 className="text-sm font-bold text-white/60 mb-4 flex items-center gap-2 uppercase tracking-widest">
                 <Database className="w-4 h-4" /> Vector Databases
               </h3>
               <div className="space-y-3">
                  <div className="p-3 border border-white/5 rounded-xl bg-black/40 flex justify-between items-center text-sm">
                     <span className="text-white/80">ChromaDB</span>
                     <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-1 rounded">ONLINE</span>
                  </div>
                  <div className="p-3 border border-white/5 rounded-xl bg-black/40 flex justify-between items-center text-sm">
                     <span className="text-white/80">Pinecone</span>
                     <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-1 rounded">CONNECTED</span>
                  </div>
               </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] border border-purple-500/30 rounded-2xl p-6 absolute lg:relative hidden lg:block bottom-0 lg:bottom-auto right-0 lg:right-auto m-6 lg:m-0 w-80 lg:w-auto h-auto relative overflow-hidden backdrop-blur-xl">
               <div className="absolute top-0 right-0 -mr-6 -mt-6 p-10 bg-purple-500/20 blur-2xl rounded-full"></div>
               <div className="relative z-10">
                 <div className="absolute top-0 right-0 text-purple-400"><Zap className="w-5 h-5" /></div>
                 <div className="text-[10px] text-purple-300 uppercase tracking-widest font-bold mb-2">AI Copilot</div>
                 <div className="text-sm text-purple-100/70 leading-relaxed mb-6">Agentic systems are standing by for architectural review and pair programming.</div>
                 <button className="w-full bg-purple-500 text-white text-xs font-bold py-3 rounded-xl shadow-lg shadow-purple-500/20 hover:bg-purple-400 transition-colors uppercase tracking-wider">Initialize Chat</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
