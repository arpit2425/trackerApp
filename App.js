import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Account from "./src/screens/Account";

import TrackCreate from "./src/screens/TrackCreate";

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from "react-navigation";
import TrackList from "./src/screens/TrackList";
import TrackDetails from "./src/screens/TrackDetails";
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: Signup,
    Signin: Signin,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackList,
      TrackDetails: TrackDetails,
    }),
    TrackCreate: TrackCreate,
    Account: Account,
  }),
});

export default createAppContainer(switchNavigator);
