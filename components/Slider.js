import React from 'react';
import { View, Slider as RNSlider, StyleSheet, Text } from 'react-native';

import { marginBottom, pagePaddingHorizontal } from '../constants/Constants';

const Slider = ({ value, onValueChange }) => {
  return (
    <View style={styles.container}>      
      <RNSlider 
        style={styles.slider}
        value={value} 
        maximumValue={100} 
        minimumValue={0}        
        minimumTrackTintColor='dodgerblue'
        thumbTintColor='royalblue'
        onValueChange={onValueChange}/>
      <Text style={styles.title}>Volumn: {value} / 100</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: pagePaddingHorizontal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 18,
    color: 'black',
  },
  slider:{
    width: '100%',
    marginVertical: marginBottom,
    paddingHorizontal:pagePaddingHorizontal,
  }
})

export default Slider;