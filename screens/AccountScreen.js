import { View, Text } from "react-native";
import React from "react";
//components
import HeaderMain from "../components/header/HeaderMain";
import StyledSafeAreaView from "../components/StyledSafeAreaView";
const AccountScreen = () => {
  return (
    <StyledSafeAreaView>
      <HeaderMain title="Account" />
    </StyledSafeAreaView>
  );
};

export default AccountScreen;
