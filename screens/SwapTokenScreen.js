import { View, Text } from "react-native";
import React from "react";
import SwapTokenHeader from "../components/SwapTokenHeader";
import SwapToken from "../components/SwapToken";
import colors from "../assets/colors";

const SwapTokenScreen = ({ navigation }) => {
  return (
    <View
      style={{ alignItems: "center", flex: 1, backgroundColor: colors.primary }}
    >
      <SwapTokenHeader navigation={navigation} />
      <SwapToken />
    </View>
  );
};

export default SwapTokenScreen;
