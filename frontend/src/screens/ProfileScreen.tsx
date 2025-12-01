import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { useChatContext } from "../context/ChatContext";
import { Button } from "../components/ui/Button";
import { useNavigationContext } from "../context/NavigationContext";

export const ProfileScreen: React.FC = () => {
  const { user } = useChatContext();
  const { goToChatList } = useNavigationContext();

  return (
    <View style={styles.container}>
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

      <View style={styles.infoBox}>
        <Text style={styles.label}>Número de control</Text>
        <Text style={styles.value}>{user.numeroControl}</Text>

        <Text style={styles.label}>Semestre</Text>
        <Text style={styles.value}>{user.semestre}</Text>

        <Text style={styles.label}>Estado</Text>
        <Text style={styles.value}>{user.estado}</Text>
      </View>

      <Button
        title="Volver a chats"
        onPress={goToChatList}
        style={{ marginTop: 24 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    alignItems: "center"
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 999,
    backgroundColor: colors.tecnmBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },
  avatarText: {
    color: colors.white,
    fontWeight: "800",
    fontSize: 28
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.tecnmBlue,
    marginBottom: 4
  },
  career: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 24
  },
  infoBox: {
    alignSelf: "stretch",
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    elevation: 1
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 8
  },
  value: {
    fontSize: 14,
    color: colors.textPrimary
  }
});
