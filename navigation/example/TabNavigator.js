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
  "Notebook",
  "Camera",
  "Account",
];
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ focused }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#00A3D8",
        headerShown: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name={bookName}
        component={BookScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              <Ionicons name="book-outline" size={24} color={color} />
              <Text
                style={{
                  fontSize: 8,
                  paddingTop: -10,
                  color: color,
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                BOOKS
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name={cameraName}
        component={BookScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TouchableOpacity>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "rgb(255,207,0)",
                  borderRadius: 30,
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={22}
                  color={color}
                  solid={focused ? true : false}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      /> */}
      <Tab.Screen
        name={notesName}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              <Ionicons name="person-outline" size={24} color={color} />
              <Text
                style={{
                  fontSize: 8,
                  paddingTop: -10,
                  color: color,
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                ACCOUNT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
