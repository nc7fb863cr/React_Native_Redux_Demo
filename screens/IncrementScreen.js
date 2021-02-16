import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';

import { Button, Display, Input, Slider } from '../components/Components';
import { pagePaddingTop, pagePaddingHorizontal, marginBottom } from '../constants/Constants';
import { addDevice } from '../models/Actions';

const IncrementScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const submitIncrement = (device) => dispatch(addDevice(device));

  const { params } = props.route;
  const { title, source } = params;

  const [ name, setName ] = useState(title);
  const [ volumn, setVolumn ] = useState(50);

  const onCreate = () => {
    let payload = {
      name: name.trim() === '' ? 'Earphone' : name.trim(), 
      url: source,
      volumn: volumn,
      key: Math.random().toString(),
    };

    //props.add(payload); // map to dispatch
    submitIncrement(payload); // map to dispatch (hook)
    navigation.navigate('home');
  }

  const onChangeValue = (inputValue) => {
    setVolumn(Math.floor(inputValue));
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button module='ant' name='left' onPress={() =>　navigation.goBack()}/>
        <Button 
          module='material'
          name='done' 
          buttonColor='dodgerblue' 
          iconColor='white'
          onPress={onCreate}/>
      </View>
      
      <Text style={styles.title}>Create</Text>
      <Text style={styles.title2}>Your Device</Text> 
      <Input value={name} onChangeText={(inputText) => setName(inputText)}/>
      <Display source={source}/>      
      <Slider value={volumn} onValueChange={onChangeValue}/>
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
  },
  slider:{
    paddingHorizontal:pagePaddingHorizontal,
    height: 20
  }
});

// mapping dispatch to this page
// switched to hook
const mapDispatchtoProps = (dispatch) => {
  return {
    add: (device) => dispatch(addDevice(device)),
  }
}

// connect the state and dispatch with this screen, switched using hook
// export default connect(mapDispatchtoProps)(IncrementScreen);

// useDispatch hook way
export default IncrementScreen;