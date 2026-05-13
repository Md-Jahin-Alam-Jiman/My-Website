export interface ModuleData {
  overview: {
    tasks: { id: string; name: string; completed: boolean }[];
  };
  academic: {
    subjects: { id: string; name: string; grade: string; attendance: string }[];
  };
  developer: {
    projects: { id: string; name: string; status: string; lang: string; color: string; border: string }[];
  };
  ai: {
    logs: { id: string; message: string; date: string }[];
  };
  cyber: {
    threats: { id: string; name: string; severity: string; date: string }[];
  };
  productivity: {
    tasks: { id: string; name: string; duration: string; date: string }[];
  };
  drive: {
    drives: { id: string; email: string; used: number; total: number; status: string }[];
  };
  notes: {
    items: { id: string; title: string; content: string; date: string }[];
  };
  vault: {
    secrets: { id: string; name: string; type: string }[];
  };
}
