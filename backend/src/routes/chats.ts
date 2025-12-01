import { Router } from "express";
import { chats } from "../data/chats";
import { messages } from "../data/messages";

export const chatsRouter = Router();

chatsRouter.get("/", (_req, res) => {
  return res.json(chats);
});

chatsRouter.get("/:id", (req, res) => {
  const chat = chats.find((c) => c.id === req.params.id);
  if (!chat) return res.status(404).json({ error: "Chat no encontrado" });
  return res.json(chat);
});

chatsRouter.get("/:id/messages", (req, res) => {
  const chatMessages = messages.filter((m) => m.chatId === req.params.id);
  return res.json(chatMessages);
});
