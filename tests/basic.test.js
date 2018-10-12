const sum = require('../Utilities/sum');
// this is master branch

// toBe -- exactly identical 
test("add 1 + 2 = 3", () => {
    expect(sum(1)(2)(3)).toBe(6);
})

// toEqual -- test object
test('two object', () => {
    let a = {name:{ln:'wang'}, age:25};
    a['name']['fn'] = 'gt';
    expect(a).toEqual({
        name:{
            ln:'wang',
            fn:'gt'
        },
        age:25
    })
})

// Truthiness
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  // Numbers
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
    // Floating numbers, use toBeCloseTo()
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });

  // Strings
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  // Array
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(shoppingList).not.toContain('apple')
  });


  // Handle Exceptions
  const showError = require('../Utilities/error');
  test('test if error exists', () => {
    expect(showError).toThrow();
    expect(showError).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(showError).toThrow('Something wrong');
    expect(showError).toThrow(/g w/);
  });