// App.tsx
import React from "react";
import { SafeAreaView, StatusBar, View, StyleSheet } from "react-native";
import { NavigationProvider, useNavigationContext } from "./src/context/NavigationContext";
import { ChatProvider } from "./src/context/ChatContext";
import { LoginScreen } from "./src/screens/LoginScreen";
import { ChatListScreen } from "./src/screens/ChatListScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { colors } from "./src/theme/colors";

const RootNavigator: React.FC = () => {
  const { currentScreen } = useNavigationContext();

  switch (currentScreen.name) {
    case "login":
      return <LoginScreen />;
    case "chatList":
      return <ChatListScreen />;
    case "chatDetail":
      return <ChatScreen chatId={currentScreen.chatId} />;
    case "profile":
      return <ProfileScreen />;
    default:
      return <LoginScreen />;
  }
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <ChatProvider>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" />
          <View style={styles.root}>
            <RootNavigator />
          </View>
        </SafeAreaView>
      </ChatProvider>
    </NavigationProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.tecnmBlue
  },
  root: {
    flex: 1,
    backgroundColor: colors.background
  }
});

export default App;
