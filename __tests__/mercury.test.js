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

  test ("should correctly determine a person's age on Mercury when their human body form will cease", () => {
    const exampleMercury = new Mercury(40,99)
    expect(exampleMercury.enterEther()).toEqual(412.5);
  })
  
  test ("should determine how long a person has lived in their human body form past the expected time in Mercury Years", () => {
    const anotherMercury = new Mercury(199,99)
    expect(anotherMercury.bonusTime()).toEqual(416.66666666666674);
  })
});
