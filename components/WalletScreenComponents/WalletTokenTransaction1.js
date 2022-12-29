import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

const WalletTokenTransaction1 = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Deposit')}
        style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <View style={styles.gapContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/icons/inOut.png')}
              style={{
                width: 38,
                height: 38,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>12/20/22</Text>
            <Text style={styles.hsvcText}>Buy RSVC</Text>
            <Text numberOfLines={1} style={styles.txnText}>
              Txn no : 375480299092
            </Text>
          </View>

          <View style={styles.text2Container}>
            <Text style={styles.dateText}>23:20</Text>
            <Text style={styles.hsvcText}>+$5,203USDT</Text>
            <Text style={styles.txnText}>₹25,000</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WalletTokenTransaction1;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: 85,
    maxHeight: 85,
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
    width: '50%',
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
    fontSize: 15,
    top: '2.5%',
    color: colors.text,
  },
  txnText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: colors.minortext,
  },
});
