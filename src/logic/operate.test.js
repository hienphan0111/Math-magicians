import operate from './operate.js';

describe('operate module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(operate(1, 2, '+')).toBe("3");
  });

  test('minus 5 - 1 to equal 4', () => {
    expect(operate(5, 1, '-')).toBe("4");
  });

  test('multis 3 * 4 to equal 12', () => {
    expect(operate(3, 4, 'x')).toBe("12");
  });

  test('divides 8 ÷ 2 to equal 4', () => {
    expect(operate(8, 2, '÷')).toBe("4");
  });

  test('mods 5 % 2 to equal 1', () => {
    expect(operate(5, 2, '%')).toBe("1");
  });

  test('expect return error when divide by 0', () => {
    expect(operate(4, 0, '÷')).toBe("Can't divide by 0.");
  });
});
