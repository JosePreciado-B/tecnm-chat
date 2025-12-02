// src/screens/ProfileScreen.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../theme/colors";
import { useChatContext } from "../context/ChatContext";
import { Button } from "../components/ui/Button";
import { useNavigationContext } from "../context/NavigationContext";

export const ProfileScreen: React.FC = () => {
  const { user } = useChatContext();
  const { goToChatList } = useNavigationContext();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>TecNM Chat</Text>
        <Text style={styles.appSubtitle}>Perfil del estudiante</Text>
      </View>

      <ScrollView
        style={styles.contentWrapper}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarWrapper}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user.nombre
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </Text>
          </View>
          <Text style={styles.name}>{user.nombre}</Text>
          <Text style={styles.career}>{user.carrera}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Número de control</Text>
            <Text style={styles.value}>{user.numeroControl}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Semestre</Text>
            <Text style={styles.value}>{user.semestre}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Estado</Text>
            <Text style={styles.value}>{user.estado}</Text>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <Button title="Volver a chats" onPress={goToChatList} />
        </View>
      </ScrollView>
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
    paddingHorizontal: 24,
    paddingBottom: 16
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.white
  },
  appSubtitle: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4
  },
  contentWrapper: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.background
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 24
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 999,
    backgroundColor: colors.tecnmBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    elevation: 3
  },
  avatarText: {
    color: colors.white,
    fontWeight: "800",
    fontSize: 30
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.tecnmBlue,
    marginBottom: 4,
    textAlign: "center"
  },
  career: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center"
  },
  infoCard: {
    marginTop: 8,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
    elevation: 2
  },
  infoRow: {
    marginVertical: 6
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textSecondary,
    marginBottom: 2
  },
  value: {
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 8,
    opacity: 0.6
  },
  buttonArea: {
    marginTop: 28,
    alignItems: "center"
  }
});
