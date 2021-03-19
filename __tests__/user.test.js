import User from './../src/user.js';

describe('User', () => {
  test ("should correctly create a user object with a user's earth age", () => {
    const hr = new User(40);
    expect(hr.earthAge).toEqual(40);
  })
});