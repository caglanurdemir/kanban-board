import React from "react";
import { connect } from "react-redux";
import { moveTaskToDone, moveTaskToTodo } from "../actions/kanbanActions";
import '../styles/KanbanBoard.scss';

const KanbanBoard = ({ todoTasks, doneTasks, moveTaskToDone, moveTaskToTodo }) => {

    const handleTaskMoveToDone = (taskId) => {
        moveTaskToDone(taskId);
    };

    const handleTaskMoveToTodo = (taskId) => {
        moveTaskToTodo(taskId);
    };

    return (
        <div className="kanban-container">
            {/* TO-DO column */}
            <div className="column">
                <div className="column-title">TO-DO</div>
                {todoTasks.map((task, index) => (
                    <div key={index} className="task">
                        {task}
                        <button onClick={() => handleTaskMoveToDone(task)}>Move to Done</button>
                    </div>
                ))}
            </div>

            {/* DONE column */}
            <div className="column">
                <div className="column-title">DONE</div>
                {doneTasks.map((task, index) => (
                    <div key={index} className="task">
                        {task}
                        <button onClick={() => handleTaskMoveToTodo(task)}>Move to To-Do</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todoTasks: state.todoTasks,
        doneTasks: state.doneTasks
    };
}

export default connect(mapStateToProps, { moveTaskToDone, moveTaskToTodo })(KanbanBoard);
