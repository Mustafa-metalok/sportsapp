import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  onPress,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

const WalletTokenTransaction = ({
  value,
  amount,
  time,
  txno,
  tokenName,
  date,
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Deposit')}
        style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <View style={styles.gapContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/icons/exchange.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            {/* <Text style={styles.dateText}>{date} </Text> */}
            <Text style={styles.hsvcText}>{tokenName} </Text>
            <Text numberOfLines={1} style={styles.txnText}>
              Txn no : {txno}
            </Text>
          </View>
          <View style={styles.arrowContainer}>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.text2Container}>
            <Text style={styles.hsvcText}>{value}</Text>
            <Text style={styles.dateText}>
              {time} | {date}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WalletTokenTransaction;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: 70,
    maxHeight: 70,
    // backgroundColor: colors.secondary,
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    // top: "2%",
  },
  gapContainer: {
    width: '93%',
    height: '95%',
    backgroundColor: colors.third,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },
  iconContainer: {
    width: '15%',
    height: '90%',
    // backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '40%',
    height: '90%',
    // backgroundColor: "grey",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  arrowContainer: {
    width: '10%',
    height: '90%',
    // backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2Container: {
    width: '30%',
    height: '90%',
    // backgroundColor: "grey",
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  dateText: {
    fontFamily: 'Lato',
    fontSize: 11,
    color: colors.minortext,
  },
  hsvcText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: colors.text,
  },
  txnText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: colors.minortext,
  },
});
