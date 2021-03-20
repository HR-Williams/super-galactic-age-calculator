import User from './../src/user.js';

describe('User', () => {
  test ("should correctly create a user object with a user's earth age", () => {
    const hr = new User(40);
    expect(hr.earthAge).toEqual(40);
  });

  test("should correctly determine a user's age in Mercury years", () => {
    const hr = new User(40)
    expect(hr.mercuryAge()).toEqual(166.66666666666669);
  })


  test ("should correctly determine a user's age in Mars years", () => {
    const hr= new User(40)
    expect(hr.marsAge()).toEqual(21.27659574468085);
  });

  test ("should correctly determine a user's age in Jupiter years", () => {
    const hr = new User(40)
    expect(hr.jupiterAge()).toEqual(3.3726812816188874);
  })
});