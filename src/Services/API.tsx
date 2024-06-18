const EXPO_SERVER_URL = "https://exp.host/--/api/v2/push/send";
const TOKEN_SERVER_URL = "https://gau-server.glitch.me/notifications";
export interface Token {
  id: number;
  token: string;
}

export const sendPushNotification = async (
  token: string,
  title: string,
  body: string
) => {
  const message = {
    to: token,
    sound: "default",
    title,
    body,
  };

  await fetch(EXPO_SERVER_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  alert("Triệu hồi gà chọi thành công");
};

export const submitToken = async (token: string) => {
  try {
    const response = await fetch(TOKEN_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = (await response.json()) as Token;
    return result;
  } catch (error) {
    console.error("Error submitting token:", error);
    throw error;
  }
};

export const getToken = async (id: number | string) => {
  const response = await fetch(`${TOKEN_SERVER_URL}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const result = (await response.json()) as Token;
  return result;
};
