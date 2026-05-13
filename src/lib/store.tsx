import React, { createContext, useContext, useState, useEffect } from 'react';

export const DEFAULT_ADMIN = {
  email: "mdjahinalam905048@gmail.com",
  password: "Jahin"
};

export const DEFAULT_PROFILE = {
  hero: {
    title: "Engineering \nThe Future",
    subtitle: "> Developer | AI Engineer | Security Researcher_",
    resumeLink: "#",
  },
  systemModules: [
    { id: "academic", path: "/os/academic", icon: "GraduationCap", label: "Academic Engine", enabled: true },
    { id: "developer", path: "/os/developer", icon: "Code2", label: "Dev Matrix", enabled: true },
    { id: "ai", path: "/os/ai", icon: "BrainCircuit", label: "Neural Forge", enabled: true },
    { id: "cybersecurity", path: "/os/cybersecurity", icon: "Shield", label: "Cyber Lab", enabled: true },
    { id: "productivity", path: "/os/productivity", icon: "Timer", label: "Focus System", enabled: true },
    { id: "drive", path: "/os/drive", icon: "HardDrive", label: "Cloud Link", enabled: true },
    { id: "notes", path: "/os/notes", icon: "Folders", label: "Second Brain", enabled: true },
    { id: "vault", path: "/os/vault", icon: "LockKeyhole", label: "Private Vault", enabled: true },
  ],
  about: {
    description: "I construct robust architectures that merge full-stack development with state-of-the-art AI integration and uncompromising security practices. From designing sophisticated neural networks to hardening vulnerable endpoints, my mission is to build resilient systems for tomorrow.",
    experience: 4,
    projectsCount: 50,
    name: "J A",
    roles: ["Full-Stack Dev", "AI Engineer", "Cybersecurity Analyst"],
    status: "Building the future"
  },
  skills: [
    { title: "Full-Stack Web", iconName: "Code", items: [{name: "React/Next.js", level: 85}, {name: "TypeScript", level: 80}, {name: "Node.js", level: 75}, {name: "PostgreSQL", level: 70}] },
    { title: "AI & ML", iconName: "Brain", items: [{name: "PyTorch / TensorFlow", level: 85}, {name: "Transformers / LLMs", level: 80}, {name: "RAG Arch", level: 75}, {name: "Vector DBs", level: 70}] },
    { title: "Cybersecurity", iconName: "Shield", items: [{name: "Ethical Hacking", level: 85}, {name: "Pen Testing", level: 80}, {name: "Linux Admin", level: 75}, {name: "Network Sec", level: 70}] },
    { title: "Cloud & Ops", iconName: "Network", items: [{name: "Docker / K8s", level: 85}, {name: "AWS / GCP", level: 80}, {name: "CI/CD Pipelines", level: 75}, {name: "Firebase", level: 70}] },
  ],
  projects: [
    { title: "NeuralCore AI", category: "AI Engineering", desc: "A robust RAG pipeline implementing hybrid search and dynamic prompting.", tags: ["Python", "Pinecone", "LangChain"], color: "from-purple-500", link: "#" },
    { title: "Aegis OS", category: "Full-Stack / Cyber", desc: "A highly secure, encrypted web operating system for enterprise payload management.", tags: ["Next.js", "Rust", "WebCrypto"], color: "from-red-500", link: "#" },
    { title: "OmniDrive", category: "Cloud Arch", desc: "A multi-drive synchronization tool balancing storage across multiple cloud providers.", tags: ["TypeScript", "Google APIs", "React"], color: "from-cyan-500", link: "#" }
  ],
  moduleData: {
    overview: {
      tasks: [
        { id: "1", name: "Review Machine Learning notes", completed: false },
        { id: "2", name: "Solve 2 LeetCode problems", completed: false },
        { id: "3", name: "Draft research paper", completed: false },
        { id: "4", name: "Check server logs", completed: false }
      ]
    },
    academic: {
      subjects: [
        { id: "1", name: 'CS401: Artificial Intelligence', grade: 'A-', attendance: '92%' },
        { id: "2", name: 'CS405: Cloud Computing', grade: 'A', attendance: '88%' },
        { id: "3", name: 'CS412: Cybersecurity Principles', grade: 'B+', attendance: '95%' }
      ]
    },
    developer: {
      projects: [
        { id: "1", name: 'J A OS', status: 'Active', lang: 'TypeScript', color: 'text-blue-400', border: 'border-blue-500/20' },
        { id: "2", name: 'NeuralNet.rs', status: 'Paused', lang: 'Rust', color: 'text-orange-400', border: 'border-orange-500/20' },
        { id: "3", name: 'VulnScanner', status: 'Active', lang: 'Python', color: 'text-yellow-400', border: 'border-yellow-500/20' },
        { id: "4", name: 'Portfolio V2', status: 'Active', lang: 'Next.js', color: 'text-white', border: 'border-white/20' }
      ]
    },
    ai: {
      logs: [
        { id: "1", message: "Epoch 43/100: metrics updated. Loss: 0.042", date: "2 mins ago" },
        { id: "2", message: "RAG vector indices synchronized in Pinecone.", date: "15 mins ago" },
      ]
    },
    cyber: {
      threats: [
        { id: "1", name: "Unauthorized SSH Access Attempt", severity: "High", date: "12 mins ago" },
        { id: "2", name: "DDoS mitigation active on port 443", severity: "Medium", date: "4 hrs ago" }
      ]
    },
    productivity: {
      tasks: [
        { id: "1", name: "Deep Work Session", duration: "120m", date: "Today" },
        { id: "2", name: "Reading Mode", duration: "45m", date: "Yesterday" }
      ]
    },
    drive: {
      drives: [
        { id: "1", email: "jiman.dev@gmail.com", used: 12.5, total: 15, status: "warning" },
        { id: "2", email: "jiman.academic@gmail.com", used: 2.1, total: 15, status: "healthy" },
        { id: "3", email: "jiman.backup@gmail.com", used: 14.8, total: 15, status: "critical" }
      ]
    },
    notes: {
      items: [
        { id: "1", title: "Project Phoenix Launch", content: "Notes regarding the upcoming launch...", date: "2 hrs ago" },
        { id: "2", title: "Neural Net optimizations", content: "Consider using AdamW instead of SGD.", date: "Yesterday" }
      ]
    },
    vault: {
      secrets: [
        { id: "1", name: "aws-prod-keys.pem", type: "Key Pair" },
        { id: "2", name: "stripe_webhook_secret", type: "Environment Var" }
      ]
    }
  },
  contact: {
    email: "contact@ja-system.dev",
    linkedin: "JA.dev",
    github: "github.com/ja-dev"
  }
};

type ProfileType = typeof DEFAULT_PROFILE;
type AdminType = typeof DEFAULT_ADMIN;

interface AppContextType {
  profile: ProfileType;
  updateProfile: (newData: Partial<ProfileType>) => void;
  adminCredentials: AdminType;
  updateAdminCredentials: (newData: Partial<AdminType>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileType>(DEFAULT_PROFILE);
  const [adminCredentials, setAdminCredentials] = useState<AdminType>(DEFAULT_ADMIN);

  useEffect(() => {
    const savedProfile = localStorage.getItem('ja_os_profile');
    const savedAdmin = localStorage.getItem('ja_os_admin');

    if (savedProfile) {
      try { 
        const parsed = JSON.parse(savedProfile);
        setProfile({ ...DEFAULT_PROFILE, ...parsed }); 
      } catch (e) {}
    }
    if (savedAdmin) {
      try { setAdminCredentials(JSON.parse(savedAdmin)); } catch (e) {}
    }
  }, []);

  const updateProfile = (newData: Partial<ProfileType>) => {
    setProfile(prev => {
      const updated = { ...prev, ...newData };
      localStorage.setItem('ja_os_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const updateAdminCredentials = (newData: Partial<AdminType>) => {
    setAdminCredentials(prev => {
      const updated = { ...prev, ...newData };
      localStorage.setItem('ja_os_admin', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{ profile, updateProfile, adminCredentials, updateAdminCredentials }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppStore must be used within an AppProvider');
  return context;
}
