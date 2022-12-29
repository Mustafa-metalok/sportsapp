import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
  navigation,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors';

export default function HomeHoldings({navigation}) {
  return (
    <View style={styles.holdingsMainContainer}>
      <View style={styles.holdingSecondContainer}>
        <View style={styles.holdingsLeftsideContainer}>
          <Text
            style={{
              color: colors.minortext,
              fontSize: 12,
              fontFamily: 'Poppins',
            }}>
            Total sportsverse Holdings
          </Text>
          <Text
            style={{color: colors.profit, fontSize: 20, fontFamily: 'Lato'}}>
            ₹5,62,435.35
          </Text>
          <View style={styles.greenboxContainer}>
            <Text
              style={{color: colors.profit, fontSize: 12, fontFamily: 'Lato'}}>
              9.2%
            </Text>
          </View>
        </View>
        <View style={styles.holdingsRightsideContainer}>
          <View style={styles.portfolioContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('holdings')}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '300',
                  color: colors.highlight,
                  fontFamily: 'Poppins',
                }}>
                View Portfolio
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gapContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  holdingsMainContainer: {
    width: '100%',
    height: '10%',
    minHeight: 120,
    // maxHeight: 120,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  holdingSecondContainer: {
    width: '91%',
    height: '85%',
    backgroundColor: colors.third,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.borders,
    marginTop: '4%',
  },
  holdingsLeftsideContainer: {
    height: '80%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  holdingsRightsideContainer: {
    height: '89%',
    width: '30%',
    justifyContent: 'center',
  },
  greenboxContainer: {
    backgroundColor: '#0BBB701A',
    height: '24%',
    width: '20%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioContainer: {
    height: '30%',
    width: '96%',
    borderColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  gapContainer: {
    width: '0.5%',
  },
});
