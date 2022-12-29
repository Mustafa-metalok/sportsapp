import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import PieChartView from './PieChartView';

export default function PortfolioValue() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer1}>
        <Text style={styles.assestText}>Asset allocation</Text>
      </View>
      <View style={styles.innerContainer2}>
        <PieChartView />
      </View>
      <View style={{height: '2%'}}></View>
      <View style={styles.innerContainer3}>
        <View style={styles.innerContainer4}>
          <View style={styles.leftContainer}>
            <Text style={styles.valueText}>₹5,62,435.35</Text>
            <Text style={[styles.typeText, {top: '10%'}]}>Invested</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.valueText}>₹5,57,835.35</Text>
            <Text style={[styles.typeText, {top: '10%'}]}>Current value</Text>
          </View>
        </View>
        <View style={styles.innerContainer5}>
          <View style={styles.topTextContainer}>
            <Text style={styles.valueText1}>-4,600.30</Text>
            <Text style={styles.valueText2}>-20.4%</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={[styles.typeText, {bottom: '10%'}]}>Total P&L</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: 350,
    maxHeight: 350,
    // backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer1: {
    width: '95%',
    height: '10%',
    // backgroundColor: "red",
    justifyContent: 'flex-end',
    left: '2%',
  },
  assestText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: colors.minortext,
    bottom: '10%',
  },
  innerContainer2: {
    width: '95%',
    height: '50%',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer3: {
    width: '95%',
    height: '40%',
    // backgroundColor: "grey",
    justifyContent: 'space-between',
  },
  innerContainer4: {
    width: '100%',
    height: '50%',
    // backgroundColor: "green",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer5: {
    width: '100%',
    height: '50%',
    // backgroundColor: "blue",
  },
  leftContainer: {
    width: '50%',
    height: '70%',
    // backgroundColor: "grey",
    borderRightWidth: 2,
    borderRightColor: colors.minortext,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: '50%',
    height: '70%',
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    fontFamily: 'Lato',
    fontSize: 23,
    color: colors.text,
  },
  typeText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: colors.minortext,
  },
  topTextContainer: {
    height: '60%',
    width: '100%',
    // backgroundColor: "yellow",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTextContainer: {
    height: '40%',
    width: '100%',
    // backgroundColor: "pink",
    // justifyContent: "center",
    alignItems: 'center',
  },
  valueText1: {
    fontFamily: 'Lato',
    fontSize: 23,
    color: colors.loss,
  },
  valueText2: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: colors.loss,
    top: '1%',
    left: '10%',
  },
});
