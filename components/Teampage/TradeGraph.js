import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

const TradeGraph = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View
          style={{
            width: '95%',
            height: '70%',
            // backgroundColor: "red",
            justifyContent: 'center',
            alignItems: 'center',
            // borderBottomColor: colors.borders,
            // borderBottomWidth: 1.5,
          }}>
          <Image
            source={require('../../assets/icons/graph.png')}
            style={{width: 360, height: 234}}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.buySellContainer}>
          <View style={styles.innerContainer3}>
            <View style={styles.buySellSwitch}>
              <Text style={[styles.buyhsvcText, {top: '10%'}]}>Buy RSVC</Text>
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
            <View style={styles.buyContainer}>
              <TouchableOpacity onPress={onPress}>
                <View style={styles.buyContainerView}>
                  <Text style={styles.buyText}>Buy </Text>
                  <Text style={styles.buyhsvcText}> RSVC</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '10%'}}></View>
          <View style={styles.innerContainer3}>
            <View style={styles.buySellSwitch}>
              <Text style={[styles.buyhsvcText, {top: '5%'}]}>Sell RSVC</Text>
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
            <View style={styles.buyContainer}>
              <TouchableOpacity onPress={onPress}>
                <View style={styles.sellContainerView}>
                  <Text style={styles.buyText}>Sell </Text>
                  <Text style={styles.buyhsvcText}> RSVC</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TradeGraph;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 350,
    maxHeight: 350,
    // backgroundColor: "red",
  },
  gapContainer: {
    width: '95%',
    height: '95%',
    // backgroundColor: "grey",
    // justifyContent: "center",
    alignItems: 'center',
  },
  buySellContainer: {
    flexDirection: 'row',
    width: '97%',
    height: '50%',
    // backgroundColor: 'pink',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  innerContainer3: {
    height: '77%',
    width: '45%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.borders,
    borderBottomColor: colors.primary,
    // backgroundColor: 'white',
    // justifyContent: "center",
    // alignItems: "center",
    top: '2%',
  },
  buySellSwitch: {
    width: '100%',
    height: '25%',
    // backgroundColor: "grey",
    borderBottomColor: colors.borders,
    borderBottomWidth: 1,
    bottom: '1%',
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
    fontFamily: 'Poppins-Regular',
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
    fontFamily: 'Lato-Regular',
    color: colors.minortext,
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 2,
  },
  TokenText: {
    fontFamily: 'Lato-Regular',
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
    height: 50,
    width: '105%',
    backgroundColor: '#0F935C',
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    bottom: '1%',
    shadowOpacity: 10,
    right: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avblText: {
    fontFamily: 'Poppins-Regular',
    color: colors.highlight,
    fontSize: 11,
  },
  buyText: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.text,
    // fontWeight: 'bold',
    fontSize: 16,
  },
  buyhsvcText: {
    fontFamily: 'Poppins-Regular',
    color: colors.text,
    fontSize: 16,
    // top: '3%',
  },
  sellContainerView: {
    height: 50,
    width: '105%',
    backgroundColor: '#EC3E47',
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    bottom: '1%',
    shadowOpacity: 10,
    right: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
