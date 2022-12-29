import {StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Batting_Team from '../components/Trading Screen Components/Batting_Team';
import Match_Info from '../components/Trading Screen Components/Match_Info';
import Bowling_Team from '../components/Trading Screen Components/Bowling_Team';
import colors from '../assets/colors';

<StatusBar backgroundColor={colors.primary} hidden="true" />;
const TradingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Batting_Team navigation={navigation} />
      <Match_Info />
      <Bowling_Team navigation={navigation} />
    </View>
  );
};

export default TradingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: "100%",
    // height: "100%",
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
});
