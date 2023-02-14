import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "react-native-vector-icons";
import { SHADOWS } from "../../constants/theme";
import { COLORS } from "../../constants/colors";
const HeaderMain = (props) => {
  console.log("HEader main");
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 18,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="jellyfish-outline"
          size={24}
          color={COLORS.primary}
          solid
        />
        <Text style={{ marginLeft: 7, fontSize: 14 }}>{props.title}</Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity>
          <AntDesign name="search1" size={18} solid />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="plus" size={18} solid />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="delete" size={18} solid />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(HeaderMain);
