import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import LottieView from 'lottie-react-native'

type TaskCreatedProps = {
    onDone: () => void;
    show: boolean;
}

const TaskCreated = ({ onDone, show }: TaskCreatedProps) => {
   return (
      <View style={[styles.container, {flex: show ? 1 : 0}]}>
        {show && 
        <LottieView 
            autoPlay
            loop={false}
            source={require('../assets/animations/valide.json')}
            style={styles.animation}
            onAnimationFinish={onDone}
        />}
      </View>
   )
}

const styles = StyleSheet.create({
   animation: {
    width: 550
   }, 

   container: {
    alignItems: 'center',
    justifyContent: 'center'
   }
})

export default TaskCreated