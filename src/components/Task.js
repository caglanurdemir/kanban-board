import { useDrag, useDrop } from "react-dnd";
import '../styles/KanbanBoard.scss';


const Task = ({ task, column, moveTask }) => {
    const [{ isDragging }, drag] = useDrag({
        type: "TASK",
        item: { id: task.id, column },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const [,] = useDrop({
        accept: "TASK",
        drop: (item) => {
            const taskId = item.id;
            const column = item.column;
            if (column === "DONE") {
                moveTask(taskId);
            } else if (column === "TODO") {
                moveTask(taskId);
            }
        }
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
        <div ref={drag} style={{ opacity }} className="task">
            {task.text}
        </div>
    );
};

export default Task;