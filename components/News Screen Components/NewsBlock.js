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

export default function NewsBlock() {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.gapContainer}>
          <View style={styles.photoContainer}>
            <Image
              source={require("../../assets/icons/virat.png")}
              style={{
                width: "95%",
                height: "100%",
                borderRadius: 8,
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.newsContainer}>
            <View style={{ width: "90%", height: "3%" }}></View>
            <View style={styles.T20TextContainer}>
              <Text style={styles.t20Text}>T20 Men’s World Cup</Text>
            </View>
            <View style={styles.newsTextContainer}>
              <Text style={styles.newsText} numberOfLines={2}>
                I just hit the two sixes instinctively, says Virat Kohli after
                unbeaten 82{" "}
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <Image
                source={require("../../assets/icons/clock.png")}
                style={{
                  width: "6.5%",
                  height: "100%",
                }}
                resizeMode="contain"
              />
              <Text style={styles.timeText}>{"  "}4m ago</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    maxHeight: 110,
    minHeight: 110,
    width: responsiveWidth(100),
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  gapContainer: {
    height: "95%",
    width: "95%",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  photoContainer: {
    height: "95%",
    width: "30%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  newsContainer: {
    height: "95%",
    width: "65%",
    justifyContent: "space-evenly",
    // backgroundColor: "brown",
  },
  T20TextContainer: {
    height: "20%",
    width: "90%",
    justifyContent: "center",
    // backgroundColor: "red",
    // alignItems: "center",
  },
  t20Text: {
    fontFamily: "Poppins",
    color: colors.minortext,
    fontSize: 11,
  },
  newsTextContainer: {
    height: "60%",
    width: "90%",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  newsText: {
    fontFamily: "Poppins",
    color: colors.minortext,
    fontSize: 14,
  },
  timeContainer: {
    height: "15%",
    width: "90%",
    // justifyContent: "flex-start",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  timeText: {
    fontFamily: "Poppins",
    fontSize: 11,
    color: colors.minortext,
  },
});
