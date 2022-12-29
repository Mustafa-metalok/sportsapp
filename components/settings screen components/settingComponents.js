import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  onPress,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
const {width, height} = Dimensions.get('window');

import colors from '../../assets/colors';
import SettingHeader from './settingHeader';

const SettingComponents = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.parentviewsetting}>
      <SettingHeader navigation={navigation} />
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/wallet1.png')}
            style={{
              width: 25,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.walletText}>Wallet Detail</Text>
          <Text style={styles.minorText}>View</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/icons/right-arrow.png')}
              style={{
                width: 10,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 2nd key view start here */}
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/key.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.walletText}>Private Key</Text>
          <Text style={styles.minorText}>View</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/icons/right-arrow.png')}
              style={{
                width: 10,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 3rd two factor view start here */}
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/lock.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.walletText}>Two-Factor Authentication</Text>
          <Text style={styles.minorText}>Off</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/icons/right-arrow.png')}
              style={{
                width: 10,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 4th biometric view start here */}
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/biometric.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.walletText}>Biometric/Face id Login</Text>
          <Text style={styles.minorText}>Off</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/icons/right-arrow.png')}
              style={{
                width: 10,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 5th login view start here */}
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.walletText}>Login Activity</Text>
          <Text style={styles.minorText}>View</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/icons/right-arrow.png')}
              style={{
                width: 10,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 6th notifications view start here */}
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/icons/bell.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.walletText}>Order Notifications/Emails</Text>
        </View>

        {/* <View style={styles.iconContainer}>
          <TouchableOpacity>
             <Image
              source={require("../../assets/icons/right-arrow.png")}
              style={{
                width: 28,
                height: 28,
              }}
            /> 
          </TouchableOpacity>
        </View> */}
        <View style={styles.switcContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#EA9528'}}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{right: '25%'}}
          />
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentviewsetting: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    // backgroundColor: "red",
    // justifyContent: "center",
    alignItems: 'center',
  },
  mainContainer: {
    height: '10%',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: colors.borders,
    borderBottomWidth: 0.7,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  imageContainer: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red",
  },
  textContainer: {
    height: '100%',
    width: '70%',
    // backgroundColor: "pink",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  walletText: {
    color: colors.text,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
  },
  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red",
  },
  minorText: {
    color: colors.minortext,
    fontFamily: 'Poppins',
    fontSize: 11,
    fontWeight: '500',
  },
  switcContainer: {
    height: '100%',
    width: '20%',
    // backgroundColor: "red",
    justifyContent: 'center',
    // alignItems: "center",
  },
});

export default SettingComponents;
