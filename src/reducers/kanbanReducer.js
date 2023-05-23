const initialState = {
    todoTasks: ['Task 1', 'Task 2', 'Task 3'],
    doneTasks: []
};

const kanbanReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_TASK_TO_DONE':
            return {
                ...state,
                todoTasks: state.todoTasks.filter(task => task !== action.task),
                doneTasks: [...state.doneTasks, action.task]
            };
        case 'MOVE_TASK_TO_TODO':
            return {
                ...state,
                todoTasks: [...state.todoTasks, action.task],
                doneTasks: state.doneTasks.filter(task => task !== action.task)
            };
        default:
            return state;
    }
}

export default kanbanReducer;