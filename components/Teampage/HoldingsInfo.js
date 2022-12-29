import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  onPress,
  Alert,
} from "react-native";
import React from "react";
import colors from "../../assets/colors";

const HoldingsInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sideOne}>
        <View style={{ width: "8%", height: "100%" }}></View>
        <View style={styles.sideOneInner}>
          <View style={styles.tokenInfoBox}>
            <View style={styles.tokenAddress}>
              <View
                style={{
                  width: "100%",
                  height: "40%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  top: 4,
                }}
              >
                <Text
                  style={{
                    color: colors.team,
                    fontSize: 12,
                    fontFamily: "Poppins",
                    top: 4,
                  }}
                >
                  Token Address
                </Text>
                <TouchableOpacity onPress={onPress}>
                  <Image
                    source={require("../../assets/icons/copy.png")}
                    style={{ width: 16, height: 16, top: 4 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  height: "60%",
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Lato",
                    fontSize: 16,
                    fontWeight: "600",
                    color: colors.text,
                    bottom: "12%",
                  }}
                >
                  0xb39370****1a3c
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.tokenInfoBox}>
            <View
              style={{
                width: "100%",
                height: "40%",
                flexDirection: "row",
                justifyContent: "space-around",
                top: 4,
              }}
            >
              <Text
                style={{
                  color: colors.team,
                  fontSize: 12,
                  fontFamily: "Poppins",
                  top: 4,
                }}
              >
                Token Address
              </Text>
              <Text> </Text>
            </View>
            <View style={styles.valueContainer}>
              <Text
                style={{
                  fontFamily: "Lato",
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.profit,
                  left: "12%",
                  top: "15%",
                }}
              >
                $54,216
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sideTwo}>
        <View style={styles.sideTwoInner}>
          <View style={styles.tokenInfoBox}>
            <View
              style={{
                width: "100%",
                height: "40%",
                flexDirection: "row",
                justifyContent: "space-around",
                top: 4,
              }}
            >
              <Text
                style={{
                  color: colors.team,
                  fontSize: 12,
                  fontFamily: "Poppins",
                  top: 4,
                }}
              >
                My Holdings
              </Text>
              <Text> </Text>
            </View>
            <View style={styles.valueContainer}>
              <Text
                style={{
                  fontFamily: "Lato",
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.text,
                  left: 23,
                  top: 6,
                }}
              >
                216 Tokens
              </Text>
            </View>
          </View>
          <View style={styles.tokenInfoBox}>
            <View
              style={{
                width: "100%",
                height: "40%",
                flexDirection: "row",
                justifyContent: "space-around",
                top: 4,
              }}
            >
              <Text
                style={{
                  color: colors.team,
                  fontSize: 12,
                  fontFamily: "Poppins",
                  top: 4,
                }}
              >
                24 Hour Change
              </Text>
              <Text> </Text>
            </View>
            <View style={styles.valueContainer}>
              <Text
                style={{
                  fontFamily: "Lato",
                  fontSize: 14,
                  fontWeight: "600",
                  color: colors.profit,
                  left: 20,
                  top: 6,
                }}
              >
                +2.32%
              </Text>
            </View>
          </View>
        </View>
        <View style={{ width: "8%", height: "100%" }}></View>
      </View>
    </View>
  );
};

export default HoldingsInfo;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: 150,
    maxHeight: 150,
    // backgroundColor: colors.text,
    flexDirection: "row",
  },
  sideOne: {
    width: "50%",
    height: "100%",
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sideTwo: {
    width: "50%",
    height: "100%",
    // backgroundColor: "green",
    flexDirection: "row",
  },
  sideOneInner: {
    width: "92%",
    height: "100%",
    // backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sideTwoInner: {
    width: "92%",
    height: "100%",
    // backgroundColor: "gray",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tokenInfoBox: {
    width: "97%",
    height: "46.5%",
    backgroundColor: colors.third,
    borderRadius: 6,
    borderColor: colors.borders,
    borderWidth: 0.5,
  },
  valueContainer: {
    width: "100%",
    height: "60%",
    // backgroundColor: "red",
    // justifyContent: "center",
  },
});
