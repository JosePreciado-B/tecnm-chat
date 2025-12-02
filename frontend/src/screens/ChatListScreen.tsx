// src/screens/ChatListScreen.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../theme/colors";
import { useChatContext } from "../context/ChatContext";
import { useNavigationContext } from "../context/NavigationContext";
import { ChatListItem } from "../components/chat/ChatListItem";
import { Button } from "../components/ui/Button";

export const ChatListScreen: React.FC = () => {
  const { chats, user } = useChatContext();
  const { openChat, goToProfile, goToLogin } = useNavigationContext();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.appTitle}>TecNM Chat</Text>
          <Text style={styles.userSubtitle} numberOfLines={1}>
            {user.nombre} • {user.carrera}
          </Text>
        </View>

        <View style={styles.headerButtons}>
          <Button
            title="Perfil"
            variant="secondary"
            onPress={goToProfile}
            style={styles.smallButton}
          />
          <Button
            title="Salir"
            variant="secondary"
            onPress={goToLogin}
            style={styles.smallButton}
          />
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Chats</Text>

        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatListItem chat={item} onPress={() => openChat(item.id)} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.tecnmBlue
  },
  header: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.white
  },
  userSubtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
    marginTop: 4
  },
  headerButtons: {
    flexDirection: "row",
    marginLeft: 8
  },
  smallButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 6
  },
  panel: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 10
  },
  listContent: {
    paddingBottom: 24
  }
});
