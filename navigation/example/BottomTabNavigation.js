import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//screens
import BookScreen from "../../screens/BookScreen";
import ImportScreen from "../../screens/ImportScreen";
import NotesScreen from "../../screens/NotesScreen";
import CameraScreen from "../../screens/CameraScreen";
import AccountScreen from "../../screens/AccountScreen";

//colors
import { COLORS } from "../../constants/colors";
//screen name
const [bookName, importName, notesName, cameraName, accountName] = [
  "Book",
  "Import",
  "Notes",
  "Camera",
  "Account",
];
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notes"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarLabelStyle: {
          textTransform: "uppercase",
          marginTop: -5,
          fontSize: 8,
        },
        tabBarStyle: {
          height: 50,
          paddingBottom: 5,
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;

          switch (rn) {
            case bookName:
              iconName = focused ? "book-open" : "book-open-outline";
              break;
            // case importName:
            //   iconName = focused ? "cloud-download" : "cloud-download-outline";
            //   break;
            case notesName:
              iconName = focused ? "notebook" : "notebook-outline";
              break;
            case cameraName:
              iconName = focused ? "camera" : "camera-outline";
              break;
            case accountName:
              iconName = focused ? "account" : "account-outline";
              break;
            default:
              break;
          }
          return (
            <MaterialCommunityIcons name={iconName} size={26} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name={bookName} component={BookScreen} />
      {/* <Tab.Screen name={importName} component={ImportScreen} /> */}
      <Tab.Screen name={notesName} component={NotesScreen} />
      <Tab.Screen name={cameraName} component={CameraScreen} />
      <Tab.Screen name={accountName} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
