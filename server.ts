import express from "express";
import path from "path";
import fs from "fs/promises";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const DATA_FILE = path.join(process.cwd(), "db.json");

  // JSON parsing middleware
  app.use(express.json());

  // Helper to read/write JSON DB
  const readDB = async () => {
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      return JSON.parse(data);
    } catch {
      return {};
    }
  };

  const writeDB = async (data: any) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  };

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.get("/api/profile", async (req, res) => {
    const db = await readDB();
    res.json(db.profile || {});
  });

  app.post("/api/profile", async (req, res) => {
    const db = await readDB();
    db.profile = req.body;
    await writeDB(db);
    res.json({ success: true });
  });

  app.get("/api/admin", async (req, res) => {
    const db = await readDB();
    res.json(db.admin || {});
  });

  app.post("/api/admin", async (req, res) => {
    const db = await readDB();
    db.admin = req.body;
    await writeDB(db);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
