import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/colors';

const WalletAddress = () => {
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
            height: '60%',
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          }}
          onPress={handleKeyModal}></TouchableOpacity>
        <View
          style={{
            width: '100%',
            minHeight: 400,
            maxHeight: 400,
            backgroundColor: colors.secondary,
            // backgroundColor: "red",
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: '8%',
            }}></View>
          <View
            style={{
              width: '100%',
              height: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins',
                color: colors.text,
              }}>
              Enter Password to View Key
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              height: '18%',
              alignItems: 'center',
            }}>
            <TextInput
              cursorColor={'grey'}
              keyboardType="default"
              placeholder="Enter Password"
              placeholderTextColor={'#5D6166'}
              style={{
                borderColor: colors.highlight,
                borderWidth: 0.2,
                width: '70%',
                height: '50%',
                borderRadius: 6,
                color: colors.text,
                padding: 5,
                backgroundColor: colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Lato',
                fontSize: 14,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: '15%',
              // backgroundColor: colors.text,
              // justifyContent: "center",
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  width: 100,
                  height: '80%',
                  backgroundColor: colors.highlight,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{fontFamily: 'Poppins', fontSize: 15}}>View</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: '10%', width: '100%'}}></View>
        </View>
      </Modal>
      <View style={styles.secondContainer}>
        <View style={styles.walletContainer}>
          <Text style={styles.walletText}>
            Wallet address : 48394u83ucs884334{'  '}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/icons/copy.png')}
              style={{
                width: 23,
                height: 23,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleKeyModal}>
          <View style={styles.keyContainer}>
            <Text style={styles.KeyText}>Key</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalletAddress;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: 40,
    maxHeight: 40,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  secondContainer: {
    width: '90%',
    height: '90%',
    backgroundColor: colors.third,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
  },
  walletContainer: {
    flexDirection: 'row',
    height: '90%',
    width: '80%',

    alignItems: 'center',
  },
  keyContainer: {
    width: 40,
    height: 22,
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.highlight,
  },
  KeyText: {
    fontSize: 11,
    color: colors.highlight,
    fontFamily: 'Lato',
    fontWeight: '700',
  },
  walletText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12.3,
    color: colors.minortext,
  },
});
