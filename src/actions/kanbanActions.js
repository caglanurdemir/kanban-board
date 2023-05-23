export const moveTaskToDone = (task) => {
    return {
        type: 'MOVE_TASK_TO_DONE',
        payload: task,
    };
}

export const moveTaskToTodo = (task) => {
    return {
        type: 'MOVE_TASK_TO_TODO',
        payload: task,
    };
}