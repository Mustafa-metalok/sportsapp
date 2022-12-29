import { View, Text } from "react-native";
import React from "react";
import BuySellUsdtHeader from "../components/Buy Sell USDT Components/BuySellUsdtHeader";
import UsdtSwitch from "../components/Buy Sell USDT Components/UsdtSwitch";
import BuyUsdt from "../components/Buy Sell USDT Components/BuyUsdt";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../assets/colors";

const BuySellUsdtScreen = ({ navigation }) => {
  return (
    <View
      style={{ alignItems: "center", flex: 1, backgroundColor: colors.primary }}
    >
      <BuySellUsdtHeader navigation={navigation} />
      <UsdtSwitch />
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <BuyUsdt />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default BuySellUsdtScreen;
