import Jupiter from './../src/jupiter.js';

describe('Jupiter', () => {

  test("should correctly create a jupiter object with a user's earth age", () => {
    const exampleJupiter = new Jupiter(40);
    expect(exampleJupiter.earthAge).toEqual(40);
  });
});