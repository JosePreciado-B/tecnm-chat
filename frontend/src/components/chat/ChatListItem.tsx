import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Chat } from "../../types/chat";
import { colors } from "../../theme/colors";

interface Props {
  chat: Chat;
  onPress: () => void;
}

export const ChatListItem: React.FC<Props> = ({ chat, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {chat.nombre
            .split(" ")
            .map((p) => p[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {chat.nombre}
        </Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {chat.ultimoMensaje ?? "Nuevo chat"}
        </Text>
      </View>
      <View style={styles.right}>
        {chat.mensajesNoLeidos > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{chat.mensajesNoLeidos}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: "center",
    elevation: 1
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: colors.tecnmBlue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  avatarText: {
    color: colors.white,
    fontWeight: "700"
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 2
  },
  lastMessage: {
    fontSize: 13,
    color: colors.textSecondary
  },
  right: {
    marginLeft: 8,
    alignItems: "flex-end"
  },
  badge: {
    minWidth: 20,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: colors.tecnmAccent,
    alignItems: "center"
  },
  badgeText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: "700"
  }
});
