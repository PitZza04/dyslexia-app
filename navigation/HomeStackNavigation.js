import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigation from "./BottomNavigation";
import ViewNoteScreen from "../screens/ViewNoteScreen";
import AddNotesScreen from "../screens/AddNotesScreen";
import LoginScreen from "../screens/LoginScreen";
const Stack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  const user = false;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name="ViewNote" component={ViewNoteScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AddNotes" component={AddNotesScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
