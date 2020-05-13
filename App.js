import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "./src/screens/Account";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import TrackList from "./src/screens/TrackList";
import TrackDetails from "./src/screens/TrackDetails";
import TrackCreate from "./src/screens/TrackCreate";
import { StyleSheet, Text, View } from "react-native";

const login = createStackNavigator();
const track = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View>
      <NavigationContainer>
        <login.Navigator>
          <login.Screen name="Signup" component={Signup} />
          <login.Screen name="Signin" component={Signin} />
        </login.Navigator>
      </NavigationContainer>
      <NavigationContainer>
        <Tab.Navigator>
          {/* <track.Navigator>
          <track.Screen name="TrackList" component={TrackList} />
          <track.Screen name="TrackDetails" component={TrackDetails} />
        </track.Navigator> */}
          <Tab.Screen name="TrackCreate" component={TrackCreate} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
