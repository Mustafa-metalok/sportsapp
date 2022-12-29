import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
  ScrollView,
} from 'react-native';

import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors';

export default function NewsDetails(nativeEvent, scrollEventThrottle) {
  return (
    // <View style={styles.mainContainer}>
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.gapContainer}
      showsVerticalScrollIndicator={false}
      // onScroll={
      //   (nativeEvent = {
      //     contentInset: { bottom: 0, left: 0, right: 0, top: 0 },
      //     contentOffset: { scrollY: 100 },
      //     contentSize: { height: "100%", width: "100%" },
      //     layoutMeasurement: { height: "100%", width: "100%" },
      //   })
      // }
    >
      {/* <View style={styles.gapContainer}> */}
      {/* <ScrollView style={{ width: "100%", height: "100%" }}> */}
      <View style={styles.photoContainer}>
        <Image
          source={require('../../assets/icons/indiapak.png')}
          style={{
            width: '98%',
            height: '100%',
          }}
          resizeMode="contain"
        />
      </View>
      {/* <View style={{ width: "100%", height: "3%" }}></View> */}
      {/* <ScrollView style={{ width: "100%", height: "100%" }}> */}
      <View style={styles.TextContainer}>
        <Text style={styles.t20Text}>T20 Men’s World Cup</Text>
        <Text style={styles.newsText}>
          India vs Pakistan, T20 World Cup 2022 Highlights: India beat Pakistan
          by four wicket
        </Text>
        <Text style={styles.newsText}>
          {'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.newsText}>
          {'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.newsText}>
          {'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      {/* </ScrollView> */}
      {/* </View> */}
    </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    height: '76%',
    width: '100%',
    // backgroundColor: "red",
    alignSelf: 'center',
    // alignContent: "center",
  },
  gapContainer: {
    width: '90%',
    height: 'auto',
    // backgroundColor: "blue",
    // alignItems: "center",
    // justifyContent: "center",
  },
  photoContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainer: {
    width: '100%',
    height: 'auto',
    // maxheight: "35%",
    // backgroundColor: "green",
    // justifyContent: "space-evenly",
  },
  t20Text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#D9D9D9',
  },
  newsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: colors.text,
  },
  timeText: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#D9D9D9',
  },
  scrollView: {
    width: '93%',
    // flexWrap: "wrap",
    // backgroundColor: "red",
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 50,
    // flexWrap: "wrap",
    // backgroundColor: "red",
  },
});
