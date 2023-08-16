import operate from "../logic/operate";
describe('Testing calculation operations', () => {
  test('Should add two numbers', () => {
    const cal = operate('2', '5', '+');
    expect(cal).toEqual('7');
  });
  test('Should subtract two numbers', () => {
    const cal = operate('2', '5', '-');
    expect(cal).toEqual('-3');
  });
  test('Should multiply two numbers', () => {
    const cal = operate('2', '5', 'x');
    expect(cal).toEqual('10');
  });
});