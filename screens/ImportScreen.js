import { View, Text } from "react-native";
import React from "react";

//components
import HeaderMain from "../components/header/HeaderMain";
import StyledSafeAreaView from "../components/StyledSafeAreaView";
const ImportScreen = () => {
  return (
    <StyledSafeAreaView>
      <HeaderMain title="Import" />
    </StyledSafeAreaView>
  );
};

export default ImportScreen;
