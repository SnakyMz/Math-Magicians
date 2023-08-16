import calculate from '../logic/calculate';

describe('Testing calculation inputs', () => {
  test('Should nullify the operation', () => {
    const obj = {
      total: '50',
      next: '10',
      operation: '+',
    };
    const cal = calculate(obj, 'AC');
    expect(cal).toEqual(
      {
        total: null,
        next: null,
        operation: null,
      },
    );
  });
  test('Should return addition operation', () => {
    const obj = {
      total: '50',
      next: '10',
      operation: '+',
    };
    const cal = calculate(obj, '+');
    expect(cal.operation).toEqual('+');
  });
  test('Should return negative value', () => {
    const obj = {
      total: null,
      next: '10',
      operation: '+/-',
    };
    const cal = calculate(obj, '+/-');
    expect(cal.next).toEqual('-10');
  });
  test('Should return decimal operation', () => {
    const obj = {
      total: '50',
      next: '10',
      operation: '.',
    };
    const cal = calculate(obj, '.');
    expect(cal.operation).toEqual('.');
  });
});
