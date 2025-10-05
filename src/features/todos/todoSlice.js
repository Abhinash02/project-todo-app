import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state: array of todos with title and description
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo with title and description
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      const newTodo = {
        id: nanoid(),
        title: title || '', // Ensure title is not undefined
        description: description || '', // Ensure description is not undefined
      };
      state.todos.push(newTodo);
    },
    // Update an existing todo's title and description
    updateTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.title = title || '';
        todo.description = description || '';
      }
    },
    // Delete a todo by ID
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

// Export actions to use in components
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

// Export reducer for store
export default todoSlice.reducer;

// Selector to get all todos
export const selectTodos = (state) => state.todos.todos;