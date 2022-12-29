/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors';

const TeamTokenCard = ({
  teamName,
  totalTokens,
  TokenValue,
  tokenState,
  navigation,
  img,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TeamPage')}
        style={{alignItems: 'center'}}>
        <View style={styles.secondContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={img}
              style={{
                width: 38,
                height: 38,
                borderRadius: 50,
              }}
            />
          </View>
          <View style={styles.gapContainer}>
            <View style={styles.leftTextContainer}>
              <Text style={styles.teamName}>{teamName}</Text>
              <Text style={styles.totalTokens}>Holding : {totalTokens}</Text>
            </View>
            <View style={[styles.rightTextContainer, {right: 17}]}>
              <Text style={styles.TokenValue}>{TokenValue}</Text>
              <Text style={styles.tokenState}>{tokenState}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    Width: '100%',
    minHeight: 75,
    maxHeight: 75,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red",
  },
  secondContainer: {
    width: '93%',
    minHeight: 70,
    maxHeight: 65,
    backgroundColor: colors.third,
    // backgroundColor: 'pink',
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
  },
  teamName: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Poppins',
    fontWeight: '300',
  },
  totalTokens: {
    fontSize: 12,
    color: colors.minortext,
    fontFamily: 'Poppins',
    fontWeight: '300',
  },
  TokenValue: {
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Lato',
    fontWeight: '600',
  },
  tokenState: {
    fontSize: 12,
    color: colors.profit,
    top: 3,
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

export default TeamTokenCard;
