import React, { createContext, useContext, useMemo, useState } from "react";
import { Chat } from "../types/chat";
import { Message } from "../types/message";
import { mockChats } from "../mocks/chats";
import { mockMessages } from "../mocks/messages";
import { currentUser } from "../mocks/users";

interface ChatContextValue {
  user: typeof currentUser;
  chats: Chat[];
  messages: Message[];
  getMessagesByChatId: (chatId: string) => Message[];
  sendMessage: (chatId: string, content: string) => void;
}

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [chats] = useState<Chat[]>(mockChats);
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const getMessagesByChatId = (chatId: string) =>
    messages.filter((m) => m.chatId === chatId);

  const sendMessage = (chatId: string, content: string) => {
    if (!content.trim()) return;
    const newMessage: Message = {
      id: `m-${Date.now()}`,
      chatId,
      remitenteId: currentUser.id,
      contenido: content,
      fechaEnvio: new Date().toISOString(),
      leidoPorIds: [currentUser.id]
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const value: ChatContextValue = useMemo(
    () => ({
      user: currentUser,
      chats,
      messages,
      getMessagesByChatId,
      sendMessage
    }),
    [chats, messages]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = (): ChatContextValue => {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return ctx;
};
