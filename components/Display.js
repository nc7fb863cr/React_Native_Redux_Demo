import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { displaySize, marginBottom } from '../constants/Constants';

const Display = ({source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: displaySize,
    height: displaySize,
    marginBottom: marginBottom,
  }
});

export default Display;