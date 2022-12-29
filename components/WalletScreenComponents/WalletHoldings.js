import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

const WalletHoldings = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.topContainer}>
          <View style={styles.textContainer}>
            <View style={styles.upperTextContainer}>
              <Text style={styles.totalSportTextContainer}>
                Total sportsverse Holdings
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.amountText}>₹5,62,435.35</Text>
                <Text style={styles.percentText}>+9.2%</Text>
              </View>
            </View>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.totalWalletTextContainer}>
                Total wallet Balance
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.amountText}>$30,000</Text>
                <Text style={styles.ustText}>USDT</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Buy_Sell_Token')}>
            <Image
              source={require('../../assets/icons/buysell.png')}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Buy_Sell_USDT')}>
            <Image
              source={require('../../assets/icons/moneysend.png')}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Swap_Token')}>
            <Image
              source={require('../../assets/icons/buycrypto.png')}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imgTextContainer}>
          <Text style={styles.iconText}>Buy/Sell Tokens</Text>
          <Text style={styles.iconText}>Buy/Sell USDT</Text>
          <Text style={styles.iconText}>Swap Tokens</Text>
        </View>
        <View>
          <Text style={styles.usdtText}>USDT - FIAT</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTextContainer}>
            DIsclaimer : Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    minHeight: 270,
    maxHeight: 270,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    width: '90%',
    height: '95%',
    backgroundColor: colors.secondary,
    borderColor: colors.borders,
    borderWidth: 1,
    borderRadius: 7,
    alignItems: 'center',
  },
  topContainer: {
    width: '90%',
    height: '49%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: '90%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  upperTextContainer: {
    alignItems: 'center',
  },
  bottomTextContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    height: '20%',
    width: '90%',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgTextContainer: {
    height: '10%',
    width: '90%',

    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  descriptionContainer: {
    height: '10%',
    width: '97%',
    justifyContent: 'center',
    // alignItems: "center",
  },
  descriptionTextContainer: {
    color: colors.minorDiscriptiveText,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 10,
    top: 9,
  },
  totalSportTextContainer: {
    fontFamily: 'Poppins',
    fontSize: 12.5,
    color: colors.minortext,
    fontWeight: '500',
  },
  amountText: {
    fontFamily: 'Lato',
    fontSize: 23,
    color: colors.text,
    fontWeight: '500',
  },
  percentText: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: colors.profit,
    fontWeight: '300',
    top: 10,
  },
  totalWalletTextContainer: {
    fontFamily: 'Poppins',
    fontSize: 12.5,
    color: colors.minortext,
    fontWeight: '500',
  },
  ustText: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: colors.text,
    fontWeight: '300',
    top: 10,
  },
  iconText: {
    fontFamily: 'Poppins',
    fontSize: 11,
    fontWeight: '600',
    color: colors.minortext,
  },
  usdtText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: colors.minorDiscriptiveText,
    bottom: 10,
  },
});

export default WalletHoldings;
