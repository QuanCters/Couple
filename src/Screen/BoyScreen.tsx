import * as React from "react";
import * as Notifications from "expo-notifications";
import { Text, View, StyleSheet } from "react-native";
import { Header, Button } from "@rneui/themed";
import Constants from "expo-constants";
import { submitToken, Token } from "../Services/API";
const Page = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function handleRegistrationError(errorMessage: string) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

async function getNotificationToken() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    handleRegistrationError(
      "Permission not granted to get push token for push notification!"
    );
    return;
  } else {
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError("project ID not found");
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  }
}

const BoyScreen: React.FC = () => {
  const [token, setToken] = React.useState<Token | undefined>();
  return (
    <View>
      <Header
        centerComponent={{ text: "gà chọi 🐔", style: { color: "#fff" } }}
      />
      <View style={Page.container}>
        <Text style={Page.text}>
          {token
            ? `Mã số của bạn là: ${token.id}`
            : "Bạn chưa có mã số? Bấm vào đây để lấy mã"}
        </Text>
        {!token && (
          <Button
            title="Bấm vào để lấy mã"
            onPress={async () => {
              const token = await getNotificationToken();
              if (token) {
                const storedToken = await submitToken(token);
                setToken(storedToken);
              }
            }}
          ></Button>
        )}
      </View>
    </View>
  );
};
export default BoyScreen;
