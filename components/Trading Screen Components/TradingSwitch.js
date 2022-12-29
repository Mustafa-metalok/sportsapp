import { View, Text } from "react-native";
import React, { useState } from "react";
import TradingSwitchDesign from "./TradingSwitchDesign";

const TradingSwitch = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <TradingSwitchDesign
      selectionMode={1}
      option1="Buy HSVC"
      option2="Sell HSVC"
      onSelectSwitch={onSelectSwitch}
    />
  );
};

export default TradingSwitch;
