import {
  StyleSheet,
  Text,
  View,
  Image,
  DevSettings,
  TouchableOpacity,
  onPress,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

export default function TeamTokenCard1({
  title,
  holdings,
  valueState,
  valuePer,
  invested,
  current,
  navigation,
}) {
  return (
    <View style={styles.mainConatiner}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TeamPage')}
        style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <View style={styles.gapContainer}>
          <View style={styles.innerContainer1}>
            <View style={styles.view1}>
              <Image
                source={require('../../assets/icons/rr.png')}
                style={{
                  width: 40,
                  height: 40,
                  // borderColor: colors.borders,
                  // borderWidth: 2,
                  // borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.view2}>
              <Text style={styles.TitleText}>{title}</Text>
              <Text style={styles.holdingsText}>Holding : {holdings}</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.valueStateText}>{valueState}</Text>
              <Text style={styles.valuePerText}>{valuePer}</Text>
            </View>
          </View>
          <View style={styles.innerContainer2}>
            <Text style={styles.investedText}>Invested : {invested}</Text>
            <Text style={styles.investedText}>Current price : {current}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    width: '100%',
    maxHeight: 87,
    minHeight: 87,
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gapContainer: {
    width: '93%',
    height: '95%',
    backgroundColor: colors.third,
    borderRadius: 6,
    // justifyContent: "center",
    alignItems: 'center',
  },
  innerContainer1: {
    width: '93%',
    height: '70%',
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer2: {
    width: '93%',
    height: '30%',
    // backgroundColor: "blue",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view1: {
    height: '100%',
    width: '15%',
    // backgroundColor: "yellow",
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    height: '100%',
    width: '50%',
    // backgroundColor: "grey",
    justifyContent: 'center',
  },
  view3: {
    height: '100%',
    width: '35%',
    // backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  TitleText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: colors.text,
  },
  holdingsText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: colors.text,
  },
  valueStateText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: colors.loss,
  },
  valuePerText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: colors.profit,
  },
  investedText: {
    fontFamily: 'Poppins',
    fontSize: 11,
    color: colors.text,
    bottom: '1%',
  },
});
