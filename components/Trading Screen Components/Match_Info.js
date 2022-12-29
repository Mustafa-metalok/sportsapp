import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  onPress,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

export default function Match_Info() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer1}>
          <View style={styles.battersInfoContainer}>
            <View style={styles.BattersTextContainer}>
              <Text style={[styles.battersText, {bottom: '2%'}]}>Batters</Text>
            </View>
            <View style={styles.battersinfoTextView}>
              <View style={styles.battersinfoText}>
                <Text style={[styles.battersText1, {bottom: '3%'}]}>
                  Kane Williamson
                </Text>
                <Text style={[styles.battersText1, {bottom: '3%'}]}>
                  45(20)
                </Text>
              </View>
              <View style={styles.battersinfoText}>
                <Text style={[styles.battersText1, {bottom: '3%'}]}>
                  Abishek Sharma
                </Text>
                <Text style={[styles.battersText1, {bottom: '3%'}]}>2(10)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.innerContainer2}>
          <Text style={styles.scoreText}>SRH</Text>
          <Text style={styles.scoreText}>|</Text>
          <Text style={styles.scoreText}>145/3</Text>
          <Text style={styles.scoreText}>(16.3)</Text>
        </View>
        <View style={styles.innerContainer3}>
          <View style={styles.overContainer}>
            <View style={styles.overViewContaine}>
              <Text style={styles.battersText}>This Over</Text>
            </View>
            <View style={styles.overboxContaine}>
              <View style={styles.bollContainer}>
                <Text style={styles.bollText}>2</Text>
              </View>
              <View style={styles.bollContainer}>
                <Text style={styles.bollText}>1</Text>
              </View>
              <View
                style={[styles.bollContainer, {backgroundColor: colors.loss}]}>
                <Text style={[styles.bollText, {}]}>6</Text>
              </View>
              <View
                style={[
                  styles.bollContainer,
                  {backgroundColor: colors.highlight},
                ]}>
                <Text style={styles.bollText}>4</Text>
              </View>
              <View style={styles.bollContainer}>
                <Text style={styles.bollText}>1</Text>
              </View>
              <View style={styles.bollContainer}>
                <Text style={styles.bollText}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.bowlerContainer}>
            <View style={styles.bowlerTextView}>
              <Text style={styles.battersText}>Bowler</Text>
            </View>
            <View style={styles.BowlersNameView}>
              <Text style={styles.battersText1}>Siraj</Text>
              <Text style={styles.battersText1}>20(3.2)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer1}>
        <View style={styles.innerContainer6}>
          <Image
            source={require('../../assets/icons/graph.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.innerContainer7}>
          <Image
            source={require('../../assets/icons/graph.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.mainContainer2}>
        <View style={styles.innerContainer4}>
          <Text style={styles.infoTitle}>DSVC</Text>
          <Text style={styles.infoTitleLoss}>$278.32</Text>
          <Text style={styles.infoTitle}>|</Text>
          <Text style={styles.infoTitle}>PSVC</Text>
          <Text style={styles.infoTitleProfit}>$278.32</Text>
          <Text style={styles.infoTitle}>|</Text>
          <Text style={styles.infoTitle}>KSVC</Text>
          <Text style={styles.infoTitleProfit}>$278.32</Text>
          <Text style={styles.infoTitle}>|</Text>
          <Text style={styles.infoTitle}>MSVC</Text>
          <Text style={styles.infoTitleLoss}>$278.32</Text>
          <Text style={styles.infoTitle}>|</Text>
          <Text style={styles.infoTitle}>CSVC</Text>
          <Text style={styles.infoTitleLoss}>$278.32</Text>
        </View>
        <View style={styles.innerContainer5}>
          <View style={styles.swapContainer}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.swapViewContainer}>
                <Text style={styles.swapText}>SWAP</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.matchinfo2Container}>
            <Text style={styles.infoTitle}>DSVC</Text>
            <Text style={styles.infoTitleLoss}>$278.32</Text>
            <Text style={styles.infoTitle}>|</Text>
            <Text style={styles.infoTitle}>PSVC</Text>
            <Text style={styles.infoTitleProfit}>$278.32</Text>
            <Text style={styles.infoTitle}>|</Text>
            <Text style={styles.infoTitle}>KSVC</Text>
            <Text style={styles.infoTitleProfit}>$278.32</Text>
            <Text style={styles.infoTitle}>|</Text>
          </View>
          <View style={styles.swapContainer}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.swapViewContainer}>
                <Text style={styles.swapText}>SWAP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '57%',
    height: '97%',
    // backgroundColor: "grey",
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.secondary,
  },
  mainContainer: {
    width: '100%',
    height: '14%',
    backgroundColor: colors.secondary,
    borderRadius: 6,
    borderWidth: 0.7,
    borderColor: colors.borders,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer1: {
    height: '95%',
    width: '33.3%',
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  battersInfoContainer: {
    height: '70%',
    width: '80%',
    // backgroundColor: "pink",
  },
  BattersTextContainer: {
    height: '50%',
    width: '100%',
    // backgroundColor: "yellow",
  },
  battersText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: colors.minortext,
    fontWeight: '700',
  },
  battersinfoTextView: {
    height: '70%',
    width: '100%',
    // backgroundColor: "green",
  },
  battersinfoText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  battersText1: {
    fontFamily: 'Lato',
    fontSize: 9,
    color: colors.highlight,
  },
  innerContainer2: {
    height: '100%',
    width: '33.3%',
    backgroundColor: colors.highlight,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  scoreText: {
    fontFamily: 'Lato2',
    fontSize: 15,
    fontWeight: '650',

    color: '#000000',
  },
  innerContainer3: {
    height: '95%',
    width: '33.3%',
    // backgroundColor: "blue",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overContainer: {
    height: '80%',
    width: '60%',
    // backgroundColor: "white",
  },
  bowlerContainer: {
    // backgroundColor: "grey",
    height: '80%',
    width: '30%',
  },
  overViewContaine: {
    width: '100%',
    height: '50%',
    // backgroundColor: "red",
    justifyContent: 'center',
  },
  overboxContaine: {
    width: '100%',
    height: '50%',
    // backgroundColor: "purple",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bollContainer: {
    width: '14%',
    height: '60%',
    backgroundColor: colors.primary,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bollText: {
    fontFamily: 'Lato',
    fontSize: 9,
    color: colors.text,
  },
  bowlerTextView: {
    height: '40%',
    width: '100%',
    // backgroundColor: "white",
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  BowlersNameView: {
    height: '60%',
    width: '100%',
    // backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  mainContainer1: {
    width: '100%',
    height: '65%',
    // backgroundColor: "yellow",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    // borderRadius: 6,
    // borderWidth: 2,
    // borderColor: colors.borders,
  },
  innerContainer6: {
    width: '49%',
    height: '98%',
    backgroundColor: colors.third,
    // backgroundColor: "red",
  },
  innerContainer7: {
    width: '49%',
    height: '98%',
    backgroundColor: colors.third,
  },
  mainContainer2: {
    width: '100%',
    height: '20%',
    // backgroundColor: "yellow",
    // borderRadius: 6,
    // borderWidth: 2,
    // borderColor: colors.borders,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  innerContainer4: {
    height: '43%',
    width: '98%',
    backgroundColor: colors.secondary,
    // backgroundColor: "red",
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  innerContainer5: {
    height: '47%',
    width: '100%',
    // backgroundColor: "red",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  swapContainer: {
    width: '15%',
    height: '100%',
    // backgroundColor: "grey",
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapText: {
    fontFamily: 'Poppins',
    fontSize: 9,
    color: colors.highlight,
    // top: "7%",
    fontWeight: 'bold',
  },
  swapViewContainer: {
    height: '90%',
    width: 60,
    borderWidth: 1,
    // backgroundColor: "red",
    borderColor: colors.highlight,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    top: '5%',
  },
  matchinfo2Container: {
    height: '85%',
    width: '67%',
    borderRadius: 6,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  infoTitle: {
    fontFamily: 'Poppins',
    color: colors.text,
    fontSize: 10,
  },
  infoTitleProfit: {
    fontFamily: 'Poppins',
    color: colors.profit,
    fontSize: 12,
  },
  infoTitleLoss: {
    fontFamily: 'Poppins',
    color: colors.loss,
    fontSize: 10,
  },
});
