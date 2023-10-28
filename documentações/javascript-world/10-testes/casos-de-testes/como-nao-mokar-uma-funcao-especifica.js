const myObject = {
  someFunction() {
    return '123';
  },
  otherSomeFunction() {
    return '123';
  }
};

test('Exemplo de uso de mockReturnThis', () => {
  jest.spyOn(myObject, 'someFunction').mockReturnThis();
  jest.spyOn(myObject, 'otherSomeFunction').mockReturnValue('321');

  expect(myObject.someFunction()).toBe('123');
  expect(myObject.otherSomeFunction()).toBe('321');
});