import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const StyledSafeAreaView = ({ children }) => {
  console.log("GAGA ka");
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default React.memo(StyledSafeAreaView);
