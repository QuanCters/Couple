import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Button, Input } from "@rneui/themed";
import { getToken, sendPushNotification } from "../Services/API";
import { Token } from "../Services/API";
const token = "ExponentPushToken[ynJif_CqeiVyTVDNAkP-67]";

const Page = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

const Summon = StyleSheet.create({
  button: {
    flex: 0.45,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 10,
    display: "flex",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginLeft: 30,
  },
  buttonRed: { backgroundColor: "#e74c3c" },
  buttonBlue: { backgroundColor: "dodgerblue" },
  buttonGreen: { backgroundColor: "#2ecc71" },
  buttonYellow: { backgroundColor: "#f1c40f" },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  container: {
    flexDirection: "column",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  bottom: {
    width: 200,
  },
});

const GirlScreen: React.FC = () => {
  const [tokenInput, setTokenInput] = React.useState("");
  const [token, setToken] = React.useState<Token | undefined>();

  return (
    <View>
      <Header
        centerComponent={{ text: "mèo cưng 🐱", style: { color: "#fff" } }}
      />
      {token ? (
        <View>
          <Text style={Summon.heading}>Mã số của gà chọi là: {token.id}</Text>
          <Text style={Summon.heading}>Có thể triệu hồi gà chọi</Text>
        </View>
      ) : (
        <View style={Page.container}>
          <Input
            value={tokenInput}
            onChangeText={setTokenInput}
            label="Mã số người yêu"
            placeholder="Nhập mã số của bạn trai vào đây"
          ></Input>
          <Button
            size="md"
            onPress={async () => {
              const storedToken = await getToken(tokenInput);
              setToken(storedToken);
            }}
          >
            xác nhận mã
          </Button>
        </View>
      )}

      {token && (
        <View style={Summon.container}>
          <View style={Summon.row}>
            <TouchableOpacity
              style={[Summon.button, Summon.buttonRed]}
              onPress={() =>
                sendPushNotification(
                  token.token,
                  "😘 Nhớ anh",
                  "Lát nữa gặp hun cái rùi về"
                )
              }
            >
              <Text style={Summon.text}>😘 Nhớ anh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Summon.button, Summon.buttonGreen]}
              onPress={() =>
                sendPushNotification(
                  token.token,
                  "🍔 Thèm đồ ăn",
                  "Lát chờ em đi ăn ik"
                )
              }
            >
              <Text style={Summon.text}>🍔 Thèm đồ ăn</Text>
            </TouchableOpacity>
          </View>
          <View style={Summon.row}>
            <TouchableOpacity
              style={[Summon.button, Summon.buttonBlue]}
              onPress={() =>
                sendPushNotification(
                  token.token,
                  "📞 Video call ik",
                  "Kể chuyện gì đó vui cho em nghe"
                )
              }
            >
              <Text style={Summon.text}>📞 Video call ik</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Summon.button, Summon.buttonYellow]}
              onPress={() =>
                sendPushNotification(
                  token.token,
                  "🛵 Cuối tuần đi chơi",
                  "Đi đâu cũng được, miễn có anh "
                )
              }
            >
              <Text style={Summon.text}>🛵 Cuối tuần đi chơi</Text>
            </TouchableOpacity>
          </View>
          <View style={Page.container}>
            <Button
              size="md"
              onPress={() => {
                setToken(undefined);
              }}
            >
              Nhập lại mã
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};
export default GirlScreen;
