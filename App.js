import * as React from "react";
import { View, Text } from "react-native";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Account from "./src/screens/Account";

import TrackCreate from "./src/screens/TrackCreate";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackList from "./src/screens/TrackList";
import TrackDetails from "./src/screens/TrackDetails";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const isLogin = true;
function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TrackList} />
      <Stack.Screen name="Profile" component={TrackDetails} />
    </Stack.Navigator>
  );
}

function Optional() {
  if (!isLogin) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Messages" component={Home} />
          <Tab.Screen name="Feed" component={Account} />

          <Tab.Screen name="ggg" component={TrackCreate} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

function App() {
  return <Optional />;
}
export default App;
