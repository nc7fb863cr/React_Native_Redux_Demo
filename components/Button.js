import React from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, module, onPress, iconColor, buttonColor } = props;  

  // select modules
  const handleElement = () => {
    switch (module){
      case 'material_community':
        return MaterialCommunityIcons;
      case 'material':
        return MaterialIcons;
      case 'ion':
        return Ionicons;
      case 'ant':
        return AntDesign;
      default:
        return MaterialCommunityIcons;
    }
  }

  // React.createElement(Element, props, children);
  // use this to create icon according to different module
  let Icon = React.createElement( handleElement(), {
    onPress: onPress,
    name: name,
    size: 30,
    style: {
      ...styles.icon,
      color: iconColor ?? 'black',
    },
  });

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.container,{backgroundColor: buttonColor ?? 'white'}]}>
      {Icon}
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
  container:{    
    padding: 10, 
    borderRadius: 15,
    backgroundColor: 'white',
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
});

// configure the prop types of Button
Button.propTypes = {
  name: PropTypes.string, 
  module: PropTypes.string, 
  onPress: PropTypes.func, 
  iconColor: PropTypes.string, 
  buttonColor: PropTypes.string,
}

export default Button;