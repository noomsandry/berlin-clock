import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Berlin Time', () => {
  render(<App />);
  const linkElement = screen.getByText(/Berlin Time/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Numeric Time', () => {
  render(<App />);
  const linkElement = screen.getByText(/Numeric Time/i);
  expect(linkElement).toBeInTheDocument();
});

