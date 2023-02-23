import calculate from "./calculate";

describe('Calculate module', () => {
  test('AC button', () => {
    const obj = {
      total: '5',
      next: '4',
      operation: '+'
    };
    expect(calculate(obj,'AC')).toStrictEqual({"next": null, "operation": null, "total": null});
  });

  test('= button', () => {
    const obj = {
      total: '5',
      next: '4',
      operation: '+'
    };
    expect(calculate(obj,'=')).toStrictEqual({"next": null, "operation": null, "total": "9"});
  });

  test('6 button', () => {
    const obj = {
      total: null,
      next: null,
      operation: null
    };
    expect(calculate(obj,'6')).toStrictEqual({"next": "6", "total": null});
  });

  test('+ button', () => {
    const obj = {
      total: null,
      next: '9',
      operation: null
    };
    expect(calculate(obj,'+')).toStrictEqual({"next": null, "operation": "+", "total": "9"});
  });

  test('+/- button', () => {
    const obj = {
      total: null,
      next: '9',
      operation: null
    };
    expect(calculate(obj,'+/-')).toStrictEqual({"next": "-9", "operation": null, "total": null});
  });

  test('. button', () => {
    const obj = {
      total: null,
      next: '9',
      operation: null
    };
    expect(calculate(obj,'.')).toStrictEqual({"next": "9.", "operation": null, "total": null});
  });
});