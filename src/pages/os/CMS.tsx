import React, { useState } from 'react';
import { useAppStore } from '../../lib/store';
import { Save, User, Code, Briefcase, Mail, Plus, Trash, LayoutDashboard, Folder } from 'lucide-react';

export default function CMS() {
  const { profile, updateProfile } = useAppStore();
  const [formData, setFormData] = useState(profile);
  const [activeTab, setActiveTab] = useState('hero');

  const handleSave = () => {
    updateProfile(formData);
    alert("Profile data updated successfully!");
  };

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'modules', label: 'System Modules', icon: LayoutDashboard },
    { id: 'moduledata', label: 'Module Content', icon: Folder },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
       <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Content Management</h1>
            <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">Global Profile Data Sync</p>
          </div>
          <button 
             onClick={handleSave}
             className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
       </div>

       <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto custom-scrollbar">
          {tabs.map(tab => (
            <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                 activeTab === tab.id ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "text-white/40 hover:text-white hover:bg-white/5"
               }`}
            >
               <tab.icon className="w-4 h-4" /> {tab.label}
            </button>
          ))}
       </div>

       <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          {activeTab === 'hero' && (
             <div className="space-y-6">
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Main Title</label>
                   <textarea rows={2} value={formData.hero.title} onChange={e => setFormData({...formData, hero: {...formData.hero, title: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                </div>
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Subtitle / Typewriter</label>
                   <input value={formData.hero.subtitle} onChange={e => setFormData({...formData, hero: {...formData.hero, subtitle: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                </div>
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Resume Drive Link</label>
                   <input value={formData.hero.resumeLink} onChange={e => setFormData({...formData, hero: {...formData.hero, resumeLink: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                </div>
             </div>
          )}

          {activeTab === 'about' && (
             <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Name</label>
                     <input value={formData.about.name} onChange={e => setFormData({...formData, about: {...formData.about, name: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                  </div>
                  <div>
                     <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Current Status</label>
                     <input value={formData.about.status} onChange={e => setFormData({...formData, about: {...formData.about, status: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                  </div>
                </div>
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Description</label>
                   <textarea rows={4} value={formData.about.description} onChange={e => setFormData({...formData, about: {...formData.about, description: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Years of Experience</label>
                     <input type="number" value={formData.about.experience} onChange={e => setFormData({...formData, about: {...formData.about, experience: parseInt(e.target.value)}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                  </div>
                  <div>
                     <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Projects Deployed</label>
                     <input type="number" value={formData.about.projectsCount} onChange={e => setFormData({...formData, about: {...formData.about, projectsCount: parseInt(e.target.value)}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                  </div>
                </div>
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Roles</label>
                   <div className="space-y-3">
                      {formData.about.roles.map((role, rIdx) => (
                         <div key={rIdx} className="flex gap-4">
                           <input value={role} onChange={e => {
                              const newRoles = [...formData.about.roles];
                              newRoles[rIdx] = e.target.value;
                              setFormData({...formData, about: {...formData.about, roles: newRoles}});
                           }} className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-cyan-500/50 outline-none" />
                           <button onClick={() => {
                              const newRoles = [...formData.about.roles];
                              newRoles.splice(rIdx, 1);
                              setFormData({...formData, about: {...formData.about, roles: newRoles}});
                           }} className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors border border-transparent hover:border-red-500/30">
                              <Trash className="w-4 h-4" />
                           </button>
                         </div>
                      ))}
                      <button onClick={() => {
                         const newRoles = [...formData.about.roles];
                         newRoles.push("New Role");
                         setFormData({...formData, about: {...formData.about, roles: newRoles}});
                      }} className="w-full flex items-center justify-center gap-2 py-2 mt-2 bg-white/5 border border-white/10 border-dashed rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest">
                         <Plus className="w-4 h-4" /> Add Role
                      </button>
                   </div>
                </div>
             </div>
          )}

          {activeTab === 'skills' && (
             <div className="space-y-8">
               <p className="text-xs text-slate-500 font-mono">Manage skill categories and their individual items.</p>
               {formData.skills.map((category, catIdx) => (
                 <div key={catIdx} className="p-6 bg-black/20 border border-white/5 rounded-2xl relative group">
                    <button onClick={() => {
                        const newSkills = [...formData.skills];
                        newSkills.splice(catIdx, 1);
                        setFormData({ ...formData, skills: newSkills });
                    }} className="absolute top-4 right-4 p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors border border-transparent hover:border-red-500/30 opacity-0 group-hover:opacity-100">
                        <Trash className="w-4 h-4" />
                    </button>
                    <div className="flex gap-4 mb-4">
                      <input className="bg-transparent text-lg font-bold text-white outline-none border-b border-dashed border-white/20 w-auto" value={category.title} onChange={e => {
                         const newSkills = [...formData.skills];
                         newSkills[catIdx].title = e.target.value;
                         setFormData({ ...formData, skills: newSkills });
                      }} />
                      <select className="bg-black/40 border border-white/10 rounded-lg px-2 py-1 text-sm text-white focus:border-cyan-500/50 outline-none" value={category.iconName} onChange={e => {
                         const newSkills = [...formData.skills];
                         newSkills[catIdx].iconName = e.target.value;
                         setFormData({ ...formData, skills: newSkills });
                      }}>
                         <option value="Code">Code</option>
                         <option value="Brain">Brain</option>
                         <option value="Shield">Shield</option>
                         <option value="Network">Network</option>
                      </select>
                    </div>
                    
                    <div className="space-y-3">
                       {category.items.map((skill, skillIdx) => (
                         <div key={skillIdx} className="flex gap-4">
                           <input value={skill.name} onChange={e => {
                              const newSkills = [...formData.skills];
                              newSkills[catIdx].items[skillIdx].name = e.target.value;
                              setFormData({ ...formData, skills: newSkills });
                           }} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500/50 outline-none font-mono" />
                           <input type="number" value={skill.level} onChange={e => {
                              const newSkills = [...formData.skills];
                              newSkills[catIdx].items[skillIdx].level = parseInt(e.target.value);
                              setFormData({ ...formData, skills: newSkills });
                           }} className="w-24 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500/50 outline-none font-mono" />
                           <button onClick={() => {
                              const newSkills = [...formData.skills];
                              newSkills[catIdx].items.splice(skillIdx, 1);
                              setFormData({ ...formData, skills: newSkills });
                           }} className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors border border-transparent hover:border-red-500/30">
                              <Trash className="w-4 h-4" />
                           </button>
                         </div>
                       ))}
                       <button onClick={() => {
                          const newSkills = [...formData.skills];
                          newSkills[catIdx].items.push({ name: "New Skill", level: 50 });
                          setFormData({ ...formData, skills: newSkills });
                       }} className="w-full flex items-center justify-center gap-2 py-2 mt-2 bg-white/5 border border-white/10 border-dashed rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest">
                          <Plus className="w-4 h-4" /> Add Skill
                       </button>
                    </div>
                 </div>
               ))}
               
               <button onClick={() => {
                  const newSkills = [...formData.skills];
                  newSkills.push({ title: "New Category", iconName: "Code", items: [] });
                  setFormData({ ...formData, skills: newSkills });
               }} className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 border-dashed rounded-2xl text-sm font-bold text-slate-400 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest">
                  <Plus className="w-5 h-5" /> Add Category
               </button>
             </div>
          )}

          {activeTab === 'projects' && (
             <div className="space-y-6">
                {formData.projects.map((proj, idx) => (
                  <div key={idx} className="p-6 bg-black/20 border border-white/5 rounded-2xl space-y-4 relative group">
                     <button onClick={() => {
                        const newProjs = [...formData.projects];
                        newProjs.splice(idx, 1);
                        setFormData({ ...formData, projects: newProjs });
                     }} className="absolute top-4 right-4 p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors border border-transparent hover:border-red-500/30 opacity-0 group-hover:opacity-100">
                        <Trash className="w-4 h-4" />
                     </button>
                     <div className="grid md:grid-cols-2 gap-4">
                       <input placeholder="Project Title" value={proj.title} onChange={e => {
                          const newProjs = [...formData.projects];
                          newProjs[idx].title = e.target.value;
                          setFormData({ ...formData, projects: newProjs });
                       }} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-bold outline-none" />
                       <input placeholder="Category" value={proj.category} onChange={e => {
                          const newProjs = [...formData.projects];
                          newProjs[idx].category = e.target.value;
                          setFormData({ ...formData, projects: newProjs });
                       }} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono uppercase tracking-widest outline-none pr-10" />
                     </div>
                     <textarea placeholder="Description" rows={2} value={proj.desc} onChange={e => {
                        const newProjs = [...formData.projects];
                        newProjs[idx].desc = e.target.value;
                        setFormData({ ...formData, projects: newProjs });
                     }} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none" />
                     <div className="grid md:grid-cols-2 gap-4">
                        <input placeholder="Tags (comma separated)" value={proj.tags.join(', ')} onChange={e => {
                           const newProjs = [...formData.projects];
                           newProjs[idx].tags = e.target.value.split(',').map(s => s.trim());
                           setFormData({ ...formData, projects: newProjs });
                        }} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono outline-none" />
                        <input placeholder="Link" value={proj.link} onChange={e => {
                           const newProjs = [...formData.projects];
                           newProjs[idx].link = e.target.value;
                           setFormData({ ...formData, projects: newProjs });
                        }} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono outline-none" />
                     </div>
                  </div>
                ))}
                
                <button onClick={() => {
                   const newProjs = [...formData.projects];
                   newProjs.push({ title: "New Project", category: "Category", desc: "Project description", tags: ["Tag", "Tag"], color: "from-slate-500", link: "#" });
                   setFormData({ ...formData, projects: newProjs });
                }} className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 border-dashed rounded-2xl text-sm font-bold text-slate-400 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest">
                   <Plus className="w-5 h-5" /> Add Project
                </button>
             </div>
          )}

          {activeTab === 'modules' && (
             <div className="space-y-6">
                <p className="text-xs text-slate-500 font-mono">Manage dashboard system modules (Core Console sidebar).</p>
                {formData.systemModules.map((mod, idx) => (
                  <div key={idx} className="p-4 bg-black/20 border border-white/5 rounded-xl flex items-center justify-between group">
                     <div className="flex items-center gap-4">
                       <select className="bg-black/40 border border-white/10 rounded-lg px-2 py-2 text-sm text-white focus:border-cyan-500/50 outline-none" value={mod.icon} onChange={e => {
                          const newMods = [...formData.systemModules];
                          newMods[idx].icon = e.target.value;
                          setFormData({ ...formData, systemModules: newMods });
                       }}>
                          <option value="GraduationCap">GraduationCap</option>
                          <option value="Code2">Code2</option>
                          <option value="BrainCircuit">BrainCircuit</option>
                          <option value="Shield">Shield</option>
                          <option value="Timer">Timer</option>
                          <option value="HardDrive">HardDrive</option>
                          <option value="Folders">Folders</option>
                          <option value="LockKeyhole">LockKeyhole</option>
                       </select>
                       <input value={mod.label} onChange={e => {
                          const newMods = [...formData.systemModules];
                          newMods[idx].label = e.target.value;
                          setFormData({ ...formData, systemModules: newMods });
                       }} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-bold outline-none flex-1 w-64" />
                       <input value={mod.path} onChange={e => {
                          const newMods = [...formData.systemModules];
                          newMods[idx].path = e.target.value;
                          setFormData({ ...formData, systemModules: newMods });
                       }} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-400 font-mono outline-none w-48" />
                     </div>
                     <div className="flex items-center gap-4">
                       <label className="flex items-center gap-2 cursor-pointer text-xs font-bold uppercase tracking-widest text-slate-400">
                          <input type="checkbox" checked={mod.enabled} onChange={e => {
                             const newMods = [...formData.systemModules];
                             newMods[idx].enabled = e.target.checked;
                             setFormData({ ...formData, systemModules: newMods });
                          }} className="w-4 h-4 accent-cyan-500" />
                          Enabled
                       </label>
                       <button onClick={() => {
                          const newMods = [...formData.systemModules];
                          newMods.splice(idx, 1);
                          setFormData({ ...formData, systemModules: newMods });
                       }} className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors border border-transparent hover:border-red-500/30 opacity-0 group-hover:opacity-100">
                          <Trash className="w-4 h-4" />
                       </button>
                     </div>
                  </div>
                ))}
                
                <button onClick={() => {
                   const newMods = [...formData.systemModules];
                   newMods.push({ id: "new", path: "/os/new", icon: "Code2", label: "New Module", enabled: true });
                   setFormData({ ...formData, systemModules: newMods });
                }} className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 border-dashed rounded-2xl text-sm font-bold text-slate-400 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest">
                   <Plus className="w-5 h-5" /> Add Module
                </button>
             </div>
          )}

          {activeTab === 'moduledata' && (
             <div className="space-y-6">
                <p className="text-xs text-slate-500 font-mono">Manage module contents (Academic, Developer, etc).</p>
                <div className="flex gap-2 bg-white/5 border border-white/10 p-1 rounded-xl overflow-x-auto custom-scrollbar">
                   {Object.keys(formData.moduleData || {}).map(moduleKey => (
                      <button 
                         key={moduleKey} 
                         onClick={() => setFormData({...formData, _activeModuleKey: moduleKey} as any)}
                         className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap ${(formData as any)._activeModuleKey === moduleKey ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:text-white'}`}
                      >
                         {moduleKey}
                      </button>
                   ))}
                </div>
                
                {/* Content Editor */}
                {(() => {
                   const mk = (formData as any)._activeModuleKey || Object.keys(formData.moduleData || {})[0];
                   if (!mk || !formData.moduleData[mk as keyof typeof formData.moduleData]) return null;
                   
                   const modData = formData.moduleData[mk as keyof typeof formData.moduleData];
                   const arrayKey = Object.keys(modData)[0]; // e.g., 'tasks', 'subjects', 'projects'
                   const itemsArray = (modData as any)[arrayKey] as any[];

                   return (
                     <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300">Edit {arrayKey}</h3>
                        {itemsArray.map((item, idx) => (
                           <div key={idx} className="p-4 bg-black/40 border border-white/10 rounded-xl relative group flex flex-col gap-3">
                              {Object.keys(item).filter(k => k !== 'id').map(fieldKey => (
                                 <div key={fieldKey} className="flex flex-col">
                                    <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{fieldKey}</label>
                                    {typeof item[fieldKey] === 'boolean' ? (
                                       <select 
                                          className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500/50 outline-none"
                                          value={item[fieldKey] ? 'true' : 'false'}
                                          onChange={e => {
                                             const newArr = [...itemsArray];
                                             newArr[idx] = { ...item, [fieldKey]: e.target.value === 'true' };
                                             setFormData({ ...formData, moduleData: { ...formData.moduleData, [mk]: { [arrayKey]: newArr } } });
                                          }}
                                       >
                                          <option value="true">True</option>
                                          <option value="false">False</option>
                                       </select>
                                    ) : (
                                       <input 
                                          value={item[fieldKey]} 
                                          onChange={e => {
                                             const newArr = [...itemsArray];
                                             newArr[idx] = { ...item, [fieldKey]: e.target.value };
                                             setFormData({ ...formData, moduleData: { ...formData.moduleData, [mk]: { [arrayKey]: newArr } } });
                                          }} 
                                          className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-500/50 outline-none" 
                                       />
                                    )}
                                 </div>
                              ))}
                              <button onClick={() => {
                                 const newArr = [...itemsArray];
                                 newArr.splice(idx, 1);
                                 setFormData({ ...formData, moduleData: { ...formData.moduleData, [mk]: { [arrayKey]: newArr } } });
                              }} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                 <Trash className="w-4 h-4" />
                              </button>
                           </div>
                        ))}
                        <button onClick={() => {
                           const newArr = [...itemsArray];
                           // Just clone the last item or make an empty one
                           const template = itemsArray.length > 0 ? { ...itemsArray[0], id: Math.random().toString() } : { id: Math.random().toString() };
                           Object.keys(template).forEach(k => { if (k !== 'id') { if (typeof template[k] === 'string') template[k] = ''; else if (typeof template[k] === 'number') template[k] = 0; else if (typeof template[k] === 'boolean') template[k] = false; } });
                           newArr.push(template);
                           setFormData({ ...formData, moduleData: { ...formData.moduleData, [mk]: { [arrayKey]: newArr } } });
                        }} className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 border-dashed rounded-2xl text-sm font-bold text-slate-400 hover:text-white hover:border-white/30 transition-all uppercase tracking-widest">
                           <Plus className="w-5 h-5" /> Add {arrayKey.slice(0, -1)}
                        </button>
                     </div>
                   );
                })()}
             </div>
          )}

          {activeTab === 'contact' && (
             <div className="space-y-6">
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Public Email</label>
                   <input value={formData.contact.email} onChange={e => setFormData({...formData, contact: {...formData.contact, email: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                </div>
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">LinkedIn Profile URL</label>
                   <input value={formData.contact.linkedin} onChange={e => setFormData({...formData, contact: {...formData.contact, linkedin: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                </div>
                <div>
                   <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">GitHub Profile URL</label>
                   <input value={formData.contact.github} onChange={e => setFormData({...formData, contact: {...formData.contact, github: e.target.value}})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 outline-none" />
                </div>
             </div>
          )}
       </div>
    </div>
  )
}
