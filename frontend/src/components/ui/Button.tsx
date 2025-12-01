import React from "react";
import { Text, Pressable, StyleSheet, PressableProps } from "react-native";
import { colors } from "../../theme/colors";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  style,
  ...rest
}) => {
  const isPrimary = variant === "primary";
  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        pressed && styles.pressed,
        style as any
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          { color: isPrimary ? colors.white : colors.tecnmBlue }
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center"
  },
  primary: {
    backgroundColor: colors.tecnmBlue
  },
  secondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.tecnmBlue
  },
  pressed: {
    opacity: 0.85
  },
  text: {
    fontSize: 16,
    fontWeight: "600"
  }
});
