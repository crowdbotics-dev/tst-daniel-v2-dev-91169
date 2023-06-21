import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const LoginScreen = () => {
  return <View>
      <Text style={styles.text}>Login Screen</Text>
    </View>;
};

const PasswordReset = () => {
  return <View>
      <Text>Password Reset</Text>
    </View>;
};

const Stack = createStackNavigator();

const Login = () => {
  return <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>;
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    padding: 20,
    margin: 10
  }
});
export default {
  title: "Login",
  navigator: Login
};