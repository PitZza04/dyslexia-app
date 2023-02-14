import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";

import { COLORS, SHADOWS, SIZES } from "../constants/theme";
const SearchBar = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.base,
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          height: 45,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.grey,
          borderRadius: 50,
          padding: 10,
          ...SHADOWS.light,
        }}
      >
        <AntDesign
          name="search1"
          size={24}
          style={{ paddingLeft: 5 }}
          color={COLORS.black}
        />
        <TextInput
          placeholderTextColor={COLORS.black}
          placeholder="Search"
          style={{
            paddingLeft: 10,
            color: COLORS.black,
            flex: 1,
            fontSize: SIZES.large,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddNotes", { title: "Add note" })}
      >
        <View style={styles.addButton}>
          <AntDesign name="plus" size={20} color={COLORS.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  addButton: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 10,
    padding: 5,
  },
});
