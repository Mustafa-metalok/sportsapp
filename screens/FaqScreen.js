import { View, Text, ScrollView } from "react-native";
import React from "react";
import FaqHeader from "../components/FAQ Screen Components/FaqHeader";
import FaqSwitch from "../components/FAQ Screen Components/FaqSwitch";
import FaqSearchBar from "../components/FAQ Screen Components/FaqSearchBar";
import FaqQuestions from "../components/FAQ Screen Components/FaqQuestions";
import colors from "../assets/colors";

const FaqScreen = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, alignItems: "center", backgroundColor: colors.primary }}
    >
      <FaqHeader navigation={navigation} />
      <ScrollView>
        <FaqSwitch />
        <FaqSearchBar />
        <FaqQuestions />
      </ScrollView>
      <View
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: colors.primary,
        }}
      ></View>
    </View>
  );
};

export default FaqScreen;
