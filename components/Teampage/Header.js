import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  onPress,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
const {width, height} = Dimensions.get('window');
import colors from '../../assets/colors';

const Team_Page_Header = ({navigation}) => {
  const [keyModalVisible, setKeyModalVisible] = useState(false);
  const handleKeyModal = () => {
    setKeyModalVisible(!keyModalVisible);
  };
  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        visible={keyModalVisible}
        onRequestClose={handleKeyModal}
        transparent>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.18)',
          }}
          onPress={handleKeyModal}
        />
        <View
          style={{
            width: '100%',
            height: '39.5%',
            backgroundColor: colors.primary,
            // backgroundColor: "red",
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '90%',
              height: '25%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: colors.borders,
            }}>
            <Image
              source={require('../../assets/icons/dc.png')}
              style={{width: 40, height: 40}}
            />
            <View style={{width: 20, height: '100%'}}></View>
            <Text
              style={{
                color: colors.text,
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>
              DSVC
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              height: '25%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: colors.borders,
            }}>
            <Image
              source={require('../../assets/icons/csk-logo.png')}
              style={{width: 40, height: 40}}
            />
            <View style={{width: 20, height: '100%'}}></View>
            <Text
              style={{
                color: colors.text,
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>
              CSVC
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              height: '25%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: colors.borders,
            }}>
            <Image
              source={require('../../assets/icons/rcb.png')}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
            <View style={{width: 20, height: '100%'}}></View>
            <Text
              style={{
                color: colors.text,
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>
              BSVC
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              height: '25%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: colors.borders,
            }}>
            <Image
              source={require('../../assets/icons/rcb.png')}
              style={{width: 40, height: 40}}
              resizeMode="contain"
            />
            <View style={{width: 20, height: '100%'}}></View>
            <Text
              style={{
                color: colors.text,
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>
              BSVC
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.18)',
          }}
          onPress={handleKeyModal}></TouchableOpacity>
      </Modal>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.backIconContainer}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.walletTextView}>
        <Text style={styles.walletText}>Team</Text>
        <Text style={styles.walletText}> </Text>
        <Text style={styles.walletText}>Page</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleKeyModal}>
          <Image
            source={require('../../assets/icons/teamicon.png')}
            style={{
              width: 30,
              height: 30,

              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/helpIcon.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View style={{width: '5%'}}></View>
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
    justifyContent: 'center',
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
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  walletTextView: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slashText: {
    color: colors.text,
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    top: 9,
  },
  backIconContainer: {
    height: '100%',
    width: 50,
    // borderRadius: 100,
    // backgroundColor: "green",
    justifyContent: 'center',
    // alignItems: ,
    left: '10%',
  },
});

export default Team_Page_Header;
