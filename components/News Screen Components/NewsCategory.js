import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../assets/colors";
const NewsCategory = ({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
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
              width: 70,
              height: "125%",
              //   backgroundColor: "red",
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
              width: 100,
              height: "125%",
              //   backgroundColor: "blue",
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

        {/* 3 switch */}

        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(3)}>
          <View
            style={{
              width: 100,
              height: "125%",
              //   backgroundColor: "pink",
              borderBottomColor:
                getSelectionMode == 3 ? colors.highlight : colors.primary,
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color:
                  getSelectionMode == 3 ? colors.highlight : colors.minortext,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              {option3}
            </Text>
          </View>
        </TouchableOpacity>

        {/* 3 switch */}

        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(4)}>
          <View
            style={{
              width: 100,
              height: "125%",
              //   backgroundColor: "red",
              borderBottomColor:
                getSelectionMode == 4 ? colors.highlight : colors.primary,
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color:
                  getSelectionMode == 4 ? colors.highlight : colors.minortext,
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              {option4}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCategory;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    maxHeight: 60,
    minHeight: 60,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.borders,
    // backgroundColor: "red",
  },
  labelContainer: {
    width: "90%",
    height: "90%",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
    paddingLeft: 15,
    paddingRight: 20,
    // backgroundColor: "pink",
  },
});
