import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { handleView } from "../redux/viewSlice";
import { handleSort } from "../redux/sortSlice";

import { MaterialCommunityIcons } from "react-native-vector-icons";

const SortComponent = () => {
  const view = useSelector((state) => state.view.view);
  const sort = useSelector((state) => state.sort.sort);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        marginTop: 20,
        marginHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 12 }}>Sort by: </Text>
          <TouchableOpacity onPress={() => dispatch(handleSort())}>
            <MaterialCommunityIcons name={sort} size={18} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 12 }}>View: </Text>
          <TouchableOpacity onPress={() => dispatch(handleView())}>
            <MaterialCommunityIcons name={view} size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SortComponent;
