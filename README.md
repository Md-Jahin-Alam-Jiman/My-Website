# J A - Futuristic Personal OS & Portfolio

Welcome to **J A**, a next-generation Progressive Web Application (PWA) designed as a comprehensive digital ecosystem. It serves as a professional portfolio, client portal, and a powerful personal operating system tailored for AI Engineers and Cybersecurity professionals.

## Features

### 1. Public Portfolio
- **Hero & About:** Dynamic sections showcasing identity, skills, and resume.
- **Projects & Certifications:** Highlight achievements with live demos and certificates.
- **Blog & Contact:** Share knowledge and provide diverse contact options.

### 2. Client Portal
- Secure login for clients.
- Project tracking, file sharing, meeting scheduling, and direct messaging.

### 3. Admin OS Dashboard
- **Academic Management System:** Track courses, assignments, exams, and notes.
- **AI Engineering & Cybersecurity Labs:** Specialized hubs for learning and tracking projects.
- **Productivity System:** Daily targets, focus timers (Pomodoro), and habit tracking.
- **Developer Dashboard:** GitHub, LeetCode, and project statistics.
- **Multi-Drive Storage:** Unified file management across multiple Google Drive accounts.
- **Private Vault:** Encrypted storage for sensitive data.
- **Second Brain:** Bi-directional note linking, graph visualization, and AI insights.
- **AI Hub (Neural Forge):** Local and API-based model management for chatting and experimentation.
- **Dynamic Control:** Customize layouts, content, and system behavior.

## Technologies Used
- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion, Lucide React
- **Storage/DB:** Firebase (Firestore) & IndexedDB (Offline caching)
- **Deployment:** Vercel / Netlify / Google Cloud Run

## Getting Started

### Local Development
1. Clone the repository.
2. Run \`npm install\` to install dependencies.
3. Configure \`.env\` with necessary keys (Firebase, Google OAuth).
4. Run \`npm run dev\` to start the development server.

### Architecture Overview
- \`/src/pages\`: Contains the standard routes (Landing Page, Login).
- \`/src/pages/os\`: Contains all modules of the Admin Operating System.
- \`/src/components\`: Reusable UI components.
- \`/src/lib\`: Utility functions and global state/context.

## Security
- Authentication is handled via Firebase/Google OAuth.
- The Private Vault uses client-side encryption techniques.
- Role-based access ensures public visitors, clients, and the admin see distinct interfaces.
