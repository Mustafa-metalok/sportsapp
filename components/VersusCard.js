import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  onPress,
  FlatList,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import { useSelector } from 'react-redux';

const Card = ({
  value1,
  value2,
  teamScore1,
  teamScore2,
  navigation,
  team1,
  team2,
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Trading')}>
      <View style={styles.cardContainer}>
        <View style={{ height: '2%' }}></View>
        <View style={styles.liveBtnWrapper}>
          <View style={styles.liveContainer}>
            <View
              style={{
                width: '85%',
                height: '65%',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.45,
                borderColor: colors.highlight,
                borderRadius: 5,
                // backgroundColor:"pink"
              }}>
              <Text
                style={{
                  color: colors.highlight,
                  fontSize: 9,
                  fontFamily: 'Poppins',
                }}>
                Live
              </Text>
            </View>
          </View>
          <View style={styles.liveContainer}></View>
          <View style={styles.liveContainer}></View>
        </View>
        <View style={styles.matchContainer}>
          <View style={{ width: '5%' }}></View>
          <View style={styles.teamOneContainer}>
            <View style={styles.teamOneImageContainer}>
              <Image
                source={team1}
                style={{
                  width: 40,
                  height: 40,
                }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.versusTextContainer}>
            <Text style={styles.versusText}>VS</Text>
          </View>
          <View style={styles.teamTwoContainer}>
            <View style={styles.teamTwoImageContainer}>
              <Image
                source={team2}
                style={{
                  width: 40,
                  height: 40,
                }}
                resizeMethod="resize"
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{ width: '5%' }}></View>
        </View>
        <View style={styles.teamValueContainer}>
          <View>
            <Text
              style={{
                fontSize: 13,
                color: colors.profit,
                top: -4,
                fontFamily: 'Lato',
              }}>
              {value1}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                color: colors.loss,
                top: -4,
                fontFamily: 'Lato',
              }}>
              {value2}
            </Text>
          </View>
        </View>
        <View style={styles.scoreContainer}>
          <View style={styles.teamScoreContainer}>
            <View style={styles.teamScores}>
              <Text
                style={{
                  textAlign: 'left',
                  color: colors.text,
                  fontSize: 12,
                  fontFamily: 'Poppins',
                }}>
                {teamScore1}
              </Text>
            </View>
            <View style={styles.teamScores}>
              <Text
                style={{
                  textAlign: 'left',
                  color: colors.text,
                  marginLeft: 6,
                  fontSize: 12,
                  fontFamily: 'Poppins',
                }}>
                {teamScore2}
              </Text>
            </View>
          </View>
          <View style={styles.playButtonContainer}>
            {/* <TouchableOpacity> */}
            <Image
              source={require('../assets/icons/livePlay.png')}
              style={{
                width: '36%',
                height: '39%',
              }}
            />
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const VersusCard = ({ navigation }) => {
  const { matchData } = useSelector(state => state.MatchData)
  const renderItem = ({ item }) => (
    <Card
      navigation={navigation}
      value1={item.value1}
      value2={item.value2}
      teamScore1={item.teamScore1}
      teamScore2={item.teamScore2}
      team1={item.team1}
      team2={item.team2}
    />
  );
  return (
    <View style={styles.cardWrapper}>
      <FlatList
        horizontal={true}
        data={matchData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 26 }}
      />
    </View>
  );
};

export default VersusCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    maxHeight: 180,
    minHeight: 180,
    backgroundColor: colors.primary,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5%',
  },
  cardContainer: {
    maxWidth: 154,
    maxHeight: 165,
    minHeight: 165,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    marginLeft: 17,
    marginRight: -9,
    borderColor: colors.borders,
    borderWidth: 1.2,
  },
  liveBtnWrapper: {
    height: '16%',
    // backgroundColor: colors.highlight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  liveContainer: {
    width: '25%',
    height: '100%',
    // backgroundColor: colors.loss,
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchContainer: {
    height: '36%',
    // backgroundColor: colors.loss,
    flexDirection: 'row',
  },
  teamOneContainer: {
    height: '100%',
    width: '35%',
    // backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamOneImageContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versusTextContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  versusText: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  teamTwoContainer: {
    height: '100%',
    width: '35%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  teamTwoImageContainer: {
    width: '80%',
    height: '80%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamValueContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  scoreContainer: {
    height: '34%',
    // backgroundColor: colors.highlight,
    flexDirection: 'row',
  },
  teamScoreContainer: {
    width: '60%',
    // backgroundColor: colors.primary,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 9,
  },
  teamScores: {
    width: '100%',
    height: '36%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonContainer: {
    width: '40%',
    height: '100%',
    // backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
