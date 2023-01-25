import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

type CircleIconProps = {
   children: 
   | JSX.Element
   | JSX.Element[];
   width?: number;
   height?: number;
   onPress?: () => void;
}

const CircleIcon = ({children, width =30, height = 30, onPress}: CircleIconProps) => {
   return (
   <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, {height: height, width: width, borderRadius: width/2}]}>
        {children}
      </View>
   </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
   container: {
    padding: 5,
    margin: 10,
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   }
})

export default CircleIcon