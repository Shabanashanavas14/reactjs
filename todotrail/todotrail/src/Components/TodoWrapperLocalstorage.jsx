// import React, { useState, useEffect, useCallback } from 'react';
// import { TodoForm } from './TodoForm';
// import { v4 as uuidv4 } from 'uuid';  
// import { Todo } from './Todo';
// import { EditTodoForm } from './EditTodoform';  

// export const TodoWrapperLocalStorage = () => {
//   const [todos, setTodos] = useState([]);

//   // Load todos from localStorage on component mount
//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(savedTodos);
//   }, []);  // Empty array ensures this effect runs only once after the first render

//   // Helper function to update localStorage
//   const updateLocalStorage = (newTodos) => {
//     localStorage.setItem('todos', JSON.stringify(newTodos));
//   };

//   // Add a new todo
//   const addTodo = useCallback((todo) => {
//     setTodos(prevTodos => {
//       const newTodos = [...prevTodos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
//       updateLocalStorage(newTodos); // Update localStorage
//       return newTodos;  // Return the new todos array
//     });
//   }, []);  // No dependency, so it will always be the same function

//   // Toggle the completion status of a todo
//   const toggleComplete = useCallback((id) => {
//     setTodos(prevTodos => {
//       const newTodos = prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       );
//       updateLocalStorage(newTodos); // Update localStorage
//       return newTodos;  // Return the updated todos array
//     });
//   }, []);  // No dependency, so it will always be the same function

//   // Delete a todo
//   const deleteTodo = useCallback((id) => {
//     setTodos(prevTodos => {
//       const newTodos = prevTodos.filter((todo) => todo.id !== id);
//       updateLocalStorage(newTodos); // Update localStorage
//       return newTodos;  // Return the updated todos array
//     });
//   }, []);  // No dependency, so it will always be the same function

//   // Toggle editing mode
//   const editTodo = useCallback((id) => {
//     setTodos(prevTodos => {
//       const newTodos = prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//       );
//       updateLocalStorage(newTodos); // Update localStorage
//       return newTodos;  // Return the updated todos array
//     });
//   }, []);  // No dependency, so it will always be the same function

//   // Edit the task text
//   const editTask = useCallback((task, id) => {
//     setTodos(prevTodos => {
//       const newTodos = prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, task, isEditing: false } : todo
//       );
//       updateLocalStorage(newTodos); // Update localStorage
//       return newTodos;  // Return the updated todos array
//     });
//   }, []);  // No dependency, so it will always be the same function

//   return (
//     <div className="TodoWrapper">
//       <h1>Get Things Done!</h1>
//       <TodoForm addTodo={addTodo} />
//       {todos.map((todo) =>
//         todo.isEditing ? (
//           <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
//         ) : (
//           <Todo
//             task={todo}
//             key={todo.id}
//             toggleComplete={toggleComplete}
//             deleteTodo={deleteTodo}
//             editTodo={editTodo}
//           />
//         )
//       )}
//     </div>
//   );
// };

// export default TodoWrapperLocalStorage;
