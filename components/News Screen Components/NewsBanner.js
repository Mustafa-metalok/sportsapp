import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
} from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import colors from "../../assets/colors";

export default function NewsBanner({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View style={styles.photoContainer}>
          <Image
            source={require("../../assets/icons/indiapak.png")}
            style={{
              width: "95%",
              height: "100%",
              borderRadius: 8,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={{ width: "100%", height: "3%" }}></View>
        <View style={styles.TextContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("News1")}>
            <Text style={styles.t20Text}>T20 Men’s World Cup</Text>
            <Text style={styles.newsText}>
              India vs Pakistan, T20 World Cup 2022 Highlights: India beat
              Pakistan by four wicket
            </Text>
            <Text style={styles.timeText}>4h ago</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 300,
    minHeight: 300,
    width: responsiveWidth(100),
    // backgroundColor: "red",
  },
  gapContainer: {
    width: "95%",
    height: "95%",
    // backgroundColor: "blue",
    alignItems: "center",
  },
  photoContainer: {
    width: "100%",
    height: "65%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  TextContainer: {
    width: "94%",
    height: "30%",
    // maxheight: "35%",
    // backgroundColor: "green",
    justifyContent: "space-evenly",
  },
  t20Text: {
    fontFamily: "Poppins",
    fontSize: 11,
    color: "#D9D9D9",
  },
  newsText: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: colors.text,
  },
  timeText: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: "#D9D9D9",
  },
});
