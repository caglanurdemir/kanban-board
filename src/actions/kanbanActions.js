export const moveTaskToDone = (task) => {
    return {
        type: 'MOVE_TASK_TO_DONE',
        payload: task,
    };
}

export const moveTaskToTodo = (taskId) => {
    return {
        type: 'MOVE_TASK_TO_TODO',
        payload: taskId,
    };
};