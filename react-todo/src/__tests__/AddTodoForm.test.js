import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('AddTodoForm', () => {
  test('renders add todo form', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
  });

  test('renders input field', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    expect(input).toBeInTheDocument();
  });

  test('renders add button', () => {
    render(<TodoList />);
    const button = screen.getByTestId('add-button');
    expect(button).toBeInTheDocument();
  });

  test('allows user to type in input', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    
    fireEvent.change(input, { target: { value: 'New task' } });
    expect(input.value).toBe('New task');
  });

  test('clears input after adding todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });
});
