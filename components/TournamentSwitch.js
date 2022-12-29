import { View, Text } from "react-native";
import React, { useState } from "react";

import TokensToken from "./TokensToken";

const TournamentSwitch = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <TokensToken
      selectionMode={1}
      option1="Indian Premier League"
      option2="T20 World Cup"
      option3="Asia Cup"
      option4="World cup"
      option5="Test Match"
      onSelectSwitch={onSelectSwitch}
    />
  );
};

export default TournamentSwitch;
