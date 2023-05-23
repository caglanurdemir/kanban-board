const initialState = {
    todoTasks: ['Task 1', 'Task 2', 'Task 3'],
    doneTasks: []
};

const kanbanReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_TASK_TO_DONE':
            const { payload: taskId } = action;
            const { todoTasks, doneTasks } = state;

            // Find the task in the todoTasks array
            const taskIndex = todoTasks.findIndex((task) => task === taskId);

            if (taskIndex !== -1) {
                // Remove the task from todoTasks and add it to doneTasks
                const updatedTodoTasks = [...todoTasks];
                updatedTodoTasks.splice(taskIndex, 1);
                const updatedDoneTasks = [...doneTasks, taskId];

                return {
                    ...state,
                    todoTasks: updatedTodoTasks,
                    doneTasks: updatedDoneTasks,
                };
            }

            return state;
        case 'MOVE_TASK_TO_TODO':
            const { payload: taskId2 } = action;
            const { todoTasks: todoTasks2, doneTasks: doneTasks2 } = state;

            // Find the task in the doneTasks array
            const taskIndexForDoneTasks = doneTasks2.findIndex((task) => task === taskId2);

            if (taskIndexForDoneTasks !== -1) {
                // Remove the task from doneTasks and add it to todoTasks
                const updatedDoneTasks = [...doneTasks2];
                updatedDoneTasks.splice(taskIndexForDoneTasks, 1);
                const updatedTodoTasks = [...todoTasks2, taskId2];

                return {
                    ...state,
                    todoTasks: updatedTodoTasks,
                    doneTasks: updatedDoneTasks,
                };
            }

            return state;
        default:
            return state;
    }
}

export default kanbanReducer;