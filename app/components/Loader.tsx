import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'


const Loader = () => {
   return (
    <View style={styles.container}>
    <LottieView 
        autoPlay
        loop={false}
        source={require('../assets/animations/loading.json')}
        style={styles.animation}
    />
  </View>
   )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    animation: {
        width: 550
    }, 
})

export default Loader