/* eslint-disable prettier/prettier */
// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../../assets/colors';
import FaqQuestions2 from './FaqQuestions2';

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{ borderBottomColor: colors.borders, borderBottomWidth: 0.7, }}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={[
          styles.header,
          {
            borderBottomWidth: item.isExpanded ? 0 : 1,
          },
        ]}>

        <View style={{ height: "100%", width: "70%" }}>
          <Text style={styles.headerText}>{item.category_name}</Text>
        </View>
        <View style={{ height: "100%", width: "10%" }}>
          {item.isExpanded ? (
            <Image
              source={require('../../assets/icons/up.png')}
              style={{
                width: 18,
                height: 14,
              }}
            />
          ) : (
            <Image
              source={require('../../assets/icons/down.png')}
              style={{
                width: 18,
                height: 14,
              }}
            />
          )}

        </View>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
          // onPress={() => alert("Id: " + item.id + " val: " + item.val)}
          >
            <View style={{ padding: 10, paddingRight: 20 }}>
              <Text style={styles.text}>
                {key}. {item.val}
              </Text>
            </View>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};



const FaqQuestions = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }

    setListDataSource(array);
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text style={styles.titleText}>About Sports Verse</Text>
          <TouchableOpacity
            onPress={() => setMultiSelect(!multiSelect)}></TouchableOpacity>
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
      {/* second text */}
      <View style={styles.container}>

        <FaqQuestions2 />
        <View
          style={{
            width: '100%',
            height: '5%',
            backgroundColor: colors.primary,
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default FaqQuestions;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  titleText: {
    flex: 1,
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: colors.minortext,
    // marginBottom: 10,
    left: "15%",
  },
  titleText2: {
    flex: 1,
    fontSize: 17,
    fontFamily: 'Poppins',
    color: colors.text,
    // marginBottom: 10,
    left: "15%",
    top: "2%"
  },
  header: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.borders,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    padding: "5%"
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: colors.text,
  },
  separator: {
    height: 0.5,
    // backgroundColor: "#808080",
    // width: "95%",
    // marginLeft: 16,
    // marginRight: 16,
  },
  text: {
    fontSize: 14,
    color: '#606070',
    fontFamily: 'Poppins',
    color: colors.minortext,
    padding: 10,
  },
  content: {
    // paddingLeft: 10,
    paddingRight: 15,

    // backgroundColor: colors.primary,
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'What’s Sportsverse?',
    subcategory: [
      {
        id: 1,
        val: 'Sportsverse is a decentralized gaming platform for your favourite sports made to change and enhance the way fans experience them, Sportsverse is a gamified world where your favourite sports meet the art of trading. allows fans to earn money while watching/supporting their favourite team/player. ',
      },
    ],
  },
  {
    isExpanded: false,
    category_name: 'How to use the app?',
    subcategory: [
      {
        id: 4,
        val: 'Sportsverse is a decentralized gaming platform for your favourite sports made to change and enhance the way fans experience them, Sportsverse is a gamified world where your favourite sports meet the art of trading. allows fans to earn money while watching/supporting their favourite team/player. ',
      },
    ],
  },
  {
    isExpanded: false,
    category_name: 'How to earn money?',
    subcategory: [
      {
        id: 7,
        val: 'Sportsverse is a decentralized gaming platform for your favourite sports made to change and enhance the way fans experience them, Sportsverse is a gamified world where your favourite sports meet the art of trading. allows fans to earn money while watching/supporting their favourite team/player. ',
      },
    ],
  },
  {
    isExpanded: false,
    category_name: 'What’s cricket?',
    subcategory: [
      {
        id: 10,
        val: 'Sportsverse is a decentralized gaming platform for your favourite sports made to change and enhance the way fans experience them, Sportsverse is a gamified world where your favourite sports meet the art of trading. allows fans to earn money while watching/supporting their favourite team/player. ',
      },
    ],
  },
];


