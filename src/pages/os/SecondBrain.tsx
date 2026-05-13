import React, { useState } from 'react';
import { Network, Search, Hash, FileText, Brain, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

export default function SecondBrain() {
  const [activeNote, setActiveNote] = useState<number | null>(1);

  const notes = [
    { id: 1, title: 'Generative AI Architecture', tags: ['#ai', '#architecture'], preview: 'The foundational patterns for building robust LLM applications involve...', linked: [2, 4] },
    { id: 2, title: 'RAG Implementation Patterns', tags: ['#ai', '#rag', '#dev'], preview: 'Retrieval-Augmented Generation requires a strong vector database strategy...', linked: [1] },
    { id: 3, title: 'Zero-Trust Network Models', tags: ['#security', '#networking'], preview: 'Moving away from perimeter defense into continuous verification...', linked: [] },
    { id: 4, title: 'Vector Database Benchmarks', tags: ['#data', '#ai'], preview: 'Comparing Pinecone, Milvus, and Qdrant under heavy load...', linked: [1, 2] },
  ];

  return (
    <div className="h-full min-h-[600px] flex gap-6">
      
      {/* Sidebar: Note List & Search */}
      <div className="w-80 flex flex-col gap-4 shrink-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search the graph..." 
            className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/40"
          />
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
          {notes.map(note => (
            <div 
              key={note.id}
              onClick={() => setActiveNote(note.id)}
              className={clsx(
                "p-4 rounded-2xl border cursor-pointer transition-all backdrop-blur-xl group",
                activeNote === note.id 
                  ? "bg-cyan-500/10 border-cyan-500/30" 
                  : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
              )}
            >
              <h3 className="text-sm font-bold text-white mb-2">{note.title}</h3>
              <p className="text-xs text-white/60 line-clamp-2 mb-3 leading-relaxed">{note.preview}</p>
              <div className="flex flex-wrap gap-1.5">
                {note.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-black/40 text-cyan-400 font-mono tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col overflow-hidden relative">
        <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between bg-white/5">
           <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-widest text-white/40">
              <span className="hover:text-white cursor-pointer transition-colors">Vault</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-cyan-400">Generative AI Architecture.md</span>
           </div>
           <div className="flex items-center gap-3">
              <button className="text-white/40 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors" title="Graph View">
                 <Network className="w-4 h-4" />
              </button>
           </div>
        </div>
        
        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Generative AI Architecture</h1>
            <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-headings:font-bold max-w-none">
              <p className="font-mono text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-8 bg-cyan-500/10 inline-block px-3 py-1.5 rounded-lg border border-cyan-500/20">Metadata: [[RAG Implementation Patterns]], [[Vector Database Benchmarks]]</p>
              
              <p className="leading-relaxed">
                The foundational patterns for building robust LLM applications involve decoupling the 
                orchestration layer from the inference engine. This ensures we can swap models easily.
              </p>
              
              <h2 className="text-2xl mt-8 mb-4 border-b border-white/10 pb-2">Core Components</h2>
              <ul className="space-y-2 text-white/80 list-disc pl-5">
                 <li><strong className="text-white">Orchestrator:</strong> Manages state and prompt templating.</li>
                 <li><strong className="text-white">Vector Store:</strong> For semantic search and <span className="text-cyan-400 font-mono text-xs bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 rounded cursor-pointer hover:bg-cyan-500/20 transition-colors">[[RAG Implementation Patterns]]</span>.</li>
                 <li><strong className="text-white">Memory:</strong> Short-term session buffer and long-term knowledge graph.</li>
              </ul>
              
              <div className="my-10 p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-sm text-indigo-200">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-indigo-400" />
                  <strong className="font-bold text-indigo-300">AI Insight</strong>
                </div>
                <p className="opacity-80">Based on your recent notes, you might want to look into "Agentic Workflows" to improve the autonomy of the orchestrator layer.</p>
              </div>

              <pre className="bg-black/60 border border-white/10 rounded-xl p-4 mt-8">
                <code className="text-sm font-mono text-emerald-400">
{`// Example Orchestration Pattern
import { LLMChain } from 'langchain/chains';

const chain = new LLMChain({
  llm: model,
  prompt: template,
  memory: buffer
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
