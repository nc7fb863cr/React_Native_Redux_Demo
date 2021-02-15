import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { marginBottom, pagePaddingHorizontal } from '../constants/Constants';

const Input = (props) => {
  const { value, onChangeText } = props;

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={value}
        numOfLines={1}
        placeholder='Input device name here (20)'
        maxLength={20}
        onChangeText={onChangeText}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginVertical: marginBottom * 1.5,
    paddingHorizontal: pagePaddingHorizontal,
  },
  input:{
    borderWidth: 3,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderColor: 'dodgerblue',
  }
})

export default Input;