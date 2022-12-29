import { View, Text } from "react-native";
import React, { useState } from "react";
import FaqCategory from "./FaqCategory";

const FaqSwitch = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <FaqCategory
      selectionMode={1}
      option1="FAQs"
      option2="Feedback"
      option3="My tickets"
      option4="What’s New?"
      onSelectSwitch={onSelectSwitch}
    />
  );
};

export default FaqSwitch;
