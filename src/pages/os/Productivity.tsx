import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Play, Pause, RotateCcw, Target, CalendarDays, 
  Flame, CheckCircle2, Circle, Activity, ChevronRight, Check
} from "lucide-react";
import clsx from "clsx";

export default function Productivity() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"pomodoro" | "short" | "long">("pomodoro");

  useEffect(() => {
    let interval: any;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    if (mode === "pomodoro") setTimeLeft(25 * 60);
    if (mode === "short") setTimeLeft(5 * 60);
    if (mode === "long") setTimeLeft(15 * 60);
  };

  const setTimerMode = (m: "pomodoro" | "short" | "long") => {
    setMode(m);
    setIsRunning(false);
    if (m === "pomodoro") setTimeLeft(25 * 60);
    if (m === "short") setTimeLeft(5 * 60);
    if (m === "long") setTimeLeft(15 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const habits = [
    { id: 1, name: "LeetCode Daily", currentStreak: 12, done: false },
    { id: 2, name: "Read Paper", currentStreak: 5, done: true },
    { id: 3, name: "Cyber Lab Time", currentStreak: 21, done: true },
    { id: 4, name: "Workout 30m", currentStreak: 0, done: false },
  ];

  const targets = [
    { id: 1, text: "Finish ML Model Training", type: "daily", done: true },
    { id: 2, text: "Review React Codebase", type: "daily", done: false },
    { id: 3, text: "Hack the Box - 3 Boxes", type: "weekly", done: false },
    { id: 4, text: "Read 'Designing Data-Intensive Applications'", type: "monthly", done: false }
  ];

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Focus Protocol</h1>
          <p className="text-slate-400 text-sm font-mono tracking-widest uppercase">Deep Work Synchronization</p>
        </div>
        <div className="flex gap-4 items-center">
           <div className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-xl flex shadow-[0_0_15px_rgba(244,63,94,0.1)] gap-2 items-center">
              <Flame className="w-4 h-4 text-rose-400" />
              <span className="text-rose-400 font-bold font-mono">12 Day Streak</span>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Focus Control */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-[#0a0f1c] border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5 backdrop-blur-xl mb-12">
                 {[
                   { id: "pomodoro", label: "Focus (25m)" },
                   { id: "short", label: "Short Rest (5m)" },
                   { id: "long", label: "Long Rest (15m)" }
                 ].map(m => (
                   <button 
                     key={m.id}
                     onClick={() => setTimerMode(m.id as any)}
                     className={clsx(
                       "px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all",
                       mode === m.id ? "bg-white/10 text-white shadow-md border border-white/5" : "text-white/40 hover:text-white hover:bg-white/5"
                     )}
                   >
                     {m.label}
                   </button>
                 ))}
              </div>

              <div className="text-8xl md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 tabular-nums tracking-tighter drop-shadow-2xl mb-12">
                {formatTime(timeLeft)}
              </div>

              <div className="flex items-center gap-6">
                <button 
                  onClick={toggleTimer}
                  className="w-20 h-20 bg-cyan-500 hover:bg-cyan-400 text-black rounded-3xl flex items-center justify-center transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
                >
                  {isRunning ? <Pause className="w-8 h-8 fill-black" /> : <Play className="w-8 h-8 fill-black ml-2" />}
                </button>
                <button 
                  onClick={resetTimer}
                  className="w-14 h-14 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-2xl flex items-center justify-center transition-all border border-white/5 hover:border-white/10"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Targets Configuration */}
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                   <Target className="w-5 h-5 text-cyan-400" />
                   <h3 className="font-bold uppercase tracking-widest text-sm text-white">Active Objectives</h3>
                </div>
                <div className="space-y-3">
                   {targets.filter(t => t.type === 'daily').map(target => (
                     <div key={target.id} className="flex items-start gap-3 p-3 bg-black/20 rounded-xl border border-white/5">
                        <button className="mt-0.5">
                           {target.done ? <CheckCircle2 className="w-4 h-4 text-cyan-400" /> : <Circle className="w-4 h-4 text-slate-600" />}
                        </button>
                        <span className={clsx("text-sm", target.done ? "text-slate-500 line-through" : "text-slate-300")}>{target.text}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <div className="flex flex-col h-full justify-between">
                   <div>
                      <div className="flex items-center gap-3 mb-6">
                         <Activity className="w-5 h-5 text-indigo-400" />
                         <h3 className="font-bold uppercase tracking-widest text-sm text-white">Focus Index</h3>
                      </div>
                      <div className="text-4xl font-black text-white mb-2">4.2h</div>
                      <div className="text-xs text-emerald-400 font-mono tracking-widest uppercase mb-6">+1.1h over yesterday</div>
                   </div>
                   <div className="h-24 w-full flex items-end gap-2 pb-2">
                      {[30, 45, 20, 60, 80, 50, 90, 70, 40, 60, 85, 30, 55, 75].map((v, i) => (
                         <div key={i} className="flex-1 bg-indigo-500/20 rounded-t border border-indigo-500/10 hover:bg-cyan-400/50 transition-colors" style={{ height: `${v}%` }} title={`${v} min`} />
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex-1">
            <div className="flex items-center gap-3 mb-8">
               <CalendarDays className="w-5 h-5 text-purple-400" />
               <h3 className="font-bold uppercase tracking-widest text-sm text-white">Habit Protocol</h3>
            </div>
            
            <div className="space-y-4">
              {habits.map(habit => (
                <div key={habit.id} className="p-4 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                     <button className={clsx("w-6 h-6 rounded-md flex items-center justify-center transition-colors", habit.done ? "bg-purple-500 text-white" : "bg-white/10 text-transparent border border-white/10")}>
                        <Check className="w-4 h-4" />
                     </button>
                     <span className={clsx("text-sm font-bold", habit.done ? "text-slate-400" : "text-slate-200")}>{habit.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/5">
                     <Flame className={clsx("w-3 h-3", habit.currentStreak > 0 ? "text-orange-400" : "text-slate-600")} />
                     <span className="text-xs font-mono text-slate-400">{habit.currentStreak}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-white/10 border-dashed rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-white hover:border-white/30 transition-all">
               + Register Habit
            </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-black border border-indigo-500/20 rounded-3xl p-6">
             <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2 font-mono">System Insight</div>
             <p className="text-sm text-slate-300 leading-relaxed">
               You've maintained a top 10% focus consistency over the past 14 days. Deep work sessions average 48 minutes before disruption. Recommendation: Increase timer to 50m intervals.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}