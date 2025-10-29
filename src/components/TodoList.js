// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TodoItem from './TodoItem';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get('https://todo-backend-hthd.onrender.com/api/todos');
//       setTodos(response.data);
      
//       if (response.data.length === 0) {
//         toast.info('No tasks yet. Well done! ✨', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           style: { backgroundColor: '#3B82F6', color: '#FFFFFF' },
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//       toast.error('Failed to fetch tasks.', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         style: { backgroundColor: '#EF4444', color: '#FFFFFF' },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

  

//   const handleTodoUpdated = (updatedTodo) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo._id === updatedTodo._id ? { ...todo, ...updatedTodo } : todo
//       )
//     );
//     toast.success('Todo updated successfully!', {
//       position: 'top-right',
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       style: { backgroundColor: '#10B981', color: '#FFFFFF' },
//     });
//   };

//   const handleTodoDeleted = (todoId) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== todoId));
//     toast.success('Todo deleted successfully!', {
//       position: 'top-right',
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       style: { backgroundColor: '#10B981', color: '#FFFFFF' },
//     });
//   };

//   return (
//     <div className="w-full max-w-md p-6 mt-6 mx-auto bg-white rounded-lg shadow-xl">
//       <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-6 text-center">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to Your Todo Page!</h3>
//         <p className="text-gray-600">
//          Use this page to manage your tasks. Add, edit, or delete todos as needed. <b>Notes: </b> 
//          All tasks are saved and visible to everyone. After you perform a task, you will need to reload the page to see your changes Due Redux State. Happy organizing! 📝
//         </p>
//       </div>

//       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//         My Tasks 📝
//       </h2>

//       {loading && <p className="text-center text-gray-500">Loading tasks...</p>}

//       <ul className="space-y-3">
//         {todos.map((todo) => (
//           <TodoItem
//             key={todo._id}
//             todo={todo}
//             onTodoUpdated={handleTodoUpdated}
//             onTodoDeleted={handleTodoDeleted}
//           />
//         ))}
//       </ul>
//       <ToastContainer />
//     </div>
//   );
// }

// export default TodoList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://todo-backend-hthd.onrender.com/api/todos'); // Update this URL
      console.log('Fetched data:', response.data);
      setTodos(response.data);
      if (response.data.length === 0) {
        toast.info('No tasks yet. Well done! ✨', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { backgroundColor: '#3B82F6', color: '#FFFFFF' },
        });
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
      toast.error('Failed to fetch tasks.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { backgroundColor: '#EF4444', color: '#FFFFFF' },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTodoAdded = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    toast.success('Todo added successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { backgroundColor: '#10B981', color: '#FFFFFF' },
    });
  };

  const handleTodoUpdated = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === updatedTodo._id ? { ...todo, ...updatedTodo } : todo
      )
    );
    toast.success('Todo updated successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { backgroundColor: '#10B981', color: '#FFFFFF' },
    });
  };

  const handleTodoDeleted = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== todoId));
    toast.success('Todo deleted successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { backgroundColor: '#10B981', color: '#FFFFFF' },
    });
  };

  return (
    <div className="w-full max-w-md p-6 mt-6 mx-auto bg-white rounded-lg shadow-xl">
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to Your Todo Page!</h3>
        <p className="text-gray-600">
          Use this page to manage your tasks. Add, edit, or delete todos as needed. Notes: All tasks are saved and visible to everyone. Happy organizing! 📝
        </p>
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        My Tasks 📝
      </h2>

      {loading && <p className="text-center text-gray-500">Loading tasks...</p>}

      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onTodoUpdated={handleTodoUpdated}
            onTodoDeleted={handleTodoDeleted}
          />
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default TodoList;