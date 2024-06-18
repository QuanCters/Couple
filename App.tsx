import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/Screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <HomeScreen></HomeScreen>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
