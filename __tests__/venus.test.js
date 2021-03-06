import Venus from './../src/venus.js';

describe('Venus', () => {

  test("should correctly create a venus object with a user's earth age", () => {
    const exampleVenus = new Venus(40,99);
    expect(exampleVenus.earthAge).toEqual(40);
    expect(exampleVenus.nextPhaseAge).toEqual(99);
  });

  test ("should correctly determine a person's age in Venus years", () => {
    const exampleVenus = new Venus(40)
    expect(exampleVenus.venusAge()).toEqual( 64.51612903225806);
  })  

  test ("should correctly determine a persons age on Venus when their human body form will cease", () => {
    const exampleVenus = new Venus(40,99)
    expect(exampleVenus.enterEther()).toEqual(159.67741935483872);
  })

  test ("should determine how long a person has lived in their human body form past the expected time in Venus Years", () => {
    const anotherVenus = new Venus(199,99)
    expect(anotherVenus.bonusTime()).toEqual(161.29032258064518);
  })
});