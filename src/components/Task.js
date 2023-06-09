import React from "react";
import { useDrag, useDrop } from "react-dnd";
import '../styles/KanbanBoard.scss';
import taskIcon from '../assets/kanbanIcons/taskIcon.svg';
import epcIcon from '../assets/kanbanIcons/epcIcon.svg';
import low from '../assets/kanbanIcons/lowIcon.svg';
import medium from '../assets/kanbanIcons/mediumIcon.svg';
import high from '../assets/kanbanIcons/highIcon.svg';
import jane from '../assets/kanbanIcons/jane.svg';
import john from '../assets/kanbanIcons/john.svg';
import alex from '../assets/sidebarIcons/name.svg';


const Task = ({ task, column, moveTask, count }) => {
    const [{ isDragging }, drag] = useDrag({
        type: "TASK",
        item: { task, column },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const [, drop] = useDrop({
        accept: "TASK",
        drop: ({ column, task }) => moveTask(column, task)
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
        <div ref={node => drag(drop(node))} style={{ opacity }} className="task">
            <span className="task-text">{task.text}</span>
            <div className="task-items">
                <img src={task.taskOrEpc === 'task' ? taskIcon : epcIcon} alt="task icon" className="task-epc-icon" />
                <span className="tsk-epc-text">{task.taskOrEpc === 'task' ? `TSK-0${count}` : `EPC-0${count}`}</span>
                <img src={task.importance === 'low' ? low : task.importance === 'medium' ? medium : high} alt="priority icon" className="priority-icon" />
                <div className="rectangle">
                    <span className="number">{task.dueDate}</span>
                </div>
                <img src={task.username === 'Jane' ? jane : task.username === 'John' ? john : alex} alt="user icon" className="user-icon" />
            </div>
        </div>
    );
};

export default Task;