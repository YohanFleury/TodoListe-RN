import React from 'react'

import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native'


type ScreenProps = {
    style?: ViewStyle;
    children: 
    | JSX.Element
    | JSX.Element[]
}

const Screen = ({ children, style }: ScreenProps) => {
    return (
    <>
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    </>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#2B124F'
    },
    view: {
        flex: 1,
    }
})

export default Screen
