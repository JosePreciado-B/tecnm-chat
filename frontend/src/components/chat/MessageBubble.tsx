import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Message } from "../../types/message";
import { colors } from "../../theme/colors";

interface Props {
  message: Message;
  isOwn: boolean;
}

export const MessageBubble: React.FC<Props> = ({ message, isOwn }) => {
  return (
    <View
      style={[
        styles.container,
        isOwn ? styles.ownContainer : styles.otherContainer
      ]}
    >
      <View style={[styles.bubble, isOwn ? styles.ownBubble : styles.otherBubble]}>
        <Text style={[styles.text, isOwn && { color: colors.white }]}>
          {message.contenido}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
    paddingHorizontal: 8
  },
  ownContainer: {
    justifyContent: "flex-end"
  },
  otherContainer: {
    justifyContent: "flex-start"
  },
  bubble: {
    maxWidth: "80%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16
  },
  ownBubble: {
    backgroundColor: colors.tecnmBlue,
    borderBottomRightRadius: 0
  },
  otherBubble: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: colors.border
  },
  text: {
    fontSize: 14,
    color: colors.textPrimary
  }
});
