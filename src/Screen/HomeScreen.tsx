import * as React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BoyScreen from "./BoyScreen";
import GirlScreen from "./GirlScreen";

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Boy"
        options={{ tabBarIcon: () => <Text>🙆‍♂️</Text>, headerShown: false }}
        component={BoyScreen}
      />
      <Tab.Screen
        name="Girl"
        options={{ tabBarIcon: () => <Text>🙆</Text>, headerShown: false }}
        component={GirlScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
