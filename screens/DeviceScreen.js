import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, Dimensions, FlatList, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
import { Button, Card } from '../components/Components';
import { pagePaddingTop, pagePaddingHorizontal, earphones, marginBottom } from '../constants/Constants';

const DeviceScreen = (props) => {
  const navigation = useNavigation(); 

  const renderCards = () => {
    return (
      <FlatList
        data={earphones}
        numColumns={2}
        keyExtractor={(item)=>item['key']}
        renderItem={({ item }) => {
          return (
            <Card 
              source={item['url']} 
              title={item['name']} 
              onPress={() => navigation.navigate('add', {
                title: item['name'],
                source: item['url'],
              })}
            />
          )
        }}
        columnWrapperStyle={styles.cardList}
      />
    )
  }

  return (    
    <View style={styles.container}>
      <Image source={require('../assets/background2.jpg')} style={styles.background}/>
      <View style={styles.headerContainer}>
        <Button module='ant' name='left' onPress={() =>　navigation.navigate('home')}/>
      </View>      

      <Text style={styles.title}>Select</Text>
      <Text style={styles.title2}>Your Device</Text>      
      {renderCards()}      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: pagePaddingTop,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:pagePaddingHorizontal,
    paddingBottom: marginBottom,
  },
  title:{
    paddingLeft:pagePaddingHorizontal,
    fontSize: 42,
    fontWeight: 'bold',
  },
  title2:{
    paddingLeft:pagePaddingHorizontal,
    fontSize: 32,
    paddingBottom:20,
    paddingBottom: marginBottom,
  },
  cardList:{
    width:width, 
    paddingHorizontal: pagePaddingHorizontal,
    paddingVertical: marginBottom,
    justifyContent:'space-between',
  },
  background:{
    position: 'absolute',
    opacity: 0.3,
    height: height + pagePaddingTop,
    width: width,
    alignSelf:'center',
  },
});

export default DeviceScreen;