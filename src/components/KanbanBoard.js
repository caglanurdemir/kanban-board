import React from "react";
import { connect } from "react-redux";
import { moveTaskToDone } from "../actions/kanbanActions";
import '../styles/KanbanBoard.scss';

const KanbanBoard = ({ todoTasks, doneTasks, moveTaskToDone }) => {
    const handleTaskMove = (task) => {
        moveTaskToDone(task);
    }

    return (
        <div className="kanban-container">
            <div className="column">
                <div className="column-title">TO-DO</div>
                {todoTasks.map((task, index) => (
                    <div className="task" key={index}>
                        {task}
                        <button onClick={() => handleTaskMove(task)}>Move to Done</button>
                    </div>
                ))}
            </div>
            <div className="column">
                <div className="column-title">DONE</div>
                {doneTasks.map((task, index) => (
                    <div className="task" key={index}>
                        {task}
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

export default connect(mapStateToProps, { moveTaskToDone })(KanbanBoard);