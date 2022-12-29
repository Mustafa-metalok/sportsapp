import { View, Text } from "react-native";
import React from "react";
import NewsScreen1Header from "../components/NewsScreen1  components/NewsScreen1Header";
import Newsbar from "../components/NewsScreen1  components/Newsbar";
import NewsDetails from "../components/NewsScreen1  components/NewsDetails";
import NewsLikeSaveBottom from "../components/NewsScreen1  components/NewsLikeSaveBottom";
import colors from "../assets/colors";

const NewsScreen1 = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <NewsScreen1Header navigation={navigation} />
      <Newsbar />
      <NewsDetails />
      <NewsLikeSaveBottom />
    </View>
  );
};

export default NewsScreen1;
