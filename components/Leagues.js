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
import data from "../data/leagues.json";

const Item = ({ title }) => {
  return (
    <View style={styles.gameContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textStyles}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Leagues = () => {
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

export default Leagues;

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: 20,
    maxHeight: 20,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: colors.borders,
    borderTopWidth: 1,
  },
  gameContainer: {
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    top: 3,
  },
  textStyles: {
    color: colors.team,
    fontSize: 12,
    fontFamily: "Poppins",
    flexWrap: "wrap",
  },
});
