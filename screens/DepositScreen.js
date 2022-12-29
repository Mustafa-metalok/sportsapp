import { View, Text } from "react-native";
import React from "react";
import DepositeDetailsHeader from "../components/Deposit Screen components/DepositDetailsHeader";
import DepositeWallet from "../components/Deposit Screen components/DepositWallet";
import DepositeWalletDetails from "../components/Deposit Screen components/DepositWalletDetails";
import colors from "../assets/colors";

const DepositeDetailsScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", backgroundColor: colors.primary }}>
      <DepositeDetailsHeader navigation={navigation} />
      <DepositeWallet />
      <DepositeWalletDetails />
    </View>
  );
};

export default DepositeDetailsScreen;
