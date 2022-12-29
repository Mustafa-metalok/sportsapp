import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import colors from '../../assets/colors';

const Item = ({title}) => {
  return (
    <View style={styles.gameContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.TextViewContiner}>
          <Text
            style={styles.textStyles}
            numberOfLines={1}
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            maxFontSizeMultiplier={1}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function FaqSearchBar() {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.SearchbarContainer}>
        <View style={styles.SearchbarView}>
          <View style={styles.searchIconContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require('../../assets/icons/search.png')}
                style={{
                  width: 20,
                  height: 25,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchTextContainer}>
            <TouchableOpacity onPress={onPress}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput
                  placeholder="Search FAQs"
                  cursorColor={'gray'}
                  placeholderTextColor={'#4A4960'}
                  style={{
                    fontFamily: 'Poppins',
                    color: colors.text,
                    fontSize: 13,
                    // padding: 20,
                  }}
                />
              </KeyboardAvoidingView>
            </TouchableOpacity>
          </View>
          <View style={styles.settingIconContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require('../../assets/icons/setting.png')}
                style={{
                  width: 20,
                  height: 25,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View style={styles.hashtagContainer}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(100),
    height: '9%',
    minHeight: 75,
    maxHeight: 75,
    // backgroundColor: "red",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  SearchbarContainer: {
    height: '55%',
    width: '97%',
    // backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchbarView: {
    width: '97%',
    height: '95%',
    backgroundColor: '#2F2E44',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconContainer: {
    height: '100%',
    width: '10%',
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTextContainer: {
    height: '100%',
    width: '70%',
    // backgroundColor: "blue",
    justifyContent: 'center',
  },
  settingIconContainer: {
    height: '100%',
    width: '25%',
    // backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
  },
  hashtagContainer: {
    height: '40%',
    width: '95%',
    // backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginHorizontal: 2,
    // backgroundColor: "red",
  },
  textStyles: {
    color: colors.rarelytext,
    fontSize: 13,
    fontFamily: 'Poppins',
  },
  TextViewContiner: {
    width: 'auto',
    height: '70%',
    backgroundColor: colors.third,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 6,
    // marginRight: 10,
  },
});
