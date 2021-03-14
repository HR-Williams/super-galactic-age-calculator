import Mars from './../src/mars.js';

describe('Mars', () => {

  test("should correctly create a mars object with a user's earth age", () => {
    const exampleMars = new Mars(40,99);
    expect(exampleMars.earthAge).toEqual(40);
    expect(exampleMars.nextPhaseAge).toEqual(99)
  });

  test ("should correctly determine a person's age in Mars years", () => {
    const exampleMars= new Mars(40)
    expect(exampleMars.marsAge()).toEqual(21.27659574468085);
  })
});