import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors";

const MatchHistory = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.historyContainer}>
        <View style={styles.totalMatches}>
          <Text
            style={{
              color: colors.minortext,
              fontFamily: "Poppins",
              right: "10%",
            }}
          >
            Total Matches
          </Text>
          <Text
            style={{ color: colors.minortext, right: "60%", bottom: "0.5%" }}
          >
            :
          </Text>
          <Text style={{ color: colors.minortext, fontFamily: "Poppins" }}>
            20
          </Text>
        </View>
        <View style={styles.totalWon}>
          <Text
            style={{
              color: colors.minortext,
              fontFamily: "Poppins",
              left: "30%",
            }}
          >
            Total Won
          </Text>
          <Text
            style={{ color: colors.minortext, right: "35%", bottom: "0.5%" }}
          >
            :
          </Text>
          <Text
            style={{ color: colors.minortext, left: 6, fontFamily: "Poppins" }}
          >
            10
          </Text>
        </View>
        <View style={styles.totalLost}>
          <Text
            style={{
              color: colors.minortext,
              fontFamily: "Poppins",
              left: "33%",
            }}
          >
            Total Lost
          </Text>
          <Text
            style={{ color: colors.minortext, right: "30%", bottom: "0.5%" }}
          >
            :
          </Text>
          <Text
            style={{ color: colors.minortext, left: 5, fontFamily: "Poppins" }}
          >
            10
          </Text>
        </View>
        <View style={styles.runRate}>
          <Text
            style={{
              color: colors.minortext,
              fontFamily: "Poppins",
              right: "40%",
            }}
          >
            Total net run rate
          </Text>
          <Text
            style={{ color: colors.minortext, right: "70%", bottom: "0.5%" }}
          >
            :
          </Text>
          <Text
            style={{ color: colors.minortext, right: 4, fontFamily: "Poppins" }}
          >
            72.6
          </Text>
        </View>
        <View style={styles.totalPoints}>
          <Text
            style={{
              color: colors.minortext,
              fontFamily: "Poppins",
              left: "20%",
            }}
          >
            Total points
          </Text>
          <Text
            style={{ color: colors.minortext, right: "30%", bottom: "0.5%" }}
          >
            :
          </Text>
          <Text
            style={{ color: colors.minortext, left: 5, fontFamily: "Poppins" }}
          >
            360
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MatchHistory;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "65%",
    minHeight: 350,
    maxHeight: 350,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  historyContainer: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    paddingTop: 25,
    // backgroundColor: "red",
  },
  totalMatches: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: "15%",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: colors.borders,
    // backgroundColor: "red",
  },
  totalWon: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    height: "15%",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: colors.borders,
    // backgroundColor: "blue",
  },
  totalLost: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: "15%",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: colors.borders,
  },
  runRate: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: "15%",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: colors.borders,
  },
  totalPoints: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: "15%",
    justifyContent: "space-evenly",
  },
});
