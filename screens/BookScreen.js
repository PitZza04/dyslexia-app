import { View, Text } from "react-native";

//components
import HeaderMain from "../components/header/HeaderMain";
import StyledSafeAreaView from "../components/StyledSafeAreaView";
const BookScreen = () => {
  return (
    <StyledSafeAreaView>
      <HeaderMain title="Books" />
    </StyledSafeAreaView>
  );
};

export default BookScreen;
