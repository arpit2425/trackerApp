import React from "react";
import TrackDetails from "./TrackDetails";
import { Text, StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function TrackList({ navigation }) {
  return (
    <View>
      <Text>TrackList</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
export default TrackList;
