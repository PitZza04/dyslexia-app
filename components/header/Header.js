import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import moment from "moment";
import { COLORS } from "../../constants/theme";
const Header = ({ title }) => {
  //get today date
  let today = moment().format("dddd, MMMM D");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.today}>{today}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  today: { fontSize: 12, color: COLORS.gray },
  title: {
    fontSize: 32,
    marginTop: -5,
    fontWeight: "bold",
    color: COLORS.black,
  },
});
