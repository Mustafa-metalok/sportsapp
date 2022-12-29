import { StyleSheet, Text, View } from "react-native";
import React from "react";
import data from "../../data/teamtransaction.json";
import WalletTokenTransaction from "../WalletScreenComponents/WalletTokenTransaction";
import WalletTokenTransaction1 from "../WalletScreenComponents/WalletTokenTransaction1";

const TokenTransactionHistory = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <WalletTokenTransaction1  navigation={navigation}/>
      {data.map((item) => (
        <WalletTokenTransaction
          date={item.date}
          tokenName={item.tokenName}
          txno={item.txno}
          time={item.time}
          amount={item.amount}
          value={item.value}
          key={item.id}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

export default TokenTransactionHistory;

const styles = StyleSheet.create({});
