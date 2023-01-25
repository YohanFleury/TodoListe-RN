import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import {useAppDispatch} from '../hooks/useRedux'
import CreateTask from './CreateTask';
import { searchSpecificTodo, setFilterActivated } from '../redux/todoSlice';

const Header = () => {

const [showInput, setShowInput] = useState<boolean>(false)
const [labelTodo, setLabelTodo] = useState<string>("")
const dispatch = useAppDispatch()

useEffect(() => {
  if(showInput) {
   dispatch(searchSpecificTodo(labelTodo))
  }
  console.log('label todo : ', labelTodo)
}, [labelTodo])


   return (
      <>
         <View style={styles.container}>
            <Text style={styles.title}>Liste des tâches</Text>
            <CreateTask />
            <Octicons name="search" size={24} color="white" onPress={() => {
               setShowInput(true)
               dispatch(setFilterActivated(true))
               }} />
         </View>
         {showInput &&
         <View style={styles.searchContainer}>
            <TextInput
               placeholder='Rechercher une tâche'
               placeholderTextColor="white"
               onChangeText={(e) => setLabelTodo(e)}
               value={labelTodo}
               style={styles.input}
               autoFocus
            />
            <Fontisto name="close" size={24} color="white" onPress={() => {
               setLabelTodo("")
               setShowInput(false)
               dispatch(setFilterActivated(false))
               }}/>
         </View>
         }
      </>
   )
}

const styles = StyleSheet.create({
   
   container: {
    backgroundColor: '#2B124F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20

   },
   input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 25,
      padding: 10,
      borderColor: 'white',
      color: 'white',
      width: '75%'
    },
   searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
   title: {
    fontSize: 24,
    color: 'white'
   }
})

export default Header