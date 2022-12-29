import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

const TeamTokenInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.teamLogoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/teamicon.png')}
            style={{width: '100%', height: '100%', borderRadius: 50}}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.teamNameContainer}>
        <View style={{height: '15%'}}></View>
        <View style={styles.teamName}>
          <Text
            style={{
              fontFamily: 'Poppins',
              color: colors.text,
              fontSize: 14,
              fontWeight: '500',
              right: 6,
              bottom: 5,
            }}
            // selectable={true}
          >
            Rajasthan Royals
          </Text>
        </View>
        <View style={styles.tokenName}>
          <Text
            style={{
              fontFamily: 'Poppins',
              color: colors.minortext,
              fontSize: 12,
              fontWeight: '700',
              right: 6,
              bottom: 5,
            }}>
            RSVC
          </Text>
        </View>
      </View>
      <View style={styles.tokenValueContainer}>
        <View style={styles.valueContainer}>
          <View style={{width: '2%'}}></View>
          <Text
            style={{
              color: colors.profit,
              fontSize: 15,
              fontFamily: 'Lato',
              fontWeight: '600',

              // top: "2%",
            }}>
            $251.23
          </Text>
          <Text> </Text>
          <Text
            style={{
              color: colors.profit,
              fontSize: 9,
              fontFamily: 'Lato',
              top: '2%',
            }}>
            +3.2%
          </Text>
          <View style={{width: '5%'}}></View>
        </View>
      </View>
    </View>
  );
};

export default TeamTokenInfo;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: 80,
    maxHeight: 80,
    // backgroundColor: colors.loss,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 15,
  },
  teamLogoContainer: {
    width: '28%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '68%',
    height: '90%',
    borderRadius: 50,
    bottom: 20,
    borderColor: colors.minortext,
    borderWidth: 1.5,
  },
  teamNameContainer: {
    width: '36%',
    height: '100%',
    // justifyContent: "center",
  },
  tokenValueContainer: {
    width: '36%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
  },
  valueContainer: {
    width: '70%',
    height: '50%',
    backgroundColor: colors.third,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
