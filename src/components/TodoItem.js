import React, { useState } from 'react';
import axios from 'axios';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title || '');
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleUpdate = async () => {
    const trimmedTitle = (editTitle || '').trim();
    const trimmedDescription = (editDescription || '').trim();
    if (trimmedTitle && trimmedDescription) {
      try {
        await axios.put(`http://localhost:5000/api/todos/${todo._id}`, {
          title: trimmedTitle,
          description: trimmedDescription,
        });
        setIsEditing(false);
        window.location.reload(); // Refresh to update todo list
      } catch (error) {
        console.error('Error updating todo:', error);
        alert('Failed to update todo.');
      }
    } else {
      alert('Please fill in both title and description.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
      window.location.reload(); // Refresh to update todo list
    } catch (error) {
      console.error('Error deleting todo:', error);
      alert('Failed to delete todo.');
    }
  };

  return (
    <li className="bg-white p-3 border border-gray-200 rounded">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Todo title..."
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-accent"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Todo description..."
            className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-accent"
            rows="3"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleUpdate}
              className="bg-accent text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-secondary">{todo.title || 'Untitled'}</h3>
          <p className="text-gray-600">{todo.description || 'No description'}</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-accent text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-danger text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;