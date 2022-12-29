import {
  StyleSheet,
  Text,
  View,
  onPress,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import TradingSwitch from './TradingSwitch';

export default function Batting_Team({navigation}) {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.backIconContainer}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={{
                width: 20,
                height: 25,
              }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <View style={styles.matchTextContainer}>
          <Text style={styles.matchText}>Match 4</Text>
          <Text style={styles.matchText}>Chinna Swamy</Text>
        </View>
      </View>
      <View style={styles.mainContainer2}>
        <View style={styles.innerContainer}>
          <View style={styles.srhIconContainer}>
            <Image
              source={require('../../assets/icons/srh.png')}
              style={{
                width: 45,
                height: 35,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.srhTextContainer}>
            <Text style={styles.srhText}>SRH</Text>
            <Text style={styles.srhBattingText}>Batting</Text>
          </View>
        </View>
        <View style={styles.innerContainer2}>
          <View style={styles.currentHvscTextContainer}>
            <Text style={styles.currentHvscText}> Current HSVC price</Text>
          </View>
          <View style={styles.valuesContainer}>
            <View style={styles.amountContainer}>
              <Image
                source={require('../../assets/icons/downred.png')}
                style={{
                  width: 15,
                  height: 20,
                }}
                resizeMode="contain"
              />
              <Text style={styles.amountText}> $250</Text>
            </View>
            <View style={styles.holdingsContainer}>
              <Text style={styles.holdingsText}>Holding : 25 </Text>
              <Text style={styles.holdingsText}>($243.3) </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer3}>
        <View style={styles.innerContainer3}>
          <View style={styles.buySellSwitch}>
            <TradingSwitch />
          </View>
          <View style={styles.tokenTextContainer}>
            <View style={styles.tokenHvscContainer}>
              <View style={styles.minusContainer}>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.commonContainer}>
                    <Text style={styles.minusText}>-</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.hvscText}>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.commonContainer}>
                    <Text style={styles.TokenText}>Tokens HSVC</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.plusContainer}>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.commonContainer}>
                    <Text style={styles.minusText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.amountUsdtContainer}>
              <View style={styles.minusContainer}>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.commonContainer}>
                    <Text style={styles.minusText}>-</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.hvscText}>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.commonContainer}>
                    <Text style={styles.TokenText}>Amount USDT</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.plusContainer}>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.commonContainer}>
                    <Text style={styles.minusText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.avblContainer}>
            <Text style={styles.avblText}>Avbl : </Text>
            <Text style={styles.avblText}>$2484.5</Text>
          </View>
        </View>

        <View style={styles.buyContainer}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.buyContainerView}>
              <Text style={styles.buyText}>Buy </Text>
              <Text style={styles.buyhsvcText}> HSVC</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    height: '100%',
    width: '21%',
    backgroundColor: colors.primary,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // transform: [{ rotate: "90deg" }],
  },
  mainContainer: {
    height: '8%',
    width: '94%',
    // backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: "flex-end",
  },
  backIconContainer: {
    height: '100%',
    width: 50,
    // borderRadius: 100,
    // backgroundColor: "green",
    justifyContent: 'center',
    // alignItems: ,
    left: '10%',
  },
  matchTextContainer: {
    width: '50%',
    height: '100%',
    // backgroundColor: "white",
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  matchText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: colors.minortext,
    fontWeight: '900',
    top: '10%',
    right: '5%',
  },
  mainContainer2: {
    height: '33%',
    width: '97%',
    // backgroundColor: "blue",
    // justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.borders,
  },
  innerContainer: {
    height: '50%',
    width: '100%',
    // backgroundColor: "brown",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  srhIconContainer: {
    height: '100%',
    width: '50%',
    // backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  srhTextContainer: {
    height: '100%',
    width: '50%',
    // backgroundColor: "yellow",
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer2: {
    height: '50%',
    width: '100%',
    // backgroundColor: "green",
    borderTopColor: colors.borders,
    borderTopWidth: 2,
  },
  currentHvscTextContainer: {
    width: '100%',
    height: '35%',
    // backgroundColor: "red",
  },
  valuesContainer: {
    flexDirection: 'row',
    height: '65%',
    width: '100%',
    // backgroundColor: "white",
  },
  amountContainer: {
    height: '100%',
    width: '50%',
    // backgroundColor: "yellow",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  holdingsContainer: {
    height: '100%',
    width: '50%',
    // backgroundColor: "brown",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  srhText: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: colors.text,
    top: '10%',
    right: '10%',
  },
  srhBattingText: {
    fontFamily: 'Poppins',
    fontSize: 9,
    color: colors.minortext,
    right: '10%',
  },
  currentHvscText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: colors.minortext,
  },
  amountText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: colors.loss,
  },
  holdingsText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: colors.highlight,
    right: '3%',
  },
  mainContainer3: {
    width: '97%',
    height: '53%',
    // backgroundColor: 'pink',
    // justifyContent: "center",
    alignItems: 'center',
  },
  innerContainer3: {
    height: '77%',
    width: '100%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.borders,
    borderBottomColor: colors.primary,
    // backgroundColor: 'white',
    // justifyContent: "center",
    // alignItems: "center",
  },
  buySellSwitch: {
    width: '100%',
    height: '25%',
    // backgroundColor: "grey",
    borderBottomColor: colors.borders,
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tokenTextContainer: {
    height: '60%',
    width: '100%',
    // backgroundColor: 'yellow',
  },
  tokenHvscContainer: {
    height: '50%',
    width: '100%',
    // backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.borders,
  },
  amountUsdtContainer: {
    height: '50%',
    width: '100%',
    // backgroundColor: "blue",
    flexDirection: 'row',
    borderTopColor: colors.borders,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.borders,
  },
  hvscText: {
    height: '100%',
    width: '65%',
  },
  minusContainer: {
    height: '98%',
    width: '17.5%',
    // backgroundColor: "yellow",
    borderTopColor: colors.borders,
    borderEndColor: colors.borders,
    borderTopWidth: 1,
    borderEndWidth: 1,
  },
  plusContainer: {
    height: '98%',
    width: '17.5%',
    // backgroundColor: "pink",
    borderTopColor: colors.borders,
    borderStartColor: colors.borders,
    borderTopWidth: 1,
    borderStartWidth: 1,
  },
  commonContainer: {
    width: '100%',
    height: '98%',
    // backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusText: {
    fontFamily: 'Lato',
    color: colors.minortext,
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 2,
  },
  TokenText: {
    fontFamily: 'Lato',
    color: colors.minortext,
    fontSize: 12,
  },
  avblContainer: {
    height: '15%',
    width: '100%',
    // backgroundColor: "green",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buyContainer: {
    height: '25%',
    width: '98%',
    // backgroundColor: "#0F935C",
    // borderBottomStartRadius: 6,
    // borderBottomEndRadius: 6,
    // bottom: 3,
  },
  buyContainerView: {
    height: '97%',
    width: '102%',
    backgroundColor: '#0F935C',
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    bottom: '3%',
    shadowOpacity: 10,
    right: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avblText: {
    fontFamily: 'Poppins',
    color: colors.highlight,
    fontSize: 11,
  },
  buyText: {
    fontFamily: 'Poppins',
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyhsvcText: {
    fontFamily: 'Poppins',
    color: colors.text,
    fontSize: 16,
    // top: '3%',
  },
});
