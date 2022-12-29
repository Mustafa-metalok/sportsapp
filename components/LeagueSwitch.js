import { View, Text } from "react-native";
import React, { useState } from "react";
import TokensToken3 from "../components/TokensToken3";

const LeagueSwitch = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <TokensToken3
      selectionMode={1}
      option1="Cricket🏏"
      option2="Football"
      option3="Basketball"
      option4="Kabaddi"
      option5="Football"
      onSelectSwitch={onSelectSwitch}
    />
  );
};

export default LeagueSwitch;
