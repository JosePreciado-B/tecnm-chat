import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform
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
    sendMessage(chatId, text);
    setText("");
  };

  if (!chat) {
    return (
      <View style={styles.container}>
        <Text style={{ color: colors.textPrimary }}>
          Chat no encontrado.{" "}
        </Text>
        <Button
          title="Regresar"
          variant="secondary"
          style={{ marginTop: 16 }}
          onPress={goToChatList}
        />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <View style={styles.header}>
        <Button
          title="←"
          variant="secondary"
          onPress={goToChatList}
          style={{ paddingHorizontal: 10, marginRight: 8 }}
        />
        <View>
          <Text style={styles.chatTitle}>{chat.nombre}</Text>
          <Text style={styles.chatSubtitle}>
            {chat.esGrupo ? "Grupo académico" : "Chat individual"}
          </Text>
        </View>
      </View>

      <FlatList
        style={styles.messagesList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble message={item} isOwn={item.remitenteId === user.id} />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
      />

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          placeholderTextColor={colors.textSecondary}
          value={text}
          onChangeText={setText}
        />
        <Button title="Enviar" onPress={handleSend} style={{ marginLeft: 8 }} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingTop: 16
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
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
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
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
    fontSize: 14
  }
});
