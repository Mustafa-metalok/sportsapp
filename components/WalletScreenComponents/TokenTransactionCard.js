import { Image, StyleSheet, Text, TouchableOpacity, View, onPress } from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

const TokenTransactionCard = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.gapContainer}>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.touchableCpntainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../../assets/icons/exchange.png')}
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                        <View style={styles.leftTextContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dateText}>10</Text>
                                <Text style={styles.slashText}>/</Text>
                                <Text style={styles.dateText}>20</Text>
                                <Text style={styles.slashText}>/</Text>
                                <Text style={styles.dateText}>22</Text>
                            </View>
                            <Text style={styles.tokenText}>0.234 HSVC </Text>
                            <Text style={styles.txnText}>Txn no : 375480299092</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image
                                source={require('../../assets/icons/arrow.png')}
                                style={{ width: 20, height: 20, resizeMode: 'contain' }}
                            />
                        </View>
                        <View style={styles.rightTextContainer}>
                            <Text style={styles.dateText}>23:10</Text>
                            <Text style={styles.tokenText}>2.35 RSVC</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TokenTransactionCard;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        minHeight: 80,
        maxHeight: 80,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gapContainer: {
        height: '95%',
        width: '95%',
        backgroundColor: colors.third,
        // backgroundColor: 'grey',
        borderRadius: 6,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        height: '100%',
        width: '15%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftTextContainer: {
        height: '90%',
        width: '40%',
        justifyContent: 'space-evenly',
        // backgroundColor: 'green',
    },
    arrowContainer: {
        height: '100%',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
    },
    rightTextContainer: {
        height: '90%',
        width: '30%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        // backgroundColor: 'blue',
    },
    dateText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 11,
        color: colors.text,
    },
    tokenText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: colors.text,
    },
    txnText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: colors.text,
        bottom: '5%',
    },
    slashText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        color: colors.text,
        top: '2%',
    },
    touchableCpntainer: {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    }
});
