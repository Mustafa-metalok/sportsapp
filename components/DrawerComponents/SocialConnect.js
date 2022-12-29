import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

export default function SocialConnect() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer1}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../../assets/icons/twitter.png')}
            style={styles.headerProfilePic}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../../assets/icons/insta.png')}
            style={styles.headerProfilePic}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../../assets/icons/fb.png')}
            style={styles.headerProfilePic}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../../assets/icons/linked.png')}
            style={styles.headerProfilePic}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer2}>
        <Text style={styles.text1}>Metalok Private Limited</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '20%',
    width: '100%',
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer1: {
    height: '40%',
    width: '90%',
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  innerContainer2: {
    height: '40%',
    width: '90%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerProfilePic: {
    height: 20,
    width: 20,
  },
  text1: {
    fontFamily: 'Poppins-Lato',
    fontSize: 12,
    color: colors.minortext,
    bottom: '10%',
  },
});
