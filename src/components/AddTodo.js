import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddTodo({ onTodoAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    const trimmedTitle = (title || '').trim();
    const trimmedDescription = (description || '').trim();
    if (trimmedTitle && trimmedDescription) {
      try {
        const response = await axios.post('https://todo-backend-hthd.onrender.com/api/todos', { title: trimmedTitle, description: trimmedDescription });
        setTitle('');
        setDescription('');
        if (onTodoAdded) onTodoAdded(response.data);
        toast.success('Todo added successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { backgroundColor: '#10B981', color: '#FFFFFF' },
        });
      } catch (error) {
        console.error('Error adding todo:', error);
        toast.error('Failed to add todo.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { backgroundColor: '#EF4444', color: '#FFFFFF' },
        });
      }
    } else {
      toast.warn('Please fill in both title and description.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { backgroundColor: '#3B82F6', color: '#FFFFFF' },
      });
    }
  };

  return (
    <div className="w-full max-w-md p-6 mt-6 mx-auto bg-white rounded-lg shadow-xl mb-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
        rows="4"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-primary to-blue-600 text-white p-2 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition duration-300"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTodo;