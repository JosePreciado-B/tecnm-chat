import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { NavigationProvider, useNavigationContext } from "./src/context/NavigationContext";
import { ChatProvider } from "./src/context/ChatContext";
import { LoginScreen } from "./src/screens/LoginScreen";
import { ChatListScreen } from "./src/screens/ChatListScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";

const RootNavigator: React.FC = () => {
  const { currentScreen } = useNavigationContext();

  let ScreenComponent = null;
  switch (currentScreen.name) {
    case "login":
      ScreenComponent = <LoginScreen />;
      break;
    case "chatList":
      ScreenComponent = <ChatListScreen />;
      break;
    case "chatDetail":
      ScreenComponent = <ChatScreen chatId={currentScreen.chatId} />;
      break;
    case "profile":
      ScreenComponent = <ProfileScreen />;
      break;
    default:
      ScreenComponent = <LoginScreen />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FB" }}>
      {ScreenComponent}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <ChatProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#004B8D" }}>
          <StatusBar barStyle="light-content" />
          <RootNavigator />
        </SafeAreaView>
      </ChatProvider>
    </NavigationProvider>
  );
};

export default App;
