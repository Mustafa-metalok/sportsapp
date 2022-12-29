import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  onPress,
  Image,
} from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../../assets/colors";

const DepositWalletDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View style={styles.walletDetailsContainer}>
          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Wallet Address</Text>
            <View style={styles.walletAdressTextCotainer}>
              <Text style={styles.walletDetailsText}>
                48394u83uc483jjds884334
              </Text>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={require("../../assets/icons/copy.png")}
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Wallet Name</Text>
            <Text style={styles.walletDetailsText}>John Doe</Text>
          </View>
          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>TxiD</Text>
            <View style={styles.walletAdressTextCotainer}>
              <Text style={styles.walletDetailsText}>
                sdgvslrdknouoweruhovub
              </Text>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={require("../../assets/icons/copy.png")}
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Txn Fee</Text>
            <Text style={styles.walletDetailsText}>₹45.000</Text>
          </View>

          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Date</Text>
            <Text style={styles.walletDetailsText}>26/10/2022</Text>
          </View>

          <View style={styles.walletDetailsTextView}>
            <Text style={styles.walletTitleText}>Time</Text>
            <Text style={styles.walletDetailsText}>12:31PM</Text>
          </View>
        </View>
        <View style={styles.needHelpTextCONtainer}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.needHelpText}>Need Help?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.discriptiveTextContainer}>
          <Text style={styles.discriptiveText}>
            DIsclaimer : Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DepositWalletDetails;

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(100),
    height: "57%",
    // backgroundColor: "grey",
    // justifyContent: "center",
    alignItems: "center",
  },
  gapContainer: {
    width: "95%",
    height: "95%",
    // justifyContent: "center",
    alignItems: "center",
  },
  walletDetailsContainer: {
    height: "70%",
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
  },
  walletDetailsTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
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
  needHelpTextCONtainer: {
    width: "95%",
    height: "20%",
    // backgroundColor: "pink",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  needHelpText: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: colors.highlight,
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
  walletAdressTextCotainer: {
    flexDirection: "row",
  },
});
