import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import FlashMessage from "react-native-flash-message";
import { View, Text } from "react-native";

import { useAuth, AuthProvider } from "./src/hooks/auth";

import { Home } from "./src/pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
      <FlashMessage
        position="top"
        floating
        // style={{ marginTop: StatusBar.currentHeight }}
      />
    </AuthProvider>
  );
}
