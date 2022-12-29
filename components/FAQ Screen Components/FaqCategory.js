import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
const FaqCategory = ({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  onSelectSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = value => {
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
              height: '104%',
              //   backgroundColor: "red",
              borderBottomColor:
                getSelectionMode == 0 ? colors.highlight : colors.primary,
              borderBottomWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color:
                  getSelectionMode == 1 ? colors.highlight : colors.minortext,
                fontFamily: 'Poppins',
                fontWeight: '400',
                top: 10,
              }}>
              {option1}
            </Text>
          </View>
        </TouchableOpacity>
        {/* 2nd switch */}
        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)}>
          <View
            style={{
              width: 100,
              height: '104%',
              //   backgroundColor: "blue",
              borderBottomColor:
                getSelectionMode == 2 ? colors.highlight : colors.primary,
              borderBottomWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color:
                  getSelectionMode == 2 ? colors.highlight : colors.minortext,
                fontFamily: 'Poppins',
                fontWeight: '400',
                top: 10,
              }}>
              {option2}
            </Text>
          </View>
        </TouchableOpacity>

        {/* 3 switch */}

        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(3)}>
          <View
            style={{
              width: 100,
              height: '104%',
              //   backgroundColor: "pink",
              borderBottomColor:
                getSelectionMode == 3 ? colors.highlight : colors.primary,
              borderBottomWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color:
                  getSelectionMode == 3 ? colors.highlight : colors.minortext,
                fontFamily: 'Poppins',
                fontWeight: '400',
                top: 10,
              }}>
              {option3}
            </Text>
          </View>
        </TouchableOpacity>

        {/* 4 switch */}

        <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(4)}>
          <View
            style={{
              width: 100,
              height: '104%',
              //   backgroundColor: "red",
              borderBottomColor:
                getSelectionMode == 4 ? colors.highlight : colors.primary,
              borderBottomWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color:
                  getSelectionMode == 4 ? colors.highlight : colors.minortext,
                fontFamily: 'Poppins',
                fontWeight: '400',
                top: 10,
              }}>
              {option4}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FaqCategory;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '6%',
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.borders,
    // backgroundColor: "red",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  labelContainer: {
    width: '100%',
    height: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 20,
    // backgroundColor: "pink",
    bottom: '2.5%',
  },
});
