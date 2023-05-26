import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTaskToTodo } from '../actions/kanbanActions';
import '../styles/Modal.scss';

const ModalComponent = ({ addTaskToTodo, onClose }) => {
    const [text, setText] = useState('');
    const [importance, setImportance] = useState(1);
    const [username, setUsername] = useState('John');
    const [dueDate, setDueDate] = useState('');
    const [taskOrEpc, setTaskOrEpc] = useState('task');

    const handleAddTask = () => {
        const newTask = {
            text,
            importance,
            username,
            dueDate: parseInt(dueDate),
            taskOrEpc,
        };
        addTaskToTodo(newTask);
        closeModal();
    };

    const closeModal = () => {
        setText('');
        setImportance(1);
        setUsername('John');
        setDueDate('');
        setTaskOrEpc('task');
        onClose()
    };

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h3>Add Task</h3>
                <div className="form-group">
                    <label>Text</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Importance</label>
                    <select value={importance} onChange={(e) => setImportance(e.target.value)}>
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <select value={username} onChange={(e) => setUsername(e.target.value)}>
                        <option value="John">John</option>
                        <option value="Jane">Jane</option>
                        <option value="Alex">Alex</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <input type="number" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Task or EPC</label>
                    <select value={taskOrEpc} onChange={(e) => setTaskOrEpc(e.target.value)}>
                        <option value="task">Task</option>
                        <option value="epc">EPC</option>
                    </select>
                </div>
                <div className="button-container">
                    <button className="cancel-button" onClick={closeModal}>
                        Cancel
                    </button>
                    <button className="add-button" onClick={handleAddTask}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { addTaskToTodo })(ModalComponent);
