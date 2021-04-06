import Jupiter from './../src/jupiter.js';

describe('Jupiter', () => {

  test("should correctly create a jupiter object with a user's earth age", () => {
    const exampleJupiter = new Jupiter(40,99);
    expect(exampleJupiter.earthAge).toEqual(40);
    expect(exampleJupiter.nextPhaseAge).toEqual(99);
  });
  
  test ("should correctly determine a person's age in Jupiter years", () => {
    const exampleJupiter = new Jupiter(40)
    expect(exampleJupiter.jupiterAge()).toEqual(3.3726812816188874);
  })
  
  test ("should correctly determine a persons age on Jupiter when their human body form will cease", () => {
    const exampleJupiter = new Jupiter(40,99)
    expect(exampleJupiter.enterEther()).toEqual(8.347386172006745);
  })

  test ("should determine how long a person has lived in their human body form past the expected time in Jupiter Years", () => {
    const anotherJupiter = new Jupiter(199,99)
    expect(anotherJupiter.bonusTime()).toEqual(8.431703204047219);
  })

  test("should tell user in a sentence when they are expected to leave their human body form", () => {
    const exampleJupiter = new Jupiter(40,99)
    expect(exampleJupiter.stringifyTime()).toMatch("You are expected to have 4.974704890387858 more Jupiter years until you will leave your body to enter the ether.")
  })

   
});