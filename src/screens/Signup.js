import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
function Signup({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Signin")}
      />
      <Text>Signup</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default Signup;
