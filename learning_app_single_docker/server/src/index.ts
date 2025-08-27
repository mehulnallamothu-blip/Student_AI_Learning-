import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

// --- Serve frontend build ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.join(__dirname, "client");

app.use(express.static(clientDist));
app.get("*", (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

// --- API Routes ---
async function main() {
  const server = await registerRoutes(app);
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
