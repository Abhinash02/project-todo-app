// import React, { useState } from 'react';
// import axios from 'axios';

// function AddTodo() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async () => {
//     const trimmedTitle = (title || '').trim();
//     const trimmedDescription = (description || '').trim();
//     if (trimmedTitle && trimmedDescription) {
//       try {
//         await axios.post('http://localhost:5000/api/todos', { title: trimmedTitle, description: trimmedDescription });
//         setTitle('');
//         setDescription('');
//         window.location.reload(); // Refresh to update todo list
//       } catch (error) {
//         console.error('Error adding todo:', error);
//         alert('Failed to add todo.');
//       }
//     } else {
//       alert('Please fill in both title and description.');
//     }
//   };

//   return (
//     <div className="mb-4">
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Todo title..."
//         className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:border-primary"
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Todo description..."
//         className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:border-primary"
//         rows="3"
//       />
//       <button
//         onClick={handleSubmit}
//         className="w-full bg-primary text-white p-2 rounded hover:bg-blue-700"
//       >
//         Add Todo
//       </button>
//     </div>
//   );
// }

// export default AddTodo;
import React, { useState } from 'react';
import axios from 'axios';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    const trimmedTitle = (title || '').trim();
    const trimmedDescription = (description || '').trim();
    if (trimmedTitle && trimmedDescription) {
      try {
        await axios.post('http://localhost:5000/api/todos', { title: trimmedTitle, description: trimmedDescription });
        setTitle('');
        setDescription('');
        window.location.reload(); // Refresh to update todo list
      } catch (error) {
        console.error('Error adding todo:', error);
        alert('Failed to add todo. Please try again.');
      }
    } else {
      alert('Please fill in both title and description.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add New Todo</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title..."
        className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 hover:border-gray-300"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Todo description..."
        className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 hover:border-gray-300"
        rows="4"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-primary to-blue-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 transform hover:-translate-y-1"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;