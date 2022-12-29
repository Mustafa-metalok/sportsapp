import { View, Text } from "react-native";
import React, { useState } from "react";
import TokensToken from "./TokensToken";

const UsdtSwitch = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <TokensToken
      selectionMode={1}
      option1="Buy USDT"
      option2="Sell USDT"
      onSelectSwitch={onSelectSwitch}
    />
  );
};

export default UsdtSwitch;
