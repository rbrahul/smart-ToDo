import * as types from '../constants/TodoConstants.js';

export function addNewTodo(data) {
    return {
        type: types.ADD_NEW_TODO,
        data
    };
}

export function completeTodo(id) {
  console.info('complete');
    return {
        type: types.COMPLETE_A_TODO,
        id
    };
}

export function updateTodo(data) {
    return {
        type: types.UPDATE_A_TODO,
        data
    };
}

export function clearAllCompletedTodo() {
    return {
        type: types.CLEAR_ALL_COMPLETED_TODO,
    };
}

export function setPriority(data) {
    return {
        type: types.SET_PRIORITY,
        data
    };
}
