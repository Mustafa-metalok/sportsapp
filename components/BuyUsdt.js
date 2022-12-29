import {
  StyleSheet,
  Text,
  View,
  Image,
  onPress,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import colors from "../assets/colors";
import { TextInput } from "react-native-gesture-handler";

export default function BuyUsdt() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View style={styles.enterAmountContainer}>
          <View style={styles.enterAmountTextContainer}>
            <Text style={styles.enterAmountText}>Enter Amount</Text>
          </View>
          <View style={styles.usdtContainer}>
            <View style={styles.usdtImgTextContainer}>
              {/* <TouchableOpacity onPress={onPress}> */}
              <Image
                source={require("../assets/icons/india.png")}
                style={{
                  width: 25,
                  height: 25,
                }}
                resizeMode="contain"
              />
              {/* </TouchableOpacity> */}
              <TouchableOpacity onPress={onPress}>
                <Text style={styles.usdtText}>USDT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={require("../assets/icons/downMinor.png")}
                  style={{
                    width: 18,
                    height: 18,
                    right: 9,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.usdtGapContainer}></View>
            <View style={styles.usdtAmountContainer}>
              <TextInput
                placeholder="0.00"
                keyboardType="numeric"
                cursorColor={"gray"}
                placeholderTextColor={"#5D6166"}
                style={{
                  fontFamily: "Lato",
                  color: colors.minortext,
                  fontSize: 24,
                  paddingTop: 8,
                  paddingLeft: 10,
                }}
              />
            </View>
          </View>
          <View style={styles.highlightTextContainer}>
            <Text style={styles.highlightText}>1 INR = 21.02 USDT</Text>
          </View>
        </View>

        <View style={styles.enterAmountContainer}>
          <View style={styles.enterAmountTextContainer}>
            <Text style={styles.enterAmountText}>You will Receive</Text>
            <Text style={styles.avblText}>Avbl : 30,000 USDT</Text>
          </View>
          <View style={styles.usdtContainer}>
            <View style={styles.usdtImgTextContainer}>
              {/* <TouchableOpacity onPress={onPress}> */}
              <Image
                source={require("../assets/icons/crypto.png")}
                style={{
                  width: 25,
                  height: 25,
                }}
                resizeMode="contain"
              />
              {/* </TouchableOpacity> */}
              <TouchableOpacity onPress={onPress}>
                <Text style={styles.usdtText}>USDT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={require("../assets/icons/downMinor.png")}
                  style={{
                    width: 18,
                    height: 18,
                    right: 9,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.usdtGapContainer}></View>
            <View style={styles.usdtAmountContainer}>
              <TextInput
                placeholder="0.00"
                keyboardType="numeric"
                cursorColor={"gray"}
                placeholderTextColor={"#5D6166"}
                style={{
                  fontFamily: "Lato",
                  color: colors.minortext,
                  fontSize: 24,
                  paddingTop: 8,
                  paddingLeft: 10,
                }}
              />
            </View>
          </View>
          <View style={styles.highlightTextContainer}>
            <Text style={styles.highlightText}>1 INR = 21.02 USDT</Text>
          </View>
        </View>

        <View style={styles.walletDetailsContainer}>
          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Wallet Address</Text>
            <Text style={styles.walletDetailsText}>
              48394u83uc483jjds884334
            </Text>
          </View>
          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Wallet Name</Text>
            <Text style={styles.walletDetailsText}>John Doe</Text>
          </View>
          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Tokens you will receive</Text>
            <Text style={styles.walletDetailsText}>20,000 USDT</Text>
          </View>
        </View>

        <View style={styles.ContinueButtonContainer}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.ContinueButton}>
              <Text style={styles.ContinueButtonText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.discriptiveTextContainer}>
          <Text style={styles.discriptiveText}>
            DIsclaimer : Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(85),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  gapContainer: {
    width: "90%",
    height: "93%",
    // backgroundColor: "blue",
  },
  enterAmountContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: colors.secondary,
  },
  enterAmountTextContainer: {
    flexDirection: "row",
    height: "15%",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  avblText: {
    fontFamily: "Poppins",
    color: colors.minorDiscriptiveText,
    fontSize: 10,
  },

  enterAmountText: {
    fontFamily: "Poppins",
    color: colors.minortext,
    fontSize: 11,
  },
  usdtContainer: {
    height: "40%",
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "blue",
  },
  usdtImgTextContainer: {
    height: "100%",
    width: "40%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: colors.borders,
  },
  usdtText: {
    fontFamily: "Poppins",
    color: colors.minorDiscriptiveText,
    fontSize: 17,
    right: 3,
  },
  usdtGapContainer: {
    width: "5%",
    height: "100%",
  },
  usdtAmountContainer: {
    height: "100%",
    width: "58%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: colors.borders,
  },
  highlightTextContainer: {
    height: "15%",
    width: "85%",
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: "red",
  },
  highlightText: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: colors.highlight,
  },
  walletDetailsContainer: {
    height: "20%",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
  },
  walletDetailsTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walletTitleText: {
    fontFamily: "Poppins",
    color: colors.minorDiscriptiveText,
    fontSize: 14,
    left: 7,
  },
  walletDetailsText: {
    fontFamily: "Poppins",
    color: colors.minortext,
    fontSize: 14,
    fontWeight: "700",
    right: 7,
  },
  ContinueButtonContainer: {
    width: "100%",
    height: "13%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  ContinueButton: {
    height: responsiveHeight(7),
    width: responsiveWidth(55),
    backgroundColor: colors.highlight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  ContinueButtonText: {
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "600",
  },
  discriptiveTextContainer: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  discriptiveText: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: colors.minorDiscriptiveText,
    textAlign: "center",
  },
});
