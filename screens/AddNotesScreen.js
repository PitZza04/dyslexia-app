import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useCallback, memo } from "react";
//components
import StyledSafeAreaView from "../components/StyledSafeAreaView";
import Layout from "../components/Layout";
import Icon from "../assets/Icon";
import { COLORS, SIZES } from "../constants/theme";

const AddNotesScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <Layout>
      <StyledSafeAreaView>{/*Header */}</StyledSafeAreaView>
      <Header navigation={navigation} route={route} />
      <View style={styles.bodyWrapper}>
        <TextInput
          style={styles.textTitle}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          multiline={true}
          name="title"
        ></TextInput>
        <TextInput
          style={styles.textBody}
          value={content}
          onChangeText={setContent}
          placeholder="Start typing"
          multiline={true}
          autoFocus
        />
      </View>
    </Layout>
  );
};

const Header = ({ route, navigation }) => {
  const title = route.params.title;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Icon
          type="ionicons"
          name="arrow-back-outline"
          size={30}
          color={COLORS.primary}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(AddNotesScreen);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    height: 40,
  },
  title: {
    fontSize: SIZES.large,
    marginLeft: SIZES.large,
  },
  bodyWrapper: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  textTitle: {
    fontSize: SIZES.extraLarge,
    fontWeight: "500",
  },
  textBody: {
    marginTop: 10,
    fontSize: SIZES.medium,
  },
});
