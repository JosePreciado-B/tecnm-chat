import React from "react";
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  StyleSheet
} from "react-native";
import { colors } from "../../theme/colors";

interface Props extends TextInputProps {
  label?: string;
}

export const TextField: React.FC<Props> = ({ label, style, ...rest }) => {
  return (
    <View style={{ marginBottom: 12 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style as any]}
        placeholderTextColor={colors.textSecondary}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    color: colors.textPrimary
  },
  input: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.white,
    fontSize: 14
  }
});
