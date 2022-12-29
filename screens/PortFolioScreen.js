import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Pie from "react-native-pie";
import PortfolioHeader from "../components/Portfolio Screen Components/PortfolioHeader";
import colors from "../assets/colors";
import PortfolioValue from "../components/Portfolio Screen Components/PortfolioValue";
import TeamTokenCard1 from "../components/Portfolio Screen Components/TeamTokenCard1";
import data from "../data/PortfolioTeamCardData.json";

const PortFolioScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ backgroundColor: colors.primary, flex: 1 }}>
        <PortfolioHeader navigation={navigation} />
        <ScrollView>
          <PortfolioValue />

          {data.map((item) => (
            <TeamTokenCard1 navigation={navigation}
              title={item.title}
              holdings={item.holdings}
              valueState={item.valueState}
              valuePer={item.valuePer}
              invested={item.invested}
              current={item.current}
              key={item.id}
            />
          ))}
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: "10%",
            backgroundColor: colors.primary,
          }}
        ></View>
      </View>
    </>
  );
};

export default PortFolioScreen;
const styles = StyleSheet.create({});
