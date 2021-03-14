import Mercury from './../src/mercury.js';

describe('Mercury', () => {

  test("should correctly create a mercury object with a user's earth age", () => {
    const exampleMercury = new Mercury(40, 99);
    expect(exampleMercury.earthAge).toEqual(40);
    expect(exampleMercury.nextPhaseAge).toEqual(99);
  });

  test ("should correctly determine a person's age in Mercury years", () => {
    const exampleMercury = new Mercury(40)
    expect(exampleMercury.mercuryAge()).toEqual(166.66666666666669);
  })
});