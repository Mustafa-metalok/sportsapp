import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  onPress,
  Image,
  Dimensions,
  DrawerLayoutAndroid,
  Button,
} from 'react-native';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
import colors from '../assets/colors';

import Modal from 'react-native-modal';
import DrawerHeader from './DrawerComponents/DrawerHeader';
import ProfileScreen from './DrawerComponents/ProfileScreen';
import FeedBackScreen from './DrawerComponents/FeedBackScreen';
import CommunityScreen from './DrawerComponents/CommunityScreen';
import ReferralScreen from './DrawerComponents/ReferralScreen';
import OthersScreen from './DrawerComponents/OthersScreen';
import SocialConnect from './DrawerComponents/SocialConnect';

const Press = () => {
  console.log('pressed');
};

const Header = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.headerMainContainer}>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        style={{
          margin: 0,
          width: '100%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '70%',
            backgroundColor: colors.primary,
          }}>
          <DrawerHeader />
          <ProfileScreen navigation={navigation} />
          <FeedBackScreen />
          <CommunityScreen />
          <ReferralScreen />
          <OthersScreen />
          <SocialConnect />
        </View>
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            width: '30%',
            height: '100%',
          }}></TouchableOpacity>
      </Modal>
      <View style={styles.headerImageContainer}>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../assets/icons/user.png')}
            style={styles.headerProfilePic}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headerInfoContainer}>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontFamily: 'Poppins-Regular',
          }}>
          Hey! Manohar
        </Text>
        <Text
          style={{
            color: colors.hashtext,
            fontSize: 11,
            fontFamily: 'Poppins-Regular',
          }}>
          3xkn******2532
        </Text>
      </View>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../assets/icons/settingsIcon.png')}
            style={{
              width: 22.46,
              height: 24.29,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Faq')}>
          <Image
            source={require('../assets/icons/helpIcon.png')}
            style={{
              width: 25.46,
              height: 26.29,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerMainContainer: {
    minHeight: 60,
    maxHeight: 60,
    width,
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: colors.borders,
    borderBottomWidth: 1,
  },
  headerImageContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfoContainer: {
    width: '55%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerProfilePic: {
    height: 42.1,
    width: 43,
    borderRadius: 50,
  },
  headerIconContainer: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header;
