const sum = require('./sum');


// toBe -- exactly identical 
test("add 1 + 2 = 3", () => {
    expect(sum(1,2)).toBe(3);
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