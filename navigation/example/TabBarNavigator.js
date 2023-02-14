import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import BookScreen from "../screens/BookScreen";
import NotesScreen from "../screens/NotesScreen";
import CameraScreen from "../screens/CameraScreen";
import AccountScreen from "../screens/AccountScreen";
import { Ionicons } from "react-native-vector-icons";
import { COLORS } from "../constants/colors";
const [bookName, importName, notesName, cameraName, accountName] = [
  "Book",
  "Import",
  "Notes",
  "Camera",
  "Account",
];
const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notes"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "grey",

        tabBarLabelStyle: {
          textTransform: "uppercase",
          position: "absolute",
          fontSize: 10,
          top: 40,
        },
        headerShown: false,

        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 60,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;

          switch (rn) {
            case bookName:
              iconName = "book-outline";
              break;
            // case importName:
            //   iconName = focused ? "cloud-download" : "cloud-download-outline";
            //   break;
            case notesName:
              iconName = "document-text-outline";
              break;
            case cameraName:
              iconName = "camera-outline";
              break;
            case accountName:
              iconName = "person-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name={bookName} component={BookScreen} />
      <Tab.Screen name={notesName} component={NotesScreen} />
      <Tab.Screen name={cameraName} component={CameraScreen} />
      <Tab.Screen name={accountName} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabBarNavigator;
