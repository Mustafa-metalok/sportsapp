import { View, Text } from "react-native";
import React, { useState } from "react";
import NewsCategory from "./NewsCategory";

const NewsSwitch2 = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <NewsCategory
      selectionMode={1}
      option1="Latest"
      option2="Sportsverse"
      option3="Schedule"
      option4="Channels"
      onSelectSwitch={onSelectSwitch}
    />
  );
};

export default NewsSwitch2;
