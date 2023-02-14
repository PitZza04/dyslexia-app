import { StyleSheet, View } from "react-native";
import React from "react";

const Layout = ({ children }) => {
  return <View style={{ backgroundColor: "#fff", flex: 1 }}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({});
