import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  onPress,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../assets/colors';
import {useNavigationState} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

const BottomTabNavigator = ({navigation, routeName}) => {
  const screenName = routeName;
  useEffect(() => {
    if (screenName !== 'Trading') {
      StatusBar.setHidden(false);
      Orientation.lockToPortrait();
    } //this will lock the view to Portrait
    else {
      Orientation.lockToLandscape();
      StatusBar.setHidden(true);
    } //this will lock the view to Landscape
  });
  return (
    <View
      style={[
        styles.navContainer,
        {
          display:
            (screenName === 'Trading') | (screenName === 'News1')
              ? 'none'
              : 'flex',
        },
      ]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Roadmap')}
        style={{width: '20%', height: '100%'}}>
        <View style={styles.roadMapIconContainer}>
          {screenName === 'Roadmap' ? (
            <Image
              source={require('../assets/icons/roadmap-active.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          ) : (
            <Image
              source={require('../assets/icons/roadmap.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          )}
          <Text
            style={{
              fontSize: 11,
              color:
                screenName === 'Roadmap' ? colors.highlight : colors.minortext,
              left: 4,
              bottom: 3,
            }}>
            Roadmap
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('News')}
        style={{width: '20%', height: '100%'}}>
        <View style={styles.newsIconContainer}>
          {screenName === 'News' ? (
            <Image
              source={require('../assets/icons/news-active.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          ) : (
            <Image
              source={require('../assets/icons/news.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          )}
          <Text
            style={{
              fontSize: 11,
              color:
                screenName === 'News' ? colors.highlight : colors.minortext,
            }}>
            News
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{width: '20%', height: '100%'}}>
        <View style={styles.homeIconContainer}>
          <View
            style={[
              styles.homeIconContainerInner,
              {
                backgroundColor:
                  screenName !== 'Home' ? colors.primary : colors.highlight,
              },
            ]}>
            {screenName !== 'Home' ? (
              <Image
                source={require('../assets/icons/home-inactive.png')}
                style={{
                  width: 28,
                  height: 28,
                  transform: [{rotate: '90deg'}],
                }}
              />
            ) : (
              <Image
                source={require('../assets/icons/home.png')}
                style={{
                  width: 28,
                  height: 28,
                  transform: [{rotate: '90deg'}],
                }}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Wallet')}
        style={{width: '20%', height: '100%'}}>
        <View style={styles.walletIconContainer}>
          {screenName === 'Wallet' ? (
            <Image
              source={require('../assets/icons/wallet-active.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          ) : (
            <Image
              source={require('../assets/icons/wallet.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          )}
          <Text
            style={{
              fontSize: 11,
              color:
                screenName === 'Wallet' ? colors.highlight : colors.minortext,
            }}>
            Wallet
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Portfolio')}
        style={{width: '20%', height: '100%'}}>
        <View style={styles.portfolioIconContainer}>
          {screenName === 'Portfolio' ? (
            <Image
              source={require('../assets/icons/portfolio-active.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          ) : (
            <Image
              source={require('../assets/icons/portfolio.png')}
              style={{width: 28, height: 28, bottom: 4}}
            />
          )}
          <Text
            style={{
              fontSize: 11,
              color:
                screenName === 'Portfolio'
                  ? colors.highlight
                  : colors.minortext,
            }}>
            Portfolio
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    maxWidth: '100%',
    height: '9%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: -5,
    left: 0,
    borderTopColor: colors.borders,
    borderTopWidth: 0.5,
    backgroundColor: colors.primary,
  },
  roadMapIconContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsIconContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIconContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIconContainerInner: {
    width: '70%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    bottom: 25,
    margin: 'auto',
    textAlign: 'center',
    borderColor: colors.minorDiscriptiveText,
    borderRightWidth: 1,
    transform: [{rotate: '-90deg'}],
  },
  walletIconContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioIconContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabNavigator;
