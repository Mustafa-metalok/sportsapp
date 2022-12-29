import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

const TransactionCard = ({
  transactionType,
  txno,
  time,
  amount,
  value,
  date,
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Deposit')}
        style={{ alignItems: 'center' }}>
        <View style={styles.secondContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/icons/exchange.png')}
              style={{
                width: 38,
                height: 38,
              }}
            />
          </View>
          <View style={styles.gapContainer}>
            <View style={styles.leftTextContainer}>
              <Text style={styles.dateText}>{date}</Text>
              <Text style={styles.depositeText}>{transactionType}</Text>
              <Text style={styles.txnText}>Txn no : {txno}</Text>
            </View>
            <View style={[styles.rightTextContainer, { right: 17 }]}>
              <Text style={styles.timeText}>{time}</Text>
              <Text style={styles.valueText}>{amount}</Text>
              <Text style={styles.moneyText}>{value}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    maxHeight: 75,
    minHeight: 75,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  secondContainer: {
    width: '95%',
    minHeight: 70,
    maxHeight: 70,
    backgroundColor: colors.third,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  iconContainer: {
    width: '18%',

    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gapContainer: {
    height: '90%',
    width: '80%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:colors.highlight
  },
  dateText: {
    fontSize: 11,
    color: colors.minortext,
    fontFamily: 'Lato',
    fontWeight: '400',
  },
  depositeText: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
  txnText: {
    fontSize: 12,
    color: colors.minortext,
    fontFamily: 'Lato',
    fontWeight: '300',
  },
  timeText: {
    fontSize: 11,
    color: colors.minortext,
    fontFamily: 'Lato',
    fontWeight: '400',
  },
  valueText: {
    fontSize: 16,
    color: colors.profit,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  moneyText: {
    fontSize: 12,
    color: colors.minortext,
    fontFamily: 'Lato',
    fontWeight: '300',
  },
  leftTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
});

export default TransactionCard;
