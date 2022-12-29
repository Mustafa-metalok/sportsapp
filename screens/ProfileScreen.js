import {View, Text} from 'react-native';
import React from 'react';
import ProfileHeader from '../components/ProfileScreenComponents/ProfileHeader';
import ProfileDetails from '../components/ProfileScreenComponents/ProfileDetails';
import colors from '../assets/colors';

const ProfileScreen = ({navigation}) => {
  return (
    <View
      style={{alignItems: 'center', flex: 1, backgroundColor: colors.primary}}>
      <ProfileHeader navigation={navigation} />
      <ProfileDetails />
    </View>
  );
};

export default ProfileScreen;
