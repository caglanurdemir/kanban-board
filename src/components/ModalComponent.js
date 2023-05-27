import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { addTaskToTodo } from '../actions/kanbanActions';
import '../styles/Modal.scss';

const ModalComponent = ({ addTaskToTodo, onClose }) => {
    const [text, setText] = useState('');
    const [importance, setImportance] = useState(1);
    const [username, setUsername] = useState('John');
    const [dueDate, setDueDate] = useState('');
    const [taskOrEpc, setTaskOrEpc] = useState('task');
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEscapeKey);
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


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
            <div className="modal-content" ref={modalRef}>
                <h3>Add Task</h3>
                <div className="form-group">
                    <span className='task-desc'>Task Description</span>
                    <textarea className='task-textarea' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-group-selection">
                    <span className='form-group-selection-text'>Importance</span>
                    <select className='form-group-selection-select' value={importance} onChange={(e) => setImportance(e.target.value)}>
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                </div>
                <div className="form-group-selection">
                    <span className='form-group-selection-text'>Username</span>
                    <select className='form-group-selection-select' value={username} onChange={(e) => setUsername(e.target.value)}>
                        <option value="John">John</option>
                        <option value="Jane">Jane</option>
                        <option value="Alex">Alex</option>
                    </select>
                </div>
                <div className="form-group-selection">
                    <span className='form-group-selection-text'>Due Date</span>
                    <input className='form-group-selection-select' type="number" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="form-group-selection">
                    <span className='form-group-selection-text'>Task or EPC</span>
                    <select className='form-group-selection-select' value={taskOrEpc} onChange={(e) => setTaskOrEpc(e.target.value)}>
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
