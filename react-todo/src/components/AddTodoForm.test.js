import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm', () => {
  test('renders add todo form', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
  });

  test('renders input field', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    const input = screen.getByTestId('todo-input');
    expect(input).toBeInTheDocument();
  });

  test('renders add button', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    const button = screen.getByTestId('add-button');
    expect(button).toBeInTheDocument();
  });

  test('allows user to type in input', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    const input = screen.getByTestId('todo-input');
    
    fireEvent.change(input, { target: { value: 'New task' } });
    expect(input.value).toBe('New task');
  });

  test('calls onAdd when form is submitted', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(button);
    
    expect(mockOnAdd).toHaveBeenCalledWith('New task');
  });

  test('clears input after adding todo', () => {
    const mockOnAdd = jest.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });
});
