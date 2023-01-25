import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { Foundation } from '@expo/vector-icons';

import {useAppDispatch, useAppSelector} from '../hooks/useRedux'
import taskApi from '../api/tasks'
import useApi from '../hooks/useApi'
import CreateTask from './CreateTask'
import Todo from './Todo';
import Header from './Header';
import { setTodoList } from '../redux/todoSlice';
import Loader from './Loader';


interface specificTodo {
    label: string;
    description: string;
    startDate: Date;
    endDate?: Date;
}

const TodoList = () => {

    const todoList = useAppSelector((state) => state.todolist.todoList)
    const filteredTodoList = useAppSelector((state) => state.todolist.todoListFiltered)
    const filterActivated = useAppSelector((state) => state.todolist.filterActivated)
    const dispatch = useAppDispatch()

    const {request: loadAllTasks, loading, error, data} = useApi(taskApi.getAllTasks)

    useEffect(() => {
        loadAllTasks()
        console.log('data api', data)
    }, [])
console.log('todo liste from redux', todoList)

    useEffect(() => {
        dispatch(setTodoList(data))
        console.log(todoList)
    }, [data])
    
    
   return (
      <View style={styles.container}>
       <Header />
        {!loading &&
         <FlatList
            horizontal={false}
            data={filterActivated ? filteredTodoList : todoList}
            renderItem={
                ({ item }: {item: specificTodo}) => (
                    <Todo title={item.label} description={item.description} />
                )
            }
        /> 
        }
        {loading &&
            <Loader />
        }
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
    flex: 1
   },

})

export default TodoList