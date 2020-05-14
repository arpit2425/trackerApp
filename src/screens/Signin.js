import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
function Signin({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Signup")}
      />
      <Text>Signin</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default Signin;
