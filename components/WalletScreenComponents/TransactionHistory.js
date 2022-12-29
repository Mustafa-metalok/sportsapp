import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/colors';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import TransactionCardS2 from './TransactionCardS2';
import TokenTransactionCard from './TokenTransactionCard';
import TokenTransactionCard2 from './TokenTransactionCard2';

const TransactionHisory = ({ navigation }) => {
  const { transactionData } = useSelector(state => state.TransactionData)
  const [tabSwitch, setTabSwitch] = useState(false)
  const [switchtab, setSwitch] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [isModalVisible1, setModalVisible1] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const handleTab = () => {
    setTabSwitch(!tabSwitch)
    setModalVisible1(false);
  }


  return (
    <>
      <View style={styles.mainContainer}>
        {/* {1ist model starts} */}
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          hideModalContentWhileAnimating={true}
          useNativeDriverForBackdrop={true}>
          <TouchableOpacity
            onPress={toggleModal}
            style={{ flex: 1 }}></TouchableOpacity>
          <View style={styles.modelMainContainer}>
            <View style={styles.modelItems}>
              <View style={styles.textContainer}>
                <Text style={styles.leagueText}>Cricket</Text>
                <Image
                  source={require('../../assets/icons/right.png')}
                  style={{ width: 20, height: 20, top: '3%' }}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.leagueText}>Football</Text>
                <Image
                  source={require('../../assets/icons/right.png')}
                  style={{ width: 20, height: 20, top: '3%' }}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.leagueText}>Tennis</Text>
                <Image
                  source={require('../../assets/icons/right.png')}
                  style={{ width: 20, height: 20, top: '3%' }}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.leagueText}>Kabaddi</Text>
                <Image
                  source={require('../../assets/icons/right.png')}
                  style={{ width: 20, height: 20, top: '3%' }}
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.leagueText}>Kabaddi</Text>
                <Image
                  source={require('../../assets/icons/right.png')}
                  style={{ width: 20, height: 20, top: '3%' }}
                />
              </View>
            </View>
          </View>
        </Modal>
        {/* {1ist model ends } */}
        {/* {2nd model starts} */}
        <Modal
          isVisible={isModalVisible1}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          // coverScreen={false}
          backdropOpacity={0.01}
          hideModalContentWhileAnimating={true}
          useNativeDriverForBackdrop={true}>
          <TouchableOpacity onPress={toggleModal1} style={{ flex: 1 }}>
            <TouchableOpacity style={styles.modelMainContainer2} onPress={handleTab} >
              <View onPress={handleTab}>

                <Text style={styles.transactionText}>{tabSwitch ? "Fiat" : "Token Transaction"}</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
        {/* {2nd model ends} */}
        <View style={styles.secondContainer}>
          <View style={[styles.TrasactionContainer, { width: tabSwitch ? "45%" : "70%" }]}>
            <Text style={styles.TransactionText}>Transaction Hisory</Text>
          </View>

          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.iconsContainer}>
              <View style={styles.touchableContainer}>
                <Image
                  source={require('../../assets/icons/drawer.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.fiatContainer, { width: tabSwitch ? "45%" : "15%" }]}>
            <TouchableOpacity onPress={toggleModal1}>
              <View style={styles.touchableContainer}>
                <Text style={styles.fiatText}>{tabSwitch ? "Token Transaction" : "Fiat"}</Text>

                <Image
                  source={require('../../assets/icons/down.png')}
                  style={{
                    width: 13,
                    height: 13,
                    bottom: '2%',
                    right: '55%',
                  }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {tabSwitch ? (<View>
        <TokenTransactionCard />
        <TokenTransactionCard2 />
      </View>) : transactionData.map(item => (
        <TransactionCardS2
          transactionType={item.transactionType}
          txno={item.txno}
          time={item.time}
          date={item.date}
          amount={item.amount}
          value={item.value}
          key={item.id}
          navigation={navigation}
        />
      ))}
      {/* {tabSwitch && <TokenTransactionCard />} */}
    </>
  );
};

export default TransactionHisory;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: 40,
    maxHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  secondContainer: {
    flexDirection: 'row',
    width: '95%',
    height: '95%',
    // justifyContent: 'center',
    alignItems: 'center',

  },
  TrasactionContainer: {
    width: '70%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: "red"
  },
  iconsContainer: {
    width: '10%',
    height: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: "red",
  },
  TransactionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
    left: 5,
  },
  fiatContainer: {
    width: '15%',
    height: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: "blue",
  },
  fiatText: {
    fontFamily: 'Poppins-Regular',
    color: colors.highlight,
    fontSize: 14,
    fontWeight: '400',
    left: 5,
  },
  touchableContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leagueText: {
    fontFamily: 'Poppins-Regular',
    color: colors.text,
    fontSize: 18,
    top: '4%',
  },
  modelMainContainer: {
    width: '100%',
    height: '50%',
    top: '5%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelItems: {
    // backgroundColor: 'red',
    height: '90%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: '18%',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'pink',
    justifyContent: 'space-evenly',
    borderBottomColor: colors.borders,
    borderBottomWidth: 1,
  },
  modelMainContainer2: {
    width: '40%',
    height: '5%',
    top: '57%',
    left: '60%',
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  transactionText: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 13,
  },
});
