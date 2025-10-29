import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function TodoItem({ todo, onTodoUpdated, onTodoDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title || '');
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleUpdate = async () => {
    const trimmedTitle = (editTitle || '').trim();
    const trimmedDescription = (editDescription || '').trim();
    if (trimmedTitle && trimmedDescription) {
      try {
        const response = await axios.put(`https://todo-backend-hthd.onrender.com/${todo._id}`, {
          title: trimmedTitle,
          description: trimmedDescription,
        });
        setIsEditing(false);
        if (onTodoUpdated) onTodoUpdated(response.data); // Update with API response
        toast.success('Todo updated successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { backgroundColor: '#10B981', color: '#FFFFFF' },
        });
      } catch (error) {
        console.error('Error updating todo:', error);
        toast.error('Failed to update todo.', {
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

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
        if (onTodoDeleted) onTodoDeleted(todo._id);
        toast.success('Todo deleted successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { backgroundColor: '#10B981', color: '#FFFFFF' },
        });
      } catch (error) {
        console.error('Error deleting todo:', error);
        toast.error('Failed to delete todo.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { backgroundColor: '#EF4444', color: '#FFFFFF' },
        });
      }
    }
  };

  return (
    <li className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 sm:p-3 shadow-md hover:shadow-lg transition duration-300">
      {isEditing ? (
        <div className="space-y-2 sm:space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Todo title..."
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 text-sm sm:text-base"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Todo description..."
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 text-sm sm:text-base"
            rows="3"
          />
          <div className="flex justify-end space-x-2 sm:space-x-3">
            <button
              onClick={handleUpdate}
              className="bg-gradient-to-r from-accent to-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-800 transition duration-300 text-sm sm:text-base"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md hover:bg-gray-500 transition duration-300 text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">{todo.title || 'Untitled'}</h3>
          <p className="text-sm sm:text-base text-gray-600">{todo.description || 'No description'}</p>
          <div className="flex justify-end space-x-2 sm:space-x-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-accent to-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-800 transition duration-300 text-sm sm:text-base"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-gradient-to-r from-danger to-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-800 transition duration-300 text-sm sm:text-base"
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