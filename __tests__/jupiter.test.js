import Jupiter from './../src/jupiter.js';

describe('Jupiter', () => {

  test("should correctly create a jupiter object with a user's earth age", () => {
    const exampleJupiter = new Jupiter(40);
    expect(exampleJupiter.earthAge).toEqual(40);
  });
  test ("should correctly determine a person's age in Jupiter years", () => {
    const exampleJupiter = new Jupiter(40)
    expect(exampleJupiter.jupiterAge()).toEqual(3.3726812816188874);
  })
});