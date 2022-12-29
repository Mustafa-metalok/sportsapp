import {View, Text} from 'react-native';
import React from 'react';
import BuySellTokenHeader from '../components/BuySellTokenHearder';
import TokenSwitch from '../components/TokenSwitch';
import BuyToken from '../components/BuyToken';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../assets/colors';

const BuySellTokenScreen = ({navigation}) => {
  return (
    <View
      style={{alignItems: 'center', flex: 1, backgroundColor: colors.primary}}>
      <BuySellTokenHeader navigation={navigation} />
      <TokenSwitch />
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <BuyToken />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default BuySellTokenScreen;
