import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


test('renders the title "Lista de Items"', () => {

render(<App />);
const titleElement = screen.getByText(/Lista de Items/i);
expect(titleElement).toBeInTheDocument();
  /*render(<App />);
  const titleElement = screen.getByText(/Lista de Items/i);
  expect(titleElement).toBeInTheDocument();*/
});