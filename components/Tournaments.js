import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  onPress,
} from "react-native";
import React from "react";
import colors from "../assets/colors";
const { width, height } = Dimensions.get("window");
import data from "../data/tournaments.json";

const Item = ({ title }) => {
  return (
    <View style={styles.gameContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textStyles}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Tournaments = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tournaments;

const styles = StyleSheet.create({
  mainContainer: {
    maxHeight: 30,
    minHeight: 30,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  gameContainer: {
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyles: {
    color: colors.team,
    fontSize: 13,
  },
});
