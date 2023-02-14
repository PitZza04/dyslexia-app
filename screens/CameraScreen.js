import { View, Text } from "react-native";
import React from "react";
import HeaderMain from "../components/header/HeaderMain";
import StyledSafeAreaView from "../components/StyledSafeAreaView";
const CameraScreen = () => {
  return (
    <StyledSafeAreaView>
      <HeaderMain title="Camera" />
    </StyledSafeAreaView>
  );
};

export default CameraScreen;
