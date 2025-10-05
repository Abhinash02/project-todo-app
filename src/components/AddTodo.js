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
        alert('Failed to add todo.');
      }
    } else {
      alert('Please fill in both title and description.');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title..."
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:border-primary"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Todo description..."
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:border-primary"
        rows="3"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white p-2 rounded hover:bg-blue-700"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;