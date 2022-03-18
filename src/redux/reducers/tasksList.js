import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "../actions/actionsType"

const initialState = [{id: 1, title: 'First task', isCompleted: false}];

export const tasksList = (state = initialState, action) => {
    const tasks = [...state];
    switch (action.type) {
        case ADD_TASK:
            return [...tasks, {id: Date.now(), title: action.payload.title, isCompleted: false}];
        case TOGGLE_TASK:
            const taskIndexToUpdate = tasks.findIndex(task => task.id === action.payload.id);
            tasks[taskIndexToUpdate].isCompleted = tasks[taskIndexToUpdate].isCompleted ? false : true;
            return [...tasks];
        case DELETE_TASK:
            const taskIndexToDelete = tasks.findIndex(task => task.id === action.payload.id);
            tasks.splice(taskIndexToDelete, 1);
            return [...tasks];
        default:
            return state;
    }
}