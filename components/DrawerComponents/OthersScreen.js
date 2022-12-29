import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

export default function OthersScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer1}>
        <Text style={styles.text1}>Other</Text>
      </View>
      <View style={styles.innerContainer2}>
        <Text style={styles.text2}>Rate the App</Text>
        <Text style={styles.text2}>Terms of Service</Text>
        <Text style={styles.text2}>About</Text>
        <Text style={[styles.text2, {color: colors.loss}]}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'grey',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer1: {
    height: '20%',
    width: '90%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  innerContainer2: {
    height: '80%',
    width: '80%',
    // backgroundColor: 'green',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.minortext,
  },
  text2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text,
  },
});
