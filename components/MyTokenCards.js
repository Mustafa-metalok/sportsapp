import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
  FlatList,
} from "react-native";
import React from "react";
import colors from "../assets/colors";
import data from "../data/teamtoken.json";

const Card = ({ teamName, totalTokens, TokenValue, tokenState }) => (
  <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
    <View style={styles.secondContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/icons/srh.png")}
          style={{
            width: 38,
            height: 38,
            borderRadius: 50,
          }}
        />
      </View>
      <View style={styles.gapContainer}>
        <View style={styles.leftTextContainer}>
          <Text style={styles.teamName}>{teamName}</Text>
          <Text style={styles.totalTokens}>Holding : {totalTokens}</Text>
        </View>
        <View style={[styles.rightTextContainer, { right: 17 }]}>
          <Text style={styles.TokenValue}>{TokenValue}</Text>
          <Text style={styles.tokenState}>{tokenState}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const MyTeamTokenCard = () => {
  const renderItem = ({ item }) => (
    <Card
      teamName={item.teamName}
      totalTokens={item.totalTokens}
      TokenValue={item.TokenValue}
      tokenState={item.tokenState}
    />
  );
  return (
    <View style={styles.mainContainer}>
      <FlatList
        nestedScrollEnabled
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    // backgroundColor: colors.hi,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  secondContainer: {
    width: "96%",
    height: 70,
    backgroundColor: colors.third,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  iconContainer: {
    width: "18%",

    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gapContainer: {
    height: "90%",
    width: "80%",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamName: {
    fontSize: 14,
    color: colors.text,
    fontFamily: "Poppins",
    fontWeight: "300",
  },
  totalTokens: {
    fontSize: 12,
    color: colors.minortext,
    fontFamily: "Poppins",
    fontWeight: "300",
  },
  TokenValue: {
    fontSize: 16,
    color: colors.text,
    fontFamily: "Lato",
    fontWeight: "600",
  },
  tokenState: {
    fontSize: 12,
    color: colors.profit,
    top: 3,
    fontFamily: "Lato",
    fontWeight: "300",
  },
  leftTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rightTextContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
});

export default MyTeamTokenCard;
