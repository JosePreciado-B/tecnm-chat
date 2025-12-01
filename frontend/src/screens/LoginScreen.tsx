import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../theme/colors";
import { TextField } from "../components/ui/TextField";
import { Button } from "../components/ui/Button";
import { useNavigationContext } from "../context/NavigationContext";

export const LoginScreen: React.FC = () => {
  const { goToChatList } = useNavigationContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Nota: este login NO es funcional todavía.
  // Solo navega a la lista de chats usando datos mock.
  const handleFakeLogin = () => {
    goToChatList();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>TecNM</Text>
        </View>
        <Text style={styles.title}>TecNM Chat</Text>
        <Text style={styles.subtitle}>
          Comunicación segura para estudiantes del Tecnológico Nacional de México.
        </Text>
      </View>

      <View style={styles.form}>
        <TextField
          label="Correo institucional"
          placeholder="usuario@tecnm.mx"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextField
          label="Contraseña"
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button
          title="Entrar (demo)"
          onPress={handleFakeLogin}
          style={{ marginTop: 12 }}
        />

        <Text style={styles.infoText}>
          * Por ahora el inicio de sesión es solo de demostración con datos de prueba.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: "center"
  },
  logoBox: {
    alignItems: "center",
    marginBottom: 32
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: colors.tecnmBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },
  logoText: {
    color: colors.white,
    fontWeight: "800",
    fontSize: 18
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.tecnmBlue,
    marginBottom: 4
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center"
  },
  form: {},
  infoText: {
    marginTop: 10,
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center"
  }
});
