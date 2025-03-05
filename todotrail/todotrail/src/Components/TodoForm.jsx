import React, { useState } from 'react';
import './TodoForm.css';  // Import styles

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <div className='body'>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What is task today?"
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};
