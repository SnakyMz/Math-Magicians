import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Testing user interaction', () => {
  it('Should display addition of two numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    const display = document.querySelector('.display');
    expect(display.innerHTML).toEqual('3');
  });
  it('Should display subtraction of two numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    const display = document.querySelector('.display');
    expect(display.innerHTML).toEqual('-2');
  });
  it('Should display decimal multiplication of two numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    const display = document.querySelector('.display');
    expect(display.innerHTML).toEqual('6.5');
  });
  it('Should display addition of two negative numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+/-'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    const display = document.querySelector('.display');
    expect(display.innerHTML).toEqual('-5');
  });
});
