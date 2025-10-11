import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React');
    
    // Initially not completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    
    // Click to toggle
    fireEvent.click(todoItem);
    
    // Should be completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(todoItem);
    
    // Should not be completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const todoText = 'Learn React';
    expect(screen.getByText(todoText)).toBeInTheDocument();
    
    // Find all delete buttons and click the first one
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    // Todo should be removed
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    
    const button = screen.getByText('Add Todo');
    const initialTodoCount = screen.getAllByRole('listitem').length;

    // Try to add empty todo
    fireEvent.click(button);

    // Count should remain the same
    expect(screen.getAllByRole('listitem').length).toBe(initialTodoCount);
  });
});
