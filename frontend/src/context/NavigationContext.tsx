import React, { createContext, useContext, useState } from "react";

type Screen =
  | { name: "login" }
  | { name: "chatList" }
  | { name: "chatDetail"; chatId: string }
  | { name: "profile" };

interface NavigationContextValue {
  currentScreen: Screen;
  goToLogin: () => void;
  goToChatList: () => void;
  openChat: (chatId: string) => void;
  goToProfile: () => void;
}

const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>({ name: "login" });

  const value: NavigationContextValue = {
    currentScreen,
    goToLogin: () => setCurrentScreen({ name: "login" }),
    goToChatList: () => setCurrentScreen({ name: "chatList" }),
    openChat: (chatId: string) => setCurrentScreen({ name: "chatDetail", chatId }),
    goToProfile: () => setCurrentScreen({ name: "profile" })
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = (): NavigationContextValue => {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigationContext must be used within a NavigationProvider");
  }
  return ctx;
};
