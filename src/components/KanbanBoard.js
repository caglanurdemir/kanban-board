import React from "react";
import { connect } from "react-redux";
import { moveTaskToDone, moveTaskToTodo } from "../actions/kanbanActions";
import '../styles/KanbanBoard.scss';
import leftArrow from '../assets/kanbanIcons/leftArrow.svg';
import sprint from '../assets/kanbanIcons/sprint.svg';
import peopleBlue from '../assets/kanbanIcons/peopleBlue.svg';
import calendar from '../assets/kanbanIcons/calendar.svg';
import people from '../assets/kanbanIcons/people.svg';
import sortColumn from '../assets/kanbanIcons/sortColumn.svg';
import sort from '../assets/kanbanIcons/sort.svg';
import line from '../assets/kanbanIcons/line.svg';
import lineHorizontal from '../assets/kanbanIcons/lineHorizontal.svg';

const KanbanBoard = ({ todoTasks, doneTasks, moveTaskToDone, moveTaskToTodo }) => {

    const handleTaskMoveToDone = (taskId) => {
        moveTaskToDone(taskId);
    };

    const handleTaskMoveToTodo = (taskId) => {
        moveTaskToTodo(taskId);
    };

    return (
        <div className="kanban-container">
            <div className="board-header">
                <div className="board-header-left">
                    <img src={leftArrow} alt="Left Arrow" className="board-header-icon" />
                    <img src={line} alt="Icon 1" className="board-header-icon" />
                    <button className="board-header-button">
                        <img src={sprint} alt="Sprint" className="board-header-icon" />
                        SPR-06
                    </button>
                    <img src={line} alt="Icon 1" className="board-header-icon" />
                    <button className="board-header-button">
                        <img src={peopleBlue} alt="Icon 2" className="board-header-icon" />
                        TEAM-10
                    </button>
                    <img src={line} alt="Icon 1" className="board-header-icon" />
                    <span className="board-header-text">New Sprint Name</span>
                    <button className="board-header-button">
                        <img src={calendar} alt="Icon 3" className="board-header-icon" />
                    </button>
                    <button className="board-header-button">
                        <img src={people} alt="Icon 4" className="board-header-icon" />
                    </button>
                    <button className="board-header-button">
                        Complete Sprint
                    </button>
                </div>
                <div className="board-header-right">
                    <img src={line} alt="Icon 1" className="board-header-icon" />
                    <img src={sortColumn} alt="Icon 2" className="board-header-icon" />
                    <img src={sort} alt="Icon 3" className="board-header-icon" />
                </div>
            </div>
            <div>
                <img src={lineHorizontal} alt="Line Horizontal" />
            </div>
            {/* TO-DO column */}
            {/* <div className="column">
                <div className="column-title">TO-DO</div>
                {todoTasks.map((task, index) => (
                    <div key={index} className="task">
                        {task}
                        <button onClick={() => handleTaskMoveToDone(task)}>Move to Done</button>
                    </div>
                ))}
            </div> */}

            {/* DONE column */}
            {/* <div className="column">
                <div className="column-title">DONE</div>
                {doneTasks.map((task, index) => (
                    <div key={index} className="task">
                        {task}
                        <button onClick={() => handleTaskMoveToTodo(task)}>Move to To-Do</button>
                    </div>
                ))}
            </div> */}
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
