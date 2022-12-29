import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  onPress,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import colors from "../assets/colors";

const BuySellUsdtHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require("../assets/icons/back.png")}
            style={{
              width: 20,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.walletTextView}>
        <Text style={styles.walletText}>Buy</Text>
        <Text style={styles.slashText}>/</Text>
        <Text style={styles.walletText}>Sell USDT</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/helpIcon.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    maxHeight: "8%",
    minHeight: "8%",
    width,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: colors.borders,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  walletText: {
    color: colors.text,
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "500",
    top: 4,
  },
  iconContainer: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  walletTextView: {
    flexDirection: "row",
  },
  slashText: {
    color: colors.text,
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "500",
    top: 9,
  },
});

export default BuySellUsdtHeader;
