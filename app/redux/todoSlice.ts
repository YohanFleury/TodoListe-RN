import { createSlice } from '@reduxjs/toolkit'


interface specificTodo {
    label: string;
    description: string;
    startDate: Date;
    endDate?: Date;
}

type initialStateProps = {
    todoList: specificTodo[];
    todoListFiltered: specificTodo[];
    filterActivated: boolean;
}

const initialState: initialStateProps = {
    todoList: [],
    todoListFiltered: [],
    filterActivated: false,
}


export const todoListSlice = createSlice({
    name: 'todolist',
    initialState: initialState,
    reducers: {
        setTodoList: (state, {payload}) => {
            state.todoList = payload
            state.todoListFiltered = payload
        },
        
        deleteTodo: (state, {payload}) => {
            state.todoList.map((todo: specificTodo, index: number) => {
                if(todo.label === payload) state.todoList.splice(index, 1)
            })
        },
        
        addTodo: (state, {payload}) => {
            state.todoList.push(payload)
        },
        searchSpecificTodo: (state, {payload}) => {
            state.todoListFiltered = state.todoList
            const result = state.todoListFiltered.filter((todo: specificTodo) => todo.label.includes(payload))
            state.todoListFiltered = result
        },

        setFilterActivated: (state, {payload}) => {
            state.filterActivated = payload
            if (payload) state.todoListFiltered = state.todoList
        }
    }
})

export const { 
    setTodoList,
    deleteTodo,
    addTodo,
    searchSpecificTodo,
    setFilterActivated
} = todoListSlice.actions

export default todoListSlice.reducer