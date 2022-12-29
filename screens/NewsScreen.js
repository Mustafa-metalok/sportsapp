import { View, Text, ScrollView } from "react-native";
import React from "react";
import NewsHeader from "../components/News Screen Components/NewsHeader";
import NewsSearchBar from "../components/News Screen Components/NewsSearchBar";
import NewsBanner from "../components/News Screen Components/NewsBanner";
import NewsSwitch2 from "../components/News Screen Components/NewsSwitch2";
import NewsBlock from "../components/News Screen Components/NewsBlock";
import colors from "../assets/colors";

const NewsScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          backgroundColor: colors.primary,
        }}
      >
        <NewsHeader navigation={navigation} />
        <ScrollView>
          <NewsSearchBar />
          <NewsBanner navigation={navigation} />
          <NewsSwitch2 />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
          <View
            style={{
              width: "100%",
              // height: "30%",
              backgroundColor: colors.primary,
              padding: 40,
            }}
          ></View>
        </ScrollView>
      </View>
    </>
  );
};

export default NewsScreen;
