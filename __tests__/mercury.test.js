import Mercury from './../src/mercury.js';

describe('Mercury', () => {

  test('should correctly create a mercury object with a year', () => {
    const myMercury = new Mercury(4);
    expect(myMercury.year).toEqual(4);
  });
});