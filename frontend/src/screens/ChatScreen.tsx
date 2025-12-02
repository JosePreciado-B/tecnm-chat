// src/screens/ChatScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from "react-native";
import { colors } from "../theme/colors";
import { useChatContext } from "../context/ChatContext";
import { useNavigationContext } from "../context/NavigationContext";
import { MessageBubble } from "../components/chat/MessageBubble";
import { Button } from "../components/ui/Button";

interface Props {
  chatId: string;
}

export const ChatScreen: React.FC<Props> = ({ chatId }) => {
  const { chats, user, getMessagesByChatId, sendMessage } = useChatContext();
  const { goToChatList } = useNavigationContext();
  const [text, setText] = useState("");

  const chat = chats.find((c) => c.id === chatId);
  const messages = getMessagesByChatId(chatId);

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(chatId, text.trim());
    setText("");
  };

  if (!chat) {
    return (
      <SafeAreaView style={styles.safeRoot}>
        <View style={[styles.container, { justifyContent: "center" }]}>
          <Text style={{ color: colors.textPrimary, textAlign: "center" }}>
            Chat no encontrado.
          </Text>
          <Button
            title="Regresar"
            variant="secondary"
            style={{ marginTop: 16, alignSelf: "center" }}
            onPress={goToChatList}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeRoot}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <Button
            title="←"
            variant="secondary"
            onPress={goToChatList}
            style={styles.backButton}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.chatTitle} numberOfLines={1}>
              {chat.nombre}
            </Text>
            <Text style={styles.chatSubtitle}>
              {chat.esGrupo ? "Grupo académico" : "Chat individual"}
            </Text>
          </View>
        </View>

        {/* Mensajes */}
        <FlatList
          style={styles.messagesList}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MessageBubble message={item} isOwn={item.remitenteId === user.id} />
          )}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        />

        {/* Barra de input */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            placeholderTextColor={colors.textSecondary}
            value={text}
            onChangeText={setText}
            multiline
          />
          <Button
            title="Enviar"
            onPress={handleSend}
            style={styles.sendButton}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeRoot: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingHorizontal: 8,
    paddingBottom: 8
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    minWidth: 50
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.tecnmBlue
  },
  chatSubtitle: {
    fontSize: 12,
    color: colors.textSecondary
  },
  messagesList: {
    flex: 1
  },
  messagesContent: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    paddingBottom: 12 // un pequeño espacio antes del input
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingTop: 6,
    paddingBottom: Platform.OS === "android" ? 10 : 8, // espacio extra sobre los botones de navegación
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white
  },
  input: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.white,
    fontSize: 14,
    maxHeight: 100 // evita que el input crezca demasiado
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    minWidth: 80
  }
});
