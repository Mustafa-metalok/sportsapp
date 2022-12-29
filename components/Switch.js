import { View, Text } from "react-native";
import React, { useState } from "react";
import TestingComponent from "./TestingComponent";
import Tokens from "./Tokens";
import TeamTokenCard from "./TeamTokenCard";
import colors from "../assets/colors";
import MyTeamTokenCard from "./MyTokenCards";
// import ListItem from "./ListItem";
import data from "../data/teamtoken.json";
import TestComponent from "./TestingComponent";
import { ScrollView } from "react-native-virtualized-view";

const Switch = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <View
      style={{
        width: "100%",
        Height: "auto",
        backgroundColor: "blue",
      }}
    >
      <Tokens
        selectionMode={1}
        option1="Tokens"
        option2="My tokens"
        onSelectSwitch={onSelectSwitch}
      />
      <View
        style={{
          width: "100%",
          height: "82%",
          alignItems: "center",
        }}
      >
        {gamesTab == 1 &&
          data.map((item) => (
            <TeamTokenCard
              key={item.id}
              teamName={item.teamName}
              totalTokens={item.totalTokens}
              TokenValue={item.TokenValue}
              tokenState={item.tokenState}
              navigation={navigation}
            />
          ))}
        {gamesTab == 2 && <MyTeamTokenCard />}
      </View>
    </View>
  );
};

export default Switch;
