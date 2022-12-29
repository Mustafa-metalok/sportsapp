/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React,{useState} from 'react';
import colors from '../assets/colors';

export default function RoadMapScreen() {
  const [count,setCount] = useState(0)

  const handleCount = ()=>{
    setCount(count + 1)
    if(count === 3){
      setCount(0)
    }
  }

  return (
    <View style={{}}>
      <Text style={styles.text1}>R o a d M a p</Text>

      <TouchableOpacity onPress={handleCount}>
        <Text style={styles.text1}>Control count value</Text>
        <Text style={styles.text1}>{count}</Text>
      </TouchableOpacity>
      <View style={{width:100,height:30,backgroundColor: count === 1 ? "red" : count===2 ? "blue" : count===3 ? "green" : null }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
  },
  text1: {
    fontFamily: 'Poppins-LightItalic',
    fontSize: 24,
    color: colors.highlight,
  },
});
