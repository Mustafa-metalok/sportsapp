import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../assets/colors";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default function NewsLikeSaveBottom() {
  const [heart, setheartActive] = useState(false);
  const [save, setsaveActive] = useState(false);

  const handleHeart = () => {
    setheartActive(!heart);
  };
  const handleSave = () => {
    setsaveActive(!save);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View style={styles.likeCommentContainer}>
          <View style={styles.likeContaimner}>
            <TouchableOpacity onPress={handleHeart}>
              {!heart ? (
                <Image
                  source={require("../../assets/icons/heart1.png")}
                  style={{
                    width: 20,
                    height: 27,
                    bottom: 2,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../../assets/icons/heart.png")}
                  style={{
                    width: 20,
                    height: 27,
                    bottom: 2,
                  }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
            <Text style={styles.text}> 24.5K</Text>
          </View>
          <View style={{ width: "8%", backgroundColor: "red" }}></View>
          <View style={styles.commentContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require("../../assets/icons/comment.png")}
                style={{
                  width: 22,
                  height: 22,
                  bottom: 3,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.text}> 1K</Text>
          </View>
          <View style={styles.saveContainer}>
            <TouchableOpacity onPress={handleSave}>
              {!save ? (
                <Image
                  source={require("../../assets/icons/unsave.png")}
                  style={{
                    width: 20,
                    height: 18,
                    bottom: 2,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../../assets/icons/save.png")}
                  style={{
                    width: 20,
                    height: 18,
                    bottom: 2,
                  }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(100),
    height: "10%",
    justifyContent: "center",
    backgroundColor: colors.third,
    alignItems: "center",
    borderWidth: 0.6,
    borderColor: colors.borders,
  },
  gapContainer: {
    height: "90%",
    width: "90%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  likeCommentContainer: {
    width: "100%",
    height: "80%",
    // backgroundColor: "pink",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  likeContaimner: {
    width: "18%",
    height: "100%",
    // backgroundColor: "brown",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  commentContainer: {
    width: "55%",
    height: "100%",
    // backgroundColor: "blue",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  saveContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: colors.text,
  },
});
