import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../assets/colors";
const NewsTrendingSeeAll = ({
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
          <Text
            style={{
              color: getSelectionMode == 1 ? colors.text : colors.minortext,
              fontFamily: "Poppins",
              fontSize: 13,
            }}
          >
            {option1}
          </Text>
        </TouchableOpacity>
        <View style={{ width: "70%", height: "90%" }}></View>
        {/* 2nd switch */}
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}>
          <Text
            style={{
              color: getSelectionMode == 2 ? colors.text : colors.minortext,
              fontFamily: "Poppins",
              fontSize: 13,
            }}
          >
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsTrendingSeeAll;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "3%",
    // backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center",
  },
  labelContainer: {
    width: "90%",
    height: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "red",
  },
});
