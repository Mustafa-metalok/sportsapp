import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  onPress,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import colors from '../../assets/colors';

const FaqHeader = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={{
              width: 22,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.walletText}>FAQs</Text>
      </View>

      <View style={styles.iconContainer}>
        {/* <TouchableOpacity>
          <Image
            source={require("../assets/icons/helpIcon.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    maxHeight: 60,
    minHeight: 60,
    width,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: colors.borders,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletText: {
    color: colors.text,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '500',
    top: 4,
  },
  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FaqHeader;
