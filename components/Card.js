import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { cardSize, imgSize } from '../constants/Constants';

const Card = (props) => {
  const { source, title, onPress } = props; 

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.6}>
      <View style={styles.container}>        
        <Image source={source} style={styles.image}/>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    width: cardSize,
    height: cardSize + 40,
    ...Platform.select({
      ios:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      },
      android:{
        elevation:10,
      }
    })    
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: imgSize,
    height: imgSize,
    marginBottom:10
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',    
  }
});

export default Card;