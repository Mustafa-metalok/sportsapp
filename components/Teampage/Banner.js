import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/teamImage.jpg')}
        style={{width: '100%', height: '89%'}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 160,
    maxHeight: 160,
  },
});
