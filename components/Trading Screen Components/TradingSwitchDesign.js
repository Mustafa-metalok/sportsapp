import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../assets/colors";
const TradingSwitchDesign = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) => {
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
              width: 80,
              height: "100%",
              borderBottomColor:
                getSelectionMode == 1 ? colors.profit : colors.primary,
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: getSelectionMode == 1 ? colors.profit : colors.minortext,
                fontFamily: "Poppins",
                fontSize: 11,
              }}
            >
              {option1}
            </Text>
          </View>
        </TouchableOpacity>
        {/* <View style={{ width: "70%", height: "90%" }}></View> */}
        {/* 2nd switch */}
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}>
          <View
            style={{
              width: 80,
              height: "100%",
              borderBottomColor:
                getSelectionMode == 2 ? colors.profit : colors.primary,
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: getSelectionMode == 2 ? colors.profit : colors.minortext,
                fontFamily: "Poppins",
                fontSize: 11,
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

export default TradingSwitchDesign;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  labelContainer: {
    width: "95%",
    height: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "red",
  },
});
