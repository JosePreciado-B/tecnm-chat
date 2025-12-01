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
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appTitle}>TecNM Chat</Text>
          <Text style={styles.userSubtitle}>
            {user.nombre} • {user.carrera}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Perfil"
            variant="secondary"
            onPress={goToProfile}
            style={{ marginRight: 8, paddingHorizontal: 12 }}
          />
          <Button
            title="Salir"
            variant="secondary"
            onPress={goToLogin}
            style={{ paddingHorizontal: 12 }}
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Chats</Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatListItem chat={item} onPress={() => openChat(item.id)} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16
  },
  header: {
    marginTop: 8,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.tecnmBlue
  },
  userSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: colors.textPrimary
  }
});
