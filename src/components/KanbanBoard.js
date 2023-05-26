import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
import todoIcon from '../assets/kanbanIcons/todoIcon.svg';
import doneIcon from '../assets/kanbanIcons/doneIcon.svg';
import columnLine from '../assets/kanbanIcons/columnLine.svg';

const KanbanBoard = ({ todoTasks, doneTasks, moveTaskToDone, moveTaskToTodo }) => {

    const totalTodoDueDate = todoTasks.reduce((total, task) => total + task.dueDate, 0);
    const totalDoneDueDate = doneTasks.reduce((total, task) => total + task.dueDate, 0);

    const handleTaskMoveToDone = (taskId) => {
        moveTaskToDone(taskId);
    };

    const handleTaskMoveToTodo = (taskId) => {
        moveTaskToTodo(taskId);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="kanban-container">
                <div className="board-header">
                    <div className="board-header-left">
                        <img src={leftArrow} alt="Left Arrow" className="arrow-icon" />
                        <img src={line} alt="Icon 1" className="line-icon" />
                        <button className="board-header-button">
                            <img src={sprint} alt="Sprint" className="board-header-icon" />
                            <span className="board-header-text">SPR-06</span>
                        </button>
                        <img src={line} alt="Icon 1" className="line-icon" />
                        <button className="board-header-button">
                            <img src={peopleBlue} alt="Icon 2" className="board-header-icon" />
                            <span className="board-header-text">TEAM-10</span>
                        </button>
                        <img src={line} alt="Icon 1" className="line-icon" />
                        <span className="board-header-bold-text">New Sprint Name</span>
                        <button className="board-header-button">
                            <img src={calendar} alt="Icon 3" className="board-header-icon" />
                        </button>
                        <button className="board-header-button">
                            <img src={people} alt="Icon 4" className="board-header-icon" />
                        </button>
                        <button className="complete-button">
                            Complete Sprint
                        </button>
                    </div>
                    <div className="board-header-right">
                        <img src={line} alt="Icon 1" className="line-icon" />
                        <img src={sortColumn} alt="Icon 2" className="board-header-right-icon" />
                        <img src={sort} alt="Icon 3" className="board-header-right-icon" />
                    </div>
                </div>
                <div>
                    <img src={lineHorizontal} alt="Line Horizontal" />
                </div>
                <div className="kanban-main-board">
                    {/* TO-DO column */}
                    <div className="column">
                        <div className="column-title">
                            <img src={todoIcon} alt="To-Do Icon" className="column-icon" />
                            <span className="todo-done-text">TO-DO</span>
                            <div className="rectangle-blue">
                                <span className="number-blue">{totalTodoDueDate}</span>
                            </div>
                        </div>
                        <img src={columnLine} alt="Column Line" className="column-line" />
                        {todoTasks.map((task, index) => (
                            <Task
                                key={index}
                                task={task}
                                column="TODO"
                                moveTask={handleTaskMoveToDone}
                                count={index + 1}
                            />
                        ))}
                    </div>

                    {/* DONE column */}
                    <div className="column">
                        <div className="column-title">
                            <img src={doneIcon} alt="Done Icon" className="column-icon" />
                            <span className="todo-done-text">DONE</span>
                            <div className="rectangle-blue">
                                <span className="number-blue">{totalDoneDueDate}</span>
                            </div>
                        </div>
                        <img src={columnLine} alt="Column Line" className="column-line" />
                        {doneTasks.map((task, index) => (
                            <Task
                                key={index}
                                task={task}
                                column="DONE"
                                moveTask={handleTaskMoveToTodo}
                                count={index + 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

const mapStateToProps = (state) => {
    return {
        todoTasks: state.todoTasks,
        doneTasks: state.doneTasks
    };
}

export default connect(
    mapStateToProps,
    { moveTaskToDone, moveTaskToTodo }
)(KanbanBoard);
