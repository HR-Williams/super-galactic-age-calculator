import Mars from './../src/mars.js';

describe('Mars', () => {

  test("should correctly create a mars object with a user's earth age", () => {
    const exampleMars = new Mars(40);
    expect(exampleMars.earthAge).toEqual(40);
  });

  test ("should correctly determine a person's age in Mars years", () => {
    const exampleMars= new Mars(40)
    expect(exampleMars.marsAge()).toEqual(21.2765957447);
  })
});