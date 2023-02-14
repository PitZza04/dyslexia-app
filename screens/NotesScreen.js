import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import React, { useState } from "react";
//redux

//components
import HeaderMain from "../components/header/HeaderMain";
import StyledSafeAreaView from "../components/StyledSafeAreaView";
import Header from "../components/header/Header";
import Layout from "../components/Layout";
import { COLORS } from "../constants/colors";
import SortComponent from "../components/SortComponent";
import SearchBar from "../components/SearchBar";
import { SHADOWS } from "../constants/theme";
//
import useAuth from "../hooks/useAuth";

const NotesScreen = ({ route, navigation }) => {
  console.log("NoteScreen is rendering111");
  const { user } = useAuth();
  console.log(user);
  return (
    <Layout>
      <StyledSafeAreaView></StyledSafeAreaView>
      <Header title="Notes" />

      {/* List of Notes */}
      {/* Search Box and a list or grid view */}
      <SortComponent />
      <SearchBar navigation={navigation} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
      <ListNotes navigation={navigation} {...SHADOWS.dark} />
    </Layout>
  );
};
const ListNotes = ({ navigation, ...props }) => (
  <View style={{ marginTop: 15 }}>
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate("ViewNote");
      }}
    >
      <View
        style={{
          height: 70,
          justifyContent: "space-around",
          backgroundColor: "#fff",
          paddingVertical: 5,
          marginHorizontal: 20,
          borderRadius: 10,
          padding: 10,
          ...props,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Science</Text>
        <Text numberOfLines={1} style={{ fontSize: 12, color: "#7882A4" }}>
          I was just content to see my daughter in such a stable relationship
          but a grandchild, that really was the icing on the cake.
        </Text>
        <Text style={{ fontSize: 10, color: COLORS.light }}>July 2, 2022</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);
export default NotesScreen;
