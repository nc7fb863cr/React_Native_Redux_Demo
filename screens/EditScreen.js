import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Portal, Dialog, Provider as PaperProvider, Button as PaperButton } from 'react-native-paper';

import { Input, Button, Display, Slider } from '../components/Components';
import { pagePaddingTop, pagePaddingHorizontal, marginBottom } from '../constants/Constants';
import { editDevice, deleteDevice } from '../models/Actions';

const EditScreen = (props) => {
  const navigation = useNavigation();
  const { params } = props.route;
  const { title, source, key, cardVolumn } = params;

  const [ name, setName ] = useState(title);
  const [ volumn, setVolumn ] = useState(cardVolumn);
  const [ visible, setVisible ] = useState(false); // dialog visibility

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onDelete = () => {
    props.delete(key);
    navigation.goBack();
  }

  const onEdit = () => {
    props.edit( key, {
      ...params, 
      url:source, 
      name:name.trim() === '' ? 'Earphone' : name.trim(), 
      volumn: volumn 
    });
  }

  const onChangeValue = (inputValue) => {
    setVolumn(Math.floor(inputValue));
  }  

  useEffect(()=>{
    return onEdit(); // execute when the component unmounts
  },[ name, volumn ])

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Button module='ant' name='left' onPress={() =>　navigation.goBack()}/>
          <Button 
            module='material_commnnity' 
            name='delete' 
            buttonColor='red' 
            iconColor='white' 
            onPress={showModal}/>
        </View>
        
        <Text style={styles.title}>Edit</Text>
        <Text style={styles.title2}>Your Device</Text> 
        <Input value={name} onChangeText={(inputText) => setName(inputText)}/>
        <Display source={source}/>
        <Slider value={volumn} onValueChange={onChangeValue}/>

        <Portal>
          <Dialog style={styles.dialog} visible={visible} onDismiss={hideModal}>
            <Dialog.Title>Delete Device</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.content}>Are your sure you want to remove this device?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <PaperButton color='crimson' style={styles.confirmButton} onPress={onDelete}>Yes</PaperButton>
              <PaperButton color='grey' onPress={hideModal}>Cancel</PaperButton>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
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
  content:{
    fontSize: 16
  },
  dialog:{
    borderRadius: 15,
  },
  confirmButton:{
    marginRight: 15,
  },
});

const mapStatetoProps = (state) => {
  return {
    devices: state.reducer.deviceList,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    edit: ( key, device ) => dispatch(editDevice( key, device )),
    delete: ( key ) => dispatch(deleteDevice( key )),
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(EditScreen);