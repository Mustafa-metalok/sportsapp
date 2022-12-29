import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import WalletHeader from '../components/WalletScreenComponents/WalletHeader';
import WalletHoldings from '../components/WalletScreenComponents/WalletHoldings';
import WalletAddress from '../components/WalletScreenComponents/WalletAddress';
import TransactionCard from '../components/WalletScreenComponents/TransactionCard';
import TransactionHisory from '../components/WalletScreenComponents/TransactionHistory';
import colors from '../assets/colors';
import data from "../data/transaction.json";
import TransactionCardS2 from '../components/WalletScreenComponents/TransactionCardS2';
import { useSelector } from 'react-redux';

const WalletScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <WalletHeader navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <WalletHoldings navigation={navigation} />
          <WalletAddress />
          <TransactionHisory />

        </ScrollView>
        <View
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: colors.primary,
          }}></View>
      </View>
    </>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
  },
});
