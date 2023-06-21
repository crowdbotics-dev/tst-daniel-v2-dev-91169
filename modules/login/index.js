import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const LoginScreen = () => {
  return <View>
      <Text>Login Screen</Text>
    </View>;
};

const PasswordReset = () => {
  return <View>
      <Text>Password Reset</Text>
    </View>;
};

const Stack = createStackNavigator();

const Login = () => {
  return <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>;
};

export default {
  title: "Login",
  navigator: Login
};