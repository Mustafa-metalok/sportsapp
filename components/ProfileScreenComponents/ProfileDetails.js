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

export default function ProfileDetails() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.gapContainer}>
        <View style={styles.profileIconContainer}>
          <Image
            source={require('../../assets/icons/profile.png')}
            style={{
              width: 130,
              height: 130,
            }}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={onPress}>
            <Text style={{bottom: '100%', left: '5%'}}>📝</Text>
          </TouchableOpacity>
          <Text style={styles.detailsText}>Krishna Manohar</Text>
          <Text style={styles.titleText}>joined 20-1-2022</Text>
        </View>
        <View style={styles.ProfileDetailsContainer}>
          <View style={styles.detailsViewContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>Name</Text>
            </View>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.detailsText}>Krishna Manohar</Text>
            </View>
          </View>
          <View style={styles.detailsViewContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>Email</Text>
            </View>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.detailsText}>manohar@gmail.com</Text>
            </View>
          </View>
          <View style={styles.detailsViewContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>Phone</Text>
            </View>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.detailsText}>8298982982</Text>
            </View>
          </View>
          <View style={styles.detailsViewContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>DOB</Text>
            </View>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.detailsText}>06/08/2001</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(100),
    height: '92%',
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gapContainer: {
    width: '95%',
    height: '85%',
    // backgroundColor: "pink",
    alignItems: 'center',
  },
  profileIconContainer: {
    width: '90%',
    height: '30%',
    // backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileDetailsContainer: {
    width: '98%',
    height: '50%',
    // backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  detailsViewContainer: {
    width: '100%',
    height: '20%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextContainer: {
    width: '90%',
    height: '30%',
    // backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  detailsTextContainer: {
    width: '98%',
    height: '60%',
    backgroundColor: colors.secondary,
    borderRadius: 6,

    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: colors.text,
    left: '2%',
  },
  detailsText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.text,
    left: '2%',
  },
});
