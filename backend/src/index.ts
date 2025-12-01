import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth";
import { chatsRouter } from "./routes/chats";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "TecNM Chat backend mock funcionando" });
});

app.use("/api/auth", authRouter);
app.use("/api/chats", chatsRouter);

app.listen(PORT, () => {
  console.log(`TecNM Chat backend mock escuchando en puerto ${PORT}`);
});
