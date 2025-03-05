import React, { useState } from 'react';
import './EditTodoForm.css';  // Import styles

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input-field"
        placeholder="Edit task"
      />
      <button type="submit" className="submit-btn">
        Save
      </button>
    </form>
  );
};
