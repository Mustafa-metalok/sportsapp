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

export default function DrawerHeader() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/user.png')}
            style={styles.headerProfilePic}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.userText}>Manohar</Text>
          <Text style={styles.userText1} numberOfLines={1}>
            3xkn*******2532
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '12%',
    width: '100%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.borders,
    borderBottomWidth: 0.7,
  },
  innerContainer: {
    height: '70%',
    width: '95%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '5%',
  },
  imageContainer: {
    height: '100%',
    width: '25%',
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: '100%',
    width: '75%',
    // backgroundColor: 'grey',
    justifyContent: 'center',
  },
  headerProfilePic: {
    height: 40,
    width: 40,
  },
  userText: {
    fontFamily: 'Poppins-Regular',
    color: colors.text,
    fontSize: 15,
  },
  userText1: {
    fontFamily: 'Poppins-Thin',
    color: colors.text,
    fontSize: 12,
  },
});
