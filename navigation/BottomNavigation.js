import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

//screens
import BookScreen from "../screens/BookScreen";
import NotesScreen from "../screens/NotesScreen";
import CameraScreen from "../screens/CameraScreen";
import AccountScreen from "../screens/AccountScreen";
import { COLORS } from "../constants/colors";
//assets
import Icon from "../assets/Icon";
const [bookName, importName, notesName, cameraName, accountName] = [
  "Book",
  "Import",
  "Notes",
  "Camera",
  "Account",
];
const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notes"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.grey}
      barStyle={{ backgroundColor: "#fff" }}
      screenOptions={({ route }) => ({
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
          return (
            <Icon type="ionicons" name={iconName} size={22} color={color} />
          );
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

export default BottomNavigation;
