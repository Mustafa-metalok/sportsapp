/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import colors from '../assets/colors';
import Header from '../components/Header';
import HomeHoldings from '../components/HomeHoldings';
import VersusCard from '../components/VersusCard';
const { width, height } = Dimensions.get('window');
// import tokens from '../data/teamtoken.json';
// import data from '../data/TeamTokenData';
import data2 from '../data/MyTeamTokenData';
import TeamTokenCard from '../components/TeamTokenCard';
import Tokens from '../components/Tokens';
import LeagueSwitch from '../components/LeagueSwitch';
import TournamentSwitch from '../components/TournamentSwitch';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const { tokens } = useSelector(state => state.TeamTokenData);
  const { mytokens } = useSelector(state => state.TeamTokenData);

  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  const openDrawer = () => {
    drawer.openDrawer();
    console.log('drawer called');
  };
  const closeDrawer = () => {
    drawer.closeDrawer();
    console.log('drawer close');
  };
  return (
    <>
      <SafeAreaView
        style={{ width, backgroundColor: colors.primary }}
        contentInsetAdjustmentBehavior="automatic">
        <StatusBar backgroundColor={colors.primary} hidden={false} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <Header
              navigation={navigation}
              openDrawer={openDrawer}
              closeDrawer={closeDrawer}
            />
            <HomeHoldings navigation={navigation} />
            <LeagueSwitch />
            <TournamentSwitch />
            <VersusCard navigation={navigation} />
            {/* <Switch /> */}
            <Tokens
              selectionMode={1}
              option1="Tokens"
              option2="My tokens"
              onSelectSwitch={onSelectSwitch}
            />
            {gamesTab === 1 &&
              tokens.map(item => (
                <TeamTokenCard
                  key={item.id}
                  teamName={item.teamName}
                  totalTokens={item.totalTokens}
                  TokenValue={item.TokenValue}
                  tokenState={item.tokenState}
                  navigation={navigation}
                  img={item.img}
                />
              ))}
            {gamesTab === 2 &&
              mytokens.map(item => (
                <TeamTokenCard
                  key={item.id}
                  teamName={item.teamName}
                  totalTokens={item.totalTokens}
                  TokenValue={item.TokenValue}
                  tokenState={item.tokenState}
                  navigation={navigation}
                  img={item.img}
                />
              ))}
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: '32%',
            backgroundColor: colors.primary,
          }} />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // Header Section styles
  headerMainContainer: {
    maxHeight: '100%',
    minHeight: '100%',
    width,
    // backgroundColor: colors.primary,

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

  // Holdings sections styles
  holdingsMainContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  holdingSecondContainer: {
    width: '91%',
    height: '80%',
    backgroundColor: colors.third,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.borders,
  },
  holdingsLeftsideContainer: {
    height: '80%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  holdingsRightsideContainer: {
    height: '89%',
    width: '30%',
    justifyContent: 'center',
  },
  greenboxContainer: {
    backgroundColor: '#0BBB701A',
    height: '24%',
    width: '20%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioContainer: {
    height: '30%',
    width: '96%',
    borderColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  gapContainer: {
    width: '0.5%',
  },
});
