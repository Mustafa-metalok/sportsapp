import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors';

const TokensToken3 = ({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  option5,
  onSelectSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.labelContainer}>
          <ScrollView
            style={{width: '100%', height: '100%'}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => updateSwitchData(1)}>
              <View
                style={{
                  width: 70,
                  height: '100%',
                  //   backgroundColor: "red",
                  borderBottomColor:
                    getSelectionMode == 1 ? colors.highlight : colors.primary,
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      getSelectionMode == 1
                        ? colors.highlight
                        : colors.minortext,
                    fontFamily: 'Poppins',
                    fontWeight: '300',
                    top: 5,
                  }}>
                  {option1}
                </Text>
              </View>
            </TouchableOpacity>
            {/* 2nd switch */}
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => updateSwitchData(2)}>
              <View
                style={{
                  width: 80,
                  height: '100%',
                  //   backgroundColor: "blue",
                  borderBottomColor:
                    getSelectionMode == 2 ? colors.highlight : colors.primary,
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      getSelectionMode == 2
                        ? colors.highlight
                        : colors.minortext,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    top: 5,
                  }}>
                  {option2}
                </Text>
              </View>
            </TouchableOpacity>

            {/* 3 switch */}

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => updateSwitchData(3)}>
              <View
                style={{
                  width: 80,
                  height: '100%',
                  //   backgroundColor: "pink",
                  borderBottomColor:
                    getSelectionMode == 3 ? colors.highlight : colors.primary,
                  borderBottomWidth: 1,
                  // backgroundColor: "red",
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      getSelectionMode == 3
                        ? colors.highlight
                        : colors.minortext,
                    fontFamily: 'Poppins',
                    fontWeight: '300',
                    top: 5,
                  }}>
                  {option3}
                </Text>
              </View>
            </TouchableOpacity>

            {/* 3 switch */}

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => updateSwitchData(4)}>
              <View
                style={{
                  width: 80,
                  height: '100%',
                  //   backgroundColor: "red",
                  borderBottomColor:
                    getSelectionMode == 4 ? colors.highlight : colors.primary,
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      getSelectionMode == 4
                        ? colors.highlight
                        : colors.minortext,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    top: 5,
                  }}>
                  {option4}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => updateSwitchData(5)}>
              <View
                style={{
                  width: 80,
                  height: '100%',
                  //   backgroundColor: "red",
                  borderBottomColor:
                    getSelectionMode == 5 ? colors.highlight : colors.primary,
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      getSelectionMode == 5
                        ? colors.highlight
                        : colors.minortext,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    top: 5,
                  }}
                  numberOfLines={1}>
                  {option5}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default TokensToken3;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    maxHeight: 40,
    minHeight: 40,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.borders,
    // backgroundColor: "red",
    // bottom: "2%",
  },
  labelContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: "space-evenly",
    paddingLeft: 15,
    paddingRight: 20,
    // backgroundColor: "pink",
  },
});
