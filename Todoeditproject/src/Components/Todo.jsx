import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';  // Import styles

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <p className="task" onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} className="icon edit" onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} className="icon delete" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
