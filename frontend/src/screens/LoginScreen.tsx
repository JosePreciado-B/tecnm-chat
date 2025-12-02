// src/screens/LoginScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../theme/colors";
import { TextField } from "../components/ui/TextField";
import { Button } from "../components/ui/Button";
import { useNavigationContext } from "../context/NavigationContext";

export const LoginScreen: React.FC = () => {
  const { goToChatList } = useNavigationContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFakeLogin = () => {
    goToChatList();
  };

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
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
            style={{ marginTop: 14 }}
          />

          <Text style={styles.infoText}>
            * Por ahora el inicio de sesión es solo de demostración con datos de prueba.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "center"
  },
  logoBox: {
    alignItems: "center",
    marginBottom: 32
  },
  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 999,
    backgroundColor: colors.tecnmBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    elevation: 3
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
    marginBottom: 6
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center"
  },
  form: {},
  infoText: {
    marginTop: 12,
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center"
  }
});
