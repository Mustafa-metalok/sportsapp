import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors';

export default function Newsbar() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View style={styles.bbcImageTextContainer}>
          <View style={styles.bbcImageContainer}>
            <Image
              source={require('../../assets/icons/bbc.png')}
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.bbcText}>BBC News</Text>
            <Text style={styles.timeText}>14m ago</Text>
          </View>
        </View>
        <View style={styles.shareIconContainer}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/icons/share.png')}
              style={{
                width: 15,
                height: 22,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(100),
    height: '6.5%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: "red",
  },
  gapContainer: {
    height: '95%',
    width: '95%',
    // backgroundColor: "blue",
    flexDirection: 'row',
  },
  bbcImageTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: "pink",
    height: '100%',
    width: '87%',
  },
  bbcImageContainer: {
    height: '100%',
    width: '13%',
    // backgroundColor: "brown",
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainer: {
    height: '60%',
    width: '50%',
    // backgroundColor: "white",
    justifyContent: 'space-evenly',
  },
  timeText: {
    fontFamily: 'Poppins-Regular',
    color: colors.minortext,
    fontSize: 10,
  },
  bbcText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.text,
  },
  shareIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "green",
    height: '100%',
    width: '10%',
  },
});
