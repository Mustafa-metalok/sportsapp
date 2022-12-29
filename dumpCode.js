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
        <View style={{ borderBottomColor: colors.borders, borderBottomWidth: 0.7 }}>
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
                <Text style={styles.headerText}>{item.category_name}</Text>
                <View style={{ height: "100%", width: 20 }}></View>
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
                        <Text style={styles.text}>
                            {key}. {item.val}
                        </Text>
                        <View style={styles.separator} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const ExpandableComponent2 = ({ item, onClickFunction }) => {
    //Custom Component for the Expandable List
    const [layoutHeight2, setLayoutHeight2] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight2(null);
        } else {
            setLayoutHeight2(0);
        }
    }, [item.isExpanded]);

    return (
        <View style={{ borderBottomColor: colors.borders, borderBottomWidth: 0.7 }}>
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
                <Text style={styles.headerText}>{item.category_name}</Text>
                {item.isExpanded ? (
                    <Image
                        source={require('../../assets/icons/up.png')}
                        style={{
                            width: 18,
                            height: 14,
                            right: '8%',
                        }}
                    />
                ) : (
                    <Image
                        source={require('../../assets/icons/down.png')}
                        style={{
                            width: 18,
                            height: 14,
                            right: '8%',
                        }}
                    />
                )}
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight2,
                    overflow: 'hidden',
                }}>
                {/*Content under the header of the Expandable List Item*/}
                {item.subcategory.map((item, key) => (
                    <TouchableOpacity
                        key={key}
                        style={styles.content}
                    // onPress={() => alert("Id: " + item.id + " val: " + item.val)}
                    >
                        <Text style={styles.text}>
                            {key}. {item.val}
                        </Text>
                        <View style={styles.separator} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const FaqQuestions = () => {
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const [listDataSource2, setListDataSource2] = useState(CONTENT2);
    const [multiSelect, setMultiSelect] = useState(false);
    const [MultiSelect2, setMultiSelect2] = useState(false);
    // const [listDataSource2, setListDataSource2] = useState(CONTENT2);
    // const [multiSelect2, setMultiSelect2] = useState(false);

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
        // { second State}
        // if (MultiSelect2) {
        //   // If multiple select is enabled
        //   array[index]['isExpanded'] = !array[index]['isExpanded'];
        // } else {
        //   // If single select is enabled
        //   array.map((value, placeindex) =>
        //     placeindex === index
        //       ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        //       : (array[placeindex]['isExpanded'] = false),
        //   );
        // }

        setListDataSource(array);
    };

    const updateLayout2 = index => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource2];
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
        // { second State}
        // if (MultiSelect2) {
        //   // If multiple select is enabled
        //   array[index]['isExpanded'] = !array[index]['isExpanded'];
        // } else {
        //   // If single select is enabled
        //   array.map((value, placeindex) =>
        //     placeindex === index
        //       ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        //       : (array[placeindex]['isExpanded'] = false),
        //   );
        // }

        setListDataSource2(array);
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
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={styles.titleText}>About Tokens</Text>
                    <TouchableOpacity
                        onPress={() => setMultiSelect(!multiSelect)}></TouchableOpacity>
                </View>
                <ScrollView>
                    {listDataSource.map((item, key) => (
                        <ExpandableComponent2
                            key={item.category_name}
                            onClickFunction={() => {
                                updateLayout2(key);
                            }}
                            item={item}
                        />
                    ))}
                </ScrollView>
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
        fontFamily: 'Poppins',
        color: colors.text,
        marginBottom: 10,
        left: 3,
    },
    header: {
        backgroundColor: colors.primary,
        borderBottomColor: colors.borders,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        padding: '5.2%',
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
        paddingLeft: 10,
        paddingRight: 10,

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

// { second dummy data}

const CONTENT2 = [
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
