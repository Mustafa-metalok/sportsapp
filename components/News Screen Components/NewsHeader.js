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
import colors from "../../assets/colors";

const NewsHeader = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.backIconContainer}>
            <Image
              source={require("../../assets/icons/back.png")}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.walletTextView}>
        <Text style={styles.walletText}>News</Text>
      </View>

      {/* <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/helpIcon.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    maxHeight: 60,
    minHeight: 60,
    width,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: colors.borders,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  imageContainer: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
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
    // backgroundColor: "red",
  },
  walletTextView: {
    flexDirection: "row",
    height: "100%",
    width: "56%",
    // backgroundColor: "blue",
    alignContent: "center",
    alignItems: "center",
  },
  backIconContainer: {
    height: "100%",
    width: 50,
    // borderRadius: 100,
    // backgroundColor: "green",
    justifyContent: "center",
    // alignItems: ,
    left: "10%",
  },
});

export default NewsHeader;
