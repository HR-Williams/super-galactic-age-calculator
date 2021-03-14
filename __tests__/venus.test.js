import Venus from './../src/venus.js';

describe('Venus', () => {

  test("should correctly create a venus object with a user's earth age", () => {
    const exampleVenus = new Venus(40);
    expect(exampleVenus.earthAge).toEqual(40);
  });
});