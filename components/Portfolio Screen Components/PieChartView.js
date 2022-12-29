import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Pie from 'react-native-pie';
import colors from '../../assets/colors';

const PieChartView = () => {
  return (
    <>
      <View style={styles.piemainview}>
        {/* left side pie chart 40% */}

        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row',
            width: '40%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'white',
          }}>
          <Pie
            radius={65}
            innerRadius={45}
            sections={[
              {
                percentage: 38,
                color: '#EA9528',
              },
              {
                percentage: 18,
                color: '#8D77F3',
              },
              {
                percentage: 15,
                color: '#F34060',
              },
              {
                percentage: 4,
                color: '#42D6A4',
              },
              {
                percentage: 8,
                color: '#EA9528',
              },
              {
                percentage: 10,
                color: '#59ADF6',
              },

              {
                percentage: 5,
                color: '#F8F38D',
              },

              {
                percentage: 4,
                color: '#08CAD1',
              },
              //   {
              //     percentage: 3,
              //     color: '#08CAD1',
              //   },
            ]}
            strokeCap={'butt'}
          />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.rightMainContainer}>
            <View style={styles.innerContainer1}>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'skyblue'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'pink'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'yellow'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'green'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
            </View>
            <View style={styles.innerContainer2}>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'skyblue'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'pink'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'yellow'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View
                  style={[
                    styles.colorContainer,
                    {backgroundColor: 'green'},
                  ]}></View>
                <View style={{height: '100%', width: '8%'}}></View>
                <View style={styles.dataViewContainer}>
                  <Text style={styles.dataText}>2455.5{''}RSVC</Text>
                  <Text style={styles.dataText1}>($354.34)</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PieChartView;
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1F1C2D',
  },
  piemainview: {
    width: '100%',
    height: '100%',
    backgroundColor: '#232234',
    borderRadius: 8,
    margin: 'auto',
    alignItems: 'center',
    // justifyContent: 'center',
    margin: 15,
    borderColor: '#353445',
    borderWidth: 0.7,
    // opacity:0.2,
    // shadowOpacity: -0.09,
    // justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  rightMainContainer: {
    width: 350,
    minHeight: 160,
    maxHeight: 160,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  innerContainer1: {
    height: '90%',
    width: '45%',
    // backgroundColor: 'grey',
    // flexDirection: 'row',
    justifyContent: 'space-around',
  },
  innerContainer2: {
    height: '90%',
    width: '45%',
    // backgroundColor: 'green',
    // flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dataContainer: {
    width: '100%',
    height: '15%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataViewContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  colorContainer: {
    height: '80%',
    width: '10%',
    backgroundColor: 'white',
  },
  dataText: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: colors.text,
  },
  dataText1: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: colors.minortext,
  },
});
