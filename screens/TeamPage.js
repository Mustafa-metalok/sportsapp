import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Team_Page_Header from '../components/Teampage/Header';
import colors from '../assets/colors';
import Banner from '../components/Teampage/Banner';
import TeamTokenInfo from '../components/Teampage/TeamTokenInfo';
import HoldingsInfo from '../components/Teampage/HoldingsInfo';
import TeamPageSwitch from '../components/Teampage/TeamPageSwitch';

const TeamPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <Team_Page_Header navigation={navigation} />
      <ScrollView>
        <Banner />
        <TeamTokenInfo />
        <HoldingsInfo />
        {/* <View style={{ height: "1%" }}></View> */}
        <TeamPageSwitch  navigation={navigation}/>
        {/* <View style={{ width: "100%", height: "50%" }}></View> */}
      </ScrollView>
    </View>
  );
};

export default TeamPage;

const styles = StyleSheet.create({});
