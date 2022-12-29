import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from "../assets/colors";
const TokensToken = ({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  option5,
  onSelectSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
    // console.log("pressed");
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.labelContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(1)}
          >
            <View
              style={{
                width: 180,
                height: "100%",
                //   backgroundColor: "red",
                // borderBottomColor:
                //   getSelectionMode == 1 ? colors.highlight : colors.primary,
                // borderBottomWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: getSelectionMode == 1 ? colors.text : colors.team,
                  fontFamily: "Poppins",
                  fontSize: getSelectionMode == 1 ? 14 : 13,
                  top: 5,
                }}
              >
                {option1}
              </Text>
            </View>
          </TouchableOpacity>
          {/* 2nd switch */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(2)}
          >
            <View
              style={{
                width: 110,
                height: "100%",
                //   backgroundColor: "red",
                // borderBottomColor:
                //   getSelectionMode == 1 ? colors.highlight : colors.primary,
                // borderBottomWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: getSelectionMode == 2 ? colors.text : colors.team,
                  fontFamily: "Poppins",
                  fontSize: getSelectionMode == 2 ? 14 : 13,
                  top: 5,
                }}
              >
                {option2}
              </Text>
            </View>
          </TouchableOpacity>
          {/* 3nd switch */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(3)}
          >
            <View
              style={{
                width: 80,
                height: "100%",
                //   backgroundColor: "red",
                // borderBottomColor:
                //   getSelectionMode == 1 ? colors.highlight : colors.primary,
                // borderBottomWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: getSelectionMode == 3 ? colors.text : colors.team,
                  fontFamily: "Poppins",
                  fontSize: getSelectionMode == 3 ? 14 : 13,
                  top: 5,
                }}
              >
                {option3}
              </Text>
            </View>
          </TouchableOpacity>
          {/* 4nd switch */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(4)}
          >
            <View
              style={{
                width: 80,
                height: "100%",
                //   backgroundColor: "red",
                // borderBottomColor:
                //   getSelectionMode == 1 ? colors.highlight : colors.primary,
                // borderBottomWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: getSelectionMode == 4 ? colors.text : colors.team,
                  fontFamily: "Poppins",
                  fontSize: getSelectionMode == 4 ? 14 : 13,
                  top: 5,
                }}
              >
                {option4}
              </Text>
            </View>
          </TouchableOpacity>
          {/* 5nd switch */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(5)}
          >
            <View
              style={{
                width: 80,
                height: "100%",
                //   backgroundColor: "red",
                // borderBottomColor:
                //   getSelectionMode == 1 ? colors.highlight : colors.primary,
                // borderBottomWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: getSelectionMode == 5 ? colors.text : colors.team,
                  fontFamily: "Poppins",
                  fontSize: getSelectionMode == 5 ? 14 : 13,
                  top: 5,
                }}
              >
                {option5}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default TokensToken;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    maxHeight: 30,
    minHeight: 30,
    // backgroundColor: "red",
  },
  labelContainer: {
    width: "100%",
    maxHeight: 30,
    minHeight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "green",
  },
});
