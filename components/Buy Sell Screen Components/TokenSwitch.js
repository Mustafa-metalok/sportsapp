import { View, Text } from "react-native";
import React, { useState } from "react";
import TokensToken from "./TokensToken";

const TokenSwitch = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <TokensToken
      selectionMode={1}
      option1="Buy Token"
      option2="Sell Token"
      onSelectSwitch={onSelectSwitch}
    />
  );
};

export default TokenSwitch;
