import React, {useState} from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';

import Screen from './Screen'
import useApi from '../hooks/useApi';
import apiTask from '../api/tasks'
import {useAppDispatch, useAppSelector} from '../hooks/useRedux'
import { deleteTodo } from '../redux/todoSlice';

type TodoProps = {
    title: string;
    description: string
}

const Todo = ({title, description}: TodoProps) => {

    const { request: deleteSpecificTask, error} = useApi(apiTask.deleteTask)
    const [done, setDone] = useState<boolean>(false)
    const dispatch = useAppDispatch()


    const deleteTask = () => {
        deleteSpecificTask(title)
        if(error) 
            alert('Une erreur est survenue')
    }

   return (
    <Screen>
      <View style={styles.container}>
            <Pressable style={styles.leftContainer}  >
                {done && <FontAwesome name="check-circle" size={26} color="#EC5748" onPress={() => setDone(false)}/>}
                {!done && <FontAwesome name="circle-o" size={26} color="#EC5748" onPress={() => setDone(true)} />}
            </Pressable>
        <View style={styles.middleContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{title}</Text>
            <Text style={{marginTop: 3, fontSize: 14, color: 'white'}}>{description}</Text>
        </View>
        <View style={styles.rightContainer}>
             <MaterialCommunityIcons name="delete" size={22} color="white" onPress={() => {
                deleteTask()
                dispatch(deleteTodo(title))
                }} />
        </View>
      </View>
      <View style={{backgroundColor: '#2B124F', padding: 5}}>
        <Divider color="#EC5748" width={1} />
      </View>
    </Screen>
   )
}

const styles = StyleSheet.create({
   container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: "#2B124F",
    flex: 10
   },
   descriptionContainer: {
    padding: 10
   },

   description: {
    fontSize: 18
   },

   leftContainer: {
    flex: 2,
   },

   middleContainer: {
    flex: 6,
    justifyContent: 'space-between'
   },

   rightContainer: {
    flex: 2,
    alignItems: 'flex-end'
   },

   iconContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
   }, 

   titleContainer: {
    padding: 15,
    alignItems: 'center'
   },

   title: {
    fontSize: 22,
    fontWeight: 'bold',
   }
})

export default Todo