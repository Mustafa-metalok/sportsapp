import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../assets/colors";
const TokensToken = ({ selectionMode, option1, option2, onSelectSwitch }) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(1)}>
          <View
            style={{
              width: 150,
              height: "100%",
              borderBottomColor:
                getSelectionMode == 1 ? colors.highlight : colors.primary,
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color:
                  getSelectionMode == 1 ? colors.highlight : colors.minortext,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              {option1}
            </Text>
          </View>
        </TouchableOpacity>
        {/* 2nd switch */}
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}>
          <View
            style={{
              width: 150,
              height: "100%",
              borderBottomColor:
                getSelectionMode == 2 ? colors.highlight : colors.primary,
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color:
                  getSelectionMode == 2 ? colors.highlight : colors.minortext,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              {option2}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TokensToken;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "7%",
    minHeight: 60,
    maxHeight: 60,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.borders,
    // backgroundColor: "red",
    // position: "absolute",
  },
  labelContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
