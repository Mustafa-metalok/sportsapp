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

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.mainContaier}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/icons/person.png')}
              style={styles.headerProfilePic}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.userText}>Profile</Text>
            <Text style={styles.userText1} numberOfLines={1}>
              Edit Profile pic, Gmail, Profile Name
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContaier: {
    width: '100%',
    height: '10%',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    height: '70%',
    width: '95%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '8%',
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
    height: 35,
    width: 35,
  },
  userText: {
    fontFamily: 'Poppins-Regular',
    color: colors.text,
    fontSize: 14,
  },
  userText1: {
    fontFamily: 'Poppins-Regular',
    color: colors.minortext,
    fontSize: 9,
  },
});
