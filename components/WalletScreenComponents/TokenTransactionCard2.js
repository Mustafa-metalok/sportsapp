import { Image, StyleSheet, Text, View, TouchableOpacity, onPress } from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

export default function TokenTransactionCard2() {
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
                            <Text style={styles.usdtText}>1.27 USDT </Text>
                            <Text style={styles.valueText}>$12,000</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image
                                source={require('../../assets/icons/arrow.png')}
                                style={{ width: 20, height: 20, resizeMode: 'contain' }}
                            />
                        </View>
                        <View style={styles.rightTextContainer}>
                            <Text style={styles.usdtText}>500 KSVC</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.dateText}>10</Text>
                                    <Text style={styles.slashText}>/</Text>
                                    <Text style={styles.dateText}>20</Text>
                                    <Text style={styles.slashText}>/</Text>
                                    <Text style={styles.dateText}>22</Text>
                                </View>
                                <Text style={styles.dateText}> | 23:10</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        minHeight: 75,
        maxHeight: 75,
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
        width: '33%',
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
    },
    rightTextContainer: {
        height: '90%',
        width: '36%',
        // backgroundColor: 'grey',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        // flexDirection: 'row',
    },
    arrowContainer: {
        height: '100%',
        width: '12%',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    usdtText: {
        fontFamily: 'Poppins-Regular',
        color: colors.text,
        fontSize: 14,
        top: '5%',
    },
    valueText: {
        fontFamily: 'Poppins-Regular',
        color: colors.text,
        fontSize: 13,
    },
    dateText: {
        fontFamily: 'Poppins-Regular',
        color: colors.text,
        fontSize: 11,
    },
    slashText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        color: colors.text,
        top: '5%',
    },
    touchableCpntainer: {
        height: "100%",
        width: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    }
});
