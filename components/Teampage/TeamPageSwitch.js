import {View, Text} from 'react-native';
import React, {useState} from 'react';
import TeamPageCategories from './TeamPageCategories';
import colors from '../../assets/colors';
import MatchHistory from './MatchHistory';
import TradeGraph from './TradeGraph';
import TokenTransactionHistory from './TokenTransactionHistory';

const TeamPageSwitch = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  return (
    <>
      <TeamPageCategories
        selectionMode={1}
        option1="Trade"
        option2="Match History"
        option3="Transaction History"
        option4="Team"
        option5="Schedule"
        onSelectSwitch={onSelectSwitch}
      />
      <View
        style={{
          width: '100%',
          // height: "100%",
          minHeight: 500,
          maxHeight: 500,
          // backgroundColor: colors.primary,
          // backgroundColor: "blue",
        }}>
        {gamesTab === 1 && <TradeGraph />}
        {gamesTab === 2 && <MatchHistory />}
        {gamesTab === 3 && <TokenTransactionHistory navigation={navigation} />}
        {gamesTab === 4 && <Text>Team</Text>}
        {gamesTab === 5 && <Text>Schedule</Text>}
      </View>
    </>
  );
};

export default TeamPageSwitch;
