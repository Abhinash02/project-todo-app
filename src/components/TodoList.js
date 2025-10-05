// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import TodoItem from './TodoItem';

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     // Fetch todos from backend
//     const fetchTodos = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/todos');
//         setTodos(response.data);
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       }
//     };
//     fetchTodos();
//   }, []);

//   return (
//     <ul className="space-y-2">
//       {todos.map((todo) => (
//         <TodoItem key={todo._id} todo={todo} />
//       ))}
//     </ul>
//   );
// }

// export default TodoList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TodoItem from './TodoItem';

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     // Fetch todos from backend
//     const fetchTodos = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/todos');
//         setTodos(response.data);
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       }
//     };
//     fetchTodos();
//   }, []);

//   return (
//     <ul className="space-y-2">
//       {todos.map((todo) => (
//         <TodoItem key={todo._id} todo={todo} />
//       ))}
//     </ul>
//   );
// }

// export default TodoList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from backend
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;