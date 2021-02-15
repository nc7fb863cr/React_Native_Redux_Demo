import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, FlatList, Text, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { Button, Card } from '../components/Components';
import { pagePaddingTop, pagePaddingHorizontal, marginBottom } from '../constants/Constants';

const { width, height } = Dimensions.get('window');

const HomeScreen = (props) => {
  const navigation = useNavigation();

  const renderCards = () => {
    return (
      <FlatList
        data={props.devices}
        numColumns={2}
        keyExtractor={(item)=>item['key']}
        renderItem={({ item }) => {
          return (
            <Card 
              source={item['url']} 
              title={item['name']} 
              onPress={() => navigation.navigate('edit', {
                title: item['name'],
                source: item['url'],
                key: item['key'],
                cardVolumn: item['volumn'],
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
      <Image source={require('../assets/background.jpg')} style={styles.background}/>
      <View style={styles.headerContainer}>
        <Button module='material_community' name='menu'/>
        <Button 
          module='ion' 
          name='add' 
          buttonColor='seagreen' 
          iconColor='white'
          onPress={() =>　navigation.navigate('select')}/>
      </View>      
      
      <Text style={styles.title}>Devices</Text>
      <View style={styles.positionContainer}>
        <MaterialCommunityIcons name='sofa' size={18} style={styles.positionIcon}/>
        <Text style={styles.position}>Living Room</Text>        
      </View>           
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
  cardList:{
    width:width, 
    padding: pagePaddingHorizontal,
    paddingVertical: marginBottom,
    justifyContent:'space-between',
  },
  title:{
    paddingLeft:pagePaddingHorizontal,
    fontSize: 42,
    fontWeight: 'bold',    
  },
  background:{
    position: 'absolute',
    opacity: 0.6,
    height: height + pagePaddingTop,
    width: width,
    alignSelf:'center',
  },
  position:{
    opacity: 0.56,
    fontSize: 14,    
  },
  positionIcon:{
    marginRight: 10,
    opacity: 0.56,
  },
  positionContainer:{
    flexDirection: 'row',
    paddingBottom: marginBottom,
    paddingLeft:pagePaddingHorizontal + 5,
    alignItems: 'center',
  }
});

// mapping state to this page
const mapStatetoProps = (state) => {
  return {
    devices: state.reducer.deviceList,
  }
}

// connect the state and dispatch with this screen
export default connect(mapStatetoProps)(HomeScreen);