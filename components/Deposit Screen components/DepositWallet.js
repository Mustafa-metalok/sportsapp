import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../../assets/colors";

const DepositeWallet = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View style={styles.TopTextContainer}>
          <Text style={styles.DepositeText}>Deposit Details</Text>
          <Text style={styles.fiatText}>FIAT to USDT</Text>
        </View>
        <View style={styles.middleTextContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>Amount Spent</Text>
            <Text style={styles.hsvcText}>₹45,000</Text>
            {/* <Text numberOfLines={1} style={styles.txnText}>
            Txn no : 375480299092
          </Text> */}
          </View>
          <View style={styles.arrowContainer}>
            <Image
              source={require("../../assets/icons/arrow.png")}
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.text2Container}>
            <Text style={styles.dateText}>USDT Received</Text>
            <Text style={styles.txnText}>$30,000USDT</Text>
          </View>
        </View>
        <View style={styles.LastTextContainer}>
          <Image
            source={require("../../assets/icons/completed.png")}
            style={{ width: 20, height: 20 }}
            resizeMode="center"
          />
          <Text style={styles.completedText}> Completed</Text>
        </View>
      </View>
    </View>
  );
};

export default DepositeWallet;

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(100),
    height: "30%",
    backgroundColor: colors.third,
    justifyContent: "center",
    alignItems: "center",
  },
  gapContainer: {
    width: "95%",
    height: "90%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  TopTextContainer: {
    width: "95%",
    height: "30%",
    // backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "35%",
    height: "90%",
    // backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  DepositeText: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: colors.team,
  },
  fiatText: {
    fontFamily: "Lato",
    fontSize: 18,
    color: colors.highlight,
  },
  arrowContainer: {
    width: "10%",
    height: "90%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  text2Container: {
    width: "35%",
    height: "90%",
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: colors.team,
  },
  hsvcText: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: colors.text,
    // lineHeight: 29,
    // letterSpacing: 7,
  },
  txnText: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: colors.text,
  },
  middleTextContainer: {
    width: "95%",
    height: "40%",
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  LastTextContainer: {
    width: "95%",
    height: "20%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  completedText: {
    fontFamily: "Poppins",
    fontSize: 17,
    color: colors.profit,
    top: 2,
  },
});
