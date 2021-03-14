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
  });
  
  test ("should correctly determine a persons age on Mars when their human body form will cease", () => {
    const exampleMars = new Mars(40,99)
    expect(exampleMars.enterEther()).toEqual(52.65957446808511);
  });

  test ("should determine how long a person has lived in their human body form past the expected time in Mars Years", () => {
    const anotherMars = new Mars(199,99)
    expect(anotherMars.bonusTime()).toEqual(53.191489361702125);
  });
});