import React, { useState } from 'react'
import { View, StyleSheet, Button, Modal, Text, TextInput, Pressable } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import {useAppDispatch} from '../hooks/useRedux'
import apiTask from '../api/tasks'
import useApi from '../hooks/useApi'
import Screen from './Screen'
import TaskCreated from './TaskCreated'
import { addTodo } from '../redux/todoSlice';

const CreateTask = () => {

    const date = new Date()
    const dispatch = useAppDispatch()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [createAnimationVisible, setCreateAnimationVisible] = useState<boolean>(false)


    const createTask = async () => {
        const result = await apiTask.createTask(title, description, date)
        if (!result.ok) {
            return alert("La tâche n'a pas pu être créée.")
        } else {
            dispatch(addTodo({
                label: title,
                description: description,
                startDate: date
            }))
            setCreateAnimationVisible(true)
        }
    }

    const onCloseModal = () => {
        setCreateAnimationVisible(false)
        setOpenModal(false)
        setDescription('')
        setTitle('')
    }

   return (
      <View style={styles.container}>
       {!createAnimationVisible &&
         <Octicons style={styles.addIcon} name="plus-circle" size={27} color="white" onPress={() => setOpenModal(true)}/>}
        <Modal
        animationType='slide'
        visible={openModal}
        >
        <Screen>
            <TaskCreated show={createAnimationVisible} onDone={onCloseModal} />
            <View style={{flex: 1, justifyContent: 'center', }}>
                {!createAnimationVisible &&
                <Fontisto style={{margin: 10, textAlign:"right"}} name="close" size={24} color="white" onPress={onCloseModal} />}
                {!createAnimationVisible &&
                <View style={styles.container}>
                    <Text style={styles.title}>Créer une nouvelle tâche</Text>
                    <TextInput
                        placeholder='Titre'
                        placeholderTextColor="white"
                        onChangeText={(e) => setTitle(e)}
                        value={title}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Description'
                        placeholderTextColor="white"
                        onChangeText={(e) => setDescription(e)}
                        value={description}
                        style={styles.input}
                    />
                </View>
                }
                {!createAnimationVisible &&
                <View style={{flex: 1/2}}>
                    <Button color='white' title='Valider' onPress={createTask} />
                </View>}
            </View>
        </Screen>
        </Modal>

      </View>
   )
}

const styles = StyleSheet.create({
    addIcon: {
     },
   container: {
    flex: 1/2,
    justifyContent: 'center'
   },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    borderColor: 'white',
    color: 'white'
  },

   title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
   }
})

export default CreateTask