import apiClient from "./client";

const endPoint = '/tasks'

const getAllTasks = () => apiClient.get(endPoint)

const getSpecificTask = (label: string) => apiClient.get(`${endPoint}/${label}`)

const createTask = (label: string, description: string, startDate: Date) => apiClient.post(endPoint, {
    label: label,
    description: description,
    start_date: startDate
})

const deleteTask = (label: string,) => apiClient.delete(`${endPoint}/${label}`)

const editTask = (endDate: string) => apiClient.put(endPoint, {
    end_date: endDate
})

export default {
    getAllTasks,
    getSpecificTask,
    createTask,
    deleteTask,
    editTask
}