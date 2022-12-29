import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Pie from "react-native-pie";

const portfolio = () => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.piemainview}>
          {/* left side pie chart 40% */}

          <View
            style={{
              paddingVertical: 15,
              flexDirection: "row",
              width: "30%",
              justifyContent: "space-between",
            }}
          >
            <Pie
              radius={65}
              innerRadius={45}
              sections={[
                {
                  percentage: 38,
                  color: "#EA9528",
                },
                {
                  percentage: 28,
                  color: "#8D77F3",
                },
                {
                  percentage: 10,
                  color: "#F34060",
                },
                {
                  percentage: 4,
                  color: "#42D6A4",
                },
                {
                  percentage: 2,
                  color: "#EA9528",
                },
                {
                  percentage: 10,
                  color: "#59ADF6",
                },

                {
                  percentage: 5,
                  color: "#F8F38D",
                },

                {
                  percentage: 4,
                  color: "#08CAD1",
                },
                //   {
                //     percentage: 3,
                //     color: '#08CAD1',
                //   },
              ]}
              strokeCap={"butt"}
            />
          </View>

          <View style={styles.piechildright}>
            <View style={styles.piechild}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "red",
                }}
              ></View>
              <Text style={styles.piechildtext}>236.5 RSVC </Text>
              <Text style={styles.piechildtext1}> ($10.25) </Text>
            </View>
            <View style={styles.piechild}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#EA9528",
                }}
              ></View>
              <Text style={styles.piechildtext}>236.5 RSVC </Text>
              <Text style={styles.piechildtext1}> ($10.25) </Text>
            </View>
            <View style={styles.piechild}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#8D77F3",
                }}
              ></View>

              <Text style={styles.piechildtext}>236.5 RSVC </Text>
              <Text style={styles.piechildtext1}> ($10.25) </Text>
            </View>
            <View style={styles.piechild}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "red",
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <Text style={styles.piechildtext}>236.5 RSVC </Text>
                <Text style={styles.piechildtext1}> ($10.25) </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default portfolio;
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F1C2D",
  },
  piemainview: {
    width: "93%",
    height: "22%",
    backgroundColor: "#232234",
    borderRadius: 8,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderColor: "#353445",
    borderWidth: 0.7,
    // opacity:0.2,
    // shadowOpacity: -0.09,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  piechildright: {
    width: "40%",
    // backgroundColor:"yellow",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 8,
  },
  piechild: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  piechildtext: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 23,
    color: "#D9D9D9",
  },
  piechildtext1: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 23,
    color: "#6a6974",
  },
});
