import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors';
const Tokens = ({ selectionMode, option1, option2, onSelectSwitch }) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
    // console.log("pressed");
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(1)}>
          <Text
            style={{
              color: getSelectionMode === 1 ? colors.text : colors.team,
              fontFamily: 'Poppins',
              fontSize: getSelectionMode === 1 ? 14 : 13,
              // top: 2,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        {/* 2nd switch */}
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}>
          <Text
            style={{
              color: getSelectionMode === 2 ? colors.text : colors.team,
              fontFamily: 'Poppins',
              fontSize: getSelectionMode === 2 ? 14 : 13,
              // top: 3,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tokens;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  labelContainer: {
    width: '48%',
    maxHeight: 30,
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: "green",
    // marginBottom: '2%',
  },
});
